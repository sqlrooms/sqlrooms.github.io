---
url: /api/ai-core/variables/AiSliceConfig.md
---
[@sqlrooms/ai-core](../index.md) / AiSliceConfig

# Variable: AiSliceConfig

> `const` **AiSliceConfig**: `z.ZodObject`<{ `sessions`: `z.ZodArray`<`z.ZodPipe`<`z.ZodTransform`<`unknown`, `unknown`>, `z.ZodObject`<{ `id`: `z.ZodString`; `name`: `z.ZodString`; `modelProvider`: `z.ZodString`; `model`: `z.ZodString`; `customModelName`: `z.ZodOptional`<`z.ZodString`>; `baseUrl`: `z.ZodOptional`<`z.ZodString`>; `analysisResults`: `z.ZodArray`<`z.ZodObject`<{ `id`: `z.ZodString`; `prompt`: `z.ZodString`; `errorMessage`: `z.ZodOptional`<`z.ZodObject`<..., ...>>; `isCompleted`: `z.ZodBoolean`; }, `z.core.$strip`>>; `createdAt`: `z.ZodOptional`<`z.ZodCoercedDate`<`unknown`>>; `uiMessages`: `z.ZodArray`<`z.ZodObject`<{ `id`: `z.ZodString`; `role`: `z.ZodEnum`<{ `system`: ...; `user`: ...; `assistant`: ...; }>; `metadata`: `z.ZodOptional`<`z.ZodUnknown`>; `parts`: `z.ZodArray`<`z.ZodUnion`<...>>; }, `z.core.$strip`>>; `toolAdditionalData`: `z.ZodOptional`<`z.ZodRecord`<`z.ZodString`, `z.ZodUnknown`>>; `messagesRevision`: `z.ZodDefault`<`z.ZodOptional`<`z.ZodNumber`>>; }, `z.core.$strip`>>>; `currentSessionId`: `z.ZodOptional`<`z.ZodString`>; }, `z.core.$strip`>
