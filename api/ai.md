---
url: /api/ai.md
---
# @sqlrooms/ai

# @sqlrooms/ai

An AI integration package for SQLRooms that provides components and utilities for adding AI-powered features to your data applications. This package enables natural language querying, data analysis, and AI-assisted insights.

## Features

* 🤖 **AI Query Interface**: Natural language to SQL conversion
* 📊 **Automated Analysis**: AI-powered data analysis and insights
* 🔄 **State Management**: Zustand-based state management for AI features
* 🧩 **UI Components**: Ready-to-use components for AI interactions
* 📝 **Query History**: Track and manage AI query history
* 🎯 **Tool Integration**: Framework for AI tools and actions

## Installation

```bash
npm install @sqlrooms/ai
# or
yarn add @sqlrooms/ai
```

Since version 0.8.2, you will need to install the LLM providers you want to use. For example, to use XAI, you can install the `@ai-sdk/xai` package:

```bash
npm install @ai-sdk/xai
```

Since version 0.26.0, you don't need to install the LLM providers anymore. You can use AiSettingsSlice to configure the LLM providers, and sqlrooms/ai will use the configured LLM providers via OpenAI compatible SDK.

```tsx
import {createAiSettingsSlice} from '@sqlrooms/ai';

// Create a room store with AI capabilities
const {roomStore, useRoomStore} = createRoomStore({
  ...createAiSettingsSlice({
    config: {
      providers: {
    openai: {
      baseUrl: 'https://api.openai.com/v1',
      apiKey: '',
      models: [
        {
          id: 'gpt-4.1',
          modelName: 'gpt-4.1',
        },
      },
    },
  }),
});
```

You can also pass a custom model provider to the AiSlice.

```tsx
import {createAiSlice} from '@sqlrooms/ai';

// Create a room store with AI capabilities
const {roomStore, useRoomStore} = createRoomStore({
  ...createAiSlice({
    getCustomModel: () => {
      return xai('grok-4');
    },
    ...
  }),
});
```

## Basic Usage

### Setting Up AI Integration

```tsx
import {createAiSlice} from '@sqlrooms/ai';
import {createRoomStore} from '@sqlrooms/room-shell';

// Create a room store with AI capabilities
const {roomStore, useRoomStore} = createRoomStore({
  // Base room configuration
  ...createRoomShellSlice({
    config: {
      // Your room configuration
    },
  }),
  // Add AI settings slice
  ...createAiSettingsSlice({
    config: {
      // Your AI settings configuration
    },
  }),
  // Add AI slice
  ...createAiSlice({
    initialAnalysisPrompt: 'What insights can you provide from my data?',
    // Optional: Add custom tools
    tools: {
      // Your custom tools
    },
    // Optional: Custom instructions for the AI
    getInstructions: (tablesSchema) => {
      return `Analyze the following tables: ${tablesSchema.map((t) => t.name).join(', ')}`;
    },
  }),
});

function MyApp() {
  return (
    <RoomStateProvider roomStore={roomStore}>
      <MyDataApp />
    </RoomStateProvider>
  );
}
```

### Advanced Store Configuration

For more complex applications, you can combine multiple slices:

```tsx
import {createAiSlice} from '@sqlrooms/ai';
import {
  createSqlEditorSlice,
  createDefaultSqlEditorConfig,
} from '@sqlrooms/sql-editor';
import {createRoomStore, createRoomShellSlice} from '@sqlrooms/room-shell';

// Define your application state type
export type RoomState = RoomState<RoomConfig> &
  AiSliceState &
  SqlEditorSliceState;

// Create the store with multiple slices
export const {roomStore, useRoomStore} = createRoomStore<RoomConfig, RoomState>(
  (set, get, store) => ({
    // Base room slice
    ...createRoomShellSlice({
      config: {
        ...createDefaultSqlEditorConfig(),
      },
    }),
    // AI settings slice
    ...createAiSettingsSlice({
      config: {
        // Your AI settings configuration
      },
    }),
    // Ai config slice
    ...createAiConfigSlice({
      config: {
        // Optional: Pre-configured AI sessions
        sessions: [
          {
            id: 'default-session',
            name: 'Default Analysis',
            modelProvider: 'openai',
            model: 'gpt-4o',
            analysisResults: [],
            createdAt: new Date(),
          },
        ],
        currentSessionId: 'default-session',
      },
    }),
    // AI slice
    ...createAiSlice({
      initialAnalysisPrompt: 'What insights can you provide from my data?',
      tools: {
        // Your custom tools
      },
      getInstructions: (tablesSchema) => {
        return `Analyze the following tables: ${tablesSchema.map((t) => t.name).join(', ')}`;
      },
    }),
    // SQL Editor slice
    ...createSqlEditorSlice(),
  }),
);
```

