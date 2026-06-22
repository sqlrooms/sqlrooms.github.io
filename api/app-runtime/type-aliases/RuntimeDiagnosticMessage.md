---
url: 'https://sqlrooms.org/api/app-runtime/type-aliases/RuntimeDiagnosticMessage.md'
---
[@sqlrooms/app-runtime](../index.md) / RuntimeDiagnosticMessage

# Type Alias: RuntimeDiagnosticMessage

> **RuntimeDiagnosticMessage** = `object`

## Type Declaration

| Name | Type | Default value |
| ------ | ------ | ------ |
|  `type` | `"sqlrooms.app-runtime.message"` | - |
|  `version` | `1` | - |
|  `direction` | `"diagnostic"` | - |
|  `diagnostic` | { `level`: `"error"` | `"warn"` | `"info"`; `source`: `"query"` | `"runtime"` | `"promise"` | `"console"` | `"resource"` | `"capability"` | `"render"` | `"webcontainer"`; `message`: `string`; `file?`: `string`; `line?`: `number`; `column?`: `number`; `stack?`: `string`; `detail?`: `unknown`; `timestamp?`: `number`; } | `AppDiagnostic` |
