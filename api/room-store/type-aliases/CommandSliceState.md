---
url: 'https://sqlrooms.org/api/room-store/type-aliases/CommandSliceState.md'
---
[@sqlrooms/room-store](../index.md) / CommandSliceState

# Type Alias: CommandSliceState\<RS>

> **CommandSliceState**<`RS`> = `object`

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `RS` *extends* [`BaseRoomStoreState`](BaseRoomStoreState.md) | [`BaseRoomStoreState`](BaseRoomStoreState.md) |

## Properties

### commands

> **commands**: `object`

| Name | Type |
| ------ | ------ |
| `registry` | `Record`<`string`, [`RegisteredRoomCommand`](RegisteredRoomCommand.md)<`RS`>> |
| `ownerToCommandIds` | `Record`<`string`, `string`\[]> |
| `registerCommand()` | (`owner`, `command`) => `void` |
| `registerCommands()` | (`owner`, `commands`) => `void` |
| `unregisterCommand()` | (`commandId`) => `void` |
| `unregisterCommands()` | (`owner`) => `void` |
| `getCommand()` | (`commandId`) => [`RegisteredRoomCommand`](RegisteredRoomCommand.md)<`RS`> | `undefined` |
| `listCommands()` | (`options?`) => [`RoomCommandDescriptor`](RoomCommandDescriptor.md)\[] |
| `invokeCommand()` | (`commandId`, `input?`, `invocation?`) => `Promise`<[`RoomCommandResult`](RoomCommandResult.md)> |
| `executeCommand()` | (`commandId`, `input?`, `invocation?`) => `Promise`<[`RoomCommandResult`](RoomCommandResult.md)<`unknown`>> |
