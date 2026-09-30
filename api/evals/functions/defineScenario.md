---
url: https://sqlrooms.org/api/evals/functions/defineScenario.md
---
[@sqlrooms/evals](../index.md) / defineScenario

# Function: defineScenario()

> **defineScenario**(`input`): `object`

Parses and validates a behavioral scenario definition.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | `unknown` |

## Returns

`object`

| Name | Type | Default value |
| ------ | ------ | ------ |
| `id` | `string` | `ScenarioIdSchema` |
| `version` | `number` | - |
| `title` | `string` | - |
| `description?` | `string` | - |
| `compatibleProfiles` | `string`\[] | - |
| `fixture` | [`JsonObject`](../type-aliases/JsonObject.md) | - |
| `turns` | `object`\[] | - |
| `expectations` | `object`\[] | - |
| `metadata` | [`JsonObject`](../type-aliases/JsonObject.md) | - |
