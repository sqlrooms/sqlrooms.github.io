---
url: 'https://sqlrooms.org/api/cells/type-aliases/SqlSelectToJsonFn.md'
---
[@sqlrooms/cells](../index.md) / SqlSelectToJsonFn

# Type Alias: SqlSelectToJsonFn

> **SqlSelectToJsonFn** = (`sql`) => `Promise`<{ `error`: `boolean`; `error_type?`: `string`; `statements?`: `unknown`\[]; }>

Type for SQL AST parsing function from DuckDB slice

## Parameters

| Parameter | Type |
| ------ | ------ |
| `sql` | `string` |

## Returns

`Promise`<{ `error`: `boolean`; `error_type?`: `string`; `statements?`: `unknown`\[]; }>
