---
url: 'https://sqlrooms.org/api/kepler/functions/buildKeplerTableLayerOptions.md'
---
[@sqlrooms/kepler](../index.md) / buildKeplerTableLayerOptions

# Function: buildKeplerTableLayerOptions()

> **buildKeplerTableLayerOptions**(`dbTables`, `keplerDatasetIds`, `options?`): [`KeplerTableLayerOption`](../type-aliases/KeplerTableLayerOption.md)\[]

Build Add Layer dropdown options from DuckDB tables plus datasets that are
already loaded into Kepler.

`includeTable` controls which DuckDB tables are exposed. Already-loaded
dataset ids are included unless they resolve to an excluded table or duplicate
an exposed table option.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `dbTables` | `DataTable`\[] |
| `keplerDatasetIds` | `string`\[] |
| `options` | [`KeplerTableSelectionOptions`](../type-aliases/KeplerTableSelectionOptions.md) |

## Returns

[`KeplerTableLayerOption`](../type-aliases/KeplerTableLayerOption.md)\[]
