---
url: 'https://sqlrooms.org/api/ai-config/type-aliases/AiSettingsSliceConfig.md'
---
[@sqlrooms/ai-config](../index.md) / AiSettingsSliceConfig

# Type Alias: AiSettingsSliceConfig

> **AiSettingsSliceConfig** = `object`

## Type Declaration

| Name | Type | Default value |
| ------ | ------ | ------ |
|  `providers` | `Record`<`string`, { `baseUrl`: `string`; `apiKey`: `string`; `models`: `object`\[]; }> | - |
|  `customModels` | `object`\[] | - |
|  `modelParameters` | { `maxSteps`: `number`; `additionalInstruction`: `string`; } | `AiModelParametersSchema` |
