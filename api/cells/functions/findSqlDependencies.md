---
url: 'https://sqlrooms.org/api/cells/functions/findSqlDependencies.md'
---
[@sqlrooms/cells](../index.md) / findSqlDependencies

# Function: findSqlDependencies()

> **findSqlDependencies**<`TCell`>(`opts`): `string`\[]

## Type Parameters

| Type Parameter |
| ------ |
| `TCell` *extends* `object` |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | { `targetCell`: `TCell`; `cells`: `Record`<`string`, `TCell`>; `getSqlText`: (`cell`) => `string` | `undefined`; `getInputVarName`: (`cell`) => `string` | `undefined`; `getSqlResultName`: (`cellId`) => `string` | `undefined`; `options?`: [`SqlDependencyOptions`](../type-aliases/SqlDependencyOptions.md); } |
| `opts.targetCell` | `TCell` |
| `opts.cells` | `Record`<`string`, `TCell`> |
| `opts.getSqlText` | (`cell`) => `string` | `undefined` |
| `opts.getInputVarName` | (`cell`) => `string` | `undefined` |
| `opts.getSqlResultName` | (`cellId`) => `string` | `undefined` |
| `opts.options?` | [`SqlDependencyOptions`](../type-aliases/SqlDependencyOptions.md) |

## Returns

`string`\[]
