---
url: 'https://sqlrooms.org/api/blocks/type-aliases/StatefulBlockDefinition.md'
---
[@sqlrooms/blocks](../index.md) / StatefulBlockDefinition

# Type Alias: StatefulBlockDefinition\<TRoomState>

> **StatefulBlockDefinition**<`TRoomState`> = `object`

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TRoomState` | `unknown` |

## Properties

### type

> **type**: [`BlockType`](BlockType.md)

***

### label

> **label**: `string`

***

### defaultTitle?

> `optional` **defaultTitle?**: `string`

***

### icon?

> `optional` **icon?**: `ComponentType`<{ `className?`: `string`; }>

***

### capabilities?

> `optional` **capabilities?**: [`BlockCapabilities`](BlockCapabilities.md)

***

### createInstance?

> `optional` **createInstance?**: (`context`) => [`BlockInstance`](BlockInstance.md)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `context` | [`StatefulBlockContext`](StatefulBlockContext.md)<`TRoomState`> |

#### Returns

[`BlockInstance`](BlockInstance.md)

***

### ensureState?

> `optional` **ensureState?**: (`context`) => `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `context` | [`StatefulBlockContext`](StatefulBlockContext.md)<`TRoomState`> |

#### Returns

`void`

***

### deleteState?

> `optional` **deleteState?**: (`context`) => `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `context` | [`StatefulBlockContext`](StatefulBlockContext.md)<`TRoomState`> |

#### Returns

`void`

***

### rename?

> `optional` **rename?**: (`context`) => `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `context` | [`StatefulBlockRenameContext`](StatefulBlockRenameContext.md)<`TRoomState`> |

#### Returns

`void`

***

### close?

> `optional` **close?**: (`context`) => `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `context` | [`StatefulBlockContext`](StatefulBlockContext.md)<`TRoomState`> |

#### Returns

`void`

***

### render

> **render**: `ComponentType`<[`StatefulBlockRenderProps`](StatefulBlockRenderProps.md)<`TRoomState`>>
