---
url: https://sqlrooms.org/api/documents/functions/blockDocumentContentToBlocks.md
---
[@sqlrooms/documents](../index.md) / blockDocumentContentToBlocks

# Function: blockDocumentContentToBlocks()

> **blockDocumentContentToBlocks**(`content`): ({ `id`: `string`; `intent?`: `string`; `type`: `"heading"`; `level`: `1` | `2` | `3`; `text`: [`BlockDocumentNode`](../type-aliases/BlockDocumentNode.md)\[]; } | { `id`: `string`; `intent?`: `string`; `type`: `"paragraph"`; `text`: [`BlockDocumentNode`](../type-aliases/BlockDocumentNode.md)\[]; } | { `id`: `string`; `intent?`: `string`; `type`: `"list"`; `ordered?`: `boolean`; `items`: [`BlockDocumentNode`](../type-aliases/BlockDocumentNode.md)\[]\[]; } | { `id`: `string`; `intent?`: `string`; `type`: `"todo"`; `checked`: `boolean`; `text`: [`BlockDocumentNode`](../type-aliases/BlockDocumentNode.md)\[]; } | { `id`: `string`; `intent?`: `string`; `type`: `"image"`; `assetId`: `string`; `caption?`: `string`; } | { `id`: `string`; `intent?`: `string`; `type`: `"chartImage"`; `assetId`: `string`; `caption?`: `string`; } | { `id`: `string`; `intent?`: `string`; `type`: `"chart"`; `tableName`: `string`; `config`: `unknown`; `selectionGroupId?`: `string`; `caption?`: `string`; } | { `id`: `string`; `intent?`: `string`; `type`: `"statefulBlock"`; `blockType`: `string`; `blockInstanceId`: `string`; `ownership?`: `"owned"` | `"shared"` | `"external"`; `caption?`: `string`; `tableName?`: `string`; `height?`: `number`; })\[]

## Parameters

| Parameter | Type |
| ------ | ------ |
| `content` | {\[`key`: `string`]: `unknown`; `type`: `"doc"`; `content`: [`BlockDocumentNode`](../type-aliases/BlockDocumentNode.md)\[]; } |
| `content.type` | `"doc"` |
| `content.content` | [`BlockDocumentNode`](../type-aliases/BlockDocumentNode.md)\[] |

## Returns
