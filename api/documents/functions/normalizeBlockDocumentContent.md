---
url: 'https://sqlrooms.org/api/documents/functions/normalizeBlockDocumentContent.md'
---
[@sqlrooms/documents](../index.md) / normalizeBlockDocumentContent

# Function: normalizeBlockDocumentContent()

> **normalizeBlockDocumentContent**(`value`, `generateBlockId?`): `object`

## Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `value` | {\[`key`: `string`]: `unknown`; `type`: `"doc"`; `content`: [`BlockDocumentNode`](../type-aliases/BlockDocumentNode.md)\[]; } | `undefined` |
| `value.type` | `"doc"` | `...` |
| `value.content` | [`BlockDocumentNode`](../type-aliases/BlockDocumentNode.md)\[] | `...` |
| `generateBlockId` | () => `string` | `defaultGenerateBlockId` |

## Returns

`object`

| Name | Type |
| ------ | ------ |
| `type` | `"doc"` |
| `content` | [`BlockDocumentNode`](../type-aliases/BlockDocumentNode.md)\[] |
