---
url: /api/room-config/type-aliases/SqlQueryDataSource.md
---
[@sqlrooms/room-config](../index.md) / SqlQueryDataSource

# Type Alias: SqlQueryDataSource

> **SqlQueryDataSource** = `object`

**`Interface`**

Configuration for SQL query-based data sources
SqlQueryDataSource

## Type Declaration

| Name | Type | Description |
| ------ | ------ | ------ |
|  `tableName` | `string` | Unique table name used to store the data loaded from the data source. This name will be used to reference the data in SQL queries. |
|  `type` | `"sql"` | - |
|  `sqlQuery` | `string` | SQL query to execute for data retrieval |
