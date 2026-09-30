---
url: >-
  https://sqlrooms.org/api/documents/type-aliases/CreateMarkdownDocumentBlockDefinitionOptions.md
---
[@sqlrooms/documents](../index.md) / CreateMarkdownDocumentBlockDefinitionOptions

# Type Alias: CreateMarkdownDocumentBlockDefinitionOptions\<TRoomState>

> **CreateMarkdownDocumentBlockDefinitionOptions**<`TRoomState`> = `object`

Custom renderer, labels, and initial content for Markdown document blocks.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TRoomState` *extends* [`MarkdownDocumentsSliceState`](MarkdownDocumentsSliceState.md) | [`MarkdownDocumentsSliceState`](MarkdownDocumentsSliceState.md) |

## Properties

### render?

> `optional` **render?**: `ComponentType`<[`MarkdownDocumentBlockRenderProps`](MarkdownDocumentBlockRenderProps.md)<`TRoomState`>>

***

### label?

> `optional` **label?**: `string`

***

### defaultTitle?

> `optional` **defaultTitle?**: `string`

***

### defaultMarkdown?

> `optional` **defaultMarkdown?**: `string`
