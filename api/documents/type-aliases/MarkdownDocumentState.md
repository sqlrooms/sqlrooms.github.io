---
url: https://sqlrooms.org/api/documents/type-aliases/MarkdownDocumentState.md
---
[@sqlrooms/documents](../index.md) / MarkdownDocumentState

# Type Alias: MarkdownDocumentState

> **MarkdownDocumentState** = `object`

Persisted state for a Markdown document, identified by its artifact ID.
Stores the Markdown source, document-owned image assets keyed by asset ID,
and the last update timestamp in milliseconds since the Unix epoch.

## Type Declaration

| Name | Type |
| ------ | ------ |
|  `id` | `string` |
|  `markdown` | `string` |
|  `assets` | `Record`<`string`, { `id`: `string`; `data`: `string`; `filename?`: `string`; `alt?`: `string`; `title?`: `string`; `provenance?`: `unknown`; `createdAt`: `number`; `updatedAt`: `number`; `mediaType`: `"image/svg+xml"`; `encoding`: `"utf8"` | `"base64"`; } | { `id`: `string`; `data`: `string`; `filename?`: `string`; `alt?`: `string`; `title?`: `string`; `provenance?`: `unknown`; `createdAt`: `number`; `updatedAt`: `number`; `mediaType`: `"image/png"`; `encoding`: `"base64"`; }> |
|  `updatedAt` | `number` |
