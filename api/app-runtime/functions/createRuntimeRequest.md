---
url: 'https://sqlrooms.org/api/app-runtime/functions/createRuntimeRequest.md'
---
[@sqlrooms/app-runtime](../index.md) / createRuntimeRequest

# Function: createRuntimeRequest()

> **createRuntimeRequest**(`id`, `method`, `payload?`): `object`

## Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |
| `method` | `"query"` | `"schema"` |
| `payload?` | `unknown` |

## Returns

`object`

| Name | Type |
| ------ | ------ |
| `type` | `"sqlrooms.app-runtime.message"` |
| `version` | `1` |
| `direction` | `"request"` |
| `id` | `string` |
| `method` | `string` |
| `payload?` | `unknown` |
