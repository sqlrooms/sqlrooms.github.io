---
url: /api/room-config/type-aliases/FileDataSource.md
---
[@sqlrooms/room-config](../index.md) / FileDataSource

# Type Alias: FileDataSource

> **FileDataSource** = `object`

**`Interface`**

Configuration for file-based data sources
FileDataSource

## Type Declaration

| Name | Type | Description |
| ------ | ------ | ------ |
|  `tableName` | `string` | Unique table name used to store the data loaded from the data source. This name will be used to reference the data in SQL queries. |
|  `type` | `"file"` | - |
|  `fileName` | `string` | Path to the data file |
|  `loadOptions?` | {\[`key`: `string`]: `unknown`; `schema?`: `string`; `select?`: `string`\[]; `where?`: `string`; `view?`: `boolean`; `temp?`: `boolean`; `replace?`: `boolean`; `options?`: `string` | `Record`<`string`, `unknown`> | `string`\[]; `method`: `"st_read"`; } | {\[`key`: `string`]: `unknown`; `schema?`: `string`; `select?`: `string`\[]; `where?`: `string`; `view?`: `boolean`; `temp?`: `boolean`; `replace?`: `boolean`; `method`: `"read_json"` | `"read_ndjson"` | `"read_parquet"` | `"read_csv"` | `"auto"`; } | Optional configuration for file loading |
