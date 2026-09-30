---
url: https://sqlrooms.org/api/duckdb-core/functions/splitSqlStatements.md
---
[@sqlrooms/duckdb-core](../index.md) / splitSqlStatements

# Function: splitSqlStatements()

> **splitSqlStatements**(`input`, `options?`): `string`\[]

Split a string with potentially multiple SQL queries (separated as usual by ';')
into an array of queries.
This implementation:

* Handles single and double quoted strings with proper escaping
* Handles DuckDB dollar-quoted strings
* Handles line comments (--) and nested block comments (/\* ... \*/)
* Ignores semicolons in quoted strings and comments
* Trims whitespace from queries
* Handles SQL-style escaped quotes ('' inside strings)
* Returns only non-empty queries

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | `string` | The SQL string containing one or more statements |
| `options` | [`SplitSqlStatementsOptions`](../type-aliases/SplitSqlStatementsOptions.md) | Options controlling the returned SQL |

## Returns

`string`\[]

An array of SQL statements, with comments removed by default
