---
url: /api/duckdb/functions/loadJSON.md
---
[@sqlrooms/duckdb](../index.md) / loadJSON

# Function: loadJSON()

> **loadJSON**(`tableName`, `fileName`, `options`?): `string`

Load data from a JSON file into a DuckDB table

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `tableName` | `string` | Name of the table to create |
| `fileName` | `string` | Path to the JSON file |
| `options`? | `objectOutputType`<{ `schema`: `ZodOptional`<`ZodString`>; `select`: `ZodOptional`<`ZodArray`<`ZodString`, `"many"`>>; `where`: `ZodOptional`<`ZodString`>; `view`: `ZodOptional`<`ZodBoolean`>; `temp`: `ZodOptional`<`ZodBoolean`>; `replace`: `ZodOptional`<`ZodBoolean`>; }, `ZodUnknown`, `"strip"`> | Load options |

## Returns

`string`

SQL query string to create the table
