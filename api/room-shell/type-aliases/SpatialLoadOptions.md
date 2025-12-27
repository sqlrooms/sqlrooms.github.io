---
url: /api/room-shell/type-aliases/SpatialLoadOptions.md
---
[@sqlrooms/room-shell](../index.md) / SpatialLoadOptions

# Type Alias: SpatialLoadOptions

> **SpatialLoadOptions** = `object`

**`Interface`**

Extended options specifically for spatial data loading
Includes all standard options plus spatial-specific parameters
SpatialLoadOptions

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
|  `options?` | `string` | `Record`<`string`, `unknown`> | `string`\[] |
