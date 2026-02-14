---
url: /api/room-config/type-aliases/SpatialLoadFileOptions.md
---
[@sqlrooms/room-config](../index.md) / SpatialLoadFileOptions

# Type Alias: SpatialLoadFileOptions

> **SpatialLoadFileOptions** = `object`

**`Interface`**

Options specific to spatial file loading with st\_read method
SpatialLoadFileOptions

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
|  `options?` | `string` | `Record`<`string`, `unknown`> | `string`\[] | Additional options for spatial data loading |
|  `method` | `"st_read"` | - |
