---
url: /api/room-shell/functions/createRoomStore.md
---
[@sqlrooms/room-shell](../index.md) / createRoomStore

# Function: createRoomStore()

> **createRoomStore**<`PC`, `RS`>(`stateCreator`): `object`

Create a room store with custom fields and methods

## Type Parameters

| Type Parameter |
| ------ |
| `PC` |
| `RS` *extends* [`RoomState`](../type-aliases/RoomState.md)<`PC`> |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `stateCreator` | [`StateCreator`](../type-aliases/StateCreator.md)<`RS`> |

## Returns

`object`

The room store and a hook for accessing the room store

| Name | Type |
| ------ | ------ |
|  `roomStore` | [`StoreApi`](../interfaces/StoreApi.md)<`RS`> |
|  `useRoomStore` | <`T`>(`selector`) => `T` |
