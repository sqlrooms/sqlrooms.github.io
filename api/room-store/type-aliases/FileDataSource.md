---
url: 'https://sqlrooms.org/api/room-store/type-aliases/FileDataSource.md'
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
|  `loadOptions?` | {\[`key`: `string`]: `unknown`; `schema?`: `string`; `select?`: `string`\[]; `where?`: `string`; `view?`: `boolean`; `temp?`: `boolean`; `replace?`: `boolean`; `method`: `"read_json"` | `"read_ndjson"` | `"read_parquet"` | `"read_csv"` | `"auto"`; } | {\[`key`: `string`]: `unknown`; `schema?`: `string`; `select?`: `string`\[]; `where?`: `string`; `view?`: `boolean`; `temp?`: `boolean`; `replace?`: `boolean`; `options?`: `string` | `string`\[] | `Record`<`string`, `unknown`>; `method`: `"st_read"`; } |
