---
url: 'https://sqlrooms.org/api/ai.md'
---
# @sqlrooms/ai

High-level AI package for SQLRooms.

This package combines:

* AI slice state/logic (`@sqlrooms/ai-core`)
* AI settings UI/state (`@sqlrooms/ai-settings`)
* AI config schemas (`@sqlrooms/ai-config`)
* SQL query and schema discovery tool helpers (`createDefaultAiTools`, `createQueryTool`)

Use this package when you want AI chat + tool execution in a SQLRooms app without wiring low-level pieces manually.

`createDefaultAiInstructions` includes a hybrid DuckDB table context: small
current-database `main` catalogs include full schemas for every table, while
larger catalogs include a few full schemas, additional table names with row
counts, and instructions to call
`read_table_schema` before querying tables whose columns are not shown.
`createDefaultAiTools` registers `list_tables` and `read_table_schema` by
default so apps can expose the same table discovery workflow. These tools
search the current database `main` schema by default, and accept broader
`schema`, `database`, and pattern filters for other visible schemas or attached
databases.

`createDefaultAiTools` also registers command-layer tools when the room store
has a command registry:

* `search_commands` for compact intent-based command discovery;
* `get_command` for full command metadata and input schema after selecting a
  command;
* `execute_command` for invoking the selected command;
* `list_commands` for broad command-registry debugging.

Model-facing flows should prefer
`search_commands -> get_command -> execute_command` instead of repeatedly
listing the full command catalog. `execute_command` refuses high-risk or
confirmation-required commands until the caller sets `confirmed: true` after an
explicit user confirmation. Skill runtimes can pass `skillId`, `toolCallId`,
`traceId`, and metadata through tool execution options; the command invocation
receives those fields for trace callbacks. `DEFAULT_SKILL_RUNTIME_TOOL_POLICY`
documents the default command, artifact-context, table/query, and high-level
agent tool policy for future skill runtimes.

## Installation

```bash
npm install @sqlrooms/ai @sqlrooms/room-shell @sqlrooms/duckdb @sqlrooms/ui
```

## Quick start

```tsx
import {
  AiSettingsSliceState,
  AiSliceState,
  createAiSettingsSlice,
  createAiSlice,
  createDefaultAiInstructions,
  createDefaultAiTools,
} from '@sqlrooms/ai';
import {
  createRoomShellSlice,
  createRoomStore,
  RoomShellSliceState,
} from '@sqlrooms/room-shell';

type RoomState = RoomShellSliceState & AiSliceState & AiSettingsSliceState;

export const {roomStore, useRoomStore} = createRoomStore<RoomState>(
  (set, get, store) => ({
    ...createRoomShellSlice({
      config: {
        dataSources: [
          {
            type: 'url',
            tableName: 'earthquakes',
            url: 'https://huggingface.co/datasets/sqlrooms/earthquakes/resolve/main/earthquakes.parquet',
          },
        ],
      },
    })(set, get, store),

    ...createAiSettingsSlice()(set, get, store),

    ...createAiSlice({
      tools: {
        ...createDefaultAiTools(store),
      },
      getInstructions: () => createDefaultAiInstructions(store),
      // Optional: observe completed, non-aborted turns for app-owned follow-up
      // behavior such as handoff into a newly selected workspace artifact.
      onChatFinish: ({sessionId, messages}) => {
        void sessionId;
        void messages;
      },
    })(set, get, store),
  }),
);
```

## Render chat UI

```tsx
import {Chat} from '@sqlrooms/ai';
import {useRoomStore} from './store';

function AiPanel() {
  const updateProvider = useRoomStore(
    (state) => state.aiSettings.updateProvider,
  );

  return (
    <Chat>
      <Chat.Sessions />
      <Chat.Messages />
      <Chat.PromptSuggestions>
        <Chat.PromptSuggestions.Item text="Summarize the available tables" />
      </Chat.PromptSuggestions>
      <Chat.Composer placeholder="Ask a question about your data">
        <Chat.InlineApiKeyInput
          onSaveApiKey={(provider, apiKey) => {
            updateProvider(provider, {apiKey});
          }}
        />
        <Chat.ModelSelector />
      </Chat.Composer>
    </Chat>
  );
}
```

## Generate Chat Titles

