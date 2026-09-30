---
url: https://sqlrooms.org/api/documents/type-aliases/BlockDocumentHeadingBlock.md
---
[@sqlrooms/documents](../index.md) / BlockDocumentHeadingBlock

# Type Alias: BlockDocumentHeadingBlock

> **BlockDocumentHeadingBlock** = `object`

A heading block in a block document with level 1, 2, or 3.
Content is an array of BlockDocumentNodes supporting rich text with marks like bold, italic, etc.

## Type Declaration

| Name | Type | Default value |
| ------ | ------ | ------ |
|  `id` | `string` | - |
|  `intent?` | `string` | - |
|  `type` | `"heading"` | - |
|  `level` | `1` | `2` | `3` | - |
|  `text` | [`BlockDocumentNode`](BlockDocumentNode.md)\[] | `RichTextContent` |
