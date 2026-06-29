---
url: 'https://sqlrooms.org/api/kepler/type-aliases/KeplerTableSelectionOptions.md'
---
[@sqlrooms/kepler](../index.md) / KeplerTableSelectionOptions

# Type Alias: KeplerTableSelectionOptions

> **KeplerTableSelectionOptions** = `object`

Policy hooks for deciding which DuckDB tables are exposed to Kepler and how
they are represented in saved Kepler layer config.

## Properties

### includeTable?

> `optional` **includeTable?**: (`table`) => `boolean`

Return false to hide a DuckDB table from the Add Layer menu and to skip
loading matching saved dataset ids during sync.

Defaults to including every visible DuckDB table.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `table` | `DataTable` |

#### Returns

`boolean`

***

### defaultDbSchema?

> `optional` **defaultDbSchema?**: [`KeplerDbSchemaReference`](KeplerDbSchemaReference.md) | (() => [`KeplerDbSchemaReference`](KeplerDbSchemaReference.md) | `undefined`)

Database/schema whose tables may use bare dataset ids, such as `places`.

Tables outside this database/schema use qualified SQL table references for their
dataset ids. The Kepler slice defaults this to its current DuckDB
database/schema; host apps can supply their own stable resolver when their
persistence model needs a different comparison point.

***

### getDatasetIdForTable?

> `optional` **getDatasetIdForTable?**: (`table`) => `string`

Override how new Kepler dataset ids are generated for DuckDB tables.

Use this only when the default bare-or-qualified policy does not match the
host app's persistence model.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `table` | `DataTable` |

#### Returns

`string`

***

### getTableLabel?

> `optional` **getTableLabel?**: (`table`) => `string`

Override the display label shown for a DuckDB table in Kepler's Add Layer
table-source dropdown.

This only changes presentation; dataset ids still come from
`getDatasetIdForTable` or the default bare-or-qualified policy.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `table` | `DataTable` |

#### Returns

`string`

***

### findTableForDatasetId?

> `optional` **findTableForDatasetId?**: (`tables`, `datasetId`) => `DataTable` | `undefined`

Override how saved Kepler dataset ids are resolved back to DuckDB tables.

The default resolver matches qualified table references first, then bare ids
within `defaultDbSchema`. Return the matching table independent of
`includeTable`; the shared helpers apply `includeTable` after matching so
excluded tables are handled consistently.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `tables` | `DataTable`\[] |
| `datasetId` | `string` |

#### Returns

`DataTable` | `undefined`
