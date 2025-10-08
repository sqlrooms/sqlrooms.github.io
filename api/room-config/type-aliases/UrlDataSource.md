---
url: /api/room-config/type-aliases/UrlDataSource.md
---
[@sqlrooms/room-config](../index.md) / UrlDataSource

# Type Alias: UrlDataSource

> **UrlDataSource**: `object`

**`Interface`**

Configuration for URL-based data sources
UrlDataSource

## Type declaration

| Name | Type | Description |
| ------ | ------ | ------ |
|  `tableName` | `string` | Unique table name used to store the data loaded from the data source. This name will be used to reference the data in SQL queries. |
|  `type` | `"url"` | - |
|  `url` | `string` | URL from which to fetch the data |
|  `loadOptions`? | `objectOutputType`<`object` & `object` & `object`, `ZodUnknown`, `"strip"`> | `objectOutputType`<`object` & `object`, `ZodUnknown`, `"strip"`> | Optional configuration for file loading |
|  `httpMethod`? | `string` | Optional HTTP method to use for the request |
|  `headers`? | `Record`<`string`, `string`> | Optional headers to include in the request |
