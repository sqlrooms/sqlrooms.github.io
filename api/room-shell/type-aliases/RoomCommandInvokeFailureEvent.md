---
url: >-
  https://sqlrooms.org/api/room-shell/type-aliases/RoomCommandInvokeFailureEvent.md
---
[@sqlrooms/room-shell](../index.md) / RoomCommandInvokeFailureEvent

# Type Alias: RoomCommandInvokeFailureEvent\<RS>

> **RoomCommandInvokeFailureEvent**<`RS`> = [`RoomCommandInvokeStartEvent`](RoomCommandInvokeStartEvent.md)<`RS`> & `object`

## Type Declaration

| Name | Type |
| ------ | ------ |
| `result` | [`RoomCommandResult`](RoomCommandResult.md) |
| `durationMs` | `number` |

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `RS` *extends* [`BaseRoomStoreState`](BaseRoomStoreState.md) | [`BaseRoomStoreState`](BaseRoomStoreState.md) |
