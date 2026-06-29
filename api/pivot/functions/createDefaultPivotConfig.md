---
url: 'https://sqlrooms.org/api/pivot/functions/createDefaultPivotConfig.md'
---
[@sqlrooms/pivot](../index.md) / createDefaultPivotConfig

# Function: createDefaultPivotConfig()

> **createDefaultPivotConfig**(`props?`): `object`

## Parameters

| Parameter | Type |
| ------ | ------ |
| `props?` | `Partial`<{ `rendererName`: `"Table"` | `"Table Heatmap"` | `"Table Col Heatmap"` | `"Table Row Heatmap"` | `"Exportable TSV"` | `"Grouped Column Chart"` | `"Stacked Column Chart"` | `"Grouped Bar Chart"` | `"Stacked Bar Chart"` | `"Line Chart"` | `"Dot Chart"` | `"Area Chart"` | `"Scatter Chart"` | `"Multiple Pie Chart"`; `aggregatorName`: `string`; `rows`: `string`\[]; `cols`: `string`\[]; `vals`: `string`\[]; `valueFilter`: `Record`<`string`, `Record`<`string`, `boolean`>>; `rowOrder`: `"key_a_to_z"` | `"value_a_to_z"` | `"value_z_to_a"`; `colOrder`: `"key_a_to_z"` | `"value_a_to_z"` | `"value_z_to_a"`; `unusedOrder`: `string`\[]; `menuLimit`: `number`; `hiddenAttributes`: `string`\[]; `hiddenFromAggregators`: `string`\[]; `hiddenFromDragDrop`: `string`\[]; }> |

## Returns

`object`

| Name | Type |
| ------ | ------ |
| `rendererName` | `"Table"` | `"Table Heatmap"` | `"Table Col Heatmap"` | `"Table Row Heatmap"` | `"Exportable TSV"` | `"Grouped Column Chart"` | `"Stacked Column Chart"` | `"Grouped Bar Chart"` | `"Stacked Bar Chart"` | `"Line Chart"` | `"Dot Chart"` | `"Area Chart"` | `"Scatter Chart"` | `"Multiple Pie Chart"` |
| `aggregatorName` | `string` |
| `rows` | `string`\[] |
| `cols` | `string`\[] |
| `vals` | `string`\[] |
| `valueFilter` | `Record`<`string`, `Record`<`string`, `boolean`>> |
| `rowOrder` | `"key_a_to_z"` | `"value_a_to_z"` | `"value_z_to_a"` |
| `colOrder` | `"key_a_to_z"` | `"value_a_to_z"` | `"value_z_to_a"` |
| `unusedOrder` | `string`\[] |
| `menuLimit` | `number` |
| `hiddenAttributes` | `string`\[] |
| `hiddenFromAggregators` | `string`\[] |
| `hiddenFromDragDrop` | `string`\[] |
