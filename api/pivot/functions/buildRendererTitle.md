---
url: 'https://sqlrooms.org/api/pivot/functions/buildRendererTitle.md'
---
[@sqlrooms/pivot](../index.md) / buildRendererTitle

# Function: buildRendererTitle()

> **buildRendererTitle**(`config`, `transpose?`): `string`

## Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `config` | { `rendererName`: `"Table"` | `"Table Heatmap"` | `"Table Col Heatmap"` | `"Table Row Heatmap"` | `"Exportable TSV"` | `"Grouped Column Chart"` | `"Stacked Column Chart"` | `"Grouped Bar Chart"` | `"Stacked Bar Chart"` | `"Line Chart"` | `"Dot Chart"` | `"Area Chart"` | `"Scatter Chart"` | `"Multiple Pie Chart"`; `aggregatorName`: `string`; `rows`: `string`\[]; `cols`: `string`\[]; `vals`: `string`\[]; `valueFilter`: `Record`<`string`, `Record`<`string`, `boolean`>>; `rowOrder`: `"key_a_to_z"` | `"value_a_to_z"` | `"value_z_to_a"`; `colOrder`: `"key_a_to_z"` | `"value_a_to_z"` | `"value_z_to_a"`; `unusedOrder`: `string`\[]; `menuLimit`: `number`; `hiddenAttributes`: `string`\[]; `hiddenFromAggregators`: `string`\[]; `hiddenFromDragDrop`: `string`\[]; } | `undefined` |
| `config.rendererName` | `"Table"` | `"Table Heatmap"` | `"Table Col Heatmap"` | `"Table Row Heatmap"` | `"Exportable TSV"` | `"Grouped Column Chart"` | `"Stacked Column Chart"` | `"Grouped Bar Chart"` | `"Stacked Bar Chart"` | `"Line Chart"` | `"Dot Chart"` | `"Area Chart"` | `"Scatter Chart"` | `"Multiple Pie Chart"` | `...` |
| `config.aggregatorName` | `string` | `...` |
| `config.rows` | `string`\[] | `...` |
| `config.cols` | `string`\[] | `...` |
| `config.vals` | `string`\[] | `...` |
| `config.valueFilter` | `Record`<`string`, `Record`<`string`, `boolean`>> | `...` |
| `config.rowOrder` | `"key_a_to_z"` | `"value_a_to_z"` | `"value_z_to_a"` | `...` |
| `config.colOrder` | `"key_a_to_z"` | `"value_a_to_z"` | `"value_z_to_a"` | `...` |
| `config.unusedOrder` | `string`\[] | `...` |
| `config.menuLimit` | `number` | `...` |
| `config.hiddenAttributes` | `string`\[] | `...` |
| `config.hiddenFromAggregators` | `string`\[] | `...` |
| `config.hiddenFromDragDrop` | `string`\[] | `...` |
| `transpose` | `boolean` | `false` |

## Returns

`string`
