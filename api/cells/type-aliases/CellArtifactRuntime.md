---
url: 'https://sqlrooms.org/api/cells/type-aliases/CellArtifactRuntime.md'
---
[@sqlrooms/cells](../index.md) / CellArtifactRuntime

# Type Alias: CellArtifactRuntime

> **CellArtifactRuntime** = `object`

## Type Declaration

| Name | Type |
| ------ | ------ |
|  `id` | `string` |
|  `schemaName?` | `string` |
|  `cellIds` | `string`\[] |
|  `edges` | `object`\[] |
|  `graphCache?` | { `dependencies`: `Record`<`string`, `string`\[]>; `dependents`: `Record`<`string`, `string`\[]>; `contentHashByCell?`: `Record`<`string`, `string`>; `tableDependencies`: `Record`<`string`, `string`\[]>; } |
