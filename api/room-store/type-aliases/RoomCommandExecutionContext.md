---
url: >-
  https://sqlrooms.org/api/room-store/type-aliases/RoomCommandExecutionContext.md
---
[@sqlrooms/room-store](../index.md) / RoomCommandExecutionContext

# Type Alias: RoomCommandExecutionContext\<RS>

> **RoomCommandExecutionContext**<`RS`> = `object`

Runtime context passed to room command predicates, validation, middleware,
and execution handlers. Its signal supports cooperative cancellation and is
not retained in serializable invocation or audit data.

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

***

### signal?

> `optional` **signal?**: `AbortSignal`

Signal supplied by the invoking surface, when it supports cancellation.
