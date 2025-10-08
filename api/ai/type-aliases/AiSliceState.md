---
url: /api/ai/type-aliases/AiSliceState.md
---
[@sqlrooms/ai](../index.md) / AiSliceState

# Type Alias: AiSliceState

> **AiSliceState**: `object`

## Type declaration

| Name | Type |
| ------ | ------ |
|  `ai` | { `config`: [`AiSliceConfig`](AiSliceConfig.md); `analysisPrompt`: `string`; `isRunningAnalysis`: `boolean`; `tools`: `Record`<`string`, [`AiSliceTool`](AiSliceTool.md)>; `analysisAbortController`: `AbortController`; `setAnalysisPrompt`: (`prompt`) => `void`; `startAnalysis`: () => `Promise`<`void`>; `cancelAnalysis`: () => `void`; `setAiModel`: (`modelProvider`, `model`) => `void`; `createSession`: (`name`?, `modelProvider`?, `model`?) => `void`; `switchSession`: (`sessionId`) => `void`; `renameSession`: (`sessionId`, `name`) => `void`; `deleteSession`: (`sessionId`) => `void`; `getCurrentSession`: () => [`AnalysisSessionSchema`](AnalysisSessionSchema.md) | `undefined`; `deleteAnalysisResult`: (`sessionId`, `resultId`) => `void`; `findToolComponent`: (`toolName`) => `React.ComponentType` | `undefined`; `getApiKeyFromSettings`: () => `string`; `getBaseUrlFromSettings`: () => `string` | `undefined`; `getMaxStepsFromSettings`: () => `number`; `getFullInstructions`: () => `string`; } |
