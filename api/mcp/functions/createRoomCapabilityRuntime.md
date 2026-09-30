---
url: https://sqlrooms.org/api/mcp/functions/createRoomCapabilityRuntime.md
---
[@sqlrooms/mcp](../index.md) / createRoomCapabilityRuntime

# Function: createRoomCapabilityRuntime()

> **createRoomCapabilityRuntime**(`options`): [`RoomCapabilityRuntime`](../type-aliases/RoomCapabilityRuntime.md)

Creates a transport-neutral runtime for discovering and invoking room
capabilities with schema validation, policy authorization, cancellation,
timeouts, and bounded JSON inputs and outputs.

Call [RoomCapabilityRuntime.dispose](../type-aliases/RoomCapabilityRuntime.md#dispose) when the host no longer exposes
the room so active invocations are cancelled and later calls are rejected.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`CreateRoomCapabilityRuntimeOptions`](../type-aliases/CreateRoomCapabilityRuntimeOptions.md) |

## Returns

[`RoomCapabilityRuntime`](../type-aliases/RoomCapabilityRuntime.md)
