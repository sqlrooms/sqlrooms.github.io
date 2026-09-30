---
url: https://sqlrooms.org/api/db/functions/getFullTableIdentity.md
---
[@sqlrooms/db](../index.md) / getFullTableIdentity

# Function: getFullTableIdentity()

> **getFullTableIdentity**(`table`): [`FullTableIdentity`](../type-aliases/FullTableIdentity.md)

Returns the fully-qualified SQLRooms table identity for a resolved table.

Prefer `getTableIdentity(...)` for normal persisted state. Use this helper for
migrations, diagnostics, and workflows where the database/catalog cannot be
inferred from the default connection context.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `table` | [`QualifiedTableName`](../type-aliases/QualifiedTableName.md) |

## Returns

[`FullTableIdentity`](../type-aliases/FullTableIdentity.md)
