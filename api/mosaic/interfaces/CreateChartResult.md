---
url: https://sqlrooms.org/api/mosaic/interfaces/CreateChartResult.md
---
[@sqlrooms/mosaic](../index.md) / CreateChartResult

# Interface: CreateChartResult

## Properties

### panelId

> **panelId**: `string`

***

### artifactId

> **artifactId**: `string`

***

### tableName

> **tableName**: `string`

***

### title

> **title**: `string`

***

### config

> **config**: { `chartType`: `"histogram"`; `settings`: { `field?`: `string`; `maxBins?`: `number`; `color?`: `string`; }; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: `boolean`; `maxRows?`: `number`; `reason?`: `string`; }; } | { `chartType`: `"count-plot"`; `settings`: { `field?`: `string`; `metric`: `"count"` | `"aggregate"`; `valueField?`: `string`; `aggregate`: `"sum"` | `"max"` | `"min"` | `"avg"`; `sort`: `"value-desc"` | `"value-asc"` | `"label-asc"` | `"label-desc"`; `maxBars`: `number`; `leftMargin?`: `number`; }; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: `boolean`; `maxRows?`: `number`; `reason?`: `string`; }; } | { `chartType`: `"line-chart"`; `settings`: { `metric?`: `"count"` | `"aggregate"`; `x?`: `string`; `xInterval?`: `"second"` | `"minute"` | `"hour"` | `"day"` | `"week"` | `"month"` | `"quarter"` | `"year"`; `yFields?`: `object`\[]; `showLegend`: `boolean`; }; `lastAggregateYFields?`: `object`\[]; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: `boolean`; `maxRows?`: `number`; `reason?`: `string`; }; } | { `chartType`: `"scatter-plot"`; `settings`: { `x?`: `string`; `y?`: `string`; `size?`: `string`; }; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: `boolean`; `maxRows?`: `number`; `reason?`: `string`; }; } | { `chartType`: `"heatmap"`; `settings`: { `x?`: `string`; `y?`: `string`; }; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: `boolean`; `maxRows?`: `number`; `reason?`: `string`; }; } | { `chartType`: `"box-plot"`; `settings`: { `x?`: `string`; `y?`: `string`; }; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: `boolean`; `maxRows?`: `number`; `reason?`: `string`; }; } | { `chartType`: `"custom-spec"`; `settingsOpen?`: `boolean`; `settings`: { `vgPlotSpec?`: `unknown`; }; `dataPolicy?`: { `disabled?`: `boolean`; `maxRows?`: `number`; `reason?`: `string`; }; } | { `chartType`: `string`; `settings`: `Record`<`string`, `unknown`>; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: `boolean`; `maxRows?`: `number`; `reason?`: `string`; }; }

#### Union Members

##### Type Literal

{ `chartType`: `"histogram"`; `settings`: { `field?`: `string`; `maxBins?`: `number`; `color?`: `string`; }; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: `boolean`; `maxRows?`: `number`; `reason?`: `string`; }; }

***

##### Type Literal

{ `chartType`: `"count-plot"`; `settings`: { `field?`: `string`; `metric`: `"count"` | `"aggregate"`; `valueField?`: `string`; `aggregate`: `"sum"` | `"max"` | `"min"` | `"avg"`; `sort`: `"value-desc"` | `"value-asc"` | `"label-asc"` | `"label-desc"`; `maxBars`: `number`; `leftMargin?`: `number`; }; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: `boolean`; `maxRows?`: `number`; `reason?`: `string`; }; }

***

##### Type Literal

{ `chartType`: `"line-chart"`; `settings`: { `metric?`: `"count"` | `"aggregate"`; `x?`: `string`; `xInterval?`: `"second"` | `"minute"` | `"hour"` | `"day"` | `"week"` | `"month"` | `"quarter"` | `"year"`; `yFields?`: `object`\[]; `showLegend`: `boolean`; }; `lastAggregateYFields?`: `object`\[]; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: `boolean`; `maxRows?`: `number`; `reason?`: `string`; }; }

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `chartType` | `"line-chart"` | - | - |
| `settings` | { `metric?`: `"count"` | `"aggregate"`; `x?`: `string`; `xInterval?`: `"second"` | `"minute"` | `"hour"` | `"day"` | `"week"` | `"month"` | `"quarter"` | `"year"`; `yFields?`: `object`\[]; `showLegend`: `boolean`; } | `LineChartSettings` | - |
| `lastAggregateYFields?` | `object`\[] | - | Chart-local UI memory, kept outside the active count-series settings. |
| `settingsOpen?` | `boolean` | - | - |
| `dataPolicy?` | { `disabled?`: `boolean`; `maxRows?`: `number`; `reason?`: `string`; } | - | - |

***

##### Type Literal

{ `chartType`: `"scatter-plot"`; `settings`: { `x?`: `string`; `y?`: `string`; `size?`: `string`; }; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: `boolean`; `maxRows?`: `number`; `reason?`: `string`; }; }

***

##### Type Literal

{ `chartType`: `"heatmap"`; `settings`: { `x?`: `string`; `y?`: `string`; }; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: `boolean`; `maxRows?`: `number`; `reason?`: `string`; }; }

***

##### Type Literal

{ `chartType`: `"box-plot"`; `settings`: { `x?`: `string`; `y?`: `string`; }; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: `boolean`; `maxRows?`: `number`; `reason?`: `string`; }; }

***

##### Type Literal

{ `chartType`: `"custom-spec"`; `settingsOpen?`: `boolean`; `settings`: { `vgPlotSpec?`: `unknown`; }; `dataPolicy?`: { `disabled?`: `boolean`; `maxRows?`: `number`; `reason?`: `string`; }; }

***

##### Type Literal

{ `chartType`: `string`; `settings`: `Record`<`string`, `unknown`>; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: `boolean`; `maxRows?`: `number`; `reason?`: `string`; }; }
