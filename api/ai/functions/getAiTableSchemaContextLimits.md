---
url: 'https://sqlrooms.org/api/ai/functions/getAiTableSchemaContextLimits.md'
---
[@sqlrooms/ai](../index.md) / getAiTableSchemaContextLimits

# Function: getAiTableSchemaContextLimits()

> **getAiTableSchemaContextLimits**(`limits?`): `object`

Normalizes optional AI table schema context limits.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `limits?` | [`TableSchemaContextLimits`](../type-aliases/TableSchemaContextLimits.md) | Optional partial limit overrides. |

## Returns

`object`

Resolved limits with default thresholds and a names-only threshold
that is never lower than the full-schema threshold.

| Name | Type | Default value |
| ------ | ------ | ------ |
| `fullSchemaThreshold` | `number` | - |
| `namesOnlyThreshold` | `number` | - |
| `maxChars` | `number` | `undefined` | `limits.maxChars` |
