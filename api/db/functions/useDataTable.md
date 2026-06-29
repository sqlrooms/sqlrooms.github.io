---
url: 'https://sqlrooms.org/api/db/functions/useDataTable.md'
---
[@sqlrooms/db](../index.md) / useDataTable

# Function: useDataTable()

> **useDataTable**(`tableName`): [`DataTable`](../type-aliases/DataTable.md) | `undefined`

Resolves a table reference against the DuckDB table schema cache.

String inputs are delegated to `db.findTable`, which parses qualified
SQL identifiers such as `main.events` and
`"memory"."main"."events.2026"`. Unqualified names resolve in the current
schema/database from the last schema refresh.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `tableName` | `string` | [`QualifiedTableName`](../type-aliases/QualifiedTableName.md) | `undefined` | A bare, qualified, or structured table reference. |

## Returns

[`DataTable`](../type-aliases/DataTable.md) | `undefined`

The matching data table, including its loaded columns, or undefined.
