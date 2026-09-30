---
url: https://sqlrooms.org/api/mosaic/functions/createLineChartAiTool.md
---
[@sqlrooms/mosaic](../index.md) / createLineChartAiTool

# Function: createLineChartAiTool()

> **createLineChartAiTool**(`__namedParameters`): `Tool`<{ `tableName`: `string`; `title?`: `string`; `panelId?`: `string`; `reasoning`: `string`; `settings`: { `metric?`: `"count"` | `"aggregate"`; `x`: `string`; `xInterval?`: `"second"` | `"minute"` | `"hour"` | `"day"` | `"week"` | `"month"` | `"quarter"` | `"year"`; `yFields?`: `object`\[]; `showLegend`: `boolean`; }; }, `ChartToolOutput`<{ `chartType`: `"line-chart"`; `settings`: { `metric?`: `"count"` | `"aggregate"`; `x?`: `string`; `xInterval?`: `"second"` | `"minute"` | `"hour"` | `"day"` | `"week"` | `"month"` | `"quarter"` | `"year"`; `yFields?`: `object`\[]; `showLegend`: `boolean`; }; `lastAggregateYFields?`: `object`\[]; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: `boolean`; `maxRows?`: `number`; `reason?`: `string`; }; }>>

Create an AI tool that validates count/numeric settings before invoking the
host's chart callback. Existing panel targets are forwarded for in-place
editing; validation or host failures are returned as unsuccessful results.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | [`ChartToolParams`](../type-aliases/ChartToolParams.md) |

## Returns

`Tool`<{ `tableName`: `string`; `title?`: `string`; `panelId?`: `string`; `reasoning`: `string`; `settings`: { `metric?`: `"count"` | `"aggregate"`; `x`: `string`; `xInterval?`: `"second"` | `"minute"` | `"hour"` | `"day"` | `"week"` | `"month"` | `"quarter"` | `"year"`; `yFields?`: `object`\[]; `showLegend`: `boolean`; }; }, `ChartToolOutput`<{ `chartType`: `"line-chart"`; `settings`: { `metric?`: `"count"` | `"aggregate"`; `x?`: `string`; `xInterval?`: `"second"` | `"minute"` | `"hour"` | `"day"` | `"week"` | `"month"` | `"quarter"` | `"year"`; `yFields?`: `object`\[]; `showLegend`: `boolean`; }; `lastAggregateYFields?`: `object`\[]; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: `boolean`; `maxRows?`: `number`; `reason?`: `string`; }; }>>
