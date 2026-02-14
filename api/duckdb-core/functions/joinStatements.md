---
url: /api/duckdb-core/functions/joinStatements.md
---
[@sqlrooms/duckdb-core](../index.md) / joinStatements

# Function: joinStatements()

> **joinStatements**(`precedingStatements`, `lastStatement`): `string`

Joins preceding statements with a (potentially modified) last statement into a single query.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `precedingStatements` | `string`\[] | Statements to execute before the last one |
| `lastStatement` | `string` | The final statement (can be modified, e.g., wrapped in CREATE TABLE) |

## Returns

`string`

A single query string with all statements joined by semicolons
