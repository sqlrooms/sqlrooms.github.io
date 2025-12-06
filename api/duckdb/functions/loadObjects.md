---
url: /api/duckdb/functions/loadObjects.md
---
[@sqlrooms/duckdb](../index.md) / loadObjects

# Function: loadObjects()

> **loadObjects**(`tableName`, `data`, `options`?): `string`

Load JavaScript objects directly into a DuckDB table

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `tableName` | `string` | Name of the table to create |
| `data` | `Record`<`string`, `unknown`>\[] | Array of objects to load |
| `options`? | { `[key: string]`: `unknown`; `schema`: `string`; `select`: `string`\[]; `where`: `string`; `view`: `boolean`; `temp`: `boolean`; `replace`: `boolean`; } | Load options |
| `options.schema`? | `string` | - |
| `options.select`? | `string`\[] | - |
| `options.where`? | `string` | - |
| `options.view`? | `boolean` | - |
| `options.temp`? | `boolean` | - |
| `options.replace`? | `boolean` | - |

## Returns

`string`

SQL query string to create the table
