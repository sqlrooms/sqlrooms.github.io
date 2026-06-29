---
url: 'https://sqlrooms.org/api/pivot/functions/createOrReplacePivotRelations.md'
---
[@sqlrooms/pivot](../index.md) / createOrReplacePivotRelations

# Function: createOrReplacePivotRelations()

> **createOrReplacePivotRelations**(`args`): `Promise`<{ `cells?`: `string`; `rowTotals?`: `string`; `colTotals?`: `string`; `grandTotal?`: `string`; `export?`: `string`; }>

## Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | { `connector`: `DuckDbConnector`; `source`: [`PivotQuerySource`](../type-aliases/PivotQuerySource.md); `config`: { `rendererName`: `"Table"` | `"Table Heatmap"` | `"Table Col Heatmap"` | `"Table Row Heatmap"` | `"Exportable TSV"` | `"Grouped Column Chart"` | `"Stacked Column Chart"` | `"Grouped Bar Chart"` | `"Stacked Bar Chart"` | `"Line Chart"` | `"Dot Chart"` | `"Area Chart"` | `"Scatter Chart"` | `"Multiple Pie Chart"`; `aggregatorName`: `string`; `rows`: `string`\[]; `cols`: `string`\[]; `vals`: `string`\[]; `valueFilter`: `Record`<`string`, `Record`<`string`, `boolean`>>; `rowOrder`: `"key_a_to_z"` | `"value_a_to_z"` | `"value_z_to_a"`; `colOrder`: `"key_a_to_z"` | `"value_a_to_z"` | `"value_z_to_a"`; `unusedOrder`: `string`\[]; `menuLimit`: `number`; `hiddenAttributes`: `string`\[]; `hiddenFromAggregators`: `string`\[]; `hiddenFromDragDrop`: `string`\[]; }; `relationBaseName`: `string`; `schemaName?`: `string`; `signal?`: `AbortSignal`; } |
| `args.connector` | `DuckDbConnector` |
| `args.source` | [`PivotQuerySource`](../type-aliases/PivotQuerySource.md) |
| `args.config` | { `rendererName`: `"Table"` | `"Table Heatmap"` | `"Table Col Heatmap"` | `"Table Row Heatmap"` | `"Exportable TSV"` | `"Grouped Column Chart"` | `"Stacked Column Chart"` | `"Grouped Bar Chart"` | `"Stacked Bar Chart"` | `"Line Chart"` | `"Dot Chart"` | `"Area Chart"` | `"Scatter Chart"` | `"Multiple Pie Chart"`; `aggregatorName`: `string`; `rows`: `string`\[]; `cols`: `string`\[]; `vals`: `string`\[]; `valueFilter`: `Record`<`string`, `Record`<`string`, `boolean`>>; `rowOrder`: `"key_a_to_z"` | `"value_a_to_z"` | `"value_z_to_a"`; `colOrder`: `"key_a_to_z"` | `"value_a_to_z"` | `"value_z_to_a"`; `unusedOrder`: `string`\[]; `menuLimit`: `number`; `hiddenAttributes`: `string`\[]; `hiddenFromAggregators`: `string`\[]; `hiddenFromDragDrop`: `string`\[]; } |
| `args.config.rendererName` | `"Table"` | `"Table Heatmap"` | `"Table Col Heatmap"` | `"Table Row Heatmap"` | `"Exportable TSV"` | `"Grouped Column Chart"` | `"Stacked Column Chart"` | `"Grouped Bar Chart"` | `"Stacked Bar Chart"` | `"Line Chart"` | `"Dot Chart"` | `"Area Chart"` | `"Scatter Chart"` | `"Multiple Pie Chart"` |
| `args.config.aggregatorName` | `string` |
| `args.config.rows` | `string`\[] |
| `args.config.cols` | `string`\[] |
| `args.config.vals` | `string`\[] |
| `args.config.valueFilter` | `Record`<`string`, `Record`<`string`, `boolean`>> |
| `args.config.rowOrder` | `"key_a_to_z"` | `"value_a_to_z"` | `"value_z_to_a"` |
| `args.config.colOrder` | `"key_a_to_z"` | `"value_a_to_z"` | `"value_z_to_a"` |
| `args.config.unusedOrder` | `string`\[] |
| `args.config.menuLimit` | `number` |
| `args.config.hiddenAttributes` | `string`\[] |
| `args.config.hiddenFromAggregators` | `string`\[] |
| `args.config.hiddenFromDragDrop` | `string`\[] |
| `args.relationBaseName` | `string` |
| `args.schemaName?` | `string` |
| `args.signal?` | `AbortSignal` |

## Returns

`Promise`<{ `cells?`: `string`; `rowTotals?`: `string`; `colTotals?`: `string`; `grandTotal?`: `string`; `export?`: `string`; }>
