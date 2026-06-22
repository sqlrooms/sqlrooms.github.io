---
url: >-
  https://sqlrooms.org/api/documents/type-aliases/BlockDocumentEditorContextValue.md
---
[@sqlrooms/documents](../index.md) / BlockDocumentEditorContextValue

# Type Alias: BlockDocumentEditorContextValue

> **BlockDocumentEditorContextValue** = `object`

## Properties

### editor

> **editor**: `Editor` | `null`

***

### documentId

> **documentId**: `string`

***

### value

> **value**: [`BlockDocumentContent`](BlockDocumentContent.md)

***

### assets

> **assets**: `Record`<`string`, [`DocumentAsset`](DocumentAsset.md)>

***

### onChange

> **onChange**: `BlockDocumentEditorChangeHandler`

***

### readOnly

> **readOnly**: `boolean`

***

### generateBlockId

> **generateBlockId**: () => `string`

#### Returns

`string`