`generateSessionTitle` turns a session's early user messages into a concise title
via `ai.sendPrompt`, cleans the model output, and renames the session.
`useGenerateSessionTitle` wraps that helper for React surfaces that should watch
the current session and trigger title generation after new user messages. Apps
can keep product-specific policy outside the shared package by passing options
such as `enabled`, `isDefaultSessionName`, and `getPromptOptions`.

```tsx
import {Chat, useGenerateSessionTitle} from '@sqlrooms/ai';

function AiPanel() {
  useGenerateSessionTitle({
    enabled: true,
    getPromptOptions: () => ({useTools: false}),
  });

  return (
    <Chat>
      <Chat.Messages />
      <Chat.Composer />
    </Chat>
  );
}
```

## Chat search

`Chat` renders a `ChatSearchProvider` and exposes `Chat.Search`, an in-conversation
find bar that highlights matches in the current session's messages.

For building search UIs outside the chat (e.g. a session list that searches across
all sessions), the underlying matching primitives are re-exported and can be used
without the provider:

* `normalizeChatSearchQuery(query)` — trims + lower-cases a query (the casing rule
  the search uses).
* `findChatSearchMatches(blocks, query)` — returns positional matches
  (`ChatSearchMatch[]`) for a list of `ChatSearchBlock`s. Useful for highlighting
  matched substrings consistently with `Chat.Search`.
* `markdownToPlainText(markdown)` — extracts plain text from markdown so message
  content can be made searchable.

```tsx
import {findChatSearchMatches, type ChatSearchBlock} from '@sqlrooms/ai';

const blocks: ChatSearchBlock[] = [
  {id: 'title', resultId: 'title', text: title},
];
const matches = findChatSearchMatches(blocks, query);
```

## Chat Session Types

Use `ChatSessionSchema` for persisted chat session validation and
`isChatSessionEmpty` for session emptiness checks. `AnalysisSessionSchema`,
`AnalysisResultSchema`, `isAnalysisSessionEmpty`, `AnalysisResultsContainer`,
and `AnalysisResult` remain compatibility exports for existing apps, but new
code should prefer `Chat.Messages`, `uiMessages`, and derived `ChatTurn` helpers
such as `getChatTurnsFromUiMessages`.

Old persisted sessions that contain `analysisResults` still load, but parsed and
new `ChatSessionSchema` state no longer includes that field.

## Devtools

`@sqlrooms/ai/devtools` exposes development-oriented inspection components and
helpers without adding CodeMirror-heavy debug UI to the main `@sqlrooms/ai`
barrel.

```tsx
import {ChatSessionDebugView} from '@sqlrooms/ai/devtools';

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

`ChatSessionDebugView` reads the existing AI store context and shows session
metadata, model selection, registered tools, run context, raw `uiMessages`, and
a tabbed chronological timeline that keeps message parts, tool calls, nested
`agentProgress`, optional agent snapshots, and copyable JSON blocks together.

Agent snapshot capture is opt-in on the AI slice:

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

Enable persistence when you need post-mortem or cross-tab debugging in saved
workspace state. Snapshots are serializable metadata only; tool names,
descriptions, capability flags, and approval hints may be stored, but
implementations, closures, secrets, and unbounded prompt/output content should
not be stored.

## Add custom tools

```tsx
import {z} from 'zod';
import {
  createAiSlice,
  createDefaultAiInstructions,
  createDefaultAiTools,
} from '@sqlrooms/ai';

