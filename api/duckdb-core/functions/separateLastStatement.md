---
url: /api/duckdb-core/functions/separateLastStatement.md
---
[@sqlrooms/duckdb-core](../index.md) / separateLastStatement

# Function: separateLastStatement()

> **separateLastStatement**(`query`): [`SeparatedStatements`](../type-aliases/SeparatedStatements.md)

Separates a SQL query into preceding statements and the last statement.
Useful when you need to execute multiple statements but handle the last one differently
(e.g., wrap it in CREATE TABLE, add LIMIT, etc.).

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `query` | `string` | The SQL query string containing one or more statements |

## Returns

[`SeparatedStatements`](../type-aliases/SeparatedStatements.md)

Object containing preceding statements and the last statement

## Throws

Error if the query contains no statements
