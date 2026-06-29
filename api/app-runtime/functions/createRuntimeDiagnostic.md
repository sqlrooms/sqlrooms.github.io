---
url: 'https://sqlrooms.org/api/app-runtime/functions/createRuntimeDiagnostic.md'
---
[@sqlrooms/app-runtime](../index.md) / createRuntimeDiagnostic

# Function: createRuntimeDiagnostic()

> **createRuntimeDiagnostic**(`diagnostic`): `object`

## Parameters

| Parameter | Type |
| ------ | ------ |
| `diagnostic` | { `level`: `"error"` | `"warn"` | `"info"`; `source`: `"query"` | `"runtime"` | `"promise"` | `"console"` | `"resource"` | `"capability"` | `"render"` | `"webcontainer"`; `message`: `string`; `file?`: `string`; `line?`: `number`; `column?`: `number`; `stack?`: `string`; `detail?`: `unknown`; `timestamp?`: `number`; } |
| `diagnostic.level` | `"error"` | `"warn"` | `"info"` |
| `diagnostic.source` | `"query"` | `"runtime"` | `"promise"` | `"console"` | `"resource"` | `"capability"` | `"render"` | `"webcontainer"` |
| `diagnostic.message` | `string` |
| `diagnostic.file?` | `string` |
| `diagnostic.line?` | `number` |
| `diagnostic.column?` | `number` |
| `diagnostic.stack?` | `string` |
| `diagnostic.detail?` | `unknown` |
| `diagnostic.timestamp?` | `number` |

## Returns

`object`

| Name | Type | Default value |
| ------ | ------ | ------ |
| `type` | `"sqlrooms.app-runtime.message"` | - |
| `version` | `1` | - |
| `direction` | `"diagnostic"` | - |
| `diagnostic` | { `level`: `"error"` | `"warn"` | `"info"`; `source`: `"query"` | `"runtime"` | `"promise"` | `"console"` | `"resource"` | `"capability"` | `"render"` | `"webcontainer"`; `message`: `string`; `file?`: `string`; `line?`: `number`; `column?`: `number`; `stack?`: `string`; `detail?`: `unknown`; `timestamp?`: `number`; } | `AppDiagnostic` |
