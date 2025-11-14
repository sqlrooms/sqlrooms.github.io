---
url: /api/data-table/type-aliases/DataTablePaginatedProps.md
---
[@sqlrooms/data-table](../index.md) / DataTablePaginatedProps

# Type Alias: DataTablePaginatedProps\<Data>

> **DataTablePaginatedProps**<`Data`>: `object`

## Type Parameters

| Type Parameter |
| ------ |
| `Data` *extends* `object` |

## Type declaration

| Name | Type | Description |
| ------ | ------ | ------ |
|  `className`? | `string` | - |
|  `fontSize`? | `string` | Custom font size for the table e.g. text-xs, text-sm, text-md, text-lg, text-base |
|  `data`? | `ArrayLike`<`Data`> | - |
|  `columns`? | `ColumnDef`<`Data`, `any`>\[] | - |
|  `pageCount`? | `number` | - |
|  `numRows`? | `number` | - |
|  `isFetching`? | `boolean` | - |
|  `pagination`? | `PaginationState` | - |
|  `sorting`? | `SortingState` | - |
|  `footerActions`? | `React.ReactNode` | - |
|  `onPaginationChange`? | (`pagination`) => `void` | - |
|  `onSortingChange`? | (`sorting`) => `void` | - |
|  `onRowClick`? | (`args`) => `void` | Called when a row is clicked. |
|  `onRowDoubleClick`? | (`args`) => `void` | Called when a row is double-clicked. |
