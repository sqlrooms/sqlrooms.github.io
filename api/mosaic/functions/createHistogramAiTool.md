---
url: 'https://sqlrooms.org/api/mosaic/functions/createHistogramAiTool.md'
---
[@sqlrooms/mosaic](../index.md) / createHistogramAiTool

# Function: createHistogramAiTool()

> **createHistogramAiTool**(`params`): `Tool`<{ `tableName`: `string`; `title?`: `string`; `panelId?`: `string`; `reasoning`: `string`; `settings`: { `field`: `string`; `maxBins`: `number`; `color`: `string`; }; }, `ChartToolOutput`<{ `chartType`: `"histogram"`; `settings`: { `field?`: `string`; `maxBins?`: `number`; `color?`: `string`; }; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: `boolean`; `maxRows?`: `number`; `reason?`: `string`; }; }>>

Creates an AI tool for generating histogram charts.
Histograms show distribution of numeric values by grouping data into bins/ranges.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | [`ChartToolParams`](../type-aliases/ChartToolParams.md) | Chart tool parameters |

## Returns

`Tool`<{ `tableName`: `string`; `title?`: `string`; `panelId?`: `string`; `reasoning`: `string`; `settings`: { `field`: `string`; `maxBins`: `number`; `color`: `string`; }; }, `ChartToolOutput`<{ `chartType`: `"histogram"`; `settings`: { `field?`: `string`; `maxBins?`: `number`; `color?`: `string`; }; `settingsOpen?`: `boolean`; `dataPolicy?`: { `disabled?`: `boolean`; `maxRows?`: `number`; `reason?`: `string`; }; }>>

AI tool instance for histogram chart creation
