---
url: /api/duckdb-core/functions/loadSpatial.md
---
[@sqlrooms/duckdb-core](../index.md) / loadSpatial

# Function: loadSpatial()

> **loadSpatial**(`tableName`, `fileName`, `options`): `string`

Load geometry data within a spatial file format.
This method requires that the DuckDB spatial extension is loaded.
Supports GeoJSON, TopoJSON, and other common spatial formats.
For TopoJSON, set the layer option to indicate the feature to extract.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `tableName` | `string` | Name of the table to create |
| `fileName` | `string` | Path to the spatial data file |
| `options` | {\[`key`: `string`]: `unknown`; `schema?`: `string`; `select?`: `string`\[]; `where?`: `string`; `view?`: `boolean`; `temp?`: `boolean`; `replace?`: `boolean`; `options?`: `string` | `Record`<`string`, `unknown`> | `string`\[]; } | Load options including spatial-specific options |
| `options.schema?` | `string` | - |
| `options.select?` | `string`\[] | - |
| `options.where?` | `string` | - |
| `options.view?` | `boolean` | - |
| `options.temp?` | `boolean` | - |
| `options.replace?` | `boolean` | - |
| `options.options?` | `string` | `Record`<`string`, `unknown`> | `string`\[] | - |

## Returns

`string`

SQL query string to create the table
