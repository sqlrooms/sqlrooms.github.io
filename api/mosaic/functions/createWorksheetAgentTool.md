---
url: 'https://sqlrooms.org/api/mosaic/functions/createWorksheetAgentTool.md'
---
[@sqlrooms/mosaic](../index.md) / createWorksheetAgentTool

# Function: createWorksheetAgentTool()

> **createWorksheetAgentTool**<`TState`>(`options`): `Tool`

Creates an AI agent tool for building interactive data analysis worksheets with charts, text, and dashboard blocks.

## Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `TState` *extends* [`MosaicDashboardStoreState`](../type-aliases/MosaicDashboardStoreState.md) | Store state type extending MosaicDashboardStoreState |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`CreateWorksheetAgentToolOptions`](../type-aliases/CreateWorksheetAgentToolOptions.md)<`TState`> | Configuration options for the worksheet agent |

## Returns

`Tool`

Tool instance that orchestrates multi-turn worksheet creation via a ToolLoopAgent
