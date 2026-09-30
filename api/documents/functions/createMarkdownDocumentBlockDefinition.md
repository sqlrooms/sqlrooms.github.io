---
url: >-
  https://sqlrooms.org/api/documents/functions/createMarkdownDocumentBlockDefinition.md
---
[@sqlrooms/documents](../index.md) / createMarkdownDocumentBlockDefinition

# Function: createMarkdownDocumentBlockDefinition()

> **createMarkdownDocumentBlockDefinition**<`TRoomState`>(`__namedParameters?`): `StatefulBlockDefinition`<`TRoomState`>

Creates an embeddable `markdown-document` block definition backed by the
Markdown documents slice. Ensures and deletes document state by block ID.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TRoomState` *extends* [`MarkdownDocumentsSliceState`](../type-aliases/MarkdownDocumentsSliceState.md) | [`MarkdownDocumentsSliceState`](../type-aliases/MarkdownDocumentsSliceState.md) |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | [`CreateMarkdownDocumentBlockDefinitionOptions`](../type-aliases/CreateMarkdownDocumentBlockDefinitionOptions.md)<`TRoomState`> |

## Returns

`StatefulBlockDefinition`<`TRoomState`>
