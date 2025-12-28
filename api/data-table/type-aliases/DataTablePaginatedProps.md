---
url: /api/data-table/type-aliases/DataTablePaginatedProps.md
---
[@sqlrooms/data-table](../index.md) / DataTablePaginatedProps

# Type Alias: DataTablePaginatedProps\<Data>

> **DataTablePaginatedProps**<`Data`> = `object`

## Type Parameters

| Type Parameter |
| ------ |
| `Data` *extends* `object` |

## Properties

### className?

> `optional` **className**: `string`

***

### fontSize?

> `optional` **fontSize**: `string`

Custom font size for the table e.g. text-xs, text-sm, text-md, text-lg, text-base

***

### data?

> `optional` **data**: `ArrayLike`<`Data`>

***

### columns?

> `optional` **columns**: `ColumnDef`<`Data`, `any`>\[]

***

### pageCount?

> `optional` **pageCount**: `number`

***

### numRows?

> `optional` **numRows**: `number`

***

### isFetching?

> `optional` **isFetching**: `boolean`

***

### pagination?

> `optional` **pagination**: `PaginationState`

***

### sorting?

> `optional` **sorting**: `SortingState`

***

### footerActions?

> `optional` **footerActions**: `React.ReactNode`

***

### onPaginationChange()?

> `optional` **onPaginationChange**: (`pagination`) => `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `pagination` | `PaginationState` |

#### Returns

`void`

***

### onSortingChange()?

> `optional` **onSortingChange**: (`sorting`) => `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `sorting` | `SortingState` |

#### Returns

`void`

***

### onRowClick()?

> `optional` **onRowClick**: (`args`) => `void`

Called when a row is clicked.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | { `row`: `Row`<`Data`>; `event`: `React.MouseEvent`<`HTMLTableRowElement`>; } |
| `args.row` | `Row`<`Data`> |
| `args.event` | `React.MouseEvent`<`HTMLTableRowElement`> |

#### Returns

`void`

***

### onRowDoubleClick()?

> `optional` **onRowDoubleClick**: (`args`) => `void`

Called when a row is double-clicked.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | { `row`: `Row`<`Data`>; `event`: `React.MouseEvent`<`HTMLTableRowElement`>; } |
| `args.row` | `Row`<`Data`> |
| `args.event` | `React.MouseEvent`<`HTMLTableRowElement`> |

#### Returns

`void`
