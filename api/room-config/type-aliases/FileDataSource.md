---
url: /api/room-config/type-aliases/FileDataSource.md
---
[@sqlrooms/room-config](../index.md) / FileDataSource

# Type Alias: FileDataSource

> **FileDataSource**: `object`

**`Interface`**

Configuration for file-based data sources
FileDataSource

## Type declaration

| Name | Type | Description |
| ------ | ------ | ------ |
|  `tableName` | `string` | Unique table name used to store the data loaded from the data source. This name will be used to reference the data in SQL queries. |
|  `type` | `"file"` | - |
|  `fileName` | `string` | Path to the data file |
|  `loadOptions`? | `objectOutputType`<`object` & `object` & `object`, `ZodUnknown`, `"strip"`> | `objectOutputType`<`object` & `object`, `ZodUnknown`, `"strip"`> | Optional configuration for file loading |
