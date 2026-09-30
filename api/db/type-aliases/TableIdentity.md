---
url: https://sqlrooms.org/api/db/type-aliases/TableIdentity.md
---
[@sqlrooms/db](../index.md) / TableIdentity

# Type Alias: TableIdentity

> **TableIdentity** = `string` & `object`

Persisted SQLRooms table identity.

This is the canonical `QualifiedTableName.toString()` shape. It may omit the
default database/catalog, so use it for persisted state, lookup keys, cache
keys, and selected-table state, not as an implicit SQL execution fragment.

## Type Declaration

| Name | Type |
| ------ | ------ |
| `[tableIdentityBrand]` | `"TableIdentity"` |
