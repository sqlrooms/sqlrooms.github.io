---
url: >-
  https://sqlrooms.org/api/documents/functions/createDefaultBlockDocumentsConfig.md
---
[@sqlrooms/documents](../index.md) / createDefaultBlockDocumentsConfig

# Function: createDefaultBlockDocumentsConfig()

> **createDefaultBlockDocumentsConfig**(`props?`): `object`

## Parameters

| Parameter | Type |
| ------ | ------ |
| `props` | `Partial`<[`BlockDocumentsSliceConfig`](../type-aliases/BlockDocumentsSliceConfig.md)> |

## Returns

`object`

| Name | Type |
| ------ | ------ |
| `artifacts` | `Record`<`string`, { `id`: `string`; `content`: {\[`key`: `string`]: `unknown`; `type`: `"doc"`; `content`: [`BlockDocumentNode`](../type-aliases/BlockDocumentNode.md)\[]; }; `assets`: `Record`<`string`, { `id`: `string`; `data`: `string`; `filename?`: `string`; `alt?`: `string`; `title?`: `string`; `provenance?`: `unknown`; `createdAt`: `number`; `updatedAt`: `number`; `mediaType`: `"image/svg+xml"`; `encoding`: `"utf8"` | `"base64"`; } | { `id`: `string`; `data`: `string`; `filename?`: `string`; `alt?`: `string`; `title?`: `string`; `provenance?`: `unknown`; `createdAt`: `number`; `updatedAt`: `number`; `mediaType`: `"image/png"`; `encoding`: `"base64"`; }>; `updatedAt`: `number`; }> |
