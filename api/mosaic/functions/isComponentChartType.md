---
url: https://sqlrooms.org/api/mosaic/functions/isComponentChartType.md
---
[@sqlrooms/mosaic](../index.md) / isComponentChartType

# Function: isComponentChartType()

> **isComponentChartType**<`TConfig`>(`chartType`): `chartType is ComponentChartTypeDefinition<TConfig>`

## Type Parameters

| Type Parameter |
| ------ |
| `TConfig` *extends* { `chartType`: `"histogram"`; `settings`: { `field?`: `string`; `maxBins?`: `number`; `color?`: `string`; }; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: `boolean`; `maxRows?`: `number`; `reason?`: `string`; }; } | { `chartType`: `"count-plot"`; `settings`: { `field?`: `string`; `metric`: `"count"` | `"aggregate"`; `valueField?`: `string`; `aggregate`: `"sum"` | `"max"` | `"min"` | `"avg"`; `sort`: `"value-desc"` | `"value-asc"` | `"label-asc"` | `"label-desc"`; `maxBars`: `number`; `leftMargin?`: `number`; }; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: `boolean`; `maxRows?`: `number`; `reason?`: `string`; }; } | { `chartType`: `"line-chart"`; `settings`: { `metric?`: `"count"` | `"aggregate"`; `x?`: `string`; `xInterval?`: `"second"` | `"minute"` | `"hour"` | `"day"` | `"week"` | `"month"` | `"quarter"` | `"year"`; `yFields?`: `object`\[]; `showLegend`: `boolean`; }; `lastAggregateYFields?`: `object`\[]; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: `boolean`; `maxRows?`: `number`; `reason?`: `string`; }; } | { `chartType`: `"scatter-plot"`; `settings`: { `x?`: `string`; `y?`: `string`; `size?`: `string`; }; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: `boolean`; `maxRows?`: `number`; `reason?`: `string`; }; } | { `chartType`: `"heatmap"`; `settings`: { `x?`: `string`; `y?`: `string`; }; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: `boolean`; `maxRows?`: `number`; `reason?`: `string`; }; } | { `chartType`: `"box-plot"`; `settings`: { `x?`: `string`; `y?`: `string`; }; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: `boolean`; `maxRows?`: `number`; `reason?`: `string`; }; } | { `chartType`: `"custom-spec"`; `settingsOpen?`: `boolean`; `settings`: { `vgPlotSpec?`: `unknown`; }; `dataPolicy?`: { `disabled?`: `boolean`; `maxRows?`: `number`; `reason?`: `string`; }; } | { `chartType`: `string`; `settings`: `Record`<`string`, `unknown`>; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: `boolean`; `maxRows?`: `number`; `reason?`: `string`; }; } |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `chartType` | [`ChartTypeDefinition`](../type-aliases/ChartTypeDefinition.md)<`TConfig`> |

## Returns

`chartType is ComponentChartTypeDefinition<TConfig>`
