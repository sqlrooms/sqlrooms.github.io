---
url: /api/room-shell/functions/createRoomSlice.md
---
[@sqlrooms/room-shell](../index.md) / createRoomSlice

# Function: createRoomSlice()

> **createRoomSlice**<`PC`>(`props`?): [`StateCreator`](../type-aliases/StateCreator.md)<[`RoomState`](../type-aliases/RoomState.md)<`PC`>>

## Type Parameters

| Type Parameter |
| ------ |
| `PC` |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `props`? | { `config`: `PC`; `room`: `Partial`<`Omit`<[`RoomStateProps`](../type-aliases/RoomStateProps.md)<`PC`>, `"config"`>>; } |
| `props.config`? | `PC` |
| `props.room`? | `Partial`<`Omit`<[`RoomStateProps`](../type-aliases/RoomStateProps.md)<`PC`>, `"config"`>> |

## Returns

[`StateCreator`](../type-aliases/StateCreator.md)<[`RoomState`](../type-aliases/RoomState.md)<`PC`>>
