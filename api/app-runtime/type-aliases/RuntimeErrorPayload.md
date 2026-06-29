---
url: 'https://sqlrooms.org/api/app-runtime/type-aliases/RuntimeErrorPayload.md'
---
[@sqlrooms/app-runtime](../index.md) / RuntimeErrorPayload

# Type Alias: RuntimeErrorPayload

> **RuntimeErrorPayload** = `object`

## Type Declaration

| Name | Type | Default value |
| ------ | ------ | ------ |
|  `code` | `"method_not_found"` | `"capability_denied"` | `"invalid_request"` | `"invalid_select"` | `"query_failed"` | `"timeout"` | `"aborted"` | `RuntimeErrorCode` |
|  `message` | `string` | - |
|  `sql?` | `string` | - |
|  `detail?` | `unknown` | - |
