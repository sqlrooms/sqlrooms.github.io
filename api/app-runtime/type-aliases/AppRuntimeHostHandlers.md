---
url: 'https://sqlrooms.org/api/app-runtime/type-aliases/AppRuntimeHostHandlers.md'
---
[@sqlrooms/app-runtime](../index.md) / AppRuntimeHostHandlers

# Type Alias: AppRuntimeHostHandlers

> **AppRuntimeHostHandlers** = `object`

## Properties

### query?

> `optional` **query?**: (`request`) => `Promise`<[`QueryResult`](QueryResult.md)> | [`QueryResult`](QueryResult.md)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `request` | [`QueryRequest`](QueryRequest.md) |

#### Returns

`Promise`<[`QueryResult`](QueryResult.md)> | [`QueryResult`](QueryResult.md)

***

### schema?

> `optional` **schema?**: () => `Promise`<`unknown`> | `unknown`

#### Returns

`Promise`<`unknown`> | `unknown`
