---
url: /api/ai-settings/type-aliases/AiSettingsSliceState.md
---
[@sqlrooms/ai-settings](../index.md) / AiSettingsSliceState

# Type Alias: AiSettingsSliceState

> **AiSettingsSliceState**: `object`

## Type declaration

| Name | Type |
| ------ | ------ |
|  `aiSettings` | { `config`: [`AiSettingsSliceConfig`](AiSettingsSliceConfig.md); `setMaxSteps`: (`maxSteps`) => `void`; `setAdditionalInstruction`: (`additionalInstruction`) => `void`; `updateProvider`: (`provider`, `updates`) => `void`; `addProvider`: (`provider`, `baseUrl`, `apiKey`) => `void`; `addModelToProvider`: (`provider`, `modelName`) => `void`; `removeModelFromProvider`: (`provider`, `modelName`) => `void`; `removeProvider`: (`provider`) => `void`; `addCustomModel`: (`baseUrl`, `apiKey`, `modelName`) => `void`; `updateCustomModel`: (`oldModelName`, `baseUrl`, `apiKey`, `newModelName`) => `void`; `removeCustomModel`: (`modelName`) => `void`; } |
