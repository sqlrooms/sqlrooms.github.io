---
url: /api/data-table/type-aliases/QueryDataTableProps.md
---
[@sqlrooms/data-table](../index.md) / QueryDataTableProps

# Type Alias: QueryDataTableProps

> **QueryDataTableProps** = `object`

## Properties

### className?

> `optional` **className**: `string`

***

### fontSize?

> `optional` **fontSize**: [`DataTablePaginatedProps`](DataTablePaginatedProps.md)<`any`>\[`"fontSize"`]

Custom font size for the table e.g. text-xs, text-sm, text-md, text-lg, text-base

***

### query

> **query**: `string`

***

### queryKeyComponents?

> `optional` **queryKeyComponents**: `unknown`\[]

***

### renderActions()?

> `optional` **renderActions**: (`query`) => `React.ReactNode`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `query` | `string` |

#### Returns

`React.ReactNode`

***

### formatValue?

> `optional` **formatValue**: [`ArrowDataTableValueFormatter`](ArrowDataTableValueFormatter.md)

Custom value formatter for arrow data
