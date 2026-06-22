---
url: 'https://sqlrooms.org/api/mosaic/type-aliases/TrackedClient.md'
---
[@sqlrooms/mosaic](../index.md) / TrackedClient

# Type Alias: TrackedClient

> **TrackedClient** = `object`

## Properties

### id

> **id**: `string`

***

### client

> **client**: `ReturnType`<*typeof* `makeClient`>

***

### createdAt

> **createdAt**: `number`

***

### isLoading

> **isLoading**: `boolean`

***

### data

> **data**: `unknown` | `null`

***

### error?

> `optional` **error?**: `Error`

***

### selection?

> `optional` **selection?**: `Selection`

***

### queryResultCallback?

> `optional` **queryResultCallback?**: (`result`) => `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `result` | `ArrowTable` |

#### Returns

`void`
