---
url: 'https://sqlrooms.org/api/mosaic/type-aliases/ChartBuilderContextValue.md'
---
[@sqlrooms/mosaic](../index.md) / ChartBuilderContextValue

# Type Alias: ChartBuilderContextValue

> **ChartBuilderContextValue** = `object`

## Properties

### tableName

> **tableName**: `string`

***

### columns

> **columns**: [`ChartBuilderColumn`](../interfaces/ChartBuilderColumn.md)\[]

***

### onCreateChart

> **onCreateChart**: (`title`, `config`) => `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `title` | `string` |
| `config` | [`ChartConfig`](ChartConfig.md) |

#### Returns

`void`

***

### templates

> **templates**: [`ChartTypeDefinition`](ChartTypeDefinition.md)\[]

***

### availableTemplates

> **availableTemplates**: [`ChartTypeDefinition`](ChartTypeDefinition.md)\[]

***

### store

> **store**: `ChartBuilderStore`
