---
url: /api/room-config/type-aliases/SpatialLoadOptions.md
---
[@sqlrooms/room-config](../index.md) / SpatialLoadOptions

# Type Alias: SpatialLoadOptions

> **SpatialLoadOptions** = `object`

**`Interface`**

Extended options specifically for spatial data loading
Includes all standard options plus spatial-specific parameters
SpatialLoadOptions

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
