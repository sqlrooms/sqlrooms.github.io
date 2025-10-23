---
url: /api/duckdb/functions/splitSqlStatements.md
---
[@sqlrooms/duckdb](../index.md) / splitSqlStatements

# Function: splitSqlStatements()

> **splitSqlStatements**(`input`): `string`\[]

Split a string with potentially multiple SQL queries (separated as usual by ';')
into an array of queries.
This implementation:

* Handles single and double quoted strings with proper escaping
* Removes all comments: line comments (--) and block comments (/\* ... \*/)
* Ignores semicolons in quoted strings and comments
* Trims whitespace from queries
* Handles SQL-style escaped quotes ('' inside strings)
* Returns only non-empty queries

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | `string` | The SQL string containing one or more statements |

## Returns

`string`\[]

An array of SQL statements with all comments removed
