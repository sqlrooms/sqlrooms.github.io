---
url: /api/mosaic/type-aliases/MosaicClientOptions.md
---
[@sqlrooms/mosaic](../index.md) / MosaicClientOptions

# Type Alias: MosaicClientOptions\<T>

> **MosaicClientOptions**<`T`> = `object`

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `unknown` |

## Properties

### id?

> `optional` **id**: `string`

Unique identifier for this client

***

### selectionName?

> `optional` **selectionName**: `string`

Selection name for cross-filtering (will create if doesn't exist)

***

### selection?

> `optional` **selection**: [`Selection`](../classes/Selection.md)

The selection to subscribe to for cross-filtering

***

### query()

> **query**: (`filter`) => `ReturnType`<*typeof* [`from`](../classes/Query.md#from)>

Query builder function that receives the current filter

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `filter` | `unknown` |

#### Returns

`ReturnType`<*typeof* [`from`](../classes/Query.md#from)>

***

### queryResult()?

> `optional` **queryResult**: (`result`) => `void`

Callback when query results are received

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `result` | `T` |

#### Returns

`void`
