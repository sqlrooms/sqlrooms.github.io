---
url: https://sqlrooms.org/api/duckdb/functions/quoteParsedRawSqlTableReference.md
---
[@sqlrooms/duckdb](../index.md) / quoteParsedRawSqlTableReference

# Function: quoteParsedRawSqlTableReference()

> **quoteParsedRawSqlTableReference**(`input`): [`RawSqlTableReference`](../type-aliases/RawSqlTableReference.md) | `undefined`

Parses and quotes a legacy/user-provided table reference for direct SQL.

Prefer resolving against the catalog and calling `getRawSqlTableReference(...)`.
This helper exists for boundaries that still receive plain strings.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | `string` | `undefined` |

## Returns

[`RawSqlTableReference`](../type-aliases/RawSqlTableReference.md) | `undefined`
