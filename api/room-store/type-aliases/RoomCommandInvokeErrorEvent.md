---
url: >-
  https://sqlrooms.org/api/room-store/type-aliases/RoomCommandInvokeErrorEvent.md
---
[@sqlrooms/room-store](../index.md) / RoomCommandInvokeErrorEvent

# Type Alias: RoomCommandInvokeErrorEvent\<RS>

> **RoomCommandInvokeErrorEvent**<`RS`> = [`RoomCommandInvokeStartEvent`](RoomCommandInvokeStartEvent.md)<`RS`> & `object`

## Type Declaration

| Name | Type |
| ------ | ------ |
| `error` | `unknown` |
| `durationMs` | `number` |

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `RS` *extends* [`BaseRoomStoreState`](BaseRoomStoreState.md) | [`BaseRoomStoreState`](BaseRoomStoreState.md) |
