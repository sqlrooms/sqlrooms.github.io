---
url: 'https://sqlrooms.org/api/mosaic/type-aliases/UseDataTableExplorerReturn.md'
---
[@sqlrooms/mosaic](../index.md) / UseDataTableExplorerReturn

# Type Alias: UseDataTableExplorerReturn

> **UseDataTableExplorerReturn** = `object`

## Properties

### client

> **client**: `MosaicClient` | `null`

***

### columns

> **columns**: [`DataTableExplorerColumnState`](DataTableExplorerColumnState.md)\[]

***

### filteredRowCount?

> `optional` **filteredRowCount?**: `number`

***

### hasFilters

> **hasFilters**: `boolean`

***

### isLoading

> **isLoading**: `boolean`

***

### pageQuery

> **pageQuery**: `string`

***

### pageTable?

> `optional` **pageTable?**: `Table`

***

### pagination

> **pagination**: [`DataTableExplorerPaginationState`](DataTableExplorerPaginationState.md)

***

### reset

> **reset**: () => `void`

#### Returns

`void`

***

### selection

> **selection**: `Selection`

***

### setPagination

> **setPagination**: `Dispatch`<`SetStateAction`<[`DataTableExplorerPaginationState`](DataTableExplorerPaginationState.md)>>

***

### setSorting

> **setSorting**: `Dispatch`<`SetStateAction`<[`DataTableExplorerSorting`](DataTableExplorerSorting.md)>>

***

### sorting

> **sorting**: [`DataTableExplorerSorting`](DataTableExplorerSorting.md)

***

### sql

> **sql**: `string`

***

### tableError?

> `optional` **tableError?**: `Error`

***

### totalRowCount?

> `optional` **totalRowCount?**: `number`
