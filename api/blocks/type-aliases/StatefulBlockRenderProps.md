---
url: 'https://sqlrooms.org/api/blocks/type-aliases/StatefulBlockRenderProps.md'
---
[@sqlrooms/blocks](../index.md) / StatefulBlockRenderProps

# Type Alias: StatefulBlockRenderProps\<TRoomState>

> **StatefulBlockRenderProps**<`TRoomState`> = `object`

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

### readOnly?

> `optional` **readOnly?**: `boolean`

***

### getState?

> `optional` **getState?**: () => `TRoomState`

#### Returns

`TRoomState`
