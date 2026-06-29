---
url: 'https://sqlrooms.org/api/app-runtime/functions/createRuntimeResponse.md'
---
[@sqlrooms/app-runtime](../index.md) / createRuntimeResponse

# Function: createRuntimeResponse()

> **createRuntimeResponse**(`id`, `payload`): `object`

## Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |
| `payload` | `unknown` |

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
