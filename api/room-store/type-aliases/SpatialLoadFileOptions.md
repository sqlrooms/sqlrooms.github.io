---
url: 'https://sqlrooms.org/api/room-store/type-aliases/SpatialLoadFileOptions.md'
---
[@sqlrooms/room-store](../index.md) / SpatialLoadFileOptions

# Type Alias: SpatialLoadFileOptions

> **SpatialLoadFileOptions** = `object`

**`Interface`**

Options specific to spatial file loading with st\_read method
SpatialLoadFileOptions

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
|  `options?` | `string` | `string`\[] | `Record`<`string`, `unknown`> |
|  `method` | `"st_read"` |
