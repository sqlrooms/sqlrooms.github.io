---
url: 'https://sqlrooms.org/api/mosaic/interfaces/ChartBuilderDialogProps.md'
---
[@sqlrooms/mosaic](../index.md) / ChartBuilderDialogProps

# Interface: ChartBuilderDialogProps

## Properties

### open

> **open**: `boolean`

Whether the dialog is open

***

### onOpenChange

> **onOpenChange**: (`open`) => `void`

Callback when dialog open state changes

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `open` | `boolean` |

#### Returns

`void`

***

### tableName

> **tableName**: `string`

Table name to use in generated specs

***

### columns

> **columns**: [`ChartBuilderColumn`](ChartBuilderColumn.md)\[]

Available columns for field selectors

***

### onCreateChart

> **onCreateChart**: (`title`, `config`) => `void`

Callback when a chart spec is created

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `title` | `string` |
| `config` | { `chartType`: `"histogram"`; `settings`: { `field?`: `string`; `maxBins?`: `number`; `color?`: `string`; }; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: `boolean`; `maxRows?`: `number`; `reason?`: `string`; }; } | { `chartType`: `"count-plot"`; `settings`: { `field?`: `string`; }; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: `boolean`; `maxRows?`: `number`; `reason?`: `string`; }; } | { `chartType`: `"line-chart"`; `settings`: { `x?`: `string`; `xInterval?`: `"second"` | `"minute"` | `"hour"` | `"day"` | `"week"` | `"month"` | `"quarter"` | `"year"`; `yFields?`: `object`\[]; `showLegend`: `boolean`; }; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: `boolean`; `maxRows?`: `number`; `reason?`: `string`; }; } | { `chartType`: `"scatter-plot"`; `settings`: { `x?`: `string`; `y?`: `string`; `size?`: `string`; }; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: `boolean`; `maxRows?`: `number`; `reason?`: `string`; }; } | { `chartType`: `"heatmap"`; `settings`: { `x?`: `string`; `y?`: `string`; }; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: `boolean`; `maxRows?`: `number`; `reason?`: `string`; }; } | { `chartType`: `"box-plot"`; `settings`: { `x?`: `string`; `y?`: `string`; }; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: `boolean`; `maxRows?`: `number`; `reason?`: `string`; }; } | { `chartType`: `"custom-spec"`; `settingsOpen?`: `boolean`; `settings`: { `vgPlotSpec?`: `unknown`; }; `dataPolicy?`: { `disabled?`: `boolean`; `maxRows?`: `number`; `reason?`: `string`; }; } | { `chartType`: `string`; `settings`: `Record`<`string`, `unknown`>; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: `boolean`; `maxRows?`: `number`; `reason?`: `string`; }; } |

#### Returns

`void`

***

### chartTypes?

> `optional` **chartTypes?**: [`ChartTypeDefinition`](../type-aliases/ChartTypeDefinition.md)\[]

Optional chart types to show (defaults to all registered types)