### Using AI Query Controls

```tsx
import {QueryControls} from '@sqlrooms/ai';

function AiQueryPanel() {
  return (
    <div className="rounded-lg border p-4">
      <h2 className="mb-4 text-xl font-bold">Ask AI</h2>
      <QueryControls
        placeholder="Ask a question about your data..."
        onSubmit={(query) => console.log('Processing query:', query)}
      />
    </div>
  );
}
```

### Displaying Analysis Results

```tsx
import {AnalysisResultsContainer, AnalysisResult} from '@sqlrooms/ai';

function AnalysisPanel() {
  // Get the current session and its analysis results
  const currentSession = useRoomStore((state) => state.ai.getCurrentSession());
  const analysisResults = currentSession?.analysisResults || [];

  return (
    <div className="rounded-lg border p-4">
      <h2 className="mb-4 text-xl font-bold">AI Analysis</h2>
      <AnalysisResultsContainer>
        {analysisResults.map((result) => (
          <AnalysisResult key={result.id} result={result} />
        ))}
      </AnalysisResultsContainer>
    </div>
  );
}
```

### Working with AI State

```tsx
function AiStatusIndicator() {
  const isRunningAnalysis = useRoomStore((state) => state.ai.isRunningAnalysis);
  const analysisPrompt = useRoomStore((state) => state.ai.analysisPrompt);
  const currentSession = useRoomStore((state) => state.ai.getCurrentSession());
  const lastResult =
    currentSession?.analysisResults[currentSession.analysisResults.length - 1];

  if (isRunningAnalysis) {
    return <div>AI is analyzing your data...</div>;
  }

  if (lastResult?.errorMessage) {
    return <div>Error: {lastResult.errorMessage.message}</div>;
  }

  if (analysisPrompt) {
    return <div>Last query: "{analysisPrompt}"</div>;
  }

  return <div>Ask AI a question about your data</div>;
}
```

## AiSlice API Reference

The AiSlice provides a comprehensive set of state fields and methods for managing AI interactions in your application.

### State Fields

#### `analysisPrompt`

The current prompt text entered by the user for analysis.

```tsx
const prompt = useRoomStore((state) => state.ai.analysisPrompt);
```

#### `isRunningAnalysis`

Boolean flag indicating whether an analysis is currently in progress.

```tsx
const isRunning = useRoomStore((state) => state.ai.isRunningAnalysis);
```

#### `tools`

Record of available AI tools that can be used during analysis.

```tsx
const availableTools = useRoomStore((state) => state.ai.tools);
```

#### `analysisAbortController`

Optional AbortController instance that can be used to cancel an ongoing analysis.

```tsx
const abortController = useRoomStore(
  (state) => state.ai.analysisAbortController,
);
```

### Methods

#### `setAnalysisPrompt(prompt: string)`

Sets the current analysis prompt text.

```tsx
const setPrompt = useRoomStore((state) => state.ai.setAnalysisPrompt);
setPrompt('Analyze sales trends for the last quarter');
```

#### `startAnalysis()`

Starts the analysis process using the current prompt.

```tsx
const startAnalysis = useRoomStore((state) => state.ai.startAnalysis);
await startAnalysis();
```

#### `cancelAnalysis()`

Cancels any ongoing analysis.

```tsx
const cancelAnalysis = useRoomStore((state) => state.ai.cancelAnalysis);
cancelAnalysis();
```

#### `setAiModel(modelProvider: string, model: string)`

Sets the AI model and provider for the current session.

