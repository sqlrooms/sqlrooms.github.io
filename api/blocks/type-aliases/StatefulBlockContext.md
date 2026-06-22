---
url: 'https://sqlrooms.org/api/blocks/type-aliases/StatefulBlockContext.md'
---
[@sqlrooms/blocks](../index.md) / StatefulBlockContext

# Type Alias: StatefulBlockContext\<TRoomState>

> **StatefulBlockContext**<`TRoomState`> = `object`

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TRoomState` | `unknown` |

## Properties

### blockId

> **blockId**: [`BlockId`](BlockId.md)

***

### blockType

> **blockType**: [`BlockType`](BlockType.md)

***

### title?

> `optional` **title?**: `string`

***

### attrs?

> `optional` **attrs?**: `Record`<`string`, `unknown`>

***

### getState

> **getState**: () => `TRoomState`

#### Returns

`TRoomState`
