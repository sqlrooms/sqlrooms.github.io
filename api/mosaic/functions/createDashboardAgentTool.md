---
url: 'https://sqlrooms.org/api/mosaic/functions/createDashboardAgentTool.md'
---
[@sqlrooms/mosaic](../index.md) / createDashboardAgentTool

# Function: createDashboardAgentTool()

> **createDashboardAgentTool**<`TState`>(`options`): `Tool`

Creates an AI agent tool for populating dashboards with charts and interactive panels.
The agent explores data through queries and creates multiple panels showing different aspects.

## Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `TState` *extends* [`MosaicDashboardStoreState`](../type-aliases/MosaicDashboardStoreState.md) | Store state type extending MosaicDashboardStoreState |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`CreateDashboardAgentToolOptions`](../type-aliases/CreateDashboardAgentToolOptions.md)<`TState`> | Configuration options for the dashboard agent |

## Returns

`Tool`

Tool instance that orchestrates multi-turn dashboard creation via a ToolLoopAgent
