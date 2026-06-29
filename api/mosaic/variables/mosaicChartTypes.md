---
url: 'https://sqlrooms.org/api/mosaic/variables/mosaicChartTypes.md'
---
[@sqlrooms/mosaic](../index.md) / mosaicChartTypes

# Variable: mosaicChartTypes

> `const` **mosaicChartTypes**: `object`

Legacy compatibility exports for all available chart types.

## Type Declaration

| Name | Type | Default value |
| ------ | ------ | ------ |
|  `histogram` | `SpecChartTypeDefinition`<{ `chartType`: `"histogram"`; `settings`: { `field?`: `string`; `maxBins?`: `number`; `color?`: `string`; }; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: `boolean`; `maxRows?`: `number`; `reason?`: `string`; }; }> | `histogramChartType` |
|  `countPlot` | `SpecChartTypeDefinition`<{ `chartType`: `"count-plot"`; `settings`: { `field?`: `string`; }; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: `boolean`; `maxRows?`: `number`; `reason?`: `string`; }; }> | `countPlotChartType` |
|  `lineChart` | `SpecChartTypeDefinition`<{ `chartType`: `"line-chart"`; `settings`: { `x?`: `string`; `xInterval?`: `"second"` | `"minute"` | `"hour"` | `"day"` | `"week"` | `"month"` | `"quarter"` | `"year"`; `yFields?`: `object`\[]; `showLegend`: `boolean`; }; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: `boolean`; `maxRows?`: `number`; `reason?`: `string`; }; }> | `lineChartChartType` |
|  `heatmap` | `SpecChartTypeDefinition`<{ `chartType`: `"heatmap"`; `settings`: { `x?`: `string`; `y?`: `string`; }; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: `boolean`; `maxRows?`: `number`; `reason?`: `string`; }; }> | `heatmapChartType` |
|  `boxPlot` | `ComponentChartTypeDefinition`<{ `chartType`: `"box-plot"`; `settings`: { `x?`: `string`; `y?`: `string`; }; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: `boolean`; `maxRows?`: `number`; `reason?`: `string`; }; }> | `boxPlotChartType` |
|  `scatterPlot` | `SpecChartTypeDefinition`<{ `chartType`: `"scatter-plot"`; `settings`: { `x?`: `string`; `y?`: `string`; `size?`: `string`; }; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: `boolean`; `maxRows?`: `number`; `reason?`: `string`; }; }> | `scatterPlotChartType` |
|  `customSpec` | `SpecChartTypeDefinition`<{ `chartType`: `"custom-spec"`; `settingsOpen?`: `boolean`; `settings`: { `vgPlotSpec?`: `unknown`; }; `dataPolicy?`: { `disabled?`: `boolean`; `maxRows?`: `number`; `reason?`: `string`; }; }> | `customSpecChartType` |
