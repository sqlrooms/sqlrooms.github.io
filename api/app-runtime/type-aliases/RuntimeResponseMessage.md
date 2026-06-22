---
url: 'https://sqlrooms.org/api/app-runtime/type-aliases/RuntimeResponseMessage.md'
---
[@sqlrooms/app-runtime](../index.md) / RuntimeResponseMessage

# Type Alias: RuntimeResponseMessage

> **RuntimeResponseMessage** = `object`

## Type Declaration

| Name | Type |
| ------ | ------ |
|  `type` | `"sqlrooms.app-runtime.message"` |
|  `version` | `1` |
|  `direction` | `"response"` |
|  `id` | `string` |
|  `ok` | `boolean` |
|  `payload?` | `unknown` |
|  `error?` | { `code`: `"method_not_found"` | `"capability_denied"` | `"invalid_request"` | `"invalid_select"` | `"query_failed"` | `"timeout"` | `"aborted"`; `message`: `string`; `sql?`: `string`; `detail?`: `unknown`; } |
