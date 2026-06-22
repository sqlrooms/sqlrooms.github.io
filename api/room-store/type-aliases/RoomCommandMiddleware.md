---
url: 'https://sqlrooms.org/api/room-store/type-aliases/RoomCommandMiddleware.md'
---
[@sqlrooms/room-store](../index.md) / RoomCommandMiddleware

# Type Alias: RoomCommandMiddleware\<RS>

> **RoomCommandMiddleware**<`RS`> = (`command`, `input`, `context`, `next`) => [`RoomCommandExecuteOutput`](RoomCommandExecuteOutput.md) | `Promise`<[`RoomCommandExecuteOutput`](RoomCommandExecuteOutput.md)>

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `RS` *extends* [`BaseRoomStoreState`](BaseRoomStoreState.md) | [`BaseRoomStoreState`](BaseRoomStoreState.md) |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `command` | [`RegisteredRoomCommand`](RegisteredRoomCommand.md)<`RS`> |
| `input` | `unknown` |
| `context` | [`RoomCommandExecutionContext`](RoomCommandExecutionContext.md)<`RS`> |
| `next` | [`RoomCommandMiddlewareNext`](RoomCommandMiddlewareNext.md) |

## Returns

[`RoomCommandExecuteOutput`](RoomCommandExecuteOutput.md) | `Promise`<[`RoomCommandExecuteOutput`](RoomCommandExecuteOutput.md)>
