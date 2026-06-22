---
url: >-
  https://sqlrooms.org/api/deck/functions/createDashboardAgentToolWithDeckMaps.md
---
[@sqlrooms/deck](../index.md) / createDashboardAgentToolWithDeckMaps

# Function: createDashboardAgentToolWithDeckMaps()

> **createDashboardAgentToolWithDeckMaps**<`TState`>(`options`): `Tool`

Creates a dashboard agent tool with built-in Deck.gl map support.
Extends the standard dashboard agent with map creation capabilities.

## Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `TState` *extends* `MosaicDashboardStoreState` | Store state type extending MosaicDashboardStoreState |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | `CreateDashboardAgentToolOptions`<`TState`> | Dashboard agent configuration options |

## Returns

`Tool`

Dashboard agent tool with map support
