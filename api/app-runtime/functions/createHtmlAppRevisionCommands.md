---
url: >-
  https://sqlrooms.org/api/app-runtime/functions/createHtmlAppRevisionCommands.md
---
[@sqlrooms/app-runtime](../index.md) / createHtmlAppRevisionCommands

# Function: createHtmlAppRevisionCommands()

> **createHtmlAppRevisionCommands**<`TRoomState`>(`options`): `RoomCommand`<`TRoomState`>\[]

Create room commands for writing, renaming, restoring, undoing, and redoing
HTML app revisions.

## Type Parameters

| Type Parameter |
| ------ |
| `TRoomState` *extends* `BaseRoomStoreState` |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`CreateHtmlAppRevisionCommandsOptions`](../type-aliases/CreateHtmlAppRevisionCommandsOptions.md)<`TRoomState`> |

## Returns

`RoomCommand`<`TRoomState`>\[]
