---
url: https://sqlrooms.org/api/duckdb-core/functions/getRawSqlTableReference.md
---
[@sqlrooms/duckdb-core](../index.md) / getRawSqlTableReference

# Function: getRawSqlTableReference()

> **getRawSqlTableReference**(`table`): [`RawSqlTableReference`](../type-aliases/RawSqlTableReference.md)

Returns a SQL-rendered quoted table reference from a resolved table name.

Use this at direct SQL string-builder boundaries. Persisted strings, command
inputs, AI tool arguments, and other plain strings should resolve to a
`QualifiedTableName` first, or use `quoteParsedRawSqlTableReference(...)` at
explicit legacy/user-input boundaries.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `table` | [`QualifiedTableName`](../type-aliases/QualifiedTableName.md) |

## Returns

[`RawSqlTableReference`](../type-aliases/RawSqlTableReference.md)
