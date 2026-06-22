---
url: 'https://sqlrooms.org/api/mosaic/type-aliases/MosaicClientOptions.md'
---
[@sqlrooms/mosaic](../index.md) / MosaicClientOptions

# Type Alias: MosaicClientOptions

> **MosaicClientOptions** = `object`

## Properties

### id?

> `optional` **id?**: `string`

Unique identifier for this client

***

### selectionName?

> `optional` **selectionName?**: `string`

Selection name for cross-filtering (will create if doesn't exist)

***

### selection?

> `optional` **selection?**: `Selection`

The selection to subscribe to for cross-filtering

***

### query

> **query**: (`filter`) => `ReturnType`<*typeof* `Query.from`>

Query builder function that receives the current filter

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `filter` | `unknown` |

#### Returns

`ReturnType`<*typeof* `Query.from`>

***

### queryResult?

> `optional` **queryResult?**: (`result`) => `void`

Callback when query results are received

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `result` | `ArrowTable` |

#### Returns

`void`

***

### queryError?

> `optional` **queryError?**: (`error`) => `void`

Callback when query execution fails

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `error` | `Error` |

#### Returns

`void`
