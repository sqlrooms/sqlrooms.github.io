---
url: /api/ai/type-aliases/AiSettingsSliceConfig.md
---
[@sqlrooms/ai](../index.md) / AiSettingsSliceConfig

# Type Alias: AiSettingsSliceConfig

> **AiSettingsSliceConfig**: `object`

## Type declaration

| Name | Type |
| ------ | ------ |
|  `providers` | `Record`<`string`, { `baseUrl`: `string`; `apiKey`: `string`; `models`: `object`\[]; }> |
|  `customModels` | `object`\[] |
|  `modelParameters` | { `maxSteps`: `number`; `additionalInstruction`: `string`; } |
