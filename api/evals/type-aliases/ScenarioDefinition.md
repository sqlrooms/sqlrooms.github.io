---
url: https://sqlrooms.org/api/evals/type-aliases/ScenarioDefinition.md
---
[@sqlrooms/evals](../index.md) / ScenarioDefinition

# Type Alias: ScenarioDefinition

> **ScenarioDefinition** = `object`

A parsed behavioral scenario.

## Type Declaration

## Index Signature

\[`key`: `string`]: `unknown`

| Name | Type | Default value |
| ------ | ------ | ------ |
|  `id` | `string` | `ScenarioIdSchema` |
|  `version` | `number` | - |
|  `title` | `string` | - |
|  `description?` | `string` | - |
|  `compatibleProfiles` | `string`\[] | - |
|  `fixture` | [`JsonObject`](JsonObject.md) | - |
|  `turns` | `object`\[] | - |
|  `expectations` | `object`\[] | - |
|  `metadata` | [`JsonObject`](JsonObject.md) | - |
