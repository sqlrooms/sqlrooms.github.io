---
url: 'https://sqlrooms.org/api/room-store/functions/invokeCommandFromStore.md'
---
[@sqlrooms/room-store](../index.md) / invokeCommandFromStore

# Function: invokeCommandFromStore()

> **invokeCommandFromStore**<`RS`>(`store`, `commandId`, `input?`, `invocation?`): `Promise`<[`RoomCommandResult`](../type-aliases/RoomCommandResult.md)<`unknown`>>

## Type Parameters

| Type Parameter |
| ------ |
| `RS` *extends* [`BaseRoomStoreState`](../type-aliases/BaseRoomStoreState.md) |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `store` | `StoreApi`<`RS`> |
| `commandId` | `string` |
| `input?` | `unknown` |
| `invocation?` | `Partial`<[`RoomCommandInvocation`](../type-aliases/RoomCommandInvocation.md)> |

## Returns

`Promise`<[`RoomCommandResult`](../type-aliases/RoomCommandResult.md)<`unknown`>>
