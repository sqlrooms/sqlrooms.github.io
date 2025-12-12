---
url: /api/ai-settings/type-aliases/AiSettingsSliceConfig.md
---
[@sqlrooms/ai-settings](../index.md) / AiSettingsSliceConfig

# Type Alias: AiSettingsSliceConfig

> **AiSettingsSliceConfig** = `object`

## Type Declaration

| Name | Type |
| ------ | ------ |
|  `providers` | `z.ZodRecord`<`z.ZodString`, `z.ZodObject`<{ `baseUrl`: `z.ZodString`; `apiKey`: `z.ZodString`; `models`: `z.ZodArray`<`z.ZodObject`<{ `modelName`: `z.ZodString`; }, `z.core.$strip`>>; }, `z.core.$strip`>> |
|  `customModels` | `object`\[] |
|  `modelParameters` | { `maxSteps`: `number`; `additionalInstruction`: `string`; } |
