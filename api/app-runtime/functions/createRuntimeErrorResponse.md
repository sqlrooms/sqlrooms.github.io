---
url: 'https://sqlrooms.org/api/app-runtime/functions/createRuntimeErrorResponse.md'
---
[@sqlrooms/app-runtime](../index.md) / createRuntimeErrorResponse

# Function: createRuntimeErrorResponse()

> **createRuntimeErrorResponse**(`id`, `error`): `object`

## Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |
| `error` | { `code`: `"method_not_found"` | `"capability_denied"` | `"invalid_request"` | `"invalid_select"` | `"query_failed"` | `"timeout"` | `"aborted"`; `message`: `string`; `sql?`: `string`; `detail?`: `unknown`; } |
| `error.code` | `"method_not_found"` | `"capability_denied"` | `"invalid_request"` | `"invalid_select"` | `"query_failed"` | `"timeout"` | `"aborted"` |
| `error.message` | `string` |
| `error.sql?` | `string` |
| `error.detail?` | `unknown` |

## Returns

`object`

| Name | Type |
| ------ | ------ |
| `type` | `"sqlrooms.app-runtime.message"` |
| `version` | `1` |
| `direction` | `"response"` |
| `id` | `string` |
| `ok` | `boolean` |
| `payload?` | `unknown` |
| `error?` | { `code`: `"method_not_found"` | `"capability_denied"` | `"invalid_request"` | `"invalid_select"` | `"query_failed"` | `"timeout"` | `"aborted"`; `message`: `string`; `sql?`: `string`; `detail?`: `unknown`; } |
