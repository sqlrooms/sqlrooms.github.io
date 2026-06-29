---
url: 'https://sqlrooms.org/api/python/type-aliases/PythonResultSummary.md'
---
[@sqlrooms/python](../index.md) / PythonResultSummary

# Type Alias: PythonResultSummary

> **PythonResultSummary** = `object`

Bounded result summary persisted in Python block state.

## Type Declaration

| Name | Type |
| ------ | ------ |
|  `executionId` | `string` |
|  `status` | `"success"` | `"error"` | `"interrupted"` |
|  `startedAt?` | `number` |
|  `finishedAt?` | `number` |
|  `durationMs?` | `number` |
|  `stdout` | `string` |
|  `stderr` | `string` |
|  `error?` | { `name?`: `string`; `message`: `string`; `traceback?`: `string`; } |
|  `outputs` | ({ `type`: `"json"`; `name`: `string`; `value`: `unknown`; `preview?`: `unknown`; } | { `type`: `"text"`; `name`: `string`; `text`: `string`; } | { `type`: `"table"`; `name`: `string`; `tableName`: `string`; `rowCount?`: `number`; } | { `type`: `"image"`; `name`: `string`; `assetId`: `string`; `mimeType`: `string`; } | { `type`: `"markdown"`; `name`: `string`; `markdown`: `string`; } | { `type`: `"html"`; `name`: `string`; `html`: `string`; } | { `type`: `"vega-lite"`; `name`: `string`; `spec`: `Record`<`string`, `unknown`>; })\[] |
