---
url: >-
  https://sqlrooms.org/api/room-shell/type-aliases/RoomCommandInvokeStartEvent.md
---
[@sqlrooms/room-shell](../index.md) / RoomCommandInvokeStartEvent

# Type Alias: RoomCommandInvokeStartEvent\<RS>

> **RoomCommandInvokeStartEvent**<`RS`> = `object`

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `RS` *extends* [`BaseRoomStoreState`](BaseRoomStoreState.md) | [`BaseRoomStoreState`](BaseRoomStoreState.md) |

## Properties

### command

> **command**: [`RegisteredRoomCommand`](RegisteredRoomCommand.md)<`RS`>

***

### input

> **input**: `unknown`

***

### context

> **context**: [`RoomCommandExecutionContext`](RoomCommandExecutionContext.md)<`RS`>
