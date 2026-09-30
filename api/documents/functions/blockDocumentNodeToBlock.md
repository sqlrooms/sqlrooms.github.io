---
url: https://sqlrooms.org/api/documents/functions/blockDocumentNodeToBlock.md
---
[@sqlrooms/documents](../index.md) / blockDocumentNodeToBlock

# Function: blockDocumentNodeToBlock()

> **blockDocumentNodeToBlock**(`node`): { `id`: `string`; `intent?`: `string`; `type`: `"heading"`; `level`: `1` | `2` | `3`; `text`: [`BlockDocumentNode`](../type-aliases/BlockDocumentNode.md)\[]; } | { `id`: `string`; `intent?`: `string`; `type`: `"paragraph"`; `text`: [`BlockDocumentNode`](../type-aliases/BlockDocumentNode.md)\[]; } | { `id`: `string`; `intent?`: `string`; `type`: `"list"`; `ordered?`: `boolean`; `items`: [`BlockDocumentNode`](../type-aliases/BlockDocumentNode.md)\[]\[]; } | { `id`: `string`; `intent?`: `string`; `type`: `"todo"`; `checked`: `boolean`; `text`: [`BlockDocumentNode`](../type-aliases/BlockDocumentNode.md)\[]; } | { `id`: `string`; `intent?`: `string`; `type`: `"image"`; `assetId`: `string`; `caption?`: `string`; } | { `id`: `string`; `intent?`: `string`; `type`: `"chartImage"`; `assetId`: `string`; `caption?`: `string`; } | { `id`: `string`; `intent?`: `string`; `type`: `"chart"`; `tableName`: `string`; `config`: `unknown`; `selectionGroupId?`: `string`; `caption?`: `string`; } | { `id`: `string`; `intent?`: `string`; `type`: `"statefulBlock"`; `blockType`: `string`; `blockInstanceId`: `string`; `ownership?`: `"owned"` | `"shared"` | `"external"`; `caption?`: `string`; `tableName?`: `string`; `height?`: `number`; } | `undefined`

## Parameters

| Parameter | Type |
| ------ | ------ |
| `node` | [`BlockDocumentNode`](../type-aliases/BlockDocumentNode.md) |

## Returns

### Type Literal

{ `id`: `string`; `intent?`: `string`; `type`: `"heading"`; `level`: `1` | `2` | `3`; `text`: [`BlockDocumentNode`](../type-aliases/BlockDocumentNode.md)\[]; }

***

### Type Literal

{ `id`: `string`; `intent?`: `string`; `type`: `"paragraph"`; `text`: [`BlockDocumentNode`](../type-aliases/BlockDocumentNode.md)\[]; }

***

### Type Literal

{ `id`: `string`; `intent?`: `string`; `type`: `"list"`; `ordered?`: `boolean`; `items`: [`BlockDocumentNode`](../type-aliases/BlockDocumentNode.md)\[]\[]; }

***

### Type Literal

{ `id`: `string`; `intent?`: `string`; `type`: `"todo"`; `checked`: `boolean`; `text`: [`BlockDocumentNode`](../type-aliases/BlockDocumentNode.md)\[]; }

***

### Type Literal

{ `id`: `string`; `intent?`: `string`; `type`: `"image"`; `assetId`: `string`; `caption?`: `string`; }

***

### Type Literal

{ `id`: `string`; `intent?`: `string`; `type`: `"chartImage"`; `assetId`: `string`; `caption?`: `string`; }

***

### Type Literal

{ `id`: `string`; `intent?`: `string`; `type`: `"chart"`; `tableName`: `string`; `config`: `unknown`; `selectionGroupId?`: `string`; `caption?`: `string`; }

***

### Type Literal

{ `id`: `string`; `intent?`: `string`; `type`: `"statefulBlock"`; `blockType`: `string`; `blockInstanceId`: `string`; `ownership?`: `"owned"` | `"shared"` | `"external"`; `caption?`: `string`; `tableName?`: `string`; `height?`: `number`; }

| Name | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | - |
| `intent?` | `string` | - |
| `type` | `"statefulBlock"` | - |
| `blockType` | `string` | - |
| `blockInstanceId` | `string` | - |
| `ownership?` | `"owned"` | `"shared"` | `"external"` | - |
| `caption?` | `string` | User-facing label shown for the block in the document flow. |
| `tableName?` | `string` | Table identity this block reads from, for block types that bind to a single table (currently `data-table`). Resolved via `db.findTable`, same as the `chart` block's `tableName`. Other block types leave this unset and keep their data binding inside their own backing state. |
| `height?` | `number` | - |

***

`undefined`
