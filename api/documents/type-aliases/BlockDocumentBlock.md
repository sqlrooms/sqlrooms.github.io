---
url: 'https://sqlrooms.org/api/documents/type-aliases/BlockDocumentBlock.md'
---
[@sqlrooms/documents](../index.md) / BlockDocumentBlock

# Type Alias: BlockDocumentBlock

> **BlockDocumentBlock** = { `id`: `string`; `intent?`: `string`; `type`: `"heading"`; `level`: `1` | `2` | `3`; `text`: `string`; } | { `id`: `string`; `intent?`: `string`; `type`: `"paragraph"`; `text`: `string`; } | { `id`: `string`; `intent?`: `string`; `type`: `"list"`; `ordered?`: `boolean`; `items`: `string`\[]; } | { `id`: `string`; `intent?`: `string`; `type`: `"todo"`; `checked`: `boolean`; `text`: `string`; } | { `id`: `string`; `intent?`: `string`; `type`: `"image"`; `assetId`: `string`; `caption?`: `string`; } | { `id`: `string`; `intent?`: `string`; `type`: `"chartImage"`; `assetId`: `string`; `caption?`: `string`; } | { `id`: `string`; `intent?`: `string`; `type`: `"chart"`; `tableName`: `string`; `config`: `unknown`; `selectionGroupId?`: `string`; `caption?`: `string`; } | { `id`: `string`; `intent?`: `string`; `type`: `"statefulBlock"`; `blockType`: `string`; `blockInstanceId`: `string`; `ownership?`: `"owned"` | `"shared"` | `"external"`; `title?`: `string`; `caption?`: `string`; `height?`: `number`; }

Union of all block types that can appear in a block document.
