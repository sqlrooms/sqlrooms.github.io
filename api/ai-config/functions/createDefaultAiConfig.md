---
url: https://sqlrooms.org/api/ai-config/functions/createDefaultAiConfig.md
---
[@sqlrooms/ai-config](../index.md) / createDefaultAiConfig

# Function: createDefaultAiConfig()

> **createDefaultAiConfig**(`props?`): `object`

Creates the default AI slice configuration.

The default config intentionally contains no chat session: the first session
is created lazily when the user sends their first message, so an empty
workspace does not show a stray session. `currentSessionId` is therefore
`undefined` and all session collections start empty.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props?` | `Partial`<{ `sessions`: `object`\[]; `currentSessionId?`: `string`; `openSessionTabs?`: `string`\[]; `sessionForks`: `Record`<`string`, { `sourceSessionId`: `string`; `sourceMessageId?`: `string`; `sourceTurnId?`: `string`; `sourceMessageIndex?`: `number`; `legacySourceAnalysisResultId?`: `string`; `sourceSessionNameAtFork`: `string`; `createdAt`: `number`; }>; `pinnedSessionIds?`: `string`\[]; }> | Optional overrides merged on top of the generated defaults. Any provided field replaces the corresponding default. |

## Returns

A fully-populated [AiSliceConfig](../variables/AiSliceConfig.md).

| Name | Type | Description |
| ------ | ------ | ------ |
| `sessions` | `object`\[] | - |
| `currentSessionId?` | `string` | - |
| `openSessionTabs?` | `string`\[] | IDs of sessions that are open as tabs |
| `sessionForks` | `Record`<`string`, { `sourceSessionId`: `string`; `sourceMessageId?`: `string`; `sourceTurnId?`: `string`; `sourceMessageIndex?`: `number`; `legacySourceAnalysisResultId?`: `string`; `sourceSessionNameAtFork`: `string`; `createdAt`: `number`; }> | targetSessionId -> fork provenance |
| `pinnedSessionIds?` | `string`\[] | IDs of pinned sessions |
