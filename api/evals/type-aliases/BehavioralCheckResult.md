---
url: https://sqlrooms.org/api/evals/type-aliases/BehavioralCheckResult.md
---
[@sqlrooms/evals](../index.md) / BehavioralCheckResult

# Type Alias: BehavioralCheckResult

> **BehavioralCheckResult** = `object`

Structured result produced by one behavioral check.

## Type Declaration

## Index Signature

\[`key`: `string`]: [`JsonValue`](JsonValue.md)

| Name | Type | Default value |
| ------ | ------ | ------ |
|  `checkId` | `string` | - |
|  `kind` | `"error"` | `"database"` | `"workspace-state"` | `"answer-grounding"` | `"policy"` | `BehavioralCheckKindSchema` |
|  `pass` | `boolean` | - |
|  `score` | `number` | - |
|  `reason` | `string` | - |
|  `evidence` | [`JsonObject`](JsonObject.md) | - |
|  `metadata` | [`JsonObject`](JsonObject.md) | - |
