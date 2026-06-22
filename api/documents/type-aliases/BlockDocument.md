---
url: 'https://sqlrooms.org/api/documents/type-aliases/BlockDocument.md'
---
[@sqlrooms/documents](../index.md) / BlockDocument

# Type Alias: BlockDocument

> **BlockDocument** = `object`

## Type Declaration

| Name | Type |
| ------ | ------ |
|  `id` | `string` |
|  `content` | {\[`key`: `string`]: `unknown`; `type`: `"doc"`; `content`: [`BlockDocumentNode`](BlockDocumentNode.md)\[]; } |
|  `assets` | `Record`<`string`, { `id`: `string`; `data`: `string`; `filename?`: `string`; `alt?`: `string`; `title?`: `string`; `provenance?`: `unknown`; `createdAt`: `number`; `updatedAt`: `number`; `mediaType`: `"image/svg+xml"`; `encoding`: `"utf8"` | `"base64"`; } | { `id`: `string`; `data`: `string`; `filename?`: `string`; `alt?`: `string`; `title?`: `string`; `provenance?`: `unknown`; `createdAt`: `number`; `updatedAt`: `number`; `mediaType`: `"image/png"`; `encoding`: `"base64"`; }> |
|  `updatedAt` | `number` |
