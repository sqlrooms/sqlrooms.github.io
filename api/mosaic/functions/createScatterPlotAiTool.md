---
url: 'https://sqlrooms.org/api/mosaic/functions/createScatterPlotAiTool.md'
---
[@sqlrooms/mosaic](../index.md) / createScatterPlotAiTool

# Function: createScatterPlotAiTool()

> **createScatterPlotAiTool**(`__namedParameters`): `Tool`<{ `tableName`: `string`; `title?`: `string`; `panelId?`: `string`; `reasoning`: `string`; `settings`: { `x`: `string`; `y`: `string`; `size`: `string`; }; }, `ChartToolOutput`<{ `chartType`: `"scatter-plot"`; `settings`: { `x?`: `string`; `y?`: `string`; `size?`: `string`; }; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: `boolean`; `maxRows?`: `number`; `reason?`: `string`; }; }>>

## Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | [`ChartToolParams`](../type-aliases/ChartToolParams.md) |

## Returns

`Tool`<{ `tableName`: `string`; `title?`: `string`; `panelId?`: `string`; `reasoning`: `string`; `settings`: { `x`: `string`; `y`: `string`; `size`: `string`; }; }, `ChartToolOutput`<{ `chartType`: `"scatter-plot"`; `settings`: { `x?`: `string`; `y?`: `string`; `size?`: `string`; }; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: `boolean`; `maxRows?`: `number`; `reason?`: `string`; }; }>>
