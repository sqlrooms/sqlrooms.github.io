---
url: https://sqlrooms.org/api/deck/functions/createDeckTableDatasetSql.md
---
[@sqlrooms/deck](../index.md) / createDeckTableDatasetSql

# Function: createDeckTableDatasetSql()

> **createDeckTableDatasetSql**(`input`): `string`

Compiles a structured table dataset input into executable SQL.

Direct table inputs compile to `SELECT * FROM <quoted table>`. Transformed
inputs bind the table to the reserved `__sqlrooms_source` CTE and nest the
authored `transformSql` so its CTEs remain self-contained.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`DeckTableDatasetInput`](../type-aliases/DeckTableDatasetInput.md) |

## Returns

`string`
