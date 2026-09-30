---
url: https://sqlrooms.org/api/room-store/type-aliases/CommandMcpAdapter.md
---
[@sqlrooms/room-store](../index.md) / CommandMcpAdapter

# Type Alias: CommandMcpAdapter

> **CommandMcpAdapter** = `object`

Portable MCP tool catalog and guarded command invocation adapter.

## Properties

### listTools

> **listTools**: () => [`CommandMcpToolDescriptor`](CommandMcpToolDescriptor.md)\[]

#### Returns

[`CommandMcpToolDescriptor`](CommandMcpToolDescriptor.md)\[]

***

### resolveCommandId

> **resolveCommandId**: (`toolName`) => `string` | `undefined`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `toolName` | `string` |

#### Returns

`string` | `undefined`

***

### callTool

> **callTool**: (`toolName`, `input?`, `invocation?`) => `Promise`<[`RoomCommandResult`](RoomCommandResult.md)>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `toolName` | `string` |
| `input?` | `unknown` |
| `invocation?` | [`GuardedCommandInvocationOptions`](GuardedCommandInvocationOptions.md) |

#### Returns

`Promise`<[`RoomCommandResult`](RoomCommandResult.md)>
