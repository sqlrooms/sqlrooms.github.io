---
url: >-
  https://sqlrooms.org/api/documents/functions/createDefaultMarkdownDocumentsConfig.md
---
[@sqlrooms/documents](../index.md) / createDefaultMarkdownDocumentsConfig

# Function: createDefaultMarkdownDocumentsConfig()

> **createDefaultMarkdownDocumentsConfig**(`props?`): `object`

Creates validated default Markdown document configuration.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `props` | `Partial`<[`MarkdownDocumentsSliceConfig`](../type-aliases/MarkdownDocumentsSliceConfig.md)> |

## Returns

`object`

| Name | Type |
| ------ | ------ |
| `artifacts` | `Record`<`string`, { `id`: `string`; `markdown`: `string`; `assets`: `Record`<`string`, { `id`: `string`; `data`: `string`; `filename?`: `string`; `alt?`: `string`; `title?`: `string`; `provenance?`: `unknown`; `createdAt`: `number`; `updatedAt`: `number`; `mediaType`: `"image/svg+xml"`; `encoding`: `"utf8"` | `"base64"`; } | { `id`: `string`; `data`: `string`; `filename?`: `string`; `alt?`: `string`; `title?`: `string`; `provenance?`: `unknown`; `createdAt`: `number`; `updatedAt`: `number`; `mediaType`: `"image/png"`; `encoding`: `"base64"`; }>; `updatedAt`: `number`; }> |