```tsx
const setModel = useRoomStore((state) => state.ai.setAiModel);
setModel('openai', 'gpt-4o');
```

#### `createSession(name?: string, modelProvider?: string, model?: string)`

Creates a new analysis session with optional name and model settings.

```tsx
const createSession = useRoomStore((state) => state.ai.createSession);
createSession('Financial Analysis', 'openai', 'gpt-4o');
```

#### `switchSession(sessionId: string)`

Switches to a different analysis session by ID.

```tsx
const switchSession = useRoomStore((state) => state.ai.switchSession);
switchSession('session-123');
```

#### `renameSession(sessionId: string, name: string)`

Renames an existing analysis session.

```tsx
const renameSession = useRoomStore((state) => state.ai.renameSession);
renameSession('session-123', 'Q4 Sales Analysis');
```

#### `deleteSession(sessionId: string)`

Deletes an analysis session by ID.

```tsx
const deleteSession = useRoomStore((state) => state.ai.deleteSession);
deleteSession('session-123');
```

#### `getCurrentSession()`

Returns the current active analysis session.

```tsx
const currentSession = useRoomStore((state) => state.ai.getCurrentSession());
```

#### `deleteAnalysisResult(sessionId: string, resultId: string)`

Deletes a specific analysis result from a session.

```tsx
const deleteResult = useRoomStore((state) => state.ai.deleteAnalysisResult);
deleteResult('session-123', 'result-456');
```

#### `findToolComponent(toolName: string)`

Finds the React component associated with a specific tool.

```tsx
const ChartComponent = useRoomStore((state) =>
  state.ai.findToolComponent('chart'),
);
```

## Data Structure

