---
url: 'https://sqlrooms.org/api/ai/functions/createDefaultAiConfig.md'
---
[@sqlrooms/ai](../index.md) / createDefaultAiConfig

# Function: createDefaultAiConfig()

> **createDefaultAiConfig**(`props?`): `object`

## Parameters

| Parameter | Type |
| ------ | ------ |
| `props?` | `Partial`<{ `sessions`: `object`\[]; `currentSessionId?`: `string`; `openSessionTabs?`: `string`\[]; `sessionForks`: `z.ZodDefault`<`z.ZodRecord`<`z.ZodString`, `z.ZodObject`<{ `sourceSessionId`: `z.ZodString`; `sourceMessageId`: `z.ZodOptional`<`z.ZodString`>; `sourceTurnId`: `z.ZodOptional`<`z.ZodString`>; `sourceMessageIndex`: `z.ZodOptional`<`z.ZodNumber`>; `legacySourceAnalysisResultId`: `z.ZodOptional`<`z.ZodString`>; `sourceSessionNameAtFork`: `z.ZodString`; `createdAt`: `z.ZodNumber`; }, `z.core.$strip`>>>; }> |

## Returns

`object`

| Name | Type |
| ------ | ------ |
| `sessions` | `object`\[] |
| `currentSessionId?` | `string` |
| `openSessionTabs?` | `string`\[] |
| `sessionForks` | `z.ZodDefault`<`z.ZodRecord`<`z.ZodString`, `z.ZodObject`<{ `sourceSessionId`: `z.ZodString`; `sourceMessageId`: `z.ZodOptional`<`z.ZodString`>; `sourceTurnId`: `z.ZodOptional`<`z.ZodString`>; `sourceMessageIndex`: `z.ZodOptional`<`z.ZodNumber`>; `legacySourceAnalysisResultId`: `z.ZodOptional`<`z.ZodString`>; `sourceSessionNameAtFork`: `z.ZodString`; `createdAt`: `z.ZodNumber`; }, `z.core.$strip`>>> |
