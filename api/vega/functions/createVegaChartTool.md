---
url: /api/vega/functions/createVegaChartTool.md
---
[@sqlrooms/vega](../index.md) / createVegaChartTool

# Function: createVegaChartTool()

> **createVegaChartTool**(`options`): `OpenAssistantTool`<`ZodObject`<{ `sqlQuery`: `ZodString`; `vegaLiteSpec`: `ZodString`; `reasoning`: `ZodString`; }, `$strip`>, `VegaChartToolLlmResult`, `VegaChartToolAdditionalData`, `unknown`>

Creates a VegaLite chart visualization tool for AI assistants

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`VegaChartToolOptions`](../type-aliases/VegaChartToolOptions.md) | Configuration options for the VegaChart tool |

## Returns

`OpenAssistantTool`<`ZodObject`<{ `sqlQuery`: `ZodString`; `vegaLiteSpec`: `ZodString`; `reasoning`: `ZodString`; }, `$strip`>, `VegaChartToolLlmResult`, `VegaChartToolAdditionalData`, `unknown`>

A tool that can be used with the AI assistant
