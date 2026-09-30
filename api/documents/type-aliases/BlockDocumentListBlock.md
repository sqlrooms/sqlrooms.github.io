---
url: https://sqlrooms.org/api/documents/type-aliases/BlockDocumentListBlock.md
---
[@sqlrooms/documents](../index.md) / BlockDocumentListBlock

# Type Alias: BlockDocumentListBlock

> **BlockDocumentListBlock** = `object`

A bullet or ordered list block containing an array of rich text items.
Each item is an array of BlockDocumentNodes (text nodes with optional marks like bold, italic, etc.).

## Type Declaration

| Name | Type |
| ------ | ------ |
|  `id` | `string` |
|  `intent?` | `string` |
|  `type` | `"list"` |
|  `ordered?` | `boolean` |
|  `items` | [`BlockDocumentNode`](BlockDocumentNode.md)\[]\[] |
