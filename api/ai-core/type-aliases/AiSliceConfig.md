---
url: 'https://sqlrooms.org/api/ai-core/type-aliases/AiSliceConfig.md'
---
[@sqlrooms/ai-core](../index.md) / AiSliceConfig

# Type Alias: AiSliceConfig

> **AiSliceConfig** = `object`

## Type Declaration

| Name | Type |
| ------ | ------ |
|  `sessions` | `object`\[] |
|  `currentSessionId?` | `string` |
|  `openSessionTabs?` | `string`\[] |
|  `sessionForks` | `z.ZodDefault`<`z.ZodRecord`<`z.ZodString`, `z.ZodObject`<{ `sourceSessionId`: `z.ZodString`; `sourceMessageId`: `z.ZodOptional`<`z.ZodString`>; `sourceTurnId`: `z.ZodOptional`<`z.ZodString`>; `sourceMessageIndex`: `z.ZodOptional`<`z.ZodNumber`>; `legacySourceAnalysisResultId`: `z.ZodOptional`<`z.ZodString`>; `sourceSessionNameAtFork`: `z.ZodString`; `createdAt`: `z.ZodNumber`; }, `z.core.$strip`>>> |
