---
url: 'https://sqlrooms.org/api/ai-config/functions/createDefaultAiConfig.md'
---
[@sqlrooms/ai-config](../index.md) / createDefaultAiConfig

# Function: createDefaultAiConfig()

> **createDefaultAiConfig**(`props?`): `object`

## Parameters

| Parameter | Type |
| ------ | ------ |
| `props?` | `Partial`<{ `sessions`: `object`\[]; `currentSessionId?`: `string`; `openSessionTabs?`: `string`\[]; `sessionForks`: `Record`<`string`, { `sourceSessionId`: `string`; `sourceMessageId?`: `string`; `sourceTurnId?`: `string`; `sourceMessageIndex?`: `number`; `legacySourceAnalysisResultId?`: `string`; `sourceSessionNameAtFork`: `string`; `createdAt`: `number`; }>; }> |

## Returns

| Name | Type | Description |
| ------ | ------ | ------ |
| `sessions` | `object`\[] | - |
| `currentSessionId?` | `string` | - |
| `openSessionTabs?` | `string`\[] | IDs of sessions that are open as tabs |
| `sessionForks` | `Record`<`string`, { `sourceSessionId`: `string`; `sourceMessageId?`: `string`; `sourceTurnId?`: `string`; `sourceMessageIndex?`: `number`; `legacySourceAnalysisResultId?`: `string`; `sourceSessionNameAtFork`: `string`; `createdAt`: `number`; }> | targetSessionId -> fork provenance |
