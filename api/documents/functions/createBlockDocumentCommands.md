---
url: https://sqlrooms.org/api/documents/functions/createBlockDocumentCommands.md
---
[@sqlrooms/documents](../index.md) / createBlockDocumentCommands

# Function: createBlockDocumentCommands()

> **createBlockDocumentCommands**<`TRoomState`>(`options?`): `RoomCommand`<`TRoomState`>\[]

Builds the set of room commands (list, get, create, append-blocks, …) for a
block-document artifact type using canonical `block-document.*` command IDs.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TRoomState` *extends* `BlockDocumentCommandState` | `BlockDocumentCommandState` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`CreateBlockDocumentCommandsOptions`](../type-aliases/CreateBlockDocumentCommandsOptions.md)<`TRoomState`> | Command group, default title, supported stateful block types, and optional generic-mutation constraints. When `allowedBlockTypes` includes `statefulBlock`, only types configured in `statefulBlockTypes` are accepted. |

## Returns

`RoomCommand`<`TRoomState`>\[]

The list of RoomCommands to register with the host store.
