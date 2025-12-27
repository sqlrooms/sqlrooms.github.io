---
url: /api/room-config/type-aliases/UrlDataSource.md
---
[@sqlrooms/room-config](../index.md) / UrlDataSource

# Type Alias: UrlDataSource

> **UrlDataSource** = `object`

**`Interface`**

Configuration for URL-based data sources
UrlDataSource

## Type Declaration

| Name | Type | Description |
| ------ | ------ | ------ |
|  `tableName` | `string` | Unique table name used to store the data loaded from the data source. This name will be used to reference the data in SQL queries. |
|  `type` | `"url"` | - |
|  `url` | `string` | URL from which to fetch the data |
|  `loadOptions?` | {\[`key`: `string`]: `unknown`; `schema?`: `string`; `select?`: `string`\[]; `where?`: `string`; `view?`: `boolean`; `temp?`: `boolean`; `replace?`: `boolean`; `options?`: `string` | `Record`<`string`, `unknown`> | `string`\[]; `method`: `"st_read"`; } | {\[`key`: `string`]: `unknown`; `schema?`: `string`; `select?`: `string`\[]; `where?`: `string`; `view?`: `boolean`; `temp?`: `boolean`; `replace?`: `boolean`; `method`: `"read_json"` | `"read_ndjson"` | `"read_parquet"` | `"read_csv"` | `"auto"`; } | Optional configuration for file loading |
|  `httpMethod?` | `string` | Optional HTTP method to use for the request |
|  `headers?` | `Record`<`string`, `string`> | Optional headers to include in the request |
