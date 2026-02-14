---
url: /api/ai/type-aliases/AiSettingsSliceState.md
---
[@sqlrooms/ai](../index.md) / AiSettingsSliceState

# Type Alias: AiSettingsSliceState

> **AiSettingsSliceState** = `object`

## Properties

### aiSettings

> **aiSettings**: `object`

| Name | Type |
| ------ | ------ |
| `config` | [`AiSettingsSliceConfig`](AiSettingsSliceConfig.md) |
| `setConfig()` | (`config`) => `void` |
| `setMaxSteps()` | (`maxSteps`) => `void` |
| `setAdditionalInstruction()` | (`additionalInstruction`) => `void` |
| `updateProvider()` | (`provider`, `updates`) => `void` |
| `addProvider()` | (`provider`, `baseUrl`, `apiKey`) => `void` |
| `addModelToProvider()` | (`provider`, `modelName`) => `void` |
| `removeModelFromProvider()` | (`provider`, `modelName`) => `void` |
| `removeProvider()` | (`provider`) => `void` |
| `addCustomModel()` | (`baseUrl`, `apiKey`, `modelName`) => `void` |
| `updateCustomModel()` | (`oldModelName`, `baseUrl`, `apiKey`, `newModelName`) => `void` |
| `removeCustomModel()` | (`modelName`) => `void` |
