---
url: /api/ai/variables/AnalysisSessionSchema.md
---
[@sqlrooms/ai](../index.md) / AnalysisSessionSchema

# Variable: AnalysisSessionSchema

> `const` **AnalysisSessionSchema**: `z.ZodPipe`<`z.ZodTransform`<`unknown`, `unknown`>, `z.ZodObject`<{ `id`: `z.ZodString`; `name`: `z.ZodString`; `modelProvider`: `z.ZodString`; `model`: `z.ZodString`; `customModelName`: `z.ZodOptional`<`z.ZodString`>; `baseUrl`: `z.ZodOptional`<`z.ZodString`>; `analysisResults`: `z.ZodArray`<`z.ZodObject`<{ `id`: `z.ZodString`; `prompt`: `z.ZodString`; `errorMessage`: `z.ZodOptional`<`z.ZodObject`<{ `error`: `z.ZodString`; }, `z.core.$strip`>>; `isCompleted`: `z.ZodBoolean`; }, `z.core.$strip`>>; `createdAt`: `z.ZodOptional`<`z.ZodCoercedDate`<`unknown`>>; `uiMessages`: `z.ZodArray`<`z.ZodObject`<{ `id`: `z.ZodString`; `role`: `z.ZodEnum`<{ `system`: `"system"`; `user`: `"user"`; `assistant`: `"assistant"`; }>; `metadata`: `z.ZodOptional`<`z.ZodUnknown`>; `parts`: `z.ZodArray`<`z.ZodUnion`\<readonly \[`z.ZodObject`<..., ...>, `z.ZodObject`<..., ...>, `z.ZodUnion`<...>, `z.ZodUnion`<...>, `z.ZodObject`<..., ...>, `z.ZodObject`<..., ...>, `z.ZodObject`<..., ...>, `z.ZodObject`<..., ...>, `z.ZodObject`<..., ...>]>>; }, `z.core.$strip`>>; `toolAdditionalData`: `z.ZodOptional`<`z.ZodRecord`<`z.ZodString`, `z.ZodUnknown`>>; `messagesRevision`: `z.ZodDefault`<`z.ZodOptional`<`z.ZodNumber`>>; }, `z.core.$strip`>>
