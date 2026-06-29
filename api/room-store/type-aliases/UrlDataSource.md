---
url: 'https://sqlrooms.org/api/room-store/type-aliases/UrlDataSource.md'
---
[@sqlrooms/room-store](../index.md) / UrlDataSource

# Type Alias: UrlDataSource

> **UrlDataSource** = `object`

**`Interface`**

Configuration for URL-based data sources
UrlDataSource

## Type Declaration

| Name | Type |
| ------ | ------ |
|  `tableName` | `string` |
|  `type` | `"url"` |
|  `url` | `string` |
|  `loadOptions?` | {\[`key`: `string`]: `unknown`; `schema?`: `string`; `select?`: `string`\[]; `where?`: `string`; `view?`: `boolean`; `temp?`: `boolean`; `replace?`: `boolean`; `method`: `"read_json"` | `"read_ndjson"` | `"read_parquet"` | `"read_csv"` | `"auto"`; } | {\[`key`: `string`]: `unknown`; `schema?`: `string`; `select?`: `string`\[]; `where?`: `string`; `view?`: `boolean`; `temp?`: `boolean`; `replace?`: `boolean`; `options?`: `string` | `string`\[] | `Record`<`string`, `unknown`>; `method`: `"st_read"`; } |
|  `httpMethod?` | `string` |
|  `headers?` | `Record`<`string`, `string`> |