See [ai-core](https://github.com/sqlrooms/sqlrooms/tree/main/packages/ai-core) for the data structure.

## Advanced Features

* **Custom AI Tools**: Define custom tools for AI to use with the tool() function
* **Multiple Sessions**: Create and manage multiple analysis sessions for different purposes
* **Model Selection**: Switch between different AI models and providers
* **Result Management**: Save, delete, and organize analysis results
* **Conversation Context**: Maintain context across multiple queries in a session
* **Feedback Loop**: Collect user feedback to improve AI responses

For more information, visit the SQLRooms documentation.

## AI Settings Configuration

This package now includes comprehensive AI settings components. These components provide a complete set of UI elements for managing AI model configuration, parameters, and usage tracking.

### AI Settings Features

* **createAiSettingsSlice**: Function to create a Zustand slice for managing AI model configuration with room-shell integration
* **AiSettingsPanel**: Main configuration panel with modular sub-components for different configuration aspects
* **ProvidersSettings**: Component for configuring AI providers (OpenAI, Anthropic, etc.) with API keys and base URLs
* **ModelsSettings**: Component for managing available models and their parameters
* **ModelParametersSettings**: Component for configuring model parameters like max steps and system instructions
* **ModelSelector**: Standalone model selector component for quick model switching

### AI Settings Usage

#### Individual Components

```tsx
import {
  AiSettingsPanel,
  ModelSelector,
} from '@sqlrooms/ai';
import {useRoomStore} from '../store';

// Main configuration panel with sub-components
<AiSettingsPanel isOpen={isConfigOpen} setIsOpen={setIsConfigOpen}>
  <AiSettingsPanel.ProvidersSettings />
  <AiSettingsPanel.ModelsSettings />
  <AiSettingsPanel.ModelParametersSettings  />
</AiSettingsPanel>

// Standalone model selector
<ModelSelector />
```

### AI Settings API Reference

#### Core Components

* **`AiSettingsPanel`**: Main configuration panel with modular sub-components
  * `AiSettingsPanel.ProvidersSettings`: Configure AI providers (OpenAI, Anthropic, etc.)
  * `AiSettingsPanel.ModelsSettings`: Manage available models and their parameters
  * `AiSettingsPanel.ModelParametersSettings`: Configure model parameters and instructions
* **`ModelSelector`**: Standalone model selector for quick switching

#### Slice Configuration

The package uses a slice-based configuration system that integrates with SQLRooms room-shell:

* **`createAiSettingsSlice()`**: Creates the AI settings configuration slice for state management
* **`AiSettingsSliceConfig`**: TypeScript type for configuration schema
* **`createDefaultAiSettings(providers)`**: Helper to create default configuration with providers
* **`getApiKey(config, provider, model)`**: Utility to get API key from configuration
* **`getBaseUrl(config, provider, model)`**: Utility to get base URL from configuration

#### Store Integration

The AI settings configuration integrates with the main AI slice through helper functions:

* **`getApiKey()`**: Function to retrieve API key from current session and model config
* **`getMaxSteps()`**: Function to get max steps from model configuration
* **`getBaseUrl()`**: Function to get base URL from current session and model config
* **`getInstructions(tablesSchema)`**: Function to generate system instructions with optional custom instructions

## Interfaces

* [ModelUsageData](interfaces/ModelUsageData.md)

## Type Aliases

* [AiSettingsSliceConfig](type-aliases/AiSettingsSliceConfig.md)
* [AiSliceConfig](type-aliases/AiSliceConfig.md)
* [ErrorMessageSchema](type-aliases/ErrorMessageSchema.md)
* [AnalysisResultSchema](type-aliases/AnalysisResultSchema.md)
* [AnalysisSessionSchema](type-aliases/AnalysisSessionSchema.md)
* [ToolUIPart](type-aliases/ToolUIPart.md)
* [UIMessagePart](type-aliases/UIMessagePart.md)
* [AiSliceState](type-aliases/AiSliceState.md)
* [SessionType](type-aliases/SessionType.md)
* [AiSettingsSliceState](type-aliases/AiSettingsSliceState.md)
* [DefaultToolsOptions](type-aliases/DefaultToolsOptions.md)
* [QueryToolParameters](type-aliases/QueryToolParameters.md)

## Variables

* [AiSettingsSliceConfig](variables/AiSettingsSliceConfig.md)
* [AiSliceConfig](variables/AiSliceConfig.md)
* [ErrorMessageSchema](variables/ErrorMessageSchema.md)
* [AnalysisResultSchema](variables/AnalysisResultSchema.md)
* [AnalysisSessionSchema](variables/AnalysisSessionSchema.md)
* [QueryToolParameters](variables/QueryToolParameters.md)

## Functions

* [createDefaultAiConfig](functions/createDefaultAiConfig.md)
* [createAiSlice](functions/createAiSlice.md)
* [useStoreWithAi](functions/useStoreWithAi.md)
* [AiThinkingDots](functions/AiThinkingDots.md)
* [AnalysisResult](functions/AnalysisResult.md)
* [AnalysisResultsContainer](functions/AnalysisResultsContainer.md)
* [ModelSelector](functions/ModelSelector.md)
* [QueryControls](functions/QueryControls.md)
* [SessionControls](functions/SessionControls.md)
* [ToolCallInfo](functions/ToolCallInfo.md)
* [DeleteSessionDialog](functions/DeleteSessionDialog.md)
* [SessionActions](functions/SessionActions.md)
* [SessionDropdown](functions/SessionDropdown.md)
* [SessionTitle](functions/SessionTitle.md)
* [ToolErrorMessage](functions/ToolErrorMessage.md)
* [useAiChat](functions/useAiChat.md)
* [useScrollToBottom](functions/useScrollToBottom.md)
* [createAiSettingsSlice](functions/createAiSettingsSlice.md)
* [useStoreWithAiSettings](functions/useStoreWithAiSettings.md)
* [AiModelParameters](functions/AiModelParameters.md)
* [AiModelUsage](functions/AiModelUsage.md)
* [AiModelsSettings](functions/AiModelsSettings.md)
* [AiProvidersSettings](functions/AiProvidersSettings.md)
* [AiSettingsPanel](functions/AiSettingsPanel.md)
* [createDefaultAiSettingsConfig](functions/createDefaultAiSettingsConfig.md)
* [createDefaultAiInstructions](functions/createDefaultAiInstructions.md)
* [createDefaultAiTools](functions/createDefaultAiTools.md)
* [QueryToolResult](functions/QueryToolResult.md)
