---
url: 'https://sqlrooms.org/api/cells/functions/getRenderableDependencyEdges.md'
---
[@sqlrooms/cells](../index.md) / getRenderableDependencyEdges

# Function: getRenderableDependencyEdges()

> **getRenderableDependencyEdges**(`artifact`): `object`\[]

## Parameters

| Parameter | Type |
| ------ | ------ |
| `artifact` | { `id`: `string`; `schemaName?`: `string`; `cellIds`: `string`\[]; `edges`: `object`\[]; `graphCache?`: { `dependencies`: `Record`<`string`, `string`\[]>; `dependents`: `Record`<`string`, `string`\[]>; `contentHashByCell?`: `Record`<`string`, `string`>; `tableDependencies`: `Record`<`string`, `string`\[]>; }; } |
| `artifact.id` | `string` |
| `artifact.schemaName?` | `string` |
| `artifact.cellIds` | `string`\[] |
| `artifact.edges` | `object`\[] |
| `artifact.graphCache?` | { `dependencies`: `Record`<`string`, `string`\[]>; `dependents`: `Record`<`string`, `string`\[]>; `contentHashByCell?`: `Record`<`string`, `string`>; `tableDependencies`: `Record`<`string`, `string`\[]>; } |
| `artifact.graphCache.dependencies` | `Record`<`string`, `string`\[]> |
| `artifact.graphCache.dependents` | `Record`<`string`, `string`\[]> |
| `artifact.graphCache.contentHashByCell?` | `Record`<`string`, `string`> |
| `artifact.graphCache.tableDependencies` | `Record`<`string`, `string`\[]> |

## Returns

`object`\[]
