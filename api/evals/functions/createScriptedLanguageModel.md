---
url: https://sqlrooms.org/api/evals/functions/createScriptedLanguageModel.md
---
[@sqlrooms/evals](../index.md) / createScriptedLanguageModel

# Function: createScriptedLanguageModel()

> **createScriptedLanguageModel**(`__namedParameters`): [`ScriptedLanguageModel`](../type-aliases/ScriptedLanguageModel.md)

Creates a network-free AI SDK v3 language model from ordered responses.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | { `steps`: readonly [`ScriptedModelStep`](../type-aliases/ScriptedModelStep.md)\[]; `provider?`: `string`; `modelId?`: `string`; } |
| `__namedParameters.steps` | readonly [`ScriptedModelStep`](../type-aliases/ScriptedModelStep.md)\[] |
| `__namedParameters.provider?` | `string` |
| `__namedParameters.modelId?` | `string` |

## Returns

[`ScriptedLanguageModel`](../type-aliases/ScriptedLanguageModel.md)
