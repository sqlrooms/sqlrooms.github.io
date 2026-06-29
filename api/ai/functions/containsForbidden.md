---
url: 'https://sqlrooms.org/api/ai/functions/containsForbidden.md'
---
[@sqlrooms/ai](../index.md) / containsForbidden

# Function: containsForbidden()

> **containsForbidden**(`text`, `patterns`): `string` | `null`

Return the first identifier in `patterns` that appears in `text` as a
whole word (case-insensitive), or `null` if none do.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `text` | `string` |
| `patterns` | \[`string`, `RegExp`]\[] |

## Returns

`string` | `null`
