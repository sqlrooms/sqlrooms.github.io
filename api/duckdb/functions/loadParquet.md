---
url: /api/duckdb/functions/loadParquet.md
---
[@sqlrooms/duckdb](../index.md) / loadParquet

# Function: loadParquet()

> **loadParquet**(`tableName`, `fileName`, `options`?): `string`

Load data from a Parquet file into a DuckDB table

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `tableName` | `string` | Name of the table to create |
| `fileName` | `string` | Path to the Parquet file |
| `options`? | `objectOutputType`<{ `schema`: `ZodOptional`<`ZodString`>; `select`: `ZodOptional`<`ZodArray`<`ZodString`, `"many"`>>; `where`: `ZodOptional`<`ZodString`>; `view`: `ZodOptional`<`ZodBoolean`>; `temp`: `ZodOptional`<`ZodBoolean`>; `replace`: `ZodOptional`<`ZodBoolean`>; }, `ZodUnknown`, `"strip"`> | Load options |

## Returns

`string`

SQL query string to create the table
