---
url: /api/duckdb/functions/loadCSV.md
---
[@sqlrooms/duckdb](../index.md) / loadCSV

# Function: loadCSV()

> **loadCSV**(`tableName`, `fileName`, `options`?): `string`

Load data from a CSV file into a DuckDB table

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `tableName` | `string` | Name of the table to create |
| `fileName` | `string` | Path to the CSV file |
| `options`? | `objectOutputType`<{ `schema`: `ZodOptional`<`ZodString`>; `select`: `ZodOptional`<`ZodArray`<`ZodString`, `"many"`>>; `where`: `ZodOptional`<`ZodString`>; `view`: `ZodOptional`<`ZodBoolean`>; `temp`: `ZodOptional`<`ZodBoolean`>; `replace`: `ZodOptional`<`ZodBoolean`>; }, `ZodUnknown`, `"strip"`> | Load options |

## Returns

`string`

SQL query string to create the table
