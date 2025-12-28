---
url: /api/ai-settings/functions/createDefaultAiSettingsConfig.md
---
[@sqlrooms/ai-settings](../index.md) / createDefaultAiSettingsConfig

# Function: createDefaultAiSettingsConfig()

> **createDefaultAiSettingsConfig**(`props?`): `object`

## Parameters

| Parameter | Type |
| ------ | ------ |
| `props?` | `Partial`<{ `providers`: `z.ZodRecord`<`z.ZodString`, `z.ZodObject`<{ `baseUrl`: `z.ZodString`; `apiKey`: `z.ZodString`; `models`: `z.ZodArray`<`z.ZodObject`<{ `modelName`: `z.ZodString`; }, `z.core.$strip`>>; }, `z.core.$strip`>>; `customModels`: `object`\[]; `modelParameters`: { `maxSteps`: `number`; `additionalInstruction`: `string`; }; }> |

## Returns

`object`

| Name | Type |
| ------ | ------ |
| `providers` | `z.ZodRecord`<`z.ZodString`, `z.ZodObject`<{ `baseUrl`: `z.ZodString`; `apiKey`: `z.ZodString`; `models`: `z.ZodArray`<`z.ZodObject`<{ `modelName`: `z.ZodString`; }, `z.core.$strip`>>; }, `z.core.$strip`>> |
| `customModels` | `object`\[] |
| `modelParameters` | { `maxSteps`: `number`; `additionalInstruction`: `string`; } |
