---
url: >-
  https://sqlrooms.org/api/documents/type-aliases/CreateBlockDocumentCommandsOptions.md
---
[@sqlrooms/documents](../index.md) / CreateBlockDocumentCommandsOptions

# Type Alias: CreateBlockDocumentCommandsOptions\<TRoomState>

> **CreateBlockDocumentCommandsOptions**<`TRoomState`> = `object`

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TRoomState` *extends* `BlockDocumentCommandState` | `BlockDocumentCommandState` |

## Properties

### artifactType?

> `optional` **artifactType?**: `string`

***

### artifactLabel?

> `optional` **artifactLabel?**: `string`

***

### commandNamespace?

> `optional` **commandNamespace?**: `string`

***

### commandGroup?

> `optional` **commandGroup?**: `string`

***

### defaultTitle?

> `optional` **defaultTitle?**: `string`

***

### statefulBlockTypes?

> `optional` **statefulBlockTypes?**: [`BlockDocumentStatefulBlockCommandType`](BlockDocumentStatefulBlockCommandType.md)<`TRoomState`>\[]
