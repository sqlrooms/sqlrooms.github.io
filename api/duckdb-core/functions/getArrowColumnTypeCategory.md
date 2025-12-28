---
url: /api/duckdb-core/functions/getArrowColumnTypeCategory.md
---
[@sqlrooms/duckdb-core](../index.md) / getArrowColumnTypeCategory

# Function: getArrowColumnTypeCategory()

> **getArrowColumnTypeCategory**(`type`): [`ColumnTypeCategory`](../type-aliases/ColumnTypeCategory.md)

This function is used to get the type category of a column from an Arrow table.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `DataType` | The Arrow DataType of the column. |

## Returns

[`ColumnTypeCategory`](../type-aliases/ColumnTypeCategory.md)

The type category of the column.
