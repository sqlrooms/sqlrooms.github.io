---
url: /api/duckdb-core/functions/loadJSON.md
---
[@sqlrooms/duckdb-core](../index.md) / loadJSON

# Function: loadJSON()

> **loadJSON**(`tableName`, `fileName`, `options`?): `string`

Load data from a JSON file into a DuckDB table

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `tableName` | `string` | Name of the table to create |
| `fileName` | `string` | Path to the JSON file |
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
