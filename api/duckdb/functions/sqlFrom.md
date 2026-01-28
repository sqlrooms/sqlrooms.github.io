---
url: /api/duckdb/functions/sqlFrom.md
---
[@sqlrooms/duckdb](../index.md) / sqlFrom

# Function: sqlFrom()

> **sqlFrom**(`data`, `options?`): `string`

Create a SQL query that embeds the given data for loading.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `Record`<`string`, `unknown`>\[] | The dataset as an array of objects. |
| `options?` | { `columns?`: `string`\[] | `Record`<`string`, `string`>; } | Loading options. |
| `options.columns?` | `string`\[] | `Record`<`string`, `string`> | The columns to include. If not specified, the keys of the first data object are used. |

## Returns

`string`

SQL query string to load data.
