---
url: 'https://sqlrooms.org/api/app-runtime/type-aliases/CreateBridgeHostOptions.md'
---
[@sqlrooms/app-runtime](../index.md) / CreateBridgeHostOptions

# Type Alias: CreateBridgeHostOptions

> **CreateBridgeHostOptions** = `object`

## Properties

### targetWindow

> **targetWindow**: `Window`

***

### currentWindow?

> `optional` **currentWindow?**: `Window`

***

### targetOrigin?

> `optional` **targetOrigin?**: `string`

***

### capabilities?

> `optional` **capabilities?**: `Partial`<`Record`<[`AppCapability`](AppCapability.md), `boolean`>>

***

### handlers?

> `optional` **handlers?**: [`AppRuntimeHostHandlers`](AppRuntimeHostHandlers.md)

***

### onDiagnostic?

> `optional` **onDiagnostic?**: (`diagnostic`) => `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `diagnostic` | [`AppDiagnostic`](AppDiagnostic.md) |

#### Returns

`void`
