---
url: /api/vega/functions/createVegaChartTool.md
---
[@sqlrooms/vega](../index.md) / createVegaChartTool

# Function: createVegaChartTool()

> **createVegaChartTool**(`options`): `AiSliceTool`

Creates a VegaLite chart visualization tool for AI assistants

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | { `description`: `string`; } | Configuration options for the VegaChart tool |
| `options.description`? | `string` | Custom description for the tool (defaults to a standard description) |

## Returns

`AiSliceTool`

A tool that can be used with the AI assistant
