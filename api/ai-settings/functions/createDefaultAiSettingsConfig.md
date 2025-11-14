---
url: /api/ai-settings/functions/createDefaultAiSettingsConfig.md
---
[@sqlrooms/ai-settings](../index.md) / createDefaultAiSettingsConfig

# Function: createDefaultAiSettingsConfig()

> **createDefaultAiSettingsConfig**(`props`?): `object`

## Parameters

| Parameter | Type |
| ------ | ------ |
| `props`? | `Partial`<{ `providers`: `Record`<`string`, { `baseUrl`: `string`; `apiKey`: `string`; `models`: `object`\[]; }>; `customModels`: `object`\[]; `modelParameters`: { `maxSteps`: `number`; `additionalInstruction`: `string`; }; }> |

## Returns

`object`

| Name | Type |
| ------ | ------ |
|  `providers` | `Record`<`string`, { `baseUrl`: `string`; `apiKey`: `string`; `models`: `object`\[]; }> |
|  `customModels` | `object`\[] |
|  `modelParameters` | { `maxSteps`: `number`; `additionalInstruction`: `string`; } |
