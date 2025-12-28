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
| `analysisPrompt` | `string` | - |
| `isRunningAnalysis` | `boolean` | - |
| `promptSuggestionsVisible` | `boolean` | - |
| `tools` | `OpenAssistantToolSet` | - |
| `analysisAbortController?` | `AbortController` | - |
| `setConfig()` | (`config`) => `void` | - |
| `setPromptSuggestionsVisible()` | (`visible`) => `void` | - |
| `chatStop()?` | () => `void` | Latest stop function from useChat to immediately halt local streaming |
| `setChatStop()` | (`stop`) => `void` | Register/replace the current chat stop function |
| `chatSendMessage()?` | (`message`) => `void` | Latest sendMessage function from useChat to send messages |
| `setChatSendMessage()` | (`sendMessage`) => `void` | Register/replace the current chat sendMessage function |
| `addToolResult?` | [`AddToolResult`](AddToolResult.md) | Latest addToolResult function from useChat to add tool results |
| `setAddToolResult()` | (`addToolResult`) => `void` | Register/replace the current addToolResult function |
| `waitForToolResult()` | (`toolCallId`, `abortSignal?`) => `Promise`<`void`> | Wait for a tool result to be added by UI component |
| `setAnalysisPrompt()` | (`prompt`) => `void` | - |
| `addAnalysisResult()` | (`message`) => `void` | - |
| `sendPrompt()` | (`prompt`, `options?`) => `Promise`<`string`> | - |
| `startAnalysis()` | (`sendMessage`) => `Promise`<`void`> | - |
| `cancelAnalysis()` | () => `void` | - |
| `setAiModel()` | (`modelProvider`, `model`) => `void` | - |
| `createSession()` | (`name?`, `modelProvider?`, `model?`) => `void` | - |
| `switchSession()` | (`sessionId`) => `void` | - |
| `renameSession()` | (`sessionId`, `name`) => `void` | - |
| `deleteSession()` | (`sessionId`) => `void` | - |
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
| `getLocalChatTransport()` | () => `DefaultChatTransport`<`UIMessage`> | - |
| `chatEndPoint` | `string` | Optional remote endpoint to use for chat; if empty, local transport is used |
| `chatHeaders` | `Record`<`string`, `string`> | - |
| `getRemoteChatTransport()` | (`endpoint`, `headers?`) => `DefaultChatTransport`<`UIMessage`> | - |
| `onChatToolCall` | `ExtendedChatOnToolCallCallback` | - |
| `onChatData` | `ChatOnDataCallback`<`UIMessage`<`unknown`, `UIDataTypes`, `UITools`>> | - |
| `onChatFinish()` | (`args`) => `void` | - |
| `onChatError()` | (`error`) => `void` | - |
