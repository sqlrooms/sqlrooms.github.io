---
url: /api/data-table/type-aliases/UseArrowDataTableOptions.md
---
[@sqlrooms/data-table](../index.md) / UseArrowDataTableOptions

# Type Alias: UseArrowDataTableOptions

> **UseArrowDataTableOptions** = `object`

## Properties

### fontSize?

> `optional` **fontSize**: `string`

Custom font size for the table e.g. xs, sm, md, lg, base

***

### formatValue?

> `optional` **formatValue**: [`ArrowDataTableValueFormatter`](ArrowDataTableValueFormatter.md)

Custom value formatter that overrides the default valueToString.
Return a string to use your custom formatting, or undefined to fall back to the default.
