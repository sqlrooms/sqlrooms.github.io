---
url: 'https://sqlrooms.org/api/ai-config/type-aliases/AiSliceConfig.md'
---
[@sqlrooms/ai-config](../index.md) / AiSliceConfig

# Type Alias: AiSliceConfig

> **AiSliceConfig** = `object`

## Type Declaration

| Name | Type | Description |
| ------ | ------ | ------ |
|  `sessions` | `object`\[] | - |
|  `currentSessionId?` | `string` | - |
|  `openSessionTabs?` | `string`\[] | IDs of sessions that are open as tabs |
|  `sessionForks` | `Record`<`string`, { `sourceSessionId`: `string`; `sourceMessageId?`: `string`; `sourceTurnId?`: `string`; `sourceMessageIndex?`: `number`; `legacySourceAnalysisResultId?`: `string`; `sourceSessionNameAtFork`: `string`; `createdAt`: `number`; }> | targetSessionId -> fork provenance |
