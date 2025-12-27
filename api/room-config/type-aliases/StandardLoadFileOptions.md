---
url: /api/room-config/type-aliases/StandardLoadFileOptions.md
---
[@sqlrooms/room-config](../index.md) / StandardLoadFileOptions

# Type Alias: StandardLoadFileOptions

> **StandardLoadFileOptions** = `object`

**`Interface`**

Standard file loading options excluding spatial methods
StandardLoadFileOptions

## Type Declaration

## Index Signature

\[`key`: `string`]: `unknown`

| Name | Type | Description |
| ------ | ------ | ------ |
|  `schema?` | `string` | Schema to load the table into |
|  `select?` | `string`\[] | Columns to select, defaults to \['\*'] |
|  `where?` | `string` | WHERE clause filter condition |
|  `view?` | `boolean` | Whether to create as a view |
|  `temp?` | `boolean` | Whether to create as a temporary table |
|  `replace?` | `boolean` | Whether to replace existing table |
|  `method` | `"read_json"` | `"read_ndjson"` | `"read_parquet"` | `"read_csv"` | `"auto"` | - |
