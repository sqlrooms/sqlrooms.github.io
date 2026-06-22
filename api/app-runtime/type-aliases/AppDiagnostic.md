---
url: 'https://sqlrooms.org/api/app-runtime/type-aliases/AppDiagnostic.md'
---
[@sqlrooms/app-runtime](../index.md) / AppDiagnostic

# Type Alias: AppDiagnostic

> **AppDiagnostic** = `object`

## Type Declaration

| Name | Type | Default value |
| ------ | ------ | ------ |
|  `level` | `"error"` | `"warn"` | `"info"` | `AppDiagnosticLevel` |
|  `source` | `"query"` | `"runtime"` | `"promise"` | `"console"` | `"resource"` | `"capability"` | `"render"` | `"webcontainer"` | `AppDiagnosticSource` |
|  `message` | `string` | - |
|  `file?` | `string` | - |
|  `line?` | `number` | - |
|  `column?` | `number` | - |
|  `stack?` | `string` | - |
|  `detail?` | `unknown` | - |
|  `timestamp?` | `number` | - |
