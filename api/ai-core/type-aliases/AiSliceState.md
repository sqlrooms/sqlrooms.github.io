---
url: /api/ai-core/type-aliases/AiSliceState.md
---
[@sqlrooms/ai-core](../index.md) / AiSliceState

# Type Alias: AiSliceState

> **AiSliceState** = `object`

## Properties

### ai

> **ai**: `object`

| Name | Type | Description |
| ------ | ------ | ------ |
| `config` | [`AiSliceConfig`](AiSliceConfig.md) | - |
| `promptSuggestionsVisible` | `boolean` | - |
| `apiKeyErrors` | `Record`<`string`, `boolean`> | Tracks API key errors per provider (e.g., 401/403 responses) |
| `tools` | `OpenAssistantToolSet` | - |
| `getProviderOptions?` | `GetProviderOptions` | - |
| `setConfig()` | (`config`) => `void` | - |
| `setPromptSuggestionsVisible()` | (`visible`) => `void` | - |
| `setApiKeyError()` | (`provider`, `hasError`) => `void` | Set API key error flag for a provider |
| `hasApiKeyError()` | () => `boolean` | Check if there's an API key error for the current provider |
| `getAbortController()` | (`sessionId`) => `AbortController` | `undefined` | - |
| `setAbortController()` | (`sessionId`, `controller`) => `void` | - |
| `setChatStop()` | (`sessionId`, `stop`) => `void` | - |
| `getChatStop()` | (`sessionId`) => () => `void` | `undefined` | - |
| `setChatSendMessage()` | (`sessionId`, `sendMessage`) => `void` | - |
| `getChatSendMessage()` | (`sessionId`) => `AiChatSendMessage` | `undefined` | - |
| `setAddToolResult()` | (`sessionId`, `addToolResult`) => `void` | - |
| `getAddToolResult()` | (`sessionId`) => [`AddToolResult`](AddToolResult.md) | `undefined` | - |
| `waitForToolResult()` | (`sessionId`, `toolCallId`, `abortSignal?`) => `Promise`<`void`> | - |
| `setToolCallSession()` | (`toolCallId`, `sessionId`) => `void` | Map toolCallId -> sessionId for long-running tool streams (e.g. agent tools) |
| `getToolCallSession()` | (`toolCallId`) => `string` | `undefined` | - |
| `setPrompt()` | (`sessionId`, `prompt`) => `void` | - |
| `getPrompt()` | (`sessionId`) => `string` | - |
| `setIsRunning()` | (`sessionId`, `isRunning`) => `void` | - |
| `getIsRunning()` | (`sessionId`) => `boolean` | - |
| `addAnalysisResult()` | (`message`) => `void` | - |
| `sendPrompt()` | (`prompt`, `options?`) => `Promise`<`string`> | - |
| `startAnalysis()` | (`sessionId`) => `Promise`<`void`> | - |
| `cancelAnalysis()` | (`sessionId`) => `void` | - |
| `setAiModel()` | (`modelProvider`, `model`) => `void` | - |
| `createSession()` | (`name?`, `modelProvider?`, `model?`) => `void` | - |
| `switchSession()` | (`sessionId`) => `void` | - |
| `renameSession()` | (`sessionId`, `name`) => `void` | - |
| `deleteSession()` | (`sessionId`) => `void` | - |
| `setOpenSessionTabs()` | (`tabs`) => `void` | - |
| `getCurrentSession()` | () => `AnalysisSessionSchema` | `undefined` | - |
| `setSessionUiMessages()` | (`sessionId`, `uiMessages`) => `void` | - |
| `setSessionToolAdditionalData()` | (`sessionId`, `toolCallId`, `additionalData`) => `void` | - |
| `getAnalysisResults()` | () => `AnalysisResultSchema`\[] | `undefined` | - |
| `deleteAnalysisResult()` | (`sessionId`, `resultId`) => `void` | - |
| `getAssistantMessageParts()` | (`analysisResultId`) => `UIMessage`\[`"parts"`] | - |
| `findToolComponent()` | (`toolName`) => `React.ComponentType` | `undefined` | - |
| `getApiKeyFromSettings()` | () => `string` | - |
| `getBaseUrlFromSettings()` | () => `string` | `undefined` | - |
| `getMaxStepsFromSettings()` | () => `number` | - |
| `getFullInstructions()` | () => `string` | - |
| `getLocalChatTransport()` | (`sessionId`) => `DefaultChatTransport`<`UIMessage`> | - |
| `chatEndPoint` | `string` | Optional remote endpoint to use for chat; if empty, local transport is used |
| `chatHeaders` | `Record`<`string`, `string`> | - |
| `getRemoteChatTransport()` | (`sessionId`, `endpoint`, `headers?`) => `DefaultChatTransport`<`UIMessage`> | - |
| `onChatFinish()` | (`args`) => `void` | - |
| `onChatToolCall()` | (`args`) => `Promise`<`void`> | `void` | - |
| `onChatData()` | (`sessionId`, `dataPart`) => `void` | - |
| `onChatError()` | (`sessionId`, `error`) => `void` | - |
