---
url: 'https://sqlrooms.org/api/cells/functions/findSqlDependenciesFromAst.md'
---
[@sqlrooms/cells](../index.md) / findSqlDependenciesFromAst

# Function: findSqlDependenciesFromAst()

> **findSqlDependenciesFromAst**(`opts`): `Promise`<[`CellDependencies`](../type-aliases/CellDependencies.md)>

Find SQL cell dependencies using AST-based parsing.
Returns cell dependencies and unmatched table references.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | { `sql`: `string`; `cells`: `Record`<`string`, [`Cell`](../type-aliases/Cell.md)>; `sqlSelectToJson`: (`sql`) => `Promise`<{ `error`: `boolean`; `statements?`: `unknown`\[]; }>; } |
| `opts.sql` | `string` |
| `opts.cells` | `Record`<`string`, [`Cell`](../type-aliases/Cell.md)> |
| `opts.sqlSelectToJson` | (`sql`) => `Promise`<{ `error`: `boolean`; `statements?`: `unknown`\[]; }> |

## Returns

`Promise`<[`CellDependencies`](../type-aliases/CellDependencies.md)>
