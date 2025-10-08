---
url: /api/duckdb/functions/load.md
---
[@sqlrooms/duckdb](../index.md) / load

# Function: load()

> **load**(`method`, `tableName`, `fileName`, `options`, `defaults`): `string`

Generic function to load data from a file into a DuckDB table

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `method` | `"read_json"` | `"read_ndjson"` | `"read_parquet"` | `"read_csv"` | `"auto"` | `"st_read"` | The DuckDB read method to use (e.g., 'read\_csv', 'read\_json') |
| `tableName` | `string` | Name of the table to create |
| `fileName` | `string` | Path to the input file |
| `options` | `objectOutputType` | Load options including select, where, view, temp, replace and file-specific options |
| `defaults` | `Record`<`string`, `unknown`> | Default options to merge with provided options |

## Returns

`string`

SQL query string to create the table
