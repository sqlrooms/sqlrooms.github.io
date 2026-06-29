---
url: 'https://sqlrooms.org/api/vega/functions/createSqlValidator.md'
---
[@sqlrooms/vega](../index.md) / createSqlValidator

# Function: createSqlValidator()

> **createSqlValidator**(`getConnector`): (`sqlQuery`, `abortSignal?`) => `Promise`<{ `valid`: `true`; } | { `valid`: `false`; `error`: `string`; }>

Creates a SQL validator that checks queries by executing `SELECT 1 FROM (<query>) LIMIT 1`.
Returns an error message if the query fails or produces no rows.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `getConnector` | () => `DuckDbConnector` | `Promise`<`DuckDbConnector`> |

## Returns

(`sqlQuery`, `abortSignal?`) => `Promise`<{ `valid`: `true`; } | { `valid`: `false`; `error`: `string`; }>
