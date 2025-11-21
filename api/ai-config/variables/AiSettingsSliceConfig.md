---
url: /api/ai-config/variables/AiSettingsSliceConfig.md
---
[@sqlrooms/ai-config](../index.md) / AiSettingsSliceConfig

# Variable: AiSettingsSliceConfig

> `const` **AiSettingsSliceConfig**: `ZodObject`<{ `providers`: `ZodRecord`<`ZodString`, `ZodObject`<{ `baseUrl`: `ZodString`; `apiKey`: `ZodString`; `models`: `ZodArray`<`ZodObject`<{ `modelName`: `ZodString`; }, `$strip`>>; }, `$strip`>>; `customModels`: `ZodArray`<`ZodObject`<{ `baseUrl`: `ZodString`; `apiKey`: `ZodString`; `modelName`: `ZodString`; }, `$strip`>>; `modelParameters`: `ZodObject`<{ `maxSteps`: `ZodNumber`; `additionalInstruction`: `ZodString`; }, `$strip`>; }, `$strip`>
