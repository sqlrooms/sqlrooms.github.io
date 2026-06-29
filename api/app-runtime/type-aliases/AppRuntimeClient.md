---
url: 'https://sqlrooms.org/api/app-runtime/type-aliases/AppRuntimeClient.md'
---
[@sqlrooms/app-runtime](../index.md) / AppRuntimeClient

# Type Alias: AppRuntimeClient

> **AppRuntimeClient** = `object`

## Properties

### query

> **query**: (`sql`, `options?`) => `Promise`<[`QueryResult`](QueryResult.md)>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `sql` | `string` |
| `options?` | `Omit`<[`QueryRequest`](QueryRequest.md), `"sql"`> |

#### Returns

`Promise`<[`QueryResult`](QueryResult.md)>

***

### queryRows

> **queryRows**: (`sql`, `options?`) => `Promise`<`Record`<`string`, `unknown`>\[]>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `sql` | `string` |
| `options?` | `Omit`<[`QueryRequest`](QueryRequest.md), `"sql"`> |

#### Returns

`Promise`<`Record`<`string`, `unknown`>\[]>

***

### reportDiagnostic

> **reportDiagnostic**: (`diagnostic`) => `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `diagnostic` | [`AppDiagnostic`](AppDiagnostic.md) |

#### Returns

`void`

***

### dispose

> **dispose**: () => `void`

#### Returns

`void`
