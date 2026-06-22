---
url: 'https://sqlrooms.org/api/room-store/functions/validateCommandInput.md'
---
[@sqlrooms/room-store](../index.md) / validateCommandInput

# Function: validateCommandInput()

> **validateCommandInput**<`RS`>(`command`, `input`, `context`): `Promise`<`unknown`>

## Type Parameters

| Type Parameter |
| ------ |
| `RS` *extends* [`BaseRoomStoreState`](../type-aliases/BaseRoomStoreState.md) |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `command` | [`RoomCommand`](../type-aliases/RoomCommand.md)<`RS`> |
| `input` | `unknown` |
| `context` | [`RoomCommandExecutionContext`](../type-aliases/RoomCommandExecutionContext.md)<`RS`> |

## Returns

`Promise`<`unknown`>