// inside createRoomStore(...):
createAiSlice({
  tools: {
    ...createDefaultAiTools(store),
    echo: {
      name: 'echo',
      description: 'Return user text back to the chat',
      parameters: z.object({
        text: z.string(),
      }),
      execute: async ({text}) => ({
        llmResult: {
          success: true,
          details: `Echo: ${text}`,
        },
      }),
    },
  },
  getInstructions: () => createDefaultAiInstructions(store),
})(set, get, store);
```

Tool `execute` callbacks receive hidden run-context helpers in their second
argument. Apps can use `getRunContext` to capture selected artifacts at the
start of a run, expose them in `formatRunContextInstructions`, and then let
tools update the effective primary context with `setPrimaryRunContextItem`.
Old contexts without `primaryItemId` remain valid; the first item is treated as
primary. Artifact-specific context tools live in `@sqlrooms/artifacts/ai`.

## Use remote endpoint mode

If you want server-side model calls, set `chatEndPoint` and optional `chatHeaders`:

```tsx
// inside createRoomStore(...):
...createAiSlice({
  tools: {
    ...createDefaultAiTools(store),
  },
  getInstructions: () => createDefaultAiInstructions(store),
  chatEndPoint: '/api/chat',
  chatHeaders: {
    'x-app-name': 'my-sqlrooms-app',
  },
})(set, get, store),
```

## Skills

The skills subsystem lets you define, store, and author reusable AI "skills" — named instruction sets that can be loaded into an agent at runtime.

### Storage and types

`SkillStorage` is the interface that abstracts where skills live (filesystem, database, cloud, etc.). Implement it to plug in your own backend:

* `listRoots()` — enumerate available skill root locations
* `listSkills(rootId)` — list all skills under a root
* `readSkill(ref)` / `writeSkill(ref, content)` / `deleteSkill(ref)` — CRUD on individual skills
* `resolveSkillId(id)` — resolve a bare id to its highest-priority `SkillRef`
* `subscribe?(listener)` — *optional*; subscribe to change notifications. Returns an unsubscribe function. Implementations that don't mutate (read-only/static) may omit this method.

Supporting types: `SkillRoot`, `SkillManifest`, `SkillRef`, `SkillRecord`, `SkillListing`, `SkillWriteContent`, `SkillFile`.

### Composite storage

`CompositeSkillStorage` priority-merges multiple `SkillStorage` instances behind a single `SkillStorage` interface. Children are passed in priority order (highest first); they win conflicts in `resolveSkillId` and appear first in `listRoots`. Each child must own a unique set of `rootId`s.

`subscribe` fans out to every child that exposes the optional `subscribe?` method and aggregates the unsubscribes. If no child supports subscribe, `composite.subscribe(...)` is a noop returning a noop unsubscribe — consumers can call it unconditionally.

```tsx
import {CompositeSkillStorage} from '@sqlrooms/ai';

// Higher-priority `userStorage` wins on id collisions; both contribute roots
// and listings to the merged view.
const storage = new CompositeSkillStorage([userStorage, builtInStorage]);

const roots = await storage.listRoots(); // [user roots..., built-in roots...]
const all = await storage.listSkills(); // union, with duplicates

// Optional change notification: composite forwards from any subscribe-capable
// child.
const unsubscribe = storage.subscribe(() => {
  void refreshUi();
});
// later: unsubscribe();
```

### Manifest utilities

* `parseSkillManifest(raw)` — parse and validate a skill manifest (Zod-backed, throws `SkillManifestError` on failure)
* `serializeSkillManifest(manifest)` — serialize a manifest back to its raw form
* `loadSkillFromFiles(files)` — assemble a `SkillRecord` from a set of `SkillFile` objects (manifest + instruction body)

### Error types

All skill errors extend `SkillError` and carry a typed `SkillErrorCode`:

| Class                    | When thrown                         |
| ------------------------ | ----------------------------------- |
| `SkillManifestError`     | Manifest parse/validation failure   |
| `SkillNotFoundError`     | Skill ref does not exist in storage |
| `SkillRootReadOnlyError` | Write attempted on a read-only root |
| `SkillConflictError`     | Skill ID collision on write         |

### Skill authoring

A built-in agent-driven authoring flow that generates skill content through a conversational UI:

* `createSkillAuthoringAgent(options)` — construct a `ToolLoopAgent` scoped to skill creation; accepts `CreateSkillAuthoringAgentOptions`
* `createSkillDraftStore()` — Zustand store for tracking the in-progress draft (`SkillDraftStore`, `SkillDraftState`)
* `SkillAuthoringPanel` — drop-in panel component that wires `Chat.LocalAgentRoot` to the authoring agent; accepts `SkillAuthoringPanelProps`
* `SkillDraftPreview` — read-only preview of the current draft manifest and instructions; accepts `SkillDraftPreviewProps`
* `DefaultSkillAuthoringPanelHeader` — default header for `SkillAuthoringPanel`

Types: `SkillAuthoringContext`, `SkillDraft`, `SkillDraftStatus`, `SaveSkillCallback`, `CreateSkillAuthoringAgentOptions`.

Lower-level authoring tools (exported for advanced use): `createWriteManifestTool`, `createWriteInstructionsTool`, `createSaveSkillTool`, `buildSkillAuthoringSystemPrompt`, `containsForbidden`, `DEFAULT_SKILL_AUTHORING_STOP_STEPS`.

```tsx
import {
  createSkillAuthoringAgent,
  createSkillDraftStore,
  SkillAuthoringPanel,
} from '@sqlrooms/ai';

