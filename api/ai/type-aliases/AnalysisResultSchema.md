---
url: /api/ai/type-aliases/AnalysisResultSchema.md
---
[@sqlrooms/ai](../index.md) / AnalysisResultSchema

# Type Alias: AnalysisResultSchema

> **AnalysisResultSchema**: `object`

## Type declaration

| Name | Type |
| ------ | ------ |
|  `isCompleted` | `boolean` |
|  `id` | `string` |
|  `prompt` | `string` |
|  `streamMessage` | { `parts`: ({ `type`: `"text"`; `text`: `string`; `isCompleted`: `boolean`; `additionalData`: `any`; } | { `type`: `"tool-invocation"`; `toolInvocation`: { `toolName`: `string`; `toolCallId`: `string`; `state`: `string`; `args`: `any`; `result`: `any`; }; `isCompleted`: `boolean`; `additionalData`: `any`; } | `objectOutputType`<{ `type`: `ZodString`; `additionalData`: `ZodOptional`<`ZodAny`>; `isCompleted`: `ZodOptional`<`ZodBoolean`>; }, `ZodTypeAny`, `"passthrough"`>)\[]; } |
|  `errorMessage`? | { `error`: `string`; } |
