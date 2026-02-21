---
url: /api/ai-config/type-aliases/AiSettingsSliceConfig.md
---
[@sqlrooms/ai-config](../index.md) / AiSettingsSliceConfig

# Type Alias: AiSettingsSliceConfig

> **AiSettingsSliceConfig** = `object`

## Type Declaration

| Name | Type |
| ------ | ------ |
|  `providers` | `Record`<`string`, { `baseUrl`: `string`; `apiKey`: `string`; `models`: `object`\[]; }> |
|  `customModels` | `object`\[] |
|  `modelParameters` | { `maxSteps`: `number`; `additionalInstruction`: `string`; } |
