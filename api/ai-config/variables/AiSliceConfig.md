---
url: /api/ai-config/variables/AiSliceConfig.md
---
[@sqlrooms/ai-config](../index.md) / AiSliceConfig

# Variable: AiSliceConfig

> `const` **AiSliceConfig**: `ZodObject`<{ `sessions`: `ZodArray`<`ZodPipe`<`ZodTransform`<`unknown`, `unknown`>, `ZodObject`<{ `id`: `ZodString`; `name`: `ZodString`; `modelProvider`: `ZodString`; `model`: `ZodString`; `customModelName`: `ZodOptional`<`ZodString`>; `baseUrl`: `ZodOptional`<`ZodString`>; `analysisResults`: `ZodArray`<`ZodObject`<{ `id`: `ZodString`; `prompt`: `ZodString`; `errorMessage`: `ZodOptional`<`ZodObject`<..., ...>>; `isCompleted`: `ZodBoolean`; }, `$strip`>>; `createdAt`: `ZodOptional`<`ZodCoercedDate`<`unknown`>>; `uiMessages`: `ZodArray`<`ZodObject`<{ `id`: `ZodString`; `role`: `ZodEnum`<{ `system`: ...; `user`: ...; `assistant`: ...; }>; `metadata`: `ZodOptional`<`ZodUnknown`>; `parts`: `ZodArray`<`ZodUnion`<...>>; }, `$strip`>>; `toolAdditionalData`: `ZodOptional`<`ZodRecord`<`ZodString`, `ZodUnknown`>>; `messagesRevision`: `ZodDefault`<`ZodOptional`<`ZodNumber`>>; }, `$strip`>>>; `currentSessionId`: `ZodOptional`<`ZodString`>; }, `$strip`>
