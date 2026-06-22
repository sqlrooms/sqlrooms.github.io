---
url: 'https://sqlrooms.org/api/pivot/type-aliases/PivotConfig-1.md'
---
[@sqlrooms/pivot](../index.md) / PivotConfig

# Type Alias: PivotConfig

> **PivotConfig** = `object`

## Type Declaration

| Name | Type |
| ------ | ------ |
|  `rendererName` | `"Table"` | `"Table Heatmap"` | `"Table Col Heatmap"` | `"Table Row Heatmap"` | `"Exportable TSV"` | `"Grouped Column Chart"` | `"Stacked Column Chart"` | `"Grouped Bar Chart"` | `"Stacked Bar Chart"` | `"Line Chart"` | `"Dot Chart"` | `"Area Chart"` | `"Scatter Chart"` | `"Multiple Pie Chart"` |
|  `aggregatorName` | `string` |
|  `rows` | `string`\[] |
|  `cols` | `string`\[] |
|  `vals` | `string`\[] |
|  `valueFilter` | `Record`<`string`, `Record`<`string`, `boolean`>> |
|  `rowOrder` | `"key_a_to_z"` | `"value_a_to_z"` | `"value_z_to_a"` |
|  `colOrder` | `"key_a_to_z"` | `"value_a_to_z"` | `"value_z_to_a"` |
|  `unusedOrder` | `string`\[] |
|  `menuLimit` | `number` |
|  `hiddenAttributes` | `string`\[] |
|  `hiddenFromAggregators` | `string`\[] |
|  `hiddenFromDragDrop` | `string`\[] |
