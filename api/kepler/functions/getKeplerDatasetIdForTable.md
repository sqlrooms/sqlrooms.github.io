---
url: 'https://sqlrooms.org/api/kepler/functions/getKeplerDatasetIdForTable.md'
---
[@sqlrooms/kepler](../index.md) / getKeplerDatasetIdForTable

# Function: getKeplerDatasetIdForTable()

> **getKeplerDatasetIdForTable**(`table`, `options?`): `string`

Choose the dataset id that should be written into new Kepler layer config.

By default, tables in `defaultDbSchema` use bare ids (`places`) and all
other tables use qualified SQL references. Hosts can override this with
`getDatasetIdForTable`.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `table` | `DataTable` |
| `options` | [`KeplerTableSelectionOptions`](../type-aliases/KeplerTableSelectionOptions.md) |

## Returns

`string`
