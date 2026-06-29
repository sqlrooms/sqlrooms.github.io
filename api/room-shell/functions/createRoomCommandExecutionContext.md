---
url: >-
  https://sqlrooms.org/api/room-shell/functions/createRoomCommandExecutionContext.md
---
[@sqlrooms/room-shell](../index.md) / createRoomCommandExecutionContext

# Function: createRoomCommandExecutionContext()

> **createRoomCommandExecutionContext**<`RS`>(`store`, `invocation?`): [`RoomCommandExecutionContext`](../type-aliases/RoomCommandExecutionContext.md)<`RS`>

## Type Parameters

| Type Parameter |
| ------ |
| `RS` *extends* [`BaseRoomStoreState`](../type-aliases/BaseRoomStoreState.md) |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `store` | `StoreApi`<`RS`> |
| `invocation?` | `Partial`<[`RoomCommandInvocation`](../type-aliases/RoomCommandInvocation.md)> |

## Returns

[`RoomCommandExecutionContext`](../type-aliases/RoomCommandExecutionContext.md)<`RS`>
