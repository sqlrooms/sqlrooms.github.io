---
url: /api/room-shell/type-aliases/UrlDataSource.md
---
[@sqlrooms/room-shell](../index.md) / UrlDataSource

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
|  `loadOptions?` | {\[`key`: `string`]: `unknown`; `schema?`: `string`; `select?`: `string`\[]; `where?`: `string`; `view?`: `boolean`; `temp?`: `boolean`; `replace?`: `boolean`; `method`: `"read_json"` | `"read_ndjson"` | `"read_parquet"` | `"read_csv"` | `"auto"`; } | {\[`key`: `string`]: `unknown`; `schema?`: `string`; `select?`: `string`\[]; `where?`: `string`; `view?`: `boolean`; `temp?`: `boolean`; `replace?`: `boolean`; `options?`: `string` | `Record`<`string`, `unknown`> | `string`\[]; `method`: `"st_read"`; } |
|  `httpMethod?` | `string` |
|  `headers?` | `Record`<`string`, `string`> |
