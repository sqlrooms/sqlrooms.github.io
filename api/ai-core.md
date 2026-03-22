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
      <Chat.Composer placeholder="Ask a question" />
    </Chat>
  );
}
```

## Useful exports

* Slice/hooks: `createAiSlice`, `useStoreWithAi`, `AiSliceState`
* Chat UI: `Chat`, `ModelSelector`, `QueryControls`, `PromptSuggestions`
* Legacy/compat components: `AnalysisResultsContainer`, `AnalysisResult`, `ErrorMessage`
* Types: `ToolRendererProps`, `ToolRenderer`, `ToolRendererRegistry`, `StoredTool`, `StoredToolSet`
* Tool/agent utilities:
  * `cleanupPendingAnalysisResults`
  * `fixIncompleteToolCalls`
  * `processAgentStream`

## Related packages

* `@sqlrooms/ai` (recommended high-level integration)
* `@sqlrooms/ai-settings` (provider/model settings slice + UI)
* `@sqlrooms/ai-config` (config schemas and migrations)

## Classes

* [ToolAbortError](classes/ToolAbortError.md)

## Interfaces

* [AiSliceOptions](interfaces/AiSliceOptions.md)
* [StoredTool](interfaces/StoredTool.md)

## Type Aliases

* [AiSliceConfig](type-aliases/AiSliceConfig.md)
* [AiSliceState](type-aliases/AiSliceState.md)
* [AgentStreamResult](type-aliases/AgentStreamResult.md)
* [UIMessageChunk](type-aliases/UIMessageChunk.md)
* [AgentToolCall](type-aliases/AgentToolCall.md)
* [ErrorMessageComponentProps](type-aliases/ErrorMessageComponentProps.md)
* [SessionType](type-aliases/SessionType.md)
* [StoredToolSet](type-aliases/StoredToolSet.md)
* [AddToolResult](type-aliases/AddToolResult.md)
* [ToolRendererProps](type-aliases/ToolRendererProps.md)
* [ToolRenderer](type-aliases/ToolRenderer.md)
* [ToolRendererRegistry](type-aliases/ToolRendererRegistry.md)
* [ToolRenderers](type-aliases/ToolRenderers.md)

## Variables

* [AiSliceConfig](variables/AiSliceConfig.md)
* [AiThinkingDots](variables/AiThinkingDots.md)
* [AnalysisResult](variables/AnalysisResult.md)
* [AnalysisResultsContainer](variables/AnalysisResultsContainer.md)
* [Chat](variables/Chat.md)
* [ModelSelector](variables/ModelSelector.md)
* [PromptSuggestions](variables/PromptSuggestions.md)
* [QueryControls](variables/QueryControls.md)
* [ReasoningBox](variables/ReasoningBox.md)
* [SessionControls](variables/SessionControls.md)
* [ToolCallInfo](variables/ToolCallInfo.md)
* [DeleteSessionDialog](variables/DeleteSessionDialog.md)
* [SessionActions](variables/SessionActions.md)
* [SessionDropdown](variables/SessionDropdown.md)
* [SessionTitle](variables/SessionTitle.md)

## Functions

* [createDefaultAiConfig](functions/createDefaultAiConfig.md)
* [createAiSlice](functions/createAiSlice.md)
* [useStoreWithAi](functions/useStoreWithAi.md)
* [processAgentStream](functions/processAgentStream.md)
* [ErrorMessage](functions/ErrorMessage.md)
* [ToolErrorMessage](functions/ToolErrorMessage.md)
* [useScrollToBottom](functions/useScrollToBottom.md)
* [useSessionChat](functions/useSessionChat.md)
* [extractModelsFromSettings](functions/extractModelsFromSettings.md)
* [cleanupPendingAnalysisResults](functions/cleanupPendingAnalysisResults.md)
* [fixIncompleteToolCalls](functions/fixIncompleteToolCalls.md)
