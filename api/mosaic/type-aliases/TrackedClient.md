---
url: /api/mosaic/type-aliases/TrackedClient.md
---
[@sqlrooms/mosaic](../index.md) / TrackedClient

# Type Alias: TrackedClient\<T>

> **TrackedClient**<`T`> = `object`

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `unknown` |

## Properties

### id

> **id**: `string`

***

### client

> **client**: `ReturnType`<*typeof* [`makeClient`](../functions/makeClient.md)>

***

### createdAt

> **createdAt**: `number`

***

### isLoading

> **isLoading**: `boolean`

***

### data

> **data**: `T` | `null`

***

### selection?

> `optional` **selection**: [`Selection`](../classes/Selection.md)

***

### queryResultCallback()?

> `optional` **queryResultCallback**: (`result`) => `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `result` | `T` |

#### Returns

`void`
