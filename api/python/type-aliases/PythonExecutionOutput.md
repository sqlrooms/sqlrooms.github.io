---
url: 'https://sqlrooms.org/api/python/type-aliases/PythonExecutionOutput.md'
---
[@sqlrooms/python](../index.md) / PythonExecutionOutput

# Type Alias: PythonExecutionOutput

> **PythonExecutionOutput** = { `type`: `"json"`; `name`: `string`; `value`: `unknown`; `preview?`: `unknown`; } | { `type`: `"text"`; `name`: `string`; `text`: `string`; } | { `type`: `"table"`; `name`: `string`; `tableName`: `string`; `rowCount?`: `number`; } | { `type`: `"image"`; `name`: `string`; `assetId`: `string`; `mimeType`: `string`; } | { `type`: `"markdown"`; `name`: `string`; `markdown`: `string`; } | { `type`: `"html"`; `name`: `string`; `html`: `string`; } | { `type`: `"vega-lite"`; `name`: `string`; `spec`: `Record`<`string`, `unknown`>; }

Portable output handle returned by Python execution.
