---
url: https://sqlrooms.org/api/duckdb-core/functions/parseTableIdentity.md
---
[@sqlrooms/duckdb-core](../index.md) / parseTableIdentity

# Function: parseTableIdentity()

> **parseTableIdentity**(`input`): [`TableIdentity`](../type-aliases/TableIdentity.md) | `undefined`

Rehydrates a persisted SQLRooms table identity string.

This intentionally accepts only the canonical quoted representation produced
by `getTableIdentity(...)`. Legacy/user inputs such as `events` or
`main.events` should be resolved through `resolveTableReference(...)` first.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | `string` | `undefined` |

## Returns

[`TableIdentity`](../type-aliases/TableIdentity.md) | `undefined`
