---
url: 'https://sqlrooms.org/api/python/type-aliases/PythonSliceConfig.md'
---
[@sqlrooms/python](../index.md) / PythonSliceConfig

# Type Alias: PythonSliceConfig

> **PythonSliceConfig** = `object`

Persisted slice config for Python blocks.

## Type Declaration

| Name | Type |
| ------ | ------ |
|  `blocks` | `Record`<`string`, { `id`: `string`; `title`: `string`; `code`: `string`; `runtime`: { `kind`: `"python"`; `preferredAdapter?`: `"pyodide"` | `"sidecar"` | `"remote"`; }; `inputs`: ({ `kind`: `"tableRef"`; `name`: `string`; `tableName`: `string`; `maxRows?`: `number`; } | { `kind`: `"sql"`; `name`: `string`; `query`: `string`; `maxRows?`: `number`; } | { `kind`: `"schema"`; `name`: `string`; `tableName?`: `string`; } | { `kind`: `"literal"`; `name`: `string`; `value`: `unknown`; })\[]; `outputs`: ({ `type`: `"text"`; `name`: `string`; } | { `type`: `"json"`; `name`: `string`; } | { `type`: `"table"`; `name`: `string`; `tableName?`: `string`; } | { `type`: `"image"`; `name`: `string`; `mimeType?`: `string`; } | { `type`: `"markdown"`; `name`: `string`; } | { `type`: `"html"`; `name`: `string`; } | { `type`: `"vega-lite"`; `name`: `string`; })\[]; `requirements`: `object`\[]; `executionPolicy`: { `autorun?`: `false`; `runOnInputChange?`: `false`; }; `lastResult?`: { `executionId`: `string`; `status`: `"success"` | `"error"` | `"interrupted"`; `startedAt?`: `number`; `finishedAt?`: `number`; `durationMs?`: `number`; `stdout`: `string`; `stderr`: `string`; `error?`: { `name?`: `string`; `message`: `string`; `traceback?`: `string`; }; `outputs`: ({ `type`: `"json"`; `name`: `string`; `value`: `unknown`; `preview?`: `unknown`; } | { `type`: `"text"`; `name`: `string`; `text`: `string`; } | { `type`: `"table"`; `name`: `string`; `tableName`: `string`; `rowCount?`: `number`; } | { `type`: `"image"`; `name`: `string`; `assetId`: `string`; `mimeType`: `string`; } | { `type`: `"markdown"`; `name`: `string`; `markdown`: `string`; } | { `type`: `"html"`; `name`: `string`; `html`: `string`; } | { `type`: `"vega-lite"`; `name`: `string`; `spec`: `Record`<`string`, `unknown`>; })\[]; }; `updatedAt`: `number`; }> |
