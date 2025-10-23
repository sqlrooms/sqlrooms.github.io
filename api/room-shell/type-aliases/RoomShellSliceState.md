---
url: /api/room-shell/type-aliases/RoomShellSliceState.md
---
[@sqlrooms/room-shell](../index.md) / RoomShellSliceState

# Type Alias: RoomShellSliceState\<PC>

> **RoomShellSliceState**<`PC`>: [`RoomState`](RoomState.md)<`PC`> & `object` & `DuckDbSliceState` & `LayoutSliceState`

## Type declaration

| Name | Type |
| ------ | ------ |
| `initialize`? | () => `Promise`<`void`> |
| `config` | `PC` |
| `room` | `RoomShellSliceStateProps`<`PC`> & `RoomShellSliceStateActions`<`PC`> |

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `PC` *extends* [`BaseRoomConfig`](BaseRoomConfig.md) | [`BaseRoomConfig`](BaseRoomConfig.md) |
