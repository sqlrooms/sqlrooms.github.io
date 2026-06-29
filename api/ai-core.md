---
url: 'https://sqlrooms.org/api/ai-core.md'
---
# @sqlrooms/ai-core

Core AI slice, chat UI primitives, and tool-streaming utilities for SQLRooms.

Use `@sqlrooms/ai-core` when you want lower-level control over AI state/transport/UI.
For most apps, use the higher-level `@sqlrooms/ai` package.

## Installation

```bash
npm install @sqlrooms/ai-core @sqlrooms/room-store @sqlrooms/ui zod ai
```

`@sqlrooms/ui` is a peer dependency used for Chat UI rendering/styling.
You typically import Chat components from `@sqlrooms/ai-core`, but `@sqlrooms/ui` must be installed for the visual components to work.

## Store setup (core mode)

`createAiSlice` requires:

* `tools` – an AI SDK `ToolSet` (created via the `tool()` helper from `ai`)
* `getInstructions`
* `toolRenderers` (optional) – a `ToolRendererRegistry` mapping tool names to React components
* `getAvailableModels` (optional) – returns selectable `{provider, value}` pairs so new sessions can fall back to the first available model when the configured default is missing

> **Upgrading from 0.28.x?** See the [0.29.0 migration guide](https://sqlrooms.org/upgrade-guide#_0-29-0-upcoming) for the full list of breaking changes: `parameters` → `inputSchema`, `component` → `toolRenderers`, `setSessionToolAdditionalData` removed.

```tsx
import {
  createAiSlice,
  type AiSliceState,
  type ToolRendererRegistry,
} from '@sqlrooms/ai-core';
import {
  BaseRoomStoreState,
  createBaseRoomSlice,
  createRoomStore,
} from '@sqlrooms/room-store';
import {tool} from 'ai';
import {z} from 'zod';

const EchoResult = ({
  output,
}: {
  output: {success: boolean; text: string} | undefined;
}) => <div>{output?.text}</div>;

type State = BaseRoomStoreState & AiSliceState;

export const {roomStore, useRoomStore} = createRoomStore<State>(
  (set, get, store) => ({
    ...createBaseRoomSlice()(set, get, store),
    ...createAiSlice({
      getInstructions: () => 'You are a helpful analytics assistant.',
      tools: {
        echo: tool({
          description: 'Echo text back',
          inputSchema: z.object({text: z.string()}),
          execute: async ({text}) => ({success: true, text: `Echo: ${text}`}),
        }),
      },
      toolRenderers: {
        echo: EchoResult,
      },
    })(set, get, store),
  }),
);
```

## Chat UI

```tsx
import {Chat} from '@sqlrooms/ai-core';

export function AiPanel() {
  return (
    <Chat>
      <Chat.Sessions />
      <Chat.Messages />
      <Chat.PromptSuggestions>
        <Chat.PromptSuggestions.Item text="What trends should I investigate first?" />
      </Chat.PromptSuggestions>
      <Chat.Composer
        placeholder="Ask a question"
        topActions={<Chat.PromptSuggestions.VisibilityToggle />}
      />
    </Chat>
  );
}
```

Use `Chat.Composer`'s `topActions` slot for compact controls that should sit in
the prompt's top row, right-aligned beside context selectors.

`Chat.Header` and `Chat.History` can delegate session creation to the host app
with `onCreateSession`. `Chat.History` also accepts `filterSession` and
`emptyLabel` so apps can present scoped histories without changing the generic
AI session schema.

`createAiSlice({onChatFinish})` lets host apps observe a non-aborted turn after
the completed messages have been persisted and the analysis has ended. Use this
for app-owned follow-up behavior, such as forking a completed chat into a new
workspace target, while keeping the generic AI slice unaware of app-specific
state.

Assistant messages can be forked into a new active chat through
`ai.forkSessionFromMessage()`. The action snapshots the source session's
`uiMessages` through the selected message or chat turn, inherits the source
session's model and draft context item ids, records `sessionForks` provenance,
and lets `Chat.Messages` show a `Forked from` link back to the source chat.

Use `generateSessionTitle` when apps want an imperative helper that turns a
session's early user messages into a concise title via `ai.sendPrompt`, cleans
the model output, and renames the session. Use `useGenerateSessionTitle` in React
surfaces that should watch the current session and trigger the helper after new
user messages. The hook handles debouncing and duplicate-generation guards.
Apps can pass `enabled`, `isDefaultSessionName`, and `getPromptOptions` to keep
app-specific readiness checks and model choices outside the shared package.

## Local Agent Chat

Use `Chat.LocalAgentRoot` when a transient surface should be driven by a
pre-constructed `ToolLoopAgent` instead of the session-backed AI slice. The
message and composer components stay under the same `Chat` compound API.

```tsx
<Chat.LocalAgentRoot
  agent={agent}
  initialSuggestions={['Get started', 'Show me an example']}
  onMessagesChange={(msgs) => console.log(msgs)}
>
  <Chat.Messages />
  <Chat.PromptSuggestions />
  <Chat.Composer placeholder="Ask anything..." />
</Chat.LocalAgentRoot>
```

## Chat search

`Chat` renders a `ChatSearchProvider` and exposes `Chat.Search`, an in-conversation
find bar that highlights matches in the current session's messages.

For building search UIs outside the chat (e.g. a session list that searches across
all sessions), the underlying matching primitives are exported and can be used
without the provider:

* `normalizeChatSearchQuery(query)` — trims + lower-cases a query (the casing rule
  the search uses).
* `findChatSearchMatches(blocks, query)` — returns positional matches
  (`ChatSearchMatch[]`) for a list of `ChatSearchBlock`s. Useful for highlighting
  matched substrings consistently with `Chat.Search`.
* `markdownToPlainText(markdown)` — extracts plain text from markdown so message
  content can be made searchable.

```tsx
import {findChatSearchMatches, type ChatSearchBlock} from '@sqlrooms/ai-core';

const blocks: ChatSearchBlock[] = [
  {id: 'title', resultId: 'title', text: title},
];
const matches = findChatSearchMatches(blocks, query);
```

## Devtools

`@sqlrooms/ai-core/devtools` exposes development-only inspection helpers and UI
for session debugging without adding the debug surface to the main
`@sqlrooms/ai-core` barrel.

```tsx
import {ChatSessionDebugView} from '@sqlrooms/ai-core/devtools';

function DebugPanel({
  sessionId,
  onClose,
}: {
  sessionId: string;
  onClose?: () => void;
}) {
  return <ChatSessionDebugView sessionId={sessionId} onClose={onClose} />;
}
```

`ChatSessionDebugView` reads the current AI store context and renders a tabbed
debug view for one chat session: the chronological timeline, registered tools,
run context, raw session JSON, model settings, tool calls, nested agent work,
and optional agent snapshots.

Agent snapshot capture is opt-in on `createAiSlice`:

```ts
createAiSlice({
  tools,
  getInstructions,
  devtools: {
    captureAgentSnapshots: true,
    persistAgentSnapshots: true,
    maxAgentSnapshotBytes: 64_000,
  },
});
```

Snapshots are bounded serializable metadata only: agent/tool names,
descriptions, capability flags, approval hints, and settings. They must not
store executable tools, closures, secrets, or unbounded prompt/output content.
Persist snapshots only for debugging workflows where cross-tab or post-mortem
inspection is useful.

Captured snapshots and snapshot controls live under the AI state's devtools
namespace:

```ts
const snapshots = useRoomStore((state) => state.ai.devtools.agentSnapshots);
state.ai.devtools.clearAgentSnapshots();
```

## Useful exports

* Slice/hooks: `createAiSlice`, `useStoreWithAi`, `generateSessionTitle`, `useGenerateSessionTitle`, `AiSliceState`
* Chat UI: `Chat`, `ChatMessagesContainer`, `ChatTurnView`, `MessageContent`, `ModelSelector`, `QueryControls`, `PromptSuggestions`
* Devtools subexport: `@sqlrooms/ai-core/devtools`
* Legacy/compat components: `AnalysisResultsContainer`, `AnalysisResult`, `AnalysisAnswer`, `ErrorMessage`
* Session helpers: `ChatSessionSchema`, `isChatSessionEmpty`, `getChatTurnsFromUiMessages`
* Forking: `ai.forkSessionFromMessage()`, `AiSessionForkOrigin`, `ForkSessionFromMessageArgs`
* Types: `ChatTurn`, `ToolRendererProps`, `ToolRenderer`, `ToolRendererRegistry`, `StoredTool`, `StoredToolSet`
* Tool/agent utilities:
  * `cleanupPendingUiMessages`
  * `cleanupPendingAnalysisResults`
  * `fixIncompleteToolCalls`
  * `streamSubAgent`

`AnalysisSessionSchema`, `isAnalysisSessionEmpty`, `AnalysisResultsContainer`,
`AnalysisResult`, `AnalysisAnswer`, `processAnalysisAnswerContent`, and
`cleanupPendingAnalysisResults` remain compatibility exports for existing apps.
New code should prefer `ChatSessionSchema`, `isChatSessionEmpty`,
`Chat.Messages`, `ChatTurnView`, `MessageContent`, `uiMessages`, and derived
`ChatTurn` helpers.

Legacy persisted sessions that contain `analysisResults` still load through
schema migration, but parsed and newly created chat sessions no longer include
that field.

## Related packages

* `@sqlrooms/ai` (recommended high-level integration)
* `@sqlrooms/ai-settings` (provider/model settings slice + UI)
* `@sqlrooms/ai-config` (config schemas and migrations)

## Classes

* [ToolAbortError](/api/ai-core/classes/ToolAbortError.md)

## Interfaces

* [AiSliceOptions](/api/ai-core/interfaces/AiSliceOptions.md)
* [StoredTool](/api/ai-core/interfaces/StoredTool.md)

## Type Aliases

* [AiSessionForkOrigin](/api/ai-core/type-aliases/AiSessionForkOrigin.md)
* [AiSliceConfig](/api/ai-core/type-aliases/AiSliceConfig.md)
* [AiRunContextItem](/api/ai-core/type-aliases/AiRunContextItem.md)
* [AiRunContext](/api/ai-core/type-aliases/AiRunContext.md)
* [ChatSessionSchema](/api/ai-core/type-aliases/ChatSessionSchema.md)
* [~~AnalysisSessionSchema~~](/api/ai-core/type-aliases/AnalysisSessionSchema.md)
* [AiSliceState](/api/ai-core/type-aliases/AiSliceState.md)
* [ForkSessionFromMessageArgs](/api/ai-core/type-aliases/ForkSessionFromMessageArgs.md)
* [ChatRequestErrorMessage](/api/ai-core/type-aliases/ChatRequestErrorMessage.md)
* [ChatMessageMetadata](/api/ai-core/type-aliases/ChatMessageMetadata.md)
* [ChatTurn](/api/ai-core/type-aliases/ChatTurn.md)
* [LocalAgentChatRootProps](/api/ai-core/type-aliases/LocalAgentChatRootProps.md)
* [ChatSearchBlock](/api/ai-core/type-aliases/ChatSearchBlock.md)
* [ChatSearchMatch](/api/ai-core/type-aliases/ChatSearchMatch.md)
* [ChatTurnViewProps](/api/ai-core/type-aliases/ChatTurnViewProps.md)
* [ErrorMessageComponentProps](/api/ai-core/type-aliases/ErrorMessageComponentProps.md)
* [ToolStructureBehavior](/api/ai-core/type-aliases/ToolStructureBehavior.md)
* [ToolDisplayBehavior](/api/ai-core/type-aliases/ToolDisplayBehavior.md)
* [ToolRenderBehavior](/api/ai-core/type-aliases/ToolRenderBehavior.md)
* [MessageContentProps](/api/ai-core/type-aliases/MessageContentProps.md)
* [HoistableToolCall](/api/ai-core/type-aliases/HoistableToolCall.md)
* [ContextSelectorItem](/api/ai-core/type-aliases/ContextSelectorItem.md)
* [ContextSelectorRootProps](/api/ai-core/type-aliases/ContextSelectorRootProps.md)
* [SessionType](/api/ai-core/type-aliases/SessionType.md)
* [GenerateSessionTitlePromptOptions](/api/ai-core/type-aliases/GenerateSessionTitlePromptOptions.md)
* [GenerateSessionTitleOptions](/api/ai-core/type-aliases/GenerateSessionTitleOptions.md)
* [GenerateSessionTitleArgs](/api/ai-core/type-aliases/GenerateSessionTitleArgs.md)
* [GenerateSessionTitleResult](/api/ai-core/type-aliases/GenerateSessionTitleResult.md)
* [UseGenerateSessionTitleOptions](/api/ai-core/type-aliases/UseGenerateSessionTitleOptions.md)
* [AgentToolCall](/api/ai-core/type-aliases/AgentToolCall.md)
* [AgentToolCallAdditionalData](/api/ai-core/type-aliases/AgentToolCallAdditionalData.md)
* [AgentStreamOutput](/api/ai-core/type-aliases/AgentStreamOutput.md)
* [PendingSubAgentApproval](/api/ai-core/type-aliases/PendingSubAgentApproval.md)
* [AgentProgressSnapshot](/api/ai-core/type-aliases/AgentProgressSnapshot.md)
* [AgentSnapshot](/api/ai-core/type-aliases/AgentSnapshot.md)
* [ToolTimingEntry](/api/ai-core/type-aliases/ToolTimingEntry.md)
* [MessageTokenUsage](/api/ai-core/type-aliases/MessageTokenUsage.md)
* [AssistantMessageMetadata](/api/ai-core/type-aliases/AssistantMessageMetadata.md)
* [StoredToolSet](/api/ai-core/type-aliases/StoredToolSet.md)
* [AddToolOutput](/api/ai-core/type-aliases/AddToolOutput.md)
* [AddToolApprovalResponse](/api/ai-core/type-aliases/AddToolApprovalResponse.md)
* [AiToolExecutionContext](/api/ai-core/type-aliases/AiToolExecutionContext.md)
* [ToolRendererProps](/api/ai-core/type-aliases/ToolRendererProps.md)
* [ToolRenderer](/api/ai-core/type-aliases/ToolRenderer.md)
* [ToolRendererRegistry](/api/ai-core/type-aliases/ToolRendererRegistry.md)
* [ToolRenderers](/api/ai-core/type-aliases/ToolRenderers.md)

## Variables

* [AiSessionForkOrigin](/api/ai-core/variables/AiSessionForkOrigin.md)
* [AiSliceConfig](/api/ai-core/variables/AiSliceConfig.md)
* [AiRunContextItemSchema](/api/ai-core/variables/AiRunContextItemSchema.md)
* [AiRunContextSchema](/api/ai-core/variables/AiRunContextSchema.md)
* [ChatSessionSchema](/api/ai-core/variables/ChatSessionSchema.md)
* [~~AnalysisSessionSchema~~](/api/ai-core/variables/AnalysisSessionSchema.md)
* [ActivityBox](/api/ai-core/variables/ActivityBox.md)
* [AiThinkingDots](/api/ai-core/variables/AiThinkingDots.md)
* [Chat](/api/ai-core/variables/Chat.md)
* [ChatMessagesContainer](/api/ai-core/variables/ChatMessagesContainer.md)
* [ChatTurnView](/api/ai-core/variables/ChatTurnView.md)
* [ContextUsageIndicator](/api/ai-core/variables/ContextUsageIndicator.md)
* [ExpandableContent](/api/ai-core/variables/ExpandableContent.md)
* [ShowToolCallDetailsProvider](/api/ai-core/variables/ShowToolCallDetailsProvider.md)
* [OrchestratorToolLogLine](/api/ai-core/variables/OrchestratorToolLogLine.md)
* [FlatAgentRenderer](/api/ai-core/variables/FlatAgentRenderer.md)
* [HoistedRenderersProvider](/api/ai-core/variables/HoistedRenderersProvider.md)
* [MessageContent](/api/ai-core/variables/MessageContent.md)
* [ModelSelector](/api/ai-core/variables/ModelSelector.md)
* [PromptSuggestions](/api/ai-core/variables/PromptSuggestions.md)
* [QueryControls](/api/ai-core/variables/QueryControls.md)
* [SessionControls](/api/ai-core/variables/SessionControls.md)
* [ToolCallInfo](/api/ai-core/variables/ToolCallInfo.md)
* [ContextSelector](/api/ai-core/variables/ContextSelector.md)
* [CHAT\_CONTEXT\_SELECTOR\_SLOT](/api/ai-core/variables/CHAT_CONTEXT_SELECTOR_SLOT.md)
* [DeleteSessionDialog](/api/ai-core/variables/DeleteSessionDialog.md)
* [SessionActions](/api/ai-core/variables/SessionActions.md)
* [SessionDropdown](/api/ai-core/variables/SessionDropdown.md)
* [SessionTitle](/api/ai-core/variables/SessionTitle.md)
* [~~isAnalysisSessionEmpty~~](/api/ai-core/variables/isAnalysisSessionEmpty.md)
* [~~cleanupPendingAnalysisResults~~](/api/ai-core/variables/cleanupPendingAnalysisResults.md)

## Functions

* [createDefaultAiConfig](/api/ai-core/functions/createDefaultAiConfig.md)
* [getAiRunContextItems](/api/ai-core/functions/getAiRunContextItems.md)
* [getAiRunContextPrimaryItem](/api/ai-core/functions/getAiRunContextPrimaryItem.md)
* [setAiRunContextPrimaryItem](/api/ai-core/functions/setAiRunContextPrimaryItem.md)
* [createAiSlice](/api/ai-core/functions/createAiSlice.md)
* [useStoreWithAi](/api/ai-core/functions/useStoreWithAi.md)
* [updateAgentToolCallData](/api/ai-core/functions/updateAgentToolCallData.md)
* [formatAbortSnapshot](/api/ai-core/functions/formatAbortSnapshot.md)
* [streamSubAgent](/api/ai-core/functions/streamSubAgent.md)
* [getChatRequestErrorMessage](/api/ai-core/functions/getChatRequestErrorMessage.md)
* [getChatTurnsFromUiMessages](/api/ai-core/functions/getChatTurnsFromUiMessages.md)
* [getAnalysisResultsFromUiMessages](/api/ai-core/functions/getAnalysisResultsFromUiMessages.md)
* [markdownToPlainText](/api/ai-core/functions/markdownToPlainText.md)
* [normalizeChatSearchQuery](/api/ai-core/functions/normalizeChatSearchQuery.md)
* [findChatSearchMatches](/api/ai-core/functions/findChatSearchMatches.md)
* [ErrorMessage](/api/ai-core/functions/ErrorMessage.md)
* [useHoistedRenderers](/api/ai-core/functions/useHoistedRenderers.md)
* [processMessageContent](/api/ai-core/functions/processMessageContent.md)
* [collectHoistableRenderers](/api/ai-core/functions/collectHoistableRenderers.md)
* [toggleContextSelectorItem](/api/ai-core/functions/toggleContextSelectorItem.md)
* [promoteContextSelectorItem](/api/ai-core/functions/promoteContextSelectorItem.md)
* [reorderContextSelectorItems](/api/ai-core/functions/reorderContextSelectorItems.md)
* [ToolErrorMessage](/api/ai-core/functions/ToolErrorMessage.md)
* [isChatSessionEmpty](/api/ai-core/functions/isChatSessionEmpty.md)
* [getRunContextItemIds](/api/ai-core/functions/getRunContextItemIds.md)
* [getVisibleSessionContextItemIds](/api/ai-core/functions/getVisibleSessionContextItemIds.md)
* [getEffectiveSessionContextItemIds](/api/ai-core/functions/getEffectiveSessionContextItemIds.md)
* [useElapsedTime](/api/ai-core/functions/useElapsedTime.md)
* [isDefaultGeneratedSessionName](/api/ai-core/functions/isDefaultGeneratedSessionName.md)
* [getSessionUserMessageText](/api/ai-core/functions/getSessionUserMessageText.md)
* [cleanGeneratedSessionTitle](/api/ai-core/functions/cleanGeneratedSessionTitle.md)
* [generateSessionTitle](/api/ai-core/functions/generateSessionTitle.md)
* [useGenerateSessionTitle](/api/ai-core/functions/useGenerateSessionTitle.md)
* [useScrollToBottom](/api/ai-core/functions/useScrollToBottom.md)
* [useSessionChat](/api/ai-core/functions/useSessionChat.md)
* [extractModelsFromSettings](/api/ai-core/functions/extractModelsFromSettings.md)
* [shouldEndAnalysis](/api/ai-core/functions/shouldEndAnalysis.md)
* [fixIncompleteToolCalls](/api/ai-core/functions/fixIncompleteToolCalls.md)

## References

### ~~AnalysisResultsContainer~~

Renames and re-exports [ChatMessagesContainer](/api/ai-core/variables/ChatMessagesContainer.md)

***

### ~~AnalysisResult~~

Renames and re-exports [ChatTurnView](/api/ai-core/variables/ChatTurnView.md)

***

### ~~AnalysisAnswer~~

Renames and re-exports [MessageContent](/api/ai-core/variables/MessageContent.md)

***

### ~~processAnalysisAnswerContent~~

Renames and re-exports [processMessageContent](/api/ai-core/functions/processMessageContent.md)
