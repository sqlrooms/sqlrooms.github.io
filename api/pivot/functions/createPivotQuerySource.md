---
url: https://sqlrooms.org/api/pivot/functions/createPivotQuerySource.md
---
[@sqlrooms/pivot](../index.md) / createPivotQuerySource

# Function: createPivotQuerySource()

> **createPivotQuerySource**(`tableRef`, `columns`): [`PivotQuerySource`](../type-aliases/PivotQuerySource.md)

Creates a pivot query source from an existing SQL-rendered table reference.

Use this when the caller has already resolved and validated the table at a
SQL boundary and can provide the available columns.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `tableRef` | `RawSqlTableReference` |
| `columns` | [`PivotField`](../type-aliases/PivotField.md)\[] |

## Returns

[`PivotQuerySource`](../type-aliases/PivotQuerySource.md)
