---
url: 'https://sqlrooms.org/api/mosaic/type-aliases/MosaicDashboardEntry.md'
---
[@sqlrooms/mosaic](../index.md) / MosaicDashboardEntry

# Type Alias: MosaicDashboardEntry

> **MosaicDashboardEntry** = `object`

## Type Declaration

| Name | Type |
| ------ | ------ |
|  `id` | `string` |
|  `title` | `string` |
|  `layoutType` | `"grid"` | `"dock"` |
|  `selectedTable?` | `string` |
|  `panels` | ({ `id`: `string`; `type`: `"vgplot"`; `title`: `string`; `source?`: { `tableName?`: `string`; `sqlQuery?`: `string`; }; `config`: { `chartType`: `"histogram"`; `settings`: { `field?`: `string`; `maxBins?`: `number`; `color?`: `string`; }; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: `boolean`; `maxRows?`: `number`; `reason?`: `string`; }; } | { `chartType`: `"count-plot"`; `settings`: { `field?`: `string`; }; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: `boolean`; `maxRows?`: `number`; `reason?`: `string`; }; } | { `chartType`: `"line-chart"`; `settings`: { `x?`: `string`; `xInterval?`: `"second"` | `"minute"` | `"hour"` | `"day"` | `"week"` | `"month"` | `"quarter"` | `"year"`; `yFields?`: `object`\[]; `showLegend`: `boolean`; }; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: `boolean`; `maxRows?`: `number`; `reason?`: `string`; }; } | { `chartType`: `"scatter-plot"`; `settings`: { `x?`: `string`; `y?`: `string`; `size?`: `string`; }; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: `boolean`; `maxRows?`: `number`; `reason?`: `string`; }; } | { `chartType`: `"heatmap"`; `settings`: { `x?`: `string`; `y?`: `string`; }; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: `boolean`; `maxRows?`: `number`; `reason?`: `string`; }; } | { `chartType`: `"box-plot"`; `settings`: { `x?`: `string`; `y?`: `string`; }; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: `boolean`; `maxRows?`: `number`; `reason?`: `string`; }; } | { `chartType`: `"custom-spec"`; `settingsOpen?`: `boolean`; `settings`: { `vgPlotSpec?`: `unknown`; }; `dataPolicy?`: { `disabled?`: `boolean`; `maxRows?`: `number`; `reason?`: `string`; }; } | { `chartType`: `string`; `settings`: `Record`<`string`, `unknown`>; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: `boolean`; `maxRows?`: `number`; `reason?`: `string`; }; }; } | { `id`: `string`; `type`: `"data-table-explorer"`; `title`: `string`; `source?`: { `tableName?`: `string`; `sqlQuery?`: `string`; }; `config`: { `pageSize?`: `number`; }; } | { `id`: `string`; `type`: `string`; `title`: `string`; `source?`: { `tableName?`: `string`; `sqlQuery?`: `string`; }; `config`: `Record`<`string`, `unknown`>; })\[] |
|  `layout` | `LayoutNode` | `null` |
|  `updatedAt` | `number` |
