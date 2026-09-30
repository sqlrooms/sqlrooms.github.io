---
url: https://sqlrooms.org/api/duckdb/functions/getTableIdentity.md
---
[@sqlrooms/duckdb](../index.md) / getTableIdentity

# Function: getTableIdentity()

> **getTableIdentity**(`table`): [`TableIdentity`](../type-aliases/TableIdentity.md)

Returns the canonical persisted SQLRooms table identity for a resolved table.

Use this for saved state, lookup keys, cache keys, and selected-table state.
Rehydrate JSON/Zod/tool strings with `parseTableIdentity(...)` or resolve
them against the catalog before treating them as identities.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `table` | [`QualifiedTableName`](../type-aliases/QualifiedTableName.md) |

## Returns

[`TableIdentity`](../type-aliases/TableIdentity.md)
