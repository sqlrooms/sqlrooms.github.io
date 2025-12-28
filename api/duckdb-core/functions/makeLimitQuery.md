---
url: /api/duckdb-core/functions/makeLimitQuery.md
---
[@sqlrooms/duckdb-core](../index.md) / makeLimitQuery

# Function: makeLimitQuery()

> **makeLimitQuery**(`query`, `options`): `string`

Make a limit query from a query and a limit.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `query` | `string` | The SELECT query to make limited. |
| `options` | { `limit?`: `number`; `offset?`: `number`; `sanitize?`: `boolean`; } | The options for the limit query. |
| `options.limit?` | `number` | The number of rows to limit the query to. |
| `options.offset?` | `number` | The number of rows to offset the query by. |
| `options.sanitize?` | `boolean` | Whether to sanitize the query. |

## Returns

`string`

The limited query.
