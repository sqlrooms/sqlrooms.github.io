---
url: >-
  https://sqlrooms.org/api/documents/type-aliases/CreateBlockDocumentCommandsOptions.md
---
[@sqlrooms/documents](../index.md) / CreateBlockDocumentCommandsOptions

# Type Alias: CreateBlockDocumentCommandsOptions\<TRoomState>

> **CreateBlockDocumentCommandsOptions**<`TRoomState`> = `object`

Configuration for a reusable block-document command family.

`allowedBlockTypes` constrains generic block mutations. If it includes
`statefulBlock`, an individual stateful block is accepted only when its
`blockType` is also configured in `statefulBlockTypes`.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TRoomState` *extends* `BlockDocumentCommandState` | `BlockDocumentCommandState` |

## Properties

### commandGroup?

> `optional` **commandGroup?**: `string`

***

### defaultTitle?

> `optional` **defaultTitle?**: `string`

***

### statefulBlockTypes?

> `optional` **statefulBlockTypes?**: [`BlockDocumentStatefulBlockCommandType`](BlockDocumentStatefulBlockCommandType.md)<`TRoomState`>\[]

***

### allowedBlockTypes?

> `optional` **allowedBlockTypes?**: readonly [`BlockDocumentBlock`](BlockDocumentBlock.md)\[`"type"`]\[]

Top-level block kinds accepted by generic create, append, insert, and
update commands. Omit to accept every block kind.

When `statefulBlock` is allowed, its `blockType` must also be present in
`statefulBlockTypes`.
