---
url: /api/ai/type-aliases/AiSliceState.md
---
[@sqlrooms/ai](../index.md) / AiSliceState

# Type Alias: AiSliceState

> **AiSliceState**: `object`

## Type declaration

| Name | Type |
| ------ | ------ |
|  `ai` | { `config`: [`AiSliceConfig`](AiSliceConfig.md); `analysisPrompt`: `string`; `isRunningAnalysis`: `boolean`; `promptSuggestionsVisible`: `boolean`; `tools`: `OpenAssistantToolSet`; `analysisAbortController`: `AbortController`; `setConfig`: (`config`) => `void`; `setPromptSuggestionsVisible`: (`visible`) => `void`; `chatStop`: () => `void`; `setChatStop`: (`stop`) => `void`; `chatSendMessage`: (`message`) => `void`; `setChatSendMessage`: (`sendMessage`) => `void`; `addToolResult`: `AddToolResult`; `setAddToolResult`: (`addToolResult`) => `void`; `waitForToolResult`: (`toolCallId`, `abortSignal`?) => `Promise`<`void`>; `setAnalysisPrompt`: (`prompt`) => `void`; `addAnalysisResult`: (`message`) => `void`; `sendPrompt`: (`prompt`, `options`?) => `Promise`<`string`>; `startAnalysis`: (`sendMessage`) => `Promise`<`void`>; `cancelAnalysis`: () => `void`; `setAiModel`: (`modelProvider`, `model`) => `void`; `createSession`: (`name`?, `modelProvider`?, `model`?) => `void`; `switchSession`: (`sessionId`) => `void`; `renameSession`: (`sessionId`, `name`) => `void`; `deleteSession`: (`sessionId`) => `void`; `getCurrentSession`: () => [`AnalysisSessionSchema`](AnalysisSessionSchema.md) | `undefined`; `setSessionUiMessages`: (`sessionId`, `uiMessages`) => `void`; `setSessionToolAdditionalData`: (`sessionId`, `toolCallId`, `additionalData`) => `void`; `getAnalysisResults`: () => [`AnalysisResultSchema`](AnalysisResultSchema.md)\[]; `deleteAnalysisResult`: (`sessionId`, `resultId`) => `void`; `getAssistantMessageParts`: (`analysisResultId`) => `UIMessage`\[`"parts"`]; `findToolComponent`: (`toolName`) => `React.ComponentType` | `undefined`; `getApiKeyFromSettings`: () => `string`; `getBaseUrlFromSettings`: () => `string` | `undefined`; `getMaxStepsFromSettings`: () => `number`; `getFullInstructions`: () => `string`; `getLocalChatTransport`: () => `DefaultChatTransport`<`UIMessage`>; `chatEndPoint`: `string`; `chatHeaders`: `Record`<`string`, `string`>; `getRemoteChatTransport`: (`endpoint`, `headers`?) => `DefaultChatTransport`<`UIMessage`>; `onChatToolCall`: `ExtendedChatOnToolCallCallback`; `onChatData`: `ChatOnDataCallback`<`UIMessage`<`unknown`, `UIDataTypes`, `UITools`>>; `onChatFinish`: (`args`) => `void`; `onChatError`: (`error`) => `void`; } |
