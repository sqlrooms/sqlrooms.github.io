---
url: >-
  https://sqlrooms.org/api/documents/type-aliases/MarkdownDocumentsSliceConfig.md
---
[@sqlrooms/documents](../index.md) / MarkdownDocumentsSliceConfig

# Type Alias: MarkdownDocumentsSliceConfig

> **MarkdownDocumentsSliceConfig** = `object`

Persisted Markdown document records keyed by their matching artifact IDs.

## Type Declaration

| Name | Type |
| ------ | ------ |
|  `artifacts` | `Record`<`string`, { `id`: `string`; `markdown`: `string`; `assets`: `Record`<`string`, { `id`: `string`; `data`: `string`; `filename?`: `string`; `alt?`: `string`; `title?`: `string`; `provenance?`: `unknown`; `createdAt`: `number`; `updatedAt`: `number`; `mediaType`: `"image/svg+xml"`; `encoding`: `"utf8"` | `"base64"`; } | { `id`: `string`; `data`: `string`; `filename?`: `string`; `alt?`: `string`; `title?`: `string`; `provenance?`: `unknown`; `createdAt`: `number`; `updatedAt`: `number`; `mediaType`: `"image/png"`; `encoding`: `"base64"`; }>; `updatedAt`: `number`; }> |
