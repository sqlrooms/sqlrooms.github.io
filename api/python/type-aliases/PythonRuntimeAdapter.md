---
url: 'https://sqlrooms.org/api/python/type-aliases/PythonRuntimeAdapter.md'
---
[@sqlrooms/python](../index.md) / PythonRuntimeAdapter

# Type Alias: PythonRuntimeAdapter

> **PythonRuntimeAdapter** = `object`

Runtime adapter for browser-local or external Python execution.

## Properties

### id

> **id**: [`PythonRuntimeAdapterKind`](PythonRuntimeAdapterKind.md)

## Methods

### status()

> **status**(): `Promise`<{ `state`: `"idle"` | `"loading"` | `"ready"` | `"error"`; `message?`: `string`; }>

#### Returns

`Promise`<{ `state`: `"idle"` | `"loading"` | `"ready"` | `"error"`; `message?`: `string`; }>

***

### execute()

> **execute**(`request`, `host`): `Promise`<[`PythonExecutionResult`](PythonExecutionResult.md)>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `request` | [`PythonExecutionRequest`](PythonExecutionRequest.md) |
| `host` | [`PythonRuntimeHost`](PythonRuntimeHost.md) |

#### Returns

`Promise`<[`PythonExecutionResult`](PythonExecutionResult.md)>

***

### interrupt()?

> `optional` **interrupt**(`executionId`): `Promise`<`void`>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `executionId` | `string` |

#### Returns

`Promise`<`void`>

***

### reset()?

> `optional` **reset**(`sessionId`): `Promise`<`void`>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `sessionId` | `string` |

#### Returns

`Promise`<`void`>

***

### dispose()?

> `optional` **dispose**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>
