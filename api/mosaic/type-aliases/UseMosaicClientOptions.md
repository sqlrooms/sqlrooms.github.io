---
url: /api/mosaic/type-aliases/UseMosaicClientOptions.md
---
[@sqlrooms/mosaic](../index.md) / UseMosaicClientOptions

# Type Alias: UseMosaicClientOptions\<T>

> **UseMosaicClientOptions**<`T`> = `object`

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `unknown` |

## Properties

### id?

> `optional` **id**: `string`

Unique id for this client (auto-generated if not provided)

***

### selectionName?

> `optional` **selectionName**: `string`

Selection name for cross-filtering (will create if doesn't exist)

***

### selection?

> `optional` **selection**: [`Selection`](../classes/Selection.md)

Or pass a Selection directly

***

### query()

> **query**: (`filter`) => `ReturnType`<*typeof* [`from`](../classes/Query.md#from)>

Query builder - receives current filter predicate

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

***

### enabled?

> `optional` **enabled**: `boolean`

Whether to automatically connect when mosaic is ready
