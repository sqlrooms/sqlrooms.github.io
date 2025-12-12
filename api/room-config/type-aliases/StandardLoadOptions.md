---
url: /api/room-config/type-aliases/StandardLoadOptions.md
---
[@sqlrooms/room-config](../index.md) / StandardLoadOptions

# Type Alias: StandardLoadOptions

> **StandardLoadOptions** = `object`

**`Interface`**

Standard options for loading data files
StandardLoadOptions

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
