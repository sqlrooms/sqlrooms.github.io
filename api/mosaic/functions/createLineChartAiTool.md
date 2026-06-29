---
url: 'https://sqlrooms.org/api/mosaic/functions/createLineChartAiTool.md'
---
[@sqlrooms/mosaic](../index.md) / createLineChartAiTool

# Function: createLineChartAiTool()

> **createLineChartAiTool**(`__namedParameters`): `Tool`<{ `tableName`: `string`; `title?`: `string`; `panelId?`: `string`; `reasoning`: `string`; `settings`: { `x`: `string`; `xInterval`: `"second"` | `"minute"` | `"hour"` | `"day"` | `"week"` | `"month"` | `"quarter"` | `"year"`; `yFields`: `object`\[]; `showLegend`: `boolean`; }; }, `ChartToolOutput`<{ `chartType`: `"line-chart"`; `settings`: { `x?`: `string`; `xInterval?`: `"second"` | `"minute"` | `"hour"` | `"day"` | `"week"` | `"month"` | `"quarter"` | `"year"`; `yFields?`: `object`\[]; `showLegend`: `boolean`; }; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: `boolean`; `maxRows?`: `number`; `reason?`: `string`; }; }>>

## Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | [`ChartToolParams`](../type-aliases/ChartToolParams.md) |

## Returns

`Tool`<{ `tableName`: `string`; `title?`: `string`; `panelId?`: `string`; `reasoning`: `string`; `settings`: { `x`: `string`; `xInterval`: `"second"` | `"minute"` | `"hour"` | `"day"` | `"week"` | `"month"` | `"quarter"` | `"year"`; `yFields`: `object`\[]; `showLegend`: `boolean`; }; }, `ChartToolOutput`<{ `chartType`: `"line-chart"`; `settings`: { `x?`: `string`; `xInterval?`: `"second"` | `"minute"` | `"hour"` | `"day"` | `"week"` | `"month"` | `"quarter"` | `"year"`; `yFields?`: `object`\[]; `showLegend`: `boolean`; }; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: `boolean`; `maxRows?`: `number`; `reason?`: `string`; }; }>>
