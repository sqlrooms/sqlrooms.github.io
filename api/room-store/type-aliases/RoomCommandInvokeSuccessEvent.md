---
url: >-
  https://sqlrooms.org/api/room-store/type-aliases/RoomCommandInvokeSuccessEvent.md
---
[@sqlrooms/room-store](../index.md) / RoomCommandInvokeSuccessEvent

# Type Alias: RoomCommandInvokeSuccessEvent\<RS>

> **RoomCommandInvokeSuccessEvent**<`RS`> = [`RoomCommandInvokeStartEvent`](RoomCommandInvokeStartEvent.md)<`RS`> & `object`

## Type Declaration

| Name | Type |
| ------ | ------ |
| `result` | [`RoomCommandResult`](RoomCommandResult.md) |
| `durationMs` | `number` |

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `RS` *extends* [`BaseRoomStoreState`](BaseRoomStoreState.md) | [`BaseRoomStoreState`](BaseRoomStoreState.md) |
