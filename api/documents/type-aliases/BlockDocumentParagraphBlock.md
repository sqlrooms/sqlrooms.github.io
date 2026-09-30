---
url: https://sqlrooms.org/api/documents/type-aliases/BlockDocumentParagraphBlock.md
---
[@sqlrooms/documents](../index.md) / BlockDocumentParagraphBlock

# Type Alias: BlockDocumentParagraphBlock

> **BlockDocumentParagraphBlock** = `object`

A paragraph block in a block document containing rich text.
Content is an array of BlockDocumentNodes supporting marks like bold, italic, code, etc.

## Type Declaration

| Name | Type | Default value |
| ------ | ------ | ------ |
|  `id` | `string` | - |
|  `intent?` | `string` | - |
|  `type` | `"paragraph"` | - |
|  `text` | [`BlockDocumentNode`](BlockDocumentNode.md)\[] | `RichTextContent` |
