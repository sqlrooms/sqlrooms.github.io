---
url: 'https://sqlrooms.org/api/python/type-aliases/PythonExecutionRequest.md'
---
[@sqlrooms/python](../index.md) / PythonExecutionRequest

# Type Alias: PythonExecutionRequest

> **PythonExecutionRequest** = `object`

Request passed from SQLRooms to a Python runtime adapter.

## Properties

### executionId

> **executionId**: `string`

***

### blockId

> **blockId**: `string`

***

### artifactId?

> `optional` **artifactId?**: `string`

***

### code

> **code**: `string`

***

### inputs

> **inputs**: [`PythonInput`](PythonInput.md)\[]

***

### grantedCapabilities

> **grantedCapabilities**: [`PythonRuntimeCapability`](PythonRuntimeCapability.md)\[]

***

### outputDeclarations

> **outputDeclarations**: [`PythonOutputDeclaration`](PythonOutputDeclaration.md)\[]

***

### requirements?

> `optional` **requirements?**: [`PythonRequirementSpec`](PythonRequirementSpec.md)\[]

***

### limits?

> `optional` **limits?**: `object`

| Name | Type |
| ------ | ------ |
| `timeoutMs?` | `number` |
| `maxStdoutBytes?` | `number` |
| `maxRowsPreview?` | `number` |
