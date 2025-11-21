---
url: /api/ai/variables/AiSettingsSliceConfig.md
---
[@sqlrooms/ai](../index.md) / AiSettingsSliceConfig

# Variable: AiSettingsSliceConfig

> `const` **AiSettingsSliceConfig**: `z.ZodObject`<{ `providers`: `z.ZodRecord`<`z.ZodString`, `z.ZodObject`<{ `baseUrl`: `z.ZodString`; `apiKey`: `z.ZodString`; `models`: `z.ZodArray`<`z.ZodObject`<{ `modelName`: `z.ZodString`; }, `z.core.$strip`>>; }, `z.core.$strip`>>; `customModels`: `z.ZodArray`<`z.ZodObject`<{ `baseUrl`: `z.ZodString`; `apiKey`: `z.ZodString`; `modelName`: `z.ZodString`; }, `z.core.$strip`>>; `modelParameters`: `z.ZodObject`<{ `maxSteps`: `z.ZodNumber`; `additionalInstruction`: `z.ZodString`; }, `z.core.$strip`>; }, `z.core.$strip`>
