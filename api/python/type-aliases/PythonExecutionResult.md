---
url: 'https://sqlrooms.org/api/python/type-aliases/PythonExecutionResult.md'
---
[@sqlrooms/python](../index.md) / PythonExecutionResult

# Type Alias: PythonExecutionResult

> **PythonExecutionResult** = `object`

Result returned by a Python runtime adapter.

## Properties

### executionId

> **executionId**: `string`

***

### status

> **status**: `"success"` | `"error"` | `"interrupted"`

***

### stdout

> **stdout**: `string`

***

### stderr

> **stderr**: `string`

***

### error?

> `optional` **error?**: [`PythonExecutionError`](PythonExecutionError.md)

***

### outputs

> **outputs**: [`PythonExecutionOutput`](PythonExecutionOutput.md)\[]

***

### durationMs

> **durationMs**: `number`
