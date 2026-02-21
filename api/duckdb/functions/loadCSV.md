---
url: /api/duckdb/functions/loadCSV.md
---
[@sqlrooms/duckdb](../index.md) / loadCSV

# Function: loadCSV()

> **loadCSV**(`tableName`, `fileName`, `options?`): `string`

Load data from a CSV file into a DuckDB table

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `tableName` | `string` | Name of the table to create |
| `fileName` | `string` | Path to the CSV file |
| `options?` | {\[`key`: `string`]: `unknown`; `schema?`: `string`; `select?`: `string`\[]; `where?`: `string`; `view?`: `boolean`; `temp?`: `boolean`; `replace?`: `boolean`; } | Load options |
| `options.schema?` | `string` | - |
| `options.select?` | `string`\[] | - |
| `options.where?` | `string` | - |
| `options.view?` | `boolean` | - |
| `options.temp?` | `boolean` | - |
| `options.replace?` | `boolean` | - |

## Returns

`string`

SQL query string to create the table
