---
url: 'https://sqlrooms.org/api/ai.md'
---
# @sqlrooms/ai

High-level AI package for SQLRooms.

This package combines:

* AI slice state/logic (`@sqlrooms/ai-core`)
* AI settings UI/state (`@sqlrooms/ai-settings`)
* AI config schemas (`@sqlrooms/ai-config`)
* SQL query tool helpers (`createDefaultAiTools`, `createQueryTool`)

Use this package when you want AI chat + tool execution in a SQLRooms app without wiring low-level pieces manually.

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
    })(set, get, store),
  }),
);
```

## Render chat UI

```tsx
import {Chat} from '@sqlrooms/ai';
import {useRoomStore} from './store';

function AiPanel() {
  const updateProvider = useRoomStore((state) => state.aiSettings.updateProvider);

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

## Add custom tools

```tsx
import {z} from 'zod';
import {createAiSlice, createDefaultAiInstructions, createDefaultAiTools} from '@sqlrooms/ai';

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

## Related packages

* `@sqlrooms/ai-core` for lower-level AI slice and chat primitives
* `@sqlrooms/ai-settings` for settings slice/components only
* `@sqlrooms/ai-config` for Zod schemas and migrations

## Classes

* [ToolAbortError](classes/ToolAbortError.md)

## Interfaces

* [ModelUsageData](interfaces/ModelUsageData.md)

## Type Aliases

* [ListCommandsToolParameters](type-aliases/ListCommandsToolParameters.md)
* [CommandToolDescriptor](type-aliases/CommandToolDescriptor.md)
* [ListCommandsToolLlmResult](type-aliases/ListCommandsToolLlmResult.md)
* [ExecuteCommandToolParameters](type-aliases/ExecuteCommandToolParameters.md)
* [ExecuteCommandToolLlmResult](type-aliases/ExecuteCommandToolLlmResult.md)
* [CommandToolsOptions](type-aliases/CommandToolsOptions.md)
* [DefaultToolsOptions](type-aliases/DefaultToolsOptions.md)
* [QueryToolParameters](type-aliases/QueryToolParameters.md)
* [QueryToolLlmResult](type-aliases/QueryToolLlmResult.md)
* [QueryToolAdditionalData](type-aliases/QueryToolAdditionalData.md)
* [QueryToolOptions](type-aliases/QueryToolOptions.md)
* [AiSettingsSliceConfig](type-aliases/AiSettingsSliceConfig.md)
* [AiSliceConfig](type-aliases/AiSliceConfig.md)
* [ErrorMessageSchema](type-aliases/ErrorMessageSchema.md)
* [AnalysisResultSchema](type-aliases/AnalysisResultSchema.md)
* [AnalysisSessionSchema](type-aliases/AnalysisSessionSchema.md)
* [ToolUIPart](type-aliases/ToolUIPart.md)
* [UIMessagePart](type-aliases/UIMessagePart.md)
* [AiSliceState](type-aliases/AiSliceState.md)
* [AgentStreamResult](type-aliases/AgentStreamResult.md)
* [UIMessageChunk](type-aliases/UIMessageChunk.md)
* [AgentToolCall](type-aliases/AgentToolCall.md)
* [AgentToolCallAdditionalData](type-aliases/AgentToolCallAdditionalData.md)
* [ErrorMessageComponentProps](type-aliases/ErrorMessageComponentProps.md)
* [SessionType](type-aliases/SessionType.md)
* [AiSettingsSliceState](type-aliases/AiSettingsSliceState.md)

## Variables

* [ListCommandsToolParameters](variables/ListCommandsToolParameters.md)
* [ExecuteCommandToolParameters](variables/ExecuteCommandToolParameters.md)
* [QueryToolParameters](variables/QueryToolParameters.md)
* [AiSettingsSliceConfig](variables/AiSettingsSliceConfig.md)
* [AiSliceConfig](variables/AiSliceConfig.md)
* [ErrorMessageSchema](variables/ErrorMessageSchema.md)
* [AnalysisResultSchema](variables/AnalysisResultSchema.md)
* [AnalysisSessionSchema](variables/AnalysisSessionSchema.md)
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
* [AiModelParameters](variables/AiModelParameters.md)
* [AiModelUsage](variables/AiModelUsage.md)
* [AiModelsSettings](variables/AiModelsSettings.md)
* [AiProvidersSettings](variables/AiProvidersSettings.md)
* [AiSettingsPanel](variables/AiSettingsPanel.md)

## Functions

* [createCommandTools](functions/createCommandTools.md)
* [formatTablesForLLM](functions/formatTablesForLLM.md)
* [createDefaultAiInstructions](functions/createDefaultAiInstructions.md)
* [createDefaultAiTools](functions/createDefaultAiTools.md)
* [QueryToolResult](functions/QueryToolResult.md)
* [createQueryTool](functions/createQueryTool.md)
* [getQuerySummary](functions/getQuerySummary.md)
* [createDefaultAiConfig](functions/createDefaultAiConfig.md)
* [createAiSlice](functions/createAiSlice.md)
* [useStoreWithAi](functions/useStoreWithAi.md)
* [updateAgentToolCallData](functions/updateAgentToolCallData.md)
* [processAgentStream](functions/processAgentStream.md)
* [convertToAiSDKTools](functions/convertToAiSDKTools.md)
* [ErrorMessage](functions/ErrorMessage.md)
* [ToolErrorMessage](functions/ToolErrorMessage.md)
* [useScrollToBottom](functions/useScrollToBottom.md)
* [cleanupPendingAnalysisResults](functions/cleanupPendingAnalysisResults.md)
* [fixIncompleteToolCalls](functions/fixIncompleteToolCalls.md)
* [createAiSettingsSlice](functions/createAiSettingsSlice.md)
* [useStoreWithAiSettings](functions/useStoreWithAiSettings.md)
* [createDefaultAiSettingsConfig](functions/createDefaultAiSettingsConfig.md)
