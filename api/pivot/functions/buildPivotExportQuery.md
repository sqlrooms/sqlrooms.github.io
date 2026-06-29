---
url: 'https://sqlrooms.org/api/pivot/functions/buildPivotExportQuery.md'
---
[@sqlrooms/pivot](../index.md) / buildPivotExportQuery

# Function: buildPivotExportQuery()

> **buildPivotExportQuery**(`config`, `source`, `colKeys`): `string`

## Parameters

| Parameter | Type |
| ------ | ------ |
| `config` | { `rendererName`: `"Table"` | `"Table Heatmap"` | `"Table Col Heatmap"` | `"Table Row Heatmap"` | `"Exportable TSV"` | `"Grouped Column Chart"` | `"Stacked Column Chart"` | `"Grouped Bar Chart"` | `"Stacked Bar Chart"` | `"Line Chart"` | `"Dot Chart"` | `"Area Chart"` | `"Scatter Chart"` | `"Multiple Pie Chart"`; `aggregatorName`: `string`; `rows`: `string`\[]; `cols`: `string`\[]; `vals`: `string`\[]; `valueFilter`: `Record`<`string`, `Record`<`string`, `boolean`>>; `rowOrder`: `"key_a_to_z"` | `"value_a_to_z"` | `"value_z_to_a"`; `colOrder`: `"key_a_to_z"` | `"value_a_to_z"` | `"value_z_to_a"`; `unusedOrder`: `string`\[]; `menuLimit`: `number`; `hiddenAttributes`: `string`\[]; `hiddenFromAggregators`: `string`\[]; `hiddenFromDragDrop`: `string`\[]; } |
| `config.rendererName` | `"Table"` | `"Table Heatmap"` | `"Table Col Heatmap"` | `"Table Row Heatmap"` | `"Exportable TSV"` | `"Grouped Column Chart"` | `"Stacked Column Chart"` | `"Grouped Bar Chart"` | `"Stacked Bar Chart"` | `"Line Chart"` | `"Dot Chart"` | `"Area Chart"` | `"Scatter Chart"` | `"Multiple Pie Chart"` |
| `config.aggregatorName` | `string` |
| `config.rows` | `string`\[] |
| `config.cols` | `string`\[] |
| `config.vals` | `string`\[] |
| `config.valueFilter` | `Record`<`string`, `Record`<`string`, `boolean`>> |
| `config.rowOrder` | `"key_a_to_z"` | `"value_a_to_z"` | `"value_z_to_a"` |
| `config.colOrder` | `"key_a_to_z"` | `"value_a_to_z"` | `"value_z_to_a"` |
| `config.unusedOrder` | `string`\[] |
| `config.menuLimit` | `number` |
| `config.hiddenAttributes` | `string`\[] |
| `config.hiddenFromAggregators` | `string`\[] |
| `config.hiddenFromDragDrop` | `string`\[] |
| `source` | `PivotQueryInput` |
| `colKeys` | `string`\[] |

## Returns

`string`
