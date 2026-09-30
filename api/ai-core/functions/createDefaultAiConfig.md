---
url: https://sqlrooms.org/api/ai-core/functions/createDefaultAiConfig.md
---
[@sqlrooms/ai-core](../index.md) / createDefaultAiConfig

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
| `props?` | `Partial`<{ `sessions`: `object`\[]; `currentSessionId?`: `string`; `openSessionTabs?`: `string`\[]; `sessionForks`: `z.ZodDefault`<`z.ZodRecord`<`z.ZodString`, `z.ZodObject`<{ `sourceSessionId`: `z.ZodString`; `sourceMessageId`: `z.ZodOptional`<`z.ZodString`>; `sourceTurnId`: `z.ZodOptional`<`z.ZodString`>; `sourceMessageIndex`: `z.ZodOptional`<`z.ZodNumber`>; `legacySourceAnalysisResultId`: `z.ZodOptional`<`z.ZodString`>; `sourceSessionNameAtFork`: `z.ZodString`; `createdAt`: `z.ZodNumber`; }, `z.core.$strip`>>>; `pinnedSessionIds?`: `string`\[]; }> | Optional overrides merged on top of the generated defaults. Any provided field replaces the corresponding default. |

## Returns

`object`

A fully-populated [AiSliceConfig](../variables/AiSliceConfig.md).

| Name | Type |
| ------ | ------ |
| `sessions` | `object`\[] |
| `currentSessionId?` | `string` |
| `openSessionTabs?` | `string`\[] |
| `sessionForks` | `z.ZodDefault`<`z.ZodRecord`<`z.ZodString`, `z.ZodObject`<{ `sourceSessionId`: `z.ZodString`; `sourceMessageId`: `z.ZodOptional`<`z.ZodString`>; `sourceTurnId`: `z.ZodOptional`<`z.ZodString`>; `sourceMessageIndex`: `z.ZodOptional`<`z.ZodNumber`>; `legacySourceAnalysisResultId`: `z.ZodOptional`<`z.ZodString`>; `sourceSessionNameAtFork`: `z.ZodString`; `createdAt`: `z.ZodNumber`; }, `z.core.$strip`>>> |
| `pinnedSessionIds?` | `string`\[] |
