---
url: https://sqlrooms.org/api/db/functions/parseFullTableIdentity.md
---
[@sqlrooms/db](../index.md) / parseFullTableIdentity

# Function: parseFullTableIdentity()

> **parseFullTableIdentity**(`input`): [`FullTableIdentity`](../type-aliases/FullTableIdentity.md) | `undefined`

Rehydrates a persisted fully-qualified SQLRooms table identity string.

The full identity must include database, schema, and table parts.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | `string` | `undefined` |

## Returns

[`FullTableIdentity`](../type-aliases/FullTableIdentity.md) | `undefined`
