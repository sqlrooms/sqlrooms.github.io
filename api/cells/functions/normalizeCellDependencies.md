---
url: 'https://sqlrooms.org/api/cells/functions/normalizeCellDependencies.md'
---
[@sqlrooms/cells](../index.md) / normalizeCellDependencies

# Function: normalizeCellDependencies()

> **normalizeCellDependencies**(`result`): [`CellDependencies`](../type-aliases/CellDependencies.md)

Normalizes the result of `findDependencies` to a `CellDependencies` object.
Accepts either the legacy `string[]` (cell IDs only) or the new `CellDependencies` shape.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `result` | `string`\[] | [`CellDependencies`](../type-aliases/CellDependencies.md) |

## Returns

[`CellDependencies`](../type-aliases/CellDependencies.md)
