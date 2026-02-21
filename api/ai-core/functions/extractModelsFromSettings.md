---
url: /api/ai-core/functions/extractModelsFromSettings.md
---
[@sqlrooms/ai-core](../index.md) / extractModelsFromSettings

# Function: extractModelsFromSettings()

> **extractModelsFromSettings**(`config`): `object`\[]

Extract models from aiSettings in the format expected by ModelSelector

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `config` | { `providers`: `z.ZodRecord`<`z.ZodString`, `z.ZodObject`<{ `baseUrl`: `z.ZodString`; `apiKey`: `z.ZodString`; `models`: `z.ZodArray`<`z.ZodObject`<{ `modelName`: `z.ZodString`; }, `z.core.$strip`>>; }, `z.core.$strip`>>; `customModels`: `object`\[]; `modelParameters`: { `maxSteps`: `number`; `additionalInstruction`: `string`; }; } | The AI model configuration |
| `config.providers` | `z.ZodRecord`<`z.ZodString`, `z.ZodObject`<{ `baseUrl`: `z.ZodString`; `apiKey`: `z.ZodString`; `models`: `z.ZodArray`<`z.ZodObject`<{ `modelName`: `z.ZodString`; }, `z.core.$strip`>>; }, `z.core.$strip`>> | - |
| `config.customModels` | `object`\[] | - |
| `config.modelParameters` | { `maxSteps`: `number`; `additionalInstruction`: `string`; } | - |
| `config.modelParameters.maxSteps` | `number` | - |
| `config.modelParameters.additionalInstruction` | `string` | - |

## Returns

`object`\[]

Array of models with provider, label, and value properties
