---
url: 'https://sqlrooms.org/api/pivot/type-aliases/PivotSliceItem-1.md'
---
[@sqlrooms/pivot](../index.md) / PivotSliceItem

# Type Alias: PivotSliceItem

> **PivotSliceItem** = `object`

## Type Declaration

| Name | Type | Default value |
| ------ | ------ | ------ |
|  `id` | `string` | - |
|  `title` | `string` | - |
|  `source?` | { `kind`: `"table"`; `tableName`: `string`; } | { `kind`: `"sql"`; `sqlId`: `string`; } | - |
|  `config` | { `rendererName`: `"Table"` | `"Table Heatmap"` | `"Table Col Heatmap"` | `"Table Row Heatmap"` | `"Exportable TSV"` | `"Grouped Column Chart"` | `"Stacked Column Chart"` | `"Grouped Bar Chart"` | `"Stacked Bar Chart"` | `"Line Chart"` | `"Dot Chart"` | `"Area Chart"` | `"Scatter Chart"` | `"Multiple Pie Chart"`; `aggregatorName`: `string`; `rows`: `string`\[]; `cols`: `string`\[]; `vals`: `string`\[]; `valueFilter`: `Record`<`string`, `Record`<`string`, `boolean`>>; `rowOrder`: `"key_a_to_z"` | `"value_a_to_z"` | `"value_z_to_a"`; `colOrder`: `"key_a_to_z"` | `"value_a_to_z"` | `"value_z_to_a"`; `unusedOrder`: `string`\[]; `menuLimit`: `number`; `hiddenAttributes`: `string`\[]; `hiddenFromAggregators`: `string`\[]; `hiddenFromDragDrop`: `string`\[]; } | `PivotConfig` |
|  `status` | { `state`: `"success"` | `"error"` | `"idle"` | `"running"` | `"cancel"`; `stale`: `boolean`; `lastError?`: `string`; `lastRunTime?`: `number`; `relations?`: { `cells?`: `string`; `rowTotals?`: `string`; `colTotals?`: `string`; `grandTotal?`: `string`; `export?`: `string`; }; `sourceRelation?`: `string`; } | - |
