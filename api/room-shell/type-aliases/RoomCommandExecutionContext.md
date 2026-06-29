---
url: >-
  https://sqlrooms.org/api/room-shell/type-aliases/RoomCommandExecutionContext.md
---
[@sqlrooms/room-shell](../index.md) / RoomCommandExecutionContext

# Type Alias: RoomCommandExecutionContext\<RS>

> **RoomCommandExecutionContext**<`RS`> = `object`

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `RS` *extends* [`BaseRoomStoreState`](BaseRoomStoreState.md) | [`BaseRoomStoreState`](BaseRoomStoreState.md) |

## Properties

### store

> **store**: `StoreApi`<`RS`>

***

### getState

> **getState**: () => `RS`

#### Returns

`RS`

***

### invocation

> **invocation**: [`RoomCommandInvocation`](RoomCommandInvocation.md)
