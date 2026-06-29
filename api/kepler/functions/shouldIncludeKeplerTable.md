---
url: 'https://sqlrooms.org/api/kepler/functions/shouldIncludeKeplerTable.md'
---
[@sqlrooms/kepler](../index.md) / shouldIncludeKeplerTable

# Function: shouldIncludeKeplerTable()

> **shouldIncludeKeplerTable**(`table`, `options?`): `boolean`

Return whether a DuckDB table should be exposed as a Kepler layer source.

This is the shared gate used by Add Layer table options and by host UIs that
offer their own "add table to map" actions.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `table` | `DataTable` |
| `options` | [`KeplerTableSelectionOptions`](../type-aliases/KeplerTableSelectionOptions.md) |

## Returns

`boolean`
