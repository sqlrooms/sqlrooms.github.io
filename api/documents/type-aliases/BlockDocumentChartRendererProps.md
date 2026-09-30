---
url: >-
  https://sqlrooms.org/api/documents/type-aliases/BlockDocumentChartRendererProps.md
---
[@sqlrooms/documents](../index.md) / BlockDocumentChartRendererProps

# Type Alias: BlockDocumentChartRendererProps

> **BlockDocumentChartRendererProps** = `object`

## Properties

### documentId

> **documentId**: `string`

***

### blockId

> **blockId**: `string`

***

### tableName

> **tableName**: `string`

***

### config

> **config**: `unknown`

***

### selectionGroupId?

> `optional` **selectionGroupId?**: `string`

***

### caption?

> `optional` **caption?**: `string`

***

### selected?

> `optional` **selected?**: `boolean`

Whether this chart block is the active TipTap node selection.

***

### readOnly?

> `optional` **readOnly?**: `boolean`

***

### onTableNameChange?

> `optional` **onTableNameChange?**: (`tableName`) => `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `tableName` | `string` |

#### Returns

`void`

***

### onConfigChange?

> `optional` **onConfigChange?**: (`config`) => `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `config` | `unknown` |

#### Returns

`void`

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

### headerActions?

> `optional` **headerActions?**: `ReactNode`

Optional host-provided actions rendered in the chart block header.
