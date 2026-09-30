---
url: >-
  https://sqlrooms.org/api/documents/type-aliases/BlockDocumentStatefulBlockRendererProps.md
---
[@sqlrooms/documents](../index.md) / BlockDocumentStatefulBlockRendererProps

# Type Alias: BlockDocumentStatefulBlockRendererProps

> **BlockDocumentStatefulBlockRendererProps** = `object`

## Properties

### documentId

> **documentId**: `string`

***

### blockId

> **blockId**: `string`

***

### blockType

> **blockType**: `string`

***

### blockInstanceId

> **blockInstanceId**: `string`

***

### ownership?

> `optional` **ownership?**: `string`

***

### caption?

> `optional` **caption?**: `string`

User-facing label shown for the block in the document flow.

***

### tableName?

> `optional` **tableName?**: `string`

Table identity this block reads from (for table-bound types like `data-table`).

***

### height?

> `optional` **height?**: `number`

***

### headerActions?

> `optional` **headerActions?**: `ReactNode`

Actions rendered by the block document host in the block's header.

***

### selected?

> `optional` **selected?**: `boolean`

***

### readOnly?

> `optional` **readOnly?**: `boolean`

***

### onCaptionChange?

> `optional` **onCaptionChange?**: (`caption`) => `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `caption` | `string` | `undefined` |

#### Returns

`void`

***

### onTableNameChange?

> `optional` **onTableNameChange?**: (`tableName`) => `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `tableName` | `string` | `undefined` |

#### Returns

`void`
