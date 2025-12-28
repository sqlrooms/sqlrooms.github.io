---
url: /api/room-store/type-aliases/FileDataSource.md
---
[@sqlrooms/room-store](../index.md) / FileDataSource

# Type Alias: FileDataSource

> **FileDataSource** = `object`

**`Interface`**

Configuration for file-based data sources
FileDataSource

## Type Declaration

| Name | Type |
| ------ | ------ |
|  `tableName` | `string` |
|  `type` | `"file"` |
|  `fileName` | `string` |
|  `loadOptions?` | {\[`key`: `string`]: `unknown`; `schema?`: `string`; `select?`: `string`\[]; `where?`: `string`; `view?`: `boolean`; `temp?`: `boolean`; `replace?`: `boolean`; `method`: `"read_json"` | `"read_ndjson"` | `"read_parquet"` | `"read_csv"` | `"auto"`; } | {\[`key`: `string`]: `unknown`; `schema?`: `string`; `select?`: `string`\[]; `where?`: `string`; `view?`: `boolean`; `temp?`: `boolean`; `replace?`: `boolean`; `options?`: `string` | `Record`<`string`, `unknown`> | `string`\[]; `method`: `"st_read"`; } |
