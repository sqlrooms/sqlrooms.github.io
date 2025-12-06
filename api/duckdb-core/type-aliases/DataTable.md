---
url: /api/duckdb-core/type-aliases/DataTable.md
---
[@sqlrooms/duckdb-core](../index.md) / DataTable

# Type Alias: DataTable

> **DataTable**: `object`

## Type declaration

| Name | Type | Description |
| ------ | ------ | ------ |
|  `table` | [`QualifiedTableName`](QualifiedTableName.md) | - |
|  `isView` | `boolean` | - |
|  `database`? | `string` | **Deprecated** Use table.database instead |
|  `schema` | `string` | **Deprecated** Use table.schema instead |
|  `tableName` | `string` | **Deprecated** Use table.table instead |
|  `columns` | [`TableColumn`](TableColumn.md)\[] | - |
|  `rowCount`? | `number` | - |
|  `inputFileName`? | `string` | - |
|  `sql`? | `string` | - |
|  `comment`? | `string` | - |
