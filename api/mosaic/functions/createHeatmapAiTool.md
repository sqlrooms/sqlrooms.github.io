---
url: 'https://sqlrooms.org/api/mosaic/functions/createHeatmapAiTool.md'
---
[@sqlrooms/mosaic](../index.md) / createHeatmapAiTool

# Function: createHeatmapAiTool()

> **createHeatmapAiTool**(`__namedParameters`): `Tool`<{ `tableName`: `string`; `title?`: `string`; `panelId?`: `string`; `reasoning`: `string`; `settings`: { `x`: `string`; `y`: `string`; }; }, `ChartToolOutput`<{ `chartType`: `"heatmap"`; `settings`: { `x?`: `string`; `y?`: `string`; }; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: `boolean`; `maxRows?`: `number`; `reason?`: `string`; }; }>>

## Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | [`ChartToolParams`](../type-aliases/ChartToolParams.md) |

## Returns

`Tool`<{ `tableName`: `string`; `title?`: `string`; `panelId?`: `string`; `reasoning`: `string`; `settings`: { `x`: `string`; `y`: `string`; }; }, `ChartToolOutput`<{ `chartType`: `"heatmap"`; `settings`: { `x?`: `string`; `y?`: `string`; }; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: `boolean`; `maxRows?`: `number`; `reason?`: `string`; }; }>>
