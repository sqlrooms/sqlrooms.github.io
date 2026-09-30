---
url: https://sqlrooms.org/api/duckdb/type-aliases/RawSqlTableReference.md
---
[@sqlrooms/duckdb](../index.md) / RawSqlTableReference

# Type Alias: RawSqlTableReference

> **RawSqlTableReference** = `string` & `object`

SQL-rendered table reference for direct SQL string builders.

This type is intentionally distinct from persisted identity strings. Construct
it from a resolved `QualifiedTableName` whenever possible.

## Type Declaration

| Name | Type |
| ------ | ------ |
| `[rawSqlTableReferenceBrand]` | `"RawSqlTableReference"` |
