---
url: https://sqlrooms.org/api/documents/type-aliases/BlockDocumentTodoBlock.md
---
[@sqlrooms/documents](../index.md) / BlockDocumentTodoBlock

# Type Alias: BlockDocumentTodoBlock

> **BlockDocumentTodoBlock** = `object`

A todo/task item block with a checked state and rich text description.
Content is an array of BlockDocumentNodes supporting marks like bold, italic, etc.

## Type Declaration

| Name | Type | Default value |
| ------ | ------ | ------ |
|  `id` | `string` | - |
|  `intent?` | `string` | - |
|  `type` | `"todo"` | - |
|  `checked` | `boolean` | - |
|  `text` | [`BlockDocumentNode`](BlockDocumentNode.md)\[] | `RichTextContent` |
