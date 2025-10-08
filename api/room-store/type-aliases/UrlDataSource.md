---
url: /api/room-store/type-aliases/UrlDataSource.md
---
[@sqlrooms/room-store](../index.md) / UrlDataSource

# Type Alias: UrlDataSource

> **UrlDataSource**: `object`

**`Interface`**

Configuration for URL-based data sources
UrlDataSource

## Type declaration

| Name | Type |
| ------ | ------ |
|  `type` | `"url"` |
|  `url` | `string` |
|  `tableName` | `string` |
|  `loadOptions`? | `objectOutputType`<`object` & `object` & `object`, `ZodUnknown`, `"strip"`> | `objectOutputType`<`object` & `object`, `ZodUnknown`, `"strip"`> |
|  `httpMethod`? | `string` |
|  `headers`? | `Record`<`string`, `string`> |
