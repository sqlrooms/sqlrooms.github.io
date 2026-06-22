---
url: 'https://sqlrooms.org/api/python/type-aliases/PythonInput.md'
---
[@sqlrooms/python](../index.md) / PythonInput

# Type Alias: PythonInput

> **PythonInput** = { `kind`: `"tableRef"`; `name`: `string`; `tableName`: `string`; `maxRows?`: `number`; } | { `kind`: `"sql"`; `name`: `string`; `query`: `string`; `maxRows?`: `number`; } | { `kind`: `"schema"`; `name`: `string`; `tableName?`: `string`; } | { `kind`: `"literal"`; `name`: `string`; `value`: `unknown`; }

Declared input made available to Python execution.
