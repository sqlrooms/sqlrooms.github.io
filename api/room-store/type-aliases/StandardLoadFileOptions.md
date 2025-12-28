---
url: /api/room-store/type-aliases/StandardLoadFileOptions.md
---
[@sqlrooms/room-store](../index.md) / StandardLoadFileOptions

# Type Alias: StandardLoadFileOptions

> **StandardLoadFileOptions** = `object`

**`Interface`**

Standard file loading options excluding spatial methods
StandardLoadFileOptions

## Type Declaration

## Index Signature

\[`key`: `string`]: `unknown`

| Name | Type |
| ------ | ------ |
|  `schema?` | `string` |
|  `select?` | `string`\[] |
|  `where?` | `string` |
|  `view?` | `boolean` |
|  `temp?` | `boolean` |
|  `replace?` | `boolean` |
|  `method` | `"read_json"` | `"read_ndjson"` | `"read_parquet"` | `"read_csv"` | `"auto"` |
