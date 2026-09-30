---
url: >-
  https://sqlrooms.org/api/documents/type-aliases/BlockDocumentBlockHeaderActionsRenderContext.md
---
[@sqlrooms/documents](../index.md) / BlockDocumentBlockHeaderActionsRenderContext

# Type Alias: BlockDocumentBlockHeaderActionsRenderContext

> **BlockDocumentBlockHeaderActionsRenderContext** = `object`

Context passed to host-provided block header action renderers.

## Properties

### blockDocumentId

> **blockDocumentId**: `string`

The containing block document artifact id.

***

### blockId

> **blockId**: `string`

The block node id within the block document.

***

### blockType

> **blockType**: `string`

The block type, such as chart, dashboard, html-app, or map.

***

### blockInstanceId?

> `optional` **blockInstanceId?**: `string`

Optional stateful resource id owned or referenced by the block.
