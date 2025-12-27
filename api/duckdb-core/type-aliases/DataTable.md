---
url: /api/duckdb-core/type-aliases/DataTable.md
---
[@sqlrooms/duckdb-core](../index.md) / DataTable

# Type Alias: DataTable

> **DataTable** = `object`

## Properties

### table

> **table**: [`QualifiedTableName`](QualifiedTableName.md)

***

### isView

> **isView**: `boolean`

***

### ~~database?~~

> `optional` **database**: `string`

#### Deprecated

Use table.database instead

***

### ~~schema~~

> **schema**: `string`

#### Deprecated

Use table.schema instead

***

### ~~tableName~~

> **tableName**: `string`

#### Deprecated

Use table.table instead

***

### columns

> **columns**: [`TableColumn`](TableColumn.md)\[]

***

### rowCount?

> `optional` **rowCount**: `number`

***

### inputFileName?

> `optional` **inputFileName**: `string`

***

### sql?

> `optional` **sql**: `string`

***

### comment?

> `optional` **comment**: `string`
