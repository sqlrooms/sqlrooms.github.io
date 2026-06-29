---
url: 'https://sqlrooms.org/api/kepler/functions/findKeplerTableForDatasetId.md'
---
[@sqlrooms/kepler](../index.md) / findKeplerTableForDatasetId

# Function: findKeplerTableForDatasetId()

> **findKeplerTableForDatasetId**(`tables`, `datasetId`, `options?`): `DataTable` | `undefined`

Resolve a saved Kepler dataset id back to the DuckDB table it should load.

The default resolver accepts qualified table references and bare ids inside
`defaultDbSchema`. Tables rejected by `includeTable` are ignored.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `tables` | `DataTable`\[] |
| `datasetId` | `string` |
| `options` | [`KeplerTableSelectionOptions`](../type-aliases/KeplerTableSelectionOptions.md) |

## Returns

`DataTable` | `undefined`
