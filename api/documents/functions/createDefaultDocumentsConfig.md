---
url: 'https://sqlrooms.org/api/documents/functions/createDefaultDocumentsConfig.md'
---
[@sqlrooms/documents](../index.md) / createDefaultDocumentsConfig

# Function: createDefaultDocumentsConfig()

> **createDefaultDocumentsConfig**(`props?`): `object`

## Parameters

| Parameter | Type |
| ------ | ------ |
| `props` | `Partial`<[`DocumentsSliceConfig`](../type-aliases/DocumentsSliceConfig.md)> |

## Returns

`object`

| Name | Type |
| ------ | ------ |
| `artifacts` | `Record`<`string`, { `id`: `string`; `markdown`: `string`; `assets`: `Record`<`string`, { `id`: `string`; `data`: `string`; `filename?`: `string`; `alt?`: `string`; `title?`: `string`; `provenance?`: `unknown`; `createdAt`: `number`; `updatedAt`: `number`; `mediaType`: `"image/svg+xml"`; `encoding`: `"utf8"` | `"base64"`; } | { `id`: `string`; `data`: `string`; `filename?`: `string`; `alt?`: `string`; `title?`: `string`; `provenance?`: `unknown`; `createdAt`: `number`; `updatedAt`: `number`; `mediaType`: `"image/png"`; `encoding`: `"base64"`; }>; `updatedAt`: `number`; }> |
