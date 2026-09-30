---
url: https://sqlrooms.org/api/documents/functions/blockDocumentBlockToNode.md
---
[@sqlrooms/documents](../index.md) / blockDocumentBlockToNode

# Function: blockDocumentBlockToNode()

> **blockDocumentBlockToNode**(`block`): [`BlockDocumentNode`](../type-aliases/BlockDocumentNode.md)

## Parameters

| Parameter | Type |
| ------ | ------ |
| `block` | { `id`: `string`; `intent?`: `string`; `type`: `"heading"`; `level`: `1` | `2` | `3`; `text`: [`BlockDocumentNode`](../type-aliases/BlockDocumentNode.md)\[]; } | { `id`: `string`; `intent?`: `string`; `type`: `"paragraph"`; `text`: [`BlockDocumentNode`](../type-aliases/BlockDocumentNode.md)\[]; } | { `id`: `string`; `intent?`: `string`; `type`: `"list"`; `ordered?`: `boolean`; `items`: [`BlockDocumentNode`](../type-aliases/BlockDocumentNode.md)\[]\[]; } | { `id`: `string`; `intent?`: `string`; `type`: `"todo"`; `checked`: `boolean`; `text`: [`BlockDocumentNode`](../type-aliases/BlockDocumentNode.md)\[]; } | { `id`: `string`; `intent?`: `string`; `type`: `"image"`; `assetId`: `string`; `caption?`: `string`; } | { `id`: `string`; `intent?`: `string`; `type`: `"chartImage"`; `assetId`: `string`; `caption?`: `string`; } | { `id`: `string`; `intent?`: `string`; `type`: `"chart"`; `tableName`: `string`; `config`: `unknown`; `selectionGroupId?`: `string`; `caption?`: `string`; } | { `id`: `string`; `intent?`: `string`; `type`: `"statefulBlock"`; `blockType`: `string`; `blockInstanceId`: `string`; `ownership?`: `"owned"` | `"shared"` | `"external"`; `caption?`: `string`; `tableName?`: `string`; `height?`: `number`; } |

## Returns

[`BlockDocumentNode`](../type-aliases/BlockDocumentNode.md)