const draftStore = createSkillDraftStore();

const agent = createSkillAuthoringAgent({
  model: myLanguageModel,
  draftStore,
  onSave: async (skill) => {
    await mySkillStorage.writeSkill(
      {rootId: 'default', skillId: skill.id},
      skill,
    );
  },
});

function SkillCreator() {
  return <SkillAuthoringPanel agent={agent} draftStore={draftStore} />;
}
```

## Related packages

* `@sqlrooms/ai-core` for lower-level AI slice and chat primitives
* `@sqlrooms/ai-settings` for settings slice/components only
* `@sqlrooms/ai-config` for Zod schemas and migrations

## Classes

* [CompositeSkillStorage](/api/ai/classes/CompositeSkillStorage.md)
* [SkillError](/api/ai/classes/SkillError.md)
* [SkillManifestError](/api/ai/classes/SkillManifestError.md)
* [SkillNotFoundError](/api/ai/classes/SkillNotFoundError.md)
* [SkillRootReadOnlyError](/api/ai/classes/SkillRootReadOnlyError.md)
* [SkillConflictError](/api/ai/classes/SkillConflictError.md)
* [ToolAbortError](/api/ai/classes/ToolAbortError.md)

## Interfaces

* [CreateSkillAuthoringAgentOptions](/api/ai/interfaces/CreateSkillAuthoringAgentOptions.md)
* [SkillAuthoringContext](/api/ai/interfaces/SkillAuthoringContext.md)
* [SkillDraft](/api/ai/interfaces/SkillDraft.md)
* [SkillDraftState](/api/ai/interfaces/SkillDraftState.md)
* [SkillErrorContext](/api/ai/interfaces/SkillErrorContext.md)
* [SkillFile](/api/ai/interfaces/SkillFile.md)
* [SkillRoot](/api/ai/interfaces/SkillRoot.md)
* [SkillRef](/api/ai/interfaces/SkillRef.md)
* [SkillRecord](/api/ai/interfaces/SkillRecord.md)
* [SkillListing](/api/ai/interfaces/SkillListing.md)
* [SkillWriteContent](/api/ai/interfaces/SkillWriteContent.md)
* [SkillStorage](/api/ai/interfaces/SkillStorage.md)
* [AiSliceOptions](/api/ai/interfaces/AiSliceOptions.md)
* [StoredTool](/api/ai/interfaces/StoredTool.md)
* [ModelUsageData](/api/ai/interfaces/ModelUsageData.md)

## Type Aliases

* [SkillAuthoringPanelProps](/api/ai/type-aliases/SkillAuthoringPanelProps.md)
* [SkillDraftPreviewProps](/api/ai/type-aliases/SkillDraftPreviewProps.md)
* [SkillDraftStatus](/api/ai/type-aliases/SkillDraftStatus.md)
* [SkillDraftStore](/api/ai/type-aliases/SkillDraftStore.md)
* [SaveSkillCallback](/api/ai/type-aliases/SaveSkillCallback.md)
* [SkillErrorCode](/api/ai/type-aliases/SkillErrorCode.md)
* [SkillManifest](/api/ai/type-aliases/SkillManifest.md)
* [SearchCommandsToolParameters](/api/ai/type-aliases/SearchCommandsToolParameters.md)
* [ListCommandsToolParameters](/api/ai/type-aliases/ListCommandsToolParameters.md)
* [CommandToolDescriptor](/api/ai/type-aliases/CommandToolDescriptor.md)
* [CommandToolSearchDescriptor](/api/ai/type-aliases/CommandToolSearchDescriptor.md)
* [SearchCommandsToolLlmResult](/api/ai/type-aliases/SearchCommandsToolLlmResult.md)
* [ListCommandsToolLlmResult](/api/ai/type-aliases/ListCommandsToolLlmResult.md)
* [GetCommandToolParameters](/api/ai/type-aliases/GetCommandToolParameters.md)
* [GetCommandToolLlmResult](/api/ai/type-aliases/GetCommandToolLlmResult.md)
* [ExecuteCommandToolParameters](/api/ai/type-aliases/ExecuteCommandToolParameters.md)
* [ExecuteCommandToolLlmResult](/api/ai/type-aliases/ExecuteCommandToolLlmResult.md)
* [CommandToolsOptions](/api/ai/type-aliases/CommandToolsOptions.md)
* [DefaultCommandTools](/api/ai/type-aliases/DefaultCommandTools.md)
* [DefaultToolsOptions](/api/ai/type-aliases/DefaultToolsOptions.md)
* [DefaultAiToolRenderers](/api/ai/type-aliases/DefaultAiToolRenderers.md)
* [QueryToolRendererOptions](/api/ai/type-aliases/QueryToolRendererOptions.md)
* [QueryToolParameters](/api/ai/type-aliases/QueryToolParameters.md)
* [QueryToolOutput](/api/ai/type-aliases/QueryToolOutput.md)
* [QueryToolOptions](/api/ai/type-aliases/QueryToolOptions.md)
* [SkillRuntimeCommandToolPolicy](/api/ai/type-aliases/SkillRuntimeCommandToolPolicy.md)
* [SkillRuntimeToolPolicy](/api/ai/type-aliases/SkillRuntimeToolPolicy.md)
* [TableSchemaContextLimits](/api/ai/type-aliases/TableSchemaContextLimits.md)
* [AiTableScope](/api/ai/type-aliases/AiTableScope.md)
* [AiTableScopeOptions](/api/ai/type-aliases/AiTableScopeOptions.md)
* [AiSettingsSliceConfig](/api/ai/type-aliases/AiSettingsSliceConfig.md)
* [AiSessionForkOrigin](/api/ai/type-aliases/AiSessionForkOrigin.md)
* [AiSliceConfig](/api/ai/type-aliases/AiSliceConfig.md)
* [ErrorMessageSchema](/api/ai/type-aliases/ErrorMessageSchema.md)
* [~~AnalysisResultSchema~~](/api/ai/type-aliases/AnalysisResultSchema.md)
* [AiRunContextItem](/api/ai/type-aliases/AiRunContextItem.md)
* [AiRunContext](/api/ai/type-aliases/AiRunContext.md)
* [ChatSessionSchema](/api/ai/type-aliases/ChatSessionSchema.md)
* [~~AnalysisSessionSchema~~](/api/ai/type-aliases/AnalysisSessionSchema.md)
* [ToolUIPart](/api/ai/type-aliases/ToolUIPart.md)
* [UIMessagePart](/api/ai/type-aliases/UIMessagePart.md)
* [AiSliceState](/api/ai/type-aliases/AiSliceState.md)
* [ForkSessionFromMessageArgs](/api/ai/type-aliases/ForkSessionFromMessageArgs.md)
* [ChatRequestErrorMessage](/api/ai/type-aliases/ChatRequestErrorMessage.md)
* [ChatMessageMetadata](/api/ai/type-aliases/ChatMessageMetadata.md)
* [ChatTurn](/api/ai/type-aliases/ChatTurn.md)
* [LocalAgentChatRootProps](/api/ai/type-aliases/LocalAgentChatRootProps.md)
* [ChatSearchBlock](/api/ai/type-aliases/ChatSearchBlock.md)
* [ChatSearchMatch](/api/ai/type-aliases/ChatSearchMatch.md)
* [ChatTurnViewProps](/api/ai/type-aliases/ChatTurnViewProps.md)
* [ErrorMessageComponentProps](/api/ai/type-aliases/ErrorMessageComponentProps.md)
* [ToolStructureBehavior](/api/ai/type-aliases/ToolStructureBehavior.md)
* [ToolDisplayBehavior](/api/ai/type-aliases/ToolDisplayBehavior.md)
* [ToolRenderBehavior](/api/ai/type-aliases/ToolRenderBehavior.md)
* [MessageContentProps](/api/ai/type-aliases/MessageContentProps.md)
* [ContextSelectorItem](/api/ai/type-aliases/ContextSelectorItem.md)
* [ContextSelectorRootProps](/api/ai/type-aliases/ContextSelectorRootProps.md)
* [SessionType](/api/ai/type-aliases/SessionType.md)
* [GenerateSessionTitlePromptOptions](/api/ai/type-aliases/GenerateSessionTitlePromptOptions.md)
* [GenerateSessionTitleOptions](/api/ai/type-aliases/GenerateSessionTitleOptions.md)
* [GenerateSessionTitleArgs](/api/ai/type-aliases/GenerateSessionTitleArgs.md)
* [GenerateSessionTitleResult](/api/ai/type-aliases/GenerateSessionTitleResult.md)
* [UseGenerateSessionTitleOptions](/api/ai/type-aliases/UseGenerateSessionTitleOptions.md)
* [AgentToolCall](/api/ai/type-aliases/AgentToolCall.md)
* [AgentToolCallAdditionalData](/api/ai/type-aliases/AgentToolCallAdditionalData.md)
* [AgentStreamOutput](/api/ai/type-aliases/AgentStreamOutput.md)
* [AgentSnapshot](/api/ai/type-aliases/AgentSnapshot.md)
* [StoredToolSet](/api/ai/type-aliases/StoredToolSet.md)
* [AddToolOutput](/api/ai/type-aliases/AddToolOutput.md)
* [AiToolExecutionContext](/api/ai/type-aliases/AiToolExecutionContext.md)
* [ToolRendererProps](/api/ai/type-aliases/ToolRendererProps.md)
* [ToolRenderer](/api/ai/type-aliases/ToolRenderer.md)
* [ToolRendererRegistry](/api/ai/type-aliases/ToolRendererRegistry.md)
* [ToolRenderers](/api/ai/type-aliases/ToolRenderers.md)
* [AiSettingsSliceState](/api/ai/type-aliases/AiSettingsSliceState.md)

## Variables

* [DEFAULT\_SKILL\_AUTHORING\_STOP\_STEPS](/api/ai/variables/DEFAULT_SKILL_AUTHORING_STOP_STEPS.md)
* [SKILL\_AUTHORING\_TOOL\_NAMES](/api/ai/variables/SKILL_AUTHORING_TOOL_NAMES.md)
* [SkillAuthoringPanel](/api/ai/variables/SkillAuthoringPanel.md)
* [DefaultSkillAuthoringPanelHeader](/api/ai/variables/DefaultSkillAuthoringPanelHeader.md)
* [SkillDraftPreview](/api/ai/variables/SkillDraftPreview.md)
* [SkillManifestSchema](/api/ai/variables/SkillManifestSchema.md)
* [SearchCommandsToolParameters](/api/ai/variables/SearchCommandsToolParameters.md)
* [ListCommandsToolParameters](/api/ai/variables/ListCommandsToolParameters.md)
* [GetCommandToolParameters](/api/ai/variables/GetCommandToolParameters.md)
* [ExecuteCommandToolParameters](/api/ai/variables/ExecuteCommandToolParameters.md)
* [QueryToolResult](/api/ai/variables/QueryToolResult.md)
* [QueryToolParameters](/api/ai/variables/QueryToolParameters.md)
* [DEFAULT\_SKILL\_RUNTIME\_TOOL\_POLICY](/api/ai/variables/DEFAULT_SKILL_RUNTIME_TOOL_POLICY.md)
* [DEFAULT\_TABLE\_SCHEMA\_CONTEXT\_LIMITS](/api/ai/variables/DEFAULT_TABLE_SCHEMA_CONTEXT_LIMITS.md)
* [AiSettingsSliceConfig](/api/ai/variables/AiSettingsSliceConfig.md)
* [AiSessionForkOrigin](/api/ai/variables/AiSessionForkOrigin.md)
* [AiSliceConfig](/api/ai/variables/AiSliceConfig.md)
* [ErrorMessageSchema](/api/ai/variables/ErrorMessageSchema.md)
* [~~AnalysisResultSchema~~](/api/ai/variables/AnalysisResultSchema.md)
* [AiRunContextItemSchema](/api/ai/variables/AiRunContextItemSchema.md)
* [AiRunContextSchema](/api/ai/variables/AiRunContextSchema.md)
* [ChatSessionSchema](/api/ai/variables/ChatSessionSchema.md)
* [~~AnalysisSessionSchema~~](/api/ai/variables/AnalysisSessionSchema.md)
* [AiThinkingDots](/api/ai/variables/AiThinkingDots.md)
* [Chat](/api/ai/variables/Chat.md)
* [ChatMessagesContainer](/api/ai/variables/ChatMessagesContainer.md)
* [ChatTurnView](/api/ai/variables/ChatTurnView.md)
* [ShowToolCallDetailsProvider](/api/ai/variables/ShowToolCallDetailsProvider.md)
* [processMessageContent](/api/ai/variables/processMessageContent.md)
* [MessageContent](/api/ai/variables/MessageContent.md)
* [ModelSelector](/api/ai/variables/ModelSelector.md)
* [PromptSuggestions](/api/ai/variables/PromptSuggestions.md)
* [QueryControls](/api/ai/variables/QueryControls.md)
* [SessionControls](/api/ai/variables/SessionControls.md)
* [ToolCallInfo](/api/ai/variables/ToolCallInfo.md)
* [ContextSelector](/api/ai/variables/ContextSelector.md)
* [CHAT\_CONTEXT\_SELECTOR\_SLOT](/api/ai/variables/CHAT_CONTEXT_SELECTOR_SLOT.md)
* [DeleteSessionDialog](/api/ai/variables/DeleteSessionDialog.md)
* [SessionActions](/api/ai/variables/SessionActions.md)
* [SessionDropdown](/api/ai/variables/SessionDropdown.md)
* [SessionTitle](/api/ai/variables/SessionTitle.md)
* [~~isAnalysisSessionEmpty~~](/api/ai/variables/isAnalysisSessionEmpty.md)
* [~~cleanupPendingAnalysisResults~~](/api/ai/variables/cleanupPendingAnalysisResults.md)
* [AiModelParameters](/api/ai/variables/AiModelParameters.md)
* [AiModelUsage](/api/ai/variables/AiModelUsage.md)
* [AiModelsSettings](/api/ai/variables/AiModelsSettings.md)
* [AiProvidersSettings](/api/ai/variables/AiProvidersSettings.md)
* [AiSettingsPanel](/api/ai/variables/AiSettingsPanel.md)

## Functions

* [createSkillAuthoringAgent](/api/ai/functions/createSkillAuthoringAgent.md)
* [createSkillDraftStore](/api/ai/functions/createSkillDraftStore.md)
* [buildSkillAuthoringSystemPrompt](/api/ai/functions/buildSkillAuthoringSystemPrompt.md)
* [containsForbidden](/api/ai/functions/containsForbidden.md)
* [createWriteManifestTool](/api/ai/functions/createWriteManifestTool.md)
* [createWriteInstructionsTool](/api/ai/functions/createWriteInstructionsTool.md)
* [createSaveSkillTool](/api/ai/functions/createSaveSkillTool.md)
* [parseSkillManifest](/api/ai/functions/parseSkillManifest.md)
* [serializeSkillManifest](/api/ai/functions/serializeSkillManifest.md)
* [loadSkillFromFiles](/api/ai/functions/loadSkillFromFiles.md)
* [createCommandTools](/api/ai/functions/createCommandTools.md)
* [createDefaultAiInstructions](/api/ai/functions/createDefaultAiInstructions.md)
* [createDefaultAiTools](/api/ai/functions/createDefaultAiTools.md)
* [createDefaultAiToolRenderers](/api/ai/functions/createDefaultAiToolRenderers.md)
* [createQueryToolRenderer](/api/ai/functions/createQueryToolRenderer.md)
* [createQueryTool](/api/ai/functions/createQueryTool.md)
* [getQuerySummary](/api/ai/functions/getQuerySummary.md)
* [getAiTableSchemaContextLimits](/api/ai/functions/getAiTableSchemaContextLimits.md)
* [getTablesForAiScope](/api/ai/functions/getTablesForAiScope.md)
* [getAiTableScopeSummary](/api/ai/functions/getAiTableScopeSummary.md)
* [formatOtherTableScopesForAi](/api/ai/functions/formatOtherTableScopesForAi.md)
* [formatTableSchemaForAi](/api/ai/functions/formatTableSchemaForAi.md)
* [formatTableSummaryForAi](/api/ai/functions/formatTableSummaryForAi.md)
* [formatTablesForLLM](/api/ai/functions/formatTablesForLLM.md)
* [createDefaultAiConfig](/api/ai/functions/createDefaultAiConfig.md)
* [getAiRunContextItems](/api/ai/functions/getAiRunContextItems.md)
* [getAiRunContextPrimaryItem](/api/ai/functions/getAiRunContextPrimaryItem.md)
* [setAiRunContextPrimaryItem](/api/ai/functions/setAiRunContextPrimaryItem.md)
* [createAiSlice](/api/ai/functions/createAiSlice.md)
* [useStoreWithAi](/api/ai/functions/useStoreWithAi.md)
* [updateAgentToolCallData](/api/ai/functions/updateAgentToolCallData.md)
* [streamSubAgent](/api/ai/functions/streamSubAgent.md)
* [getChatRequestErrorMessage](/api/ai/functions/getChatRequestErrorMessage.md)
* [getChatTurnsFromUiMessages](/api/ai/functions/getChatTurnsFromUiMessages.md)
* [getAnalysisResultsFromUiMessages](/api/ai/functions/getAnalysisResultsFromUiMessages.md)
* [markdownToPlainText](/api/ai/functions/markdownToPlainText.md)
* [normalizeChatSearchQuery](/api/ai/functions/normalizeChatSearchQuery.md)
* [findChatSearchMatches](/api/ai/functions/findChatSearchMatches.md)
* [ErrorMessage](/api/ai/functions/ErrorMessage.md)
* [ToolErrorMessage](/api/ai/functions/ToolErrorMessage.md)
* [isChatSessionEmpty](/api/ai/functions/isChatSessionEmpty.md)
* [getRunContextItemIds](/api/ai/functions/getRunContextItemIds.md)
* [getVisibleSessionContextItemIds](/api/ai/functions/getVisibleSessionContextItemIds.md)
* [getEffectiveSessionContextItemIds](/api/ai/functions/getEffectiveSessionContextItemIds.md)
* [isDefaultGeneratedSessionName](/api/ai/functions/isDefaultGeneratedSessionName.md)
* [getSessionUserMessageText](/api/ai/functions/getSessionUserMessageText.md)
* [cleanGeneratedSessionTitle](/api/ai/functions/cleanGeneratedSessionTitle.md)
* [generateSessionTitle](/api/ai/functions/generateSessionTitle.md)
* [useGenerateSessionTitle](/api/ai/functions/useGenerateSessionTitle.md)
* [useScrollToBottom](/api/ai/functions/useScrollToBottom.md)
* [fixIncompleteToolCalls](/api/ai/functions/fixIncompleteToolCalls.md)
* [createAiSettingsSlice](/api/ai/functions/createAiSettingsSlice.md)
* [useStoreWithAiSettings](/api/ai/functions/useStoreWithAiSettings.md)
* [createDefaultAiSettingsConfig](/api/ai/functions/createDefaultAiSettingsConfig.md)

## References

### ExecuteCommandToolParametersType

Renames and re-exports [ExecuteCommandToolParameters](/api/ai/variables/ExecuteCommandToolParameters.md)

***

### GetCommandToolParametersType

Renames and re-exports [GetCommandToolParameters](/api/ai/variables/GetCommandToolParameters.md)

***

### ListCommandsToolParametersType

Renames and re-exports [ListCommandsToolParameters](/api/ai/variables/ListCommandsToolParameters.md)

***

### SearchCommandsToolParametersType

Renames and re-exports [SearchCommandsToolParameters](/api/ai/variables/SearchCommandsToolParameters.md)

***

### AnalysisResultsContainer

Renames and re-exports [ChatMessagesContainer](/api/ai/variables/ChatMessagesContainer.md)

***

### ~~AnalysisResult~~

Renames and re-exports [ChatTurnView](/api/ai/variables/ChatTurnView.md)

***

### ~~AnalysisAnswer~~

Renames and re-exports [MessageContent](/api/ai/variables/MessageContent.md)

***

### ~~processAnalysisAnswerContent~~

Renames and re-exports [processMessageContent](/api/ai/variables/processMessageContent.md)
