---
url: /api/room-config/type-aliases/BaseDataSource.md
---
[@sqlrooms/room-config](../index.md) / BaseDataSource

# Type Alias: BaseDataSource

> **BaseDataSource** = `object`

**`Interface`**

Base interface for all data source configurations
BaseDataSource

## Type Declaration

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
|  `type` | `"file"` | `"url"` | `"sql"` | `DataSourceTypes` | Type of the data source |
|  `tableName` | `string` | - | Unique table name used to store the data loaded from the data source. This name will be used to reference the data in SQL queries. |
