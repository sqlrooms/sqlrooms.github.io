---
url: https://sqlrooms.org/api/room-shell/functions/invokeCommandWithPolicy.md
---
[@sqlrooms/room-shell](../index.md) / invokeCommandWithPolicy

# Function: invokeCommandWithPolicy()

> **invokeCommandWithPolicy**<`RS`>(`store`, `commandId`, `input`, `invocation`, `policy?`): `Promise`<[`RoomCommandResult`](../type-aliases/RoomCommandResult.md)>

Invoke a room command through the shared risk/confirmation guard.

Invocation surfaces must use this entry point when they can be driven by an
agent or external client. It deliberately evaluates the current descriptor
immediately before execution so disabled and confirmation-gated commands
fail closed.

## Type Parameters

| Type Parameter |
| ------ |
| `RS` *extends* [`BaseRoomStoreState`](../type-aliases/BaseRoomStoreState.md) |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `store` | `StoreApi`<`RS`> |
| `commandId` | `string` |
| `input` | `unknown` |
| `invocation` | [`RoomCommandInvocationOptions`](../type-aliases/RoomCommandInvocationOptions.md) |
| `policy?` | [`CommandInvocationPolicyOptions`](../type-aliases/CommandInvocationPolicyOptions.md) |

## Returns

`Promise`<[`RoomCommandResult`](../type-aliases/RoomCommandResult.md)>
