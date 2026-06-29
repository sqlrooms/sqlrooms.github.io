---
url: 'https://sqlrooms.org/api/mosaic/type-aliases/MosaicDashboardSliceConfig.md'
---
[@sqlrooms/mosaic](../index.md) / MosaicDashboardSliceConfig

# Type Alias: MosaicDashboardSliceConfig

> **MosaicDashboardSliceConfig** = `object`

## Type Declaration

| Name | Type |
| ------ | ------ |
|  `dashboardsById` | `Record`<`string`, { `id`: `string`; `title`: `string`; `layoutType`: `"grid"` | `"dock"`; `selectedTable?`: `string`; `lastSelectedTable?`: `string`; `panels`: ({ `id`: `string`; `type`: `"vgplot"`; `title`: `string`; `config`: { `chartType`: `"histogram"`; `settings`: { `field?`: `string`; `maxBins?`: `number`; `color?`: `string`; }; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: ... | ... | ...; `maxRows?`: ... | ...; `reason?`: ... | ...; }; } | { `chartType`: `"count-plot"`; `settings`: { `field?`: `string`; }; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: ... | ... | ...; `maxRows?`: ... | ...; `reason?`: ... | ...; }; } | { `chartType`: `"line-chart"`; `settings`: { `x?`: `string`; `xInterval?`: `"second"` | `"minute"` | `"hour"` | `"day"` | `"week"` | `"month"` | `"quarter"` | `"year"`; `yFields?`: ...\[]; `showLegend`: `boolean`; }; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: ... | ... | ...; `maxRows?`: ... | ...; `reason?`: ... | ...; }; } | { `chartType`: `"scatter-plot"`; `settings`: { `x?`: `string`; `y?`: `string`; `size?`: `string`; }; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: ... | ... | ...; `maxRows?`: ... | ...; `reason?`: ... | ...; }; } | { `chartType`: `"heatmap"`; `settings`: { `x?`: `string`; `y?`: `string`; }; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: ... | ... | ...; `maxRows?`: ... | ...; `reason?`: ... | ...; }; } | { `chartType`: `"box-plot"`; `settings`: { `x?`: `string`; `y?`: `string`; }; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: ... | ... | ...; `maxRows?`: ... | ...; `reason?`: ... | ...; }; } | { `chartType`: `"custom-spec"`; `settingsOpen?`: `boolean`; `settings`: { `vgPlotSpec?`: `unknown`; }; `dataPolicy?`: { `disabled?`: ... | ... | ...; `maxRows?`: ... | ...; `reason?`: ... | ...; }; } | { `chartType`: `string`; `settings`: `Record`<`string`, `unknown`>; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: ... | ... | ...; `maxRows?`: ... | ...; `reason?`: ... | ...; }; }; } | { `id`: `string`; `type`: `"data-table-explorer"`; `title`: `string`; `config`: { `pageSize?`: `number`; }; } | { `id`: `string`; `type`: `string`; `title`: `string`; `config`: `Record`<`string`, `unknown`>; })\[]; `layout`: `LayoutNode` | `null`; `updatedAt`: `number`; }> |
