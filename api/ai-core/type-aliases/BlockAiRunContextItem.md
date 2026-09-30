---
url: https://sqlrooms.org/api/ai-core/type-aliases/BlockAiRunContextItem.md
---
[@sqlrooms/ai-core](../index.md) / BlockAiRunContextItem

# Type Alias: BlockAiRunContextItem

> **BlockAiRunContextItem** = `object`

Context item describing a block-scoped AI request.

Use this when a run starts from an individual document/document block rather
than from the whole artifact.

## Type Declaration

## Index Signature

\[`key`: `string`]: `unknown`

| Name | Type |
| ------ | ------ |
|  `id` | `string` |
|  `title` | `string` |
|  `type?` | `string` |
|  `subtitle?` | `string` |
|  `kind` | `"block"` |
|  `blockDocumentId` | `string` |
|  `blockId` | `string` |
|  `blockType` | `string` |
|  `blockInstanceId?` | `string` |
|  `panelId?` | `string` |
