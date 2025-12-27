---
url: /api/sql-editor/interfaces/TableStructurePanelProps.md
---
[@sqlrooms/sql-editor](../index.md) / TableStructurePanelProps

# Interface: TableStructurePanelProps

## Properties

### className?

> `optional` **className**: `string`

Custom class name for styling

***

### schema?

> `optional` **schema**: `string` | (`name`) => `boolean`

The database schema to use. Defaults to '*'.
If '*' is provided, all tables will be shown.
If a function is provided, it will be used to filter the tables.

***

### onTableSelect()?

> `optional` **onTableSelect**: (`table`) => `void`

Callback when a table is selected

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `table` | `string` | `undefined` |

#### Returns

`void`
