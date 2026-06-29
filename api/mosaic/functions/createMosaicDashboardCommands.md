---
url: 'https://sqlrooms.org/api/mosaic/functions/createMosaicDashboardCommands.md'
---
[@sqlrooms/mosaic](../index.md) / createMosaicDashboardCommands

# Function: createMosaicDashboardCommands()

> **createMosaicDashboardCommands**<`TRoomState`>(): `RoomCommand`<`TRoomState`>\[]

Create reusable Mosaic dashboard commands for selected table and panel
mutations.

These commands delegate to the dashboard slice so UI code, agents, and
future automation share the same persistence behavior.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TRoomState` *extends* `DashboardCommandState` | `DashboardCommandState` |

## Returns

`RoomCommand`<`TRoomState`>\[]
