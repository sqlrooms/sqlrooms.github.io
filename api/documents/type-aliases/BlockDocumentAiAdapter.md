---
url: https://sqlrooms.org/api/documents/type-aliases/BlockDocumentAiAdapter.md
---
[@sqlrooms/documents](../index.md) / BlockDocumentAiAdapter

# Type Alias: BlockDocumentAiAdapter

> **BlockDocumentAiAdapter** = `object`

Generic adapter for AI tools that mutate or inspect a block document.

## Methods

### setCurrentBlockDocument()

> **setCurrentBlockDocument**(`blockDocumentId`): `void`

Set the current active block document, if the host tracks one.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `blockDocumentId` | `string` |

#### Returns

`void`

***

### ensureBlockDocument()

> **ensureBlockDocument**(`blockDocumentId`): `void`

Ensure the target block document exists before mutation.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `blockDocumentId` | `string` |

#### Returns

`void`

***

### getBlocks()

> **getBlocks**(`blockDocumentId`): [`BlockDocumentNode`](BlockDocumentNode.md)\[] | `undefined`

Read the target block document nodes.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `blockDocumentId` | `string` |

#### Returns

[`BlockDocumentNode`](BlockDocumentNode.md)\[] | `undefined`

***

### addBlock()

> **addBlock**(`blockDocumentId`, `block`): `string` | `Promise`<`string`>

Append a block to the target block document and return its block ID.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `blockDocumentId` | `string` |
| `block` | { `id`: `string`; `intent?`: `string`; `type`: `"heading"`; `level`: `1` | `2` | `3`; `text`: [`BlockDocumentNode`](BlockDocumentNode.md)\[]; } | { `id`: `string`; `intent?`: `string`; `type`: `"paragraph"`; `text`: [`BlockDocumentNode`](BlockDocumentNode.md)\[]; } | { `id`: `string`; `intent?`: `string`; `type`: `"list"`; `ordered?`: `boolean`; `items`: [`BlockDocumentNode`](BlockDocumentNode.md)\[]\[]; } | { `id`: `string`; `intent?`: `string`; `type`: `"todo"`; `checked`: `boolean`; `text`: [`BlockDocumentNode`](BlockDocumentNode.md)\[]; } | { `id`: `string`; `intent?`: `string`; `type`: `"image"`; `assetId`: `string`; `caption?`: `string`; } | { `id`: `string`; `intent?`: `string`; `type`: `"chartImage"`; `assetId`: `string`; `caption?`: `string`; } | { `id`: `string`; `intent?`: `string`; `type`: `"chart"`; `tableName`: `string`; `config`: `unknown`; `selectionGroupId?`: `string`; `caption?`: `string`; } | { `id`: `string`; `intent?`: `string`; `type`: `"statefulBlock"`; `blockType`: `string`; `blockInstanceId`: `string`; `ownership?`: `"owned"` | `"shared"` | `"external"`; `caption?`: `string`; `tableName?`: `string`; `height?`: `number`; } |

#### Returns

`string` | `Promise`<`string`>

***

### updateBlock()?

> `optional` **updateBlock**(`blockDocumentId`, `blockId`, `block`): `void` | `Promise`<`void`>

Update an existing block in place, if supported by the host.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `blockDocumentId` | `string` |
| `blockId` | `string` |
| `block` | { `id`: `string`; `intent?`: `string`; `type`: `"heading"`; `level`: `1` | `2` | `3`; `text`: [`BlockDocumentNode`](BlockDocumentNode.md)\[]; } | { `id`: `string`; `intent?`: `string`; `type`: `"paragraph"`; `text`: [`BlockDocumentNode`](BlockDocumentNode.md)\[]; } | { `id`: `string`; `intent?`: `string`; `type`: `"list"`; `ordered?`: `boolean`; `items`: [`BlockDocumentNode`](BlockDocumentNode.md)\[]\[]; } | { `id`: `string`; `intent?`: `string`; `type`: `"todo"`; `checked`: `boolean`; `text`: [`BlockDocumentNode`](BlockDocumentNode.md)\[]; } | { `id`: `string`; `intent?`: `string`; `type`: `"image"`; `assetId`: `string`; `caption?`: `string`; } | { `id`: `string`; `intent?`: `string`; `type`: `"chartImage"`; `assetId`: `string`; `caption?`: `string`; } | { `id`: `string`; `intent?`: `string`; `type`: `"chart"`; `tableName`: `string`; `config`: `unknown`; `selectionGroupId?`: `string`; `caption?`: `string`; } | { `id`: `string`; `intent?`: `string`; `type`: `"statefulBlock"`; `blockType`: `string`; `blockInstanceId`: `string`; `ownership?`: `"owned"` | `"shared"` | `"external"`; `caption?`: `string`; `tableName?`: `string`; `height?`: `number`; } |

#### Returns

`void` | `Promise`<`void`>
