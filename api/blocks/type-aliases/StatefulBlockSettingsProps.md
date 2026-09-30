---
url: https://sqlrooms.org/api/blocks/type-aliases/StatefulBlockSettingsProps.md
---
[@sqlrooms/blocks](../index.md) / StatefulBlockSettingsProps

# Type Alias: StatefulBlockSettingsProps\<TRoomState>

> **StatefulBlockSettingsProps**<`TRoomState`> = `object`

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

### blockInstanceId?

> `optional` **blockInstanceId?**: [`BlockId`](BlockId.md)

***

### title?

> `optional` **title?**: `string`

***

### attrs?

> `optional` **attrs?**: `Record`<`string`, `unknown`>

***

### getState?

> `optional` **getState?**: () => `TRoomState`

#### Returns

`TRoomState`
