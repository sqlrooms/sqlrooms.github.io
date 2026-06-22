---
url: 'https://sqlrooms.org/api/vega/functions/createVegaChartTool.md'
---
[@sqlrooms/vega](../index.md) / createVegaChartTool

# Function: createVegaChartTool()

> **createVegaChartTool**(`options?`): `Tool`<{ `sqlQuery`: `string`; `vegaLiteSpec`: `string`; `reasoning`: `string`; }, { `error?`: `undefined`; `success`: `boolean`; `details`: `string`; `sqlQuery`: `string`; `vegaLiteSpec`: `null`; } | { `error?`: `undefined`; `success`: `boolean`; `details`: `string`; `sqlQuery`: `string`; `vegaLiteSpec`: `TopLevelSpec`; } | { `success`: `boolean`; `details`: `string`; `error`: `string`; `sqlQuery`: `string`; `vegaLiteSpec`: `null`; }>

Creates a VegaLite chart visualization tool for AI assistants

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`VegaChartToolOptions`](../type-aliases/VegaChartToolOptions.md) | Configuration options for the VegaChart tool |

## Returns

`Tool`<{ `sqlQuery`: `string`; `vegaLiteSpec`: `string`; `reasoning`: `string`; }, { `error?`: `undefined`; `success`: `boolean`; `details`: `string`; `sqlQuery`: `string`; `vegaLiteSpec`: `null`; } | { `error?`: `undefined`; `success`: `boolean`; `details`: `string`; `sqlQuery`: `string`; `vegaLiteSpec`: `TopLevelSpec`; } | { `success`: `boolean`; `details`: `string`; `error`: `string`; `sqlQuery`: `string`; `vegaLiteSpec`: `null`; }>

A tool that can be used with the AI assistant
