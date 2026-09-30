---
url: https://sqlrooms.org/api/pivot/functions/createPivotQuerySourceFromTable.md
---
[@sqlrooms/pivot](../index.md) / createPivotQuerySourceFromTable

# Function: createPivotQuerySourceFromTable()

> **createPivotQuerySourceFromTable**(`table`): [`PivotQuerySource`](../type-aliases/PivotQuerySource.md)

Creates a pivot query source from a resolved SQLRooms table.

This builds the `RawSqlTableReference` from `table.table` via
`getRawSqlTableReference(...)`, so callers with a `DataTable` should prefer
this helper over manually constructing a SQL table reference.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `table` | `DataTable` |

## Returns

[`PivotQuerySource`](../type-aliases/PivotQuerySource.md)
