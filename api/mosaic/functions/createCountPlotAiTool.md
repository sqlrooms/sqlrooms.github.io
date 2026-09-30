---
url: https://sqlrooms.org/api/mosaic/functions/createCountPlotAiTool.md
---
[@sqlrooms/mosaic](../index.md) / createCountPlotAiTool

# Function: createCountPlotAiTool()

> **createCountPlotAiTool**(`__namedParameters`): `Tool`<{ `tableName`: `string`; `title?`: `string`; `panelId?`: `string`; `reasoning`: `string`; `settings`: { `field`: `string`; `metric?`: `"count"` | `"aggregate"`; `valueField?`: `string`; `aggregate?`: `"sum"` | `"max"` | `"min"` | `"avg"`; `sort?`: `"value-desc"` | `"value-asc"` | `"label-asc"` | `"label-desc"`; `maxBars?`: `number`; `leftMargin?`: `number`; }; }, `ChartToolOutput`<{ `chartType`: `"count-plot"`; `settings`: { `field?`: `string`; `metric`: `"count"` | `"aggregate"`; `valueField?`: `string`; `aggregate`: `"sum"` | `"max"` | `"min"` | `"avg"`; `sort`: `"value-desc"` | `"value-asc"` | `"label-asc"` | `"label-desc"`; `maxBars`: `number`; `leftMargin?`: `number`; }; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: `boolean`; `maxRows?`: `number`; `reason?`: `string`; }; }>>

## Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | [`ChartToolParams`](../type-aliases/ChartToolParams.md) |

## Returns

`Tool`<{ `tableName`: `string`; `title?`: `string`; `panelId?`: `string`; `reasoning`: `string`; `settings`: { `field`: `string`; `metric?`: `"count"` | `"aggregate"`; `valueField?`: `string`; `aggregate?`: `"sum"` | `"max"` | `"min"` | `"avg"`; `sort?`: `"value-desc"` | `"value-asc"` | `"label-asc"` | `"label-desc"`; `maxBars?`: `number`; `leftMargin?`: `number`; }; }, `ChartToolOutput`<{ `chartType`: `"count-plot"`; `settings`: { `field?`: `string`; `metric`: `"count"` | `"aggregate"`; `valueField?`: `string`; `aggregate`: `"sum"` | `"max"` | `"min"` | `"avg"`; `sort`: `"value-desc"` | `"value-asc"` | `"label-asc"` | `"label-desc"`; `maxBars`: `number`; `leftMargin?`: `number`; }; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: `boolean`; `maxRows?`: `number`; `reason?`: `string`; }; }>>
