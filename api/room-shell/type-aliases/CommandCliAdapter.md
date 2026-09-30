---
url: https://sqlrooms.org/api/room-shell/type-aliases/CommandCliAdapter.md
---
[@sqlrooms/room-shell](../index.md) / CommandCliAdapter

# Type Alias: CommandCliAdapter

> **CommandCliAdapter** = `object`

Portable command discovery and execution surface for CLI callers.

## Properties

### listCommands

> **listCommands**: (`options?`) => [`RoomCommandDescriptor`](RoomCommandDescriptor.md)\[]

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | `Omit`<[`RoomCommandListOptions`](RoomCommandListOptions.md), `"surface"`> |

#### Returns

[`RoomCommandDescriptor`](RoomCommandDescriptor.md)\[]

***

### executeCommand

> **executeCommand**: (`commandId`, `input?`, `invocation?`) => `Promise`<[`RoomCommandResult`](RoomCommandResult.md)>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `commandId` | `string` |
| `input?` | `unknown` |
| `invocation?` | [`GuardedCommandInvocationOptions`](GuardedCommandInvocationOptions.md) |

#### Returns

`Promise`<[`RoomCommandResult`](RoomCommandResult.md)>
