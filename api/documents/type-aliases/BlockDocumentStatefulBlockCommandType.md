---
url: >-
  https://sqlrooms.org/api/documents/type-aliases/BlockDocumentStatefulBlockCommandType.md
---
[@sqlrooms/documents](../index.md) / BlockDocumentStatefulBlockCommandType

# Type Alias: BlockDocumentStatefulBlockCommandType\<TRoomState>

> **BlockDocumentStatefulBlockCommandType**<`TRoomState`> = `object`

## Type Parameters

| Type Parameter |
| ------ |
| `TRoomState` |

## Properties

### blockType

> **blockType**: `string`

***

### label?

> `optional` **label?**: `string`

***

### description?

> `optional` **description?**: `string`

***

### defaultTitle?

> `optional` **defaultTitle?**: `string`

***

### defaultHeight?

> `optional` **defaultHeight?**: `number`

***

### ensureState?

> `optional` **ensureState?**: (`context`) => `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `context` | [`BlockDocumentStatefulBlockCommandContext`](BlockDocumentStatefulBlockCommandContext.md)<`TRoomState`> |

#### Returns

`void`
