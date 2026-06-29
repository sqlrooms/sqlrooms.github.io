---
url: 'https://sqlrooms.org/api/app-runtime/classes/AppRuntimeError.md'
---
[@sqlrooms/app-runtime](../index.md) / AppRuntimeError

# Class: AppRuntimeError

## Extends

* `Error`

## Constructors

### Constructor

> **new AppRuntimeError**(`error`): `AppRuntimeError`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `error` | { `code`: `"method_not_found"` | `"capability_denied"` | `"invalid_request"` | `"invalid_select"` | `"query_failed"` | `"timeout"` | `"aborted"`; `message`: `string`; `sql?`: `string`; `detail?`: `unknown`; } |
| `error.code` | `"method_not_found"` | `"capability_denied"` | `"invalid_request"` | `"invalid_select"` | `"query_failed"` | `"timeout"` | `"aborted"` |
| `error.message` | `string` |
| `error.sql?` | `string` |
| `error.detail?` | `unknown` |

#### Returns

`AppRuntimeError`

#### Overrides

`Error.constructor`

## Properties

| Property | Modifier | Type |
| ------ | ------ | ------ |
|  `code` | `readonly` | `"method_not_found"` | `"capability_denied"` | `"invalid_request"` | `"invalid_select"` | `"query_failed"` | `"timeout"` | `"aborted"` |
|  `detail?` | `readonly` | `unknown` |
|  `sql?` | `readonly` | `string` |
