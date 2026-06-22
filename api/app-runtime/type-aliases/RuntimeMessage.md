---
url: 'https://sqlrooms.org/api/app-runtime/type-aliases/RuntimeMessage.md'
---
[@sqlrooms/app-runtime](../index.md) / RuntimeMessage

# Type Alias: RuntimeMessage

> **RuntimeMessage** = { `type`: `"sqlrooms.app-runtime.message"`; `version`: `1`; `direction`: `"request"`; `id`: `string`; `method`: `string`; `payload?`: `unknown`; } | { `type`: `"sqlrooms.app-runtime.message"`; `version`: `1`; `direction`: `"response"`; `id`: `string`; `ok`: `boolean`; `payload?`: `unknown`; `error?`: { `code`: `"method_not_found"` | `"capability_denied"` | `"invalid_request"` | `"invalid_select"` | `"query_failed"` | `"timeout"` | `"aborted"`; `message`: `string`; `sql?`: `string`; `detail?`: `unknown`; }; } | { `type`: `"sqlrooms.app-runtime.message"`; `version`: `1`; `direction`: `"diagnostic"`; `diagnostic`: { `level`: `"error"` | `"warn"` | `"info"`; `source`: `"query"` | `"runtime"` | `"promise"` | `"console"` | `"resource"` | `"capability"` | `"render"` | `"webcontainer"`; `message`: `string`; `file?`: `string`; `line?`: `number`; `column?`: `number`; `stack?`: `string`; `detail?`: `unknown`; `timestamp?`: `number`; }; }
