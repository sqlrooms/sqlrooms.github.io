---
url: >-
  https://sqlrooms.org/api/documents/type-aliases/BlockDocumentStatefulBlockType.md
---
[@sqlrooms/documents](../index.md) / BlockDocumentStatefulBlockType

# Type Alias: BlockDocumentStatefulBlockType

> **BlockDocumentStatefulBlockType** = `object`

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

### resizableHeight?

> `optional` **resizableHeight?**: `boolean`

***

### defaultHeight?

> `optional` **defaultHeight?**: `number`

***

### minHeight?

> `optional` **minHeight?**: `number`

***

### maxHeight?

> `optional` **maxHeight?**: `number`

***

### requireScrollModifier?

> `optional` **requireScrollModifier?**: `boolean`

***

### scrollHintLabel?

> `optional` **scrollHintLabel?**: `string`

***

### createNode?

> `optional` **createNode?**: (`blockId`, `options?`) => `Record`<`string`, `unknown`>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `blockId` | `string` |
| `options?` | [`BlockDocumentStatefulBlockCreateNodeOptions`](BlockDocumentStatefulBlockCreateNodeOptions.md) |

#### Returns

`Record`<`string`, `unknown`>
