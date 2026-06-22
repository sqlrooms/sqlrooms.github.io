---
url: 'https://sqlrooms.org/api/cells/type-aliases/CellsSliceConfig.md'
---
[@sqlrooms/cells](../index.md) / CellsSliceConfig

# Type Alias: CellsSliceConfig

> **CellsSliceConfig** = `object`

## Type Declaration

| Name | Type | Description |
| ------ | ------ | ------ |
|  `data` | `Record`<`string`, { `id`: `string`; `type`: `string`; `data`: `Record`<`string`, `any`>; }> | - |
|  `artifacts` | `Record`<`string`, { `id`: `string`; `schemaName?`: `string`; `cellIds`: `string`\[]; `edges`: `object`\[]; `graphCache?`: { `dependencies`: `Record`<`string`, `string`\[]>; `dependents`: `Record`<`string`, `string`\[]>; `contentHashByCell?`: `Record`<`string`, `string`>; `tableDependencies`: `Record`<`string`, `string`\[]>; }; }> | - |
|  `tableDepSchemas` | `string`\[] | Which database schemas' tables are eligible for direct table dependencies. |
