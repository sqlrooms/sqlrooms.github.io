---
url: 'https://sqlrooms.org/api/documents/functions/createBlockDocumentTextBlock.md'
---
[@sqlrooms/documents](../index.md) / createBlockDocumentTextBlock

# Function: createBlockDocumentTextBlock()

> **createBlockDocumentTextBlock**(`params`): { `id`: `string`; `intent?`: `string`; `type`: `"heading"`; `level`: `1` | `2` | `3`; `text`: `string`; } | { `id`: `string`; `intent?`: `string`; `type`: `"paragraph"`; `text`: `string`; } | { `id`: `string`; `intent?`: `string`; `type`: `"list"`; `ordered?`: `boolean`; `items`: `string`\[]; } | { `id`: `string`; `intent?`: `string`; `type`: `"todo"`; `checked`: `boolean`; `text`: `string`; } | { `id`: `string`; `intent?`: `string`; `type`: `"image"`; `assetId`: `string`; `caption?`: `string`; } | { `id`: `string`; `intent?`: `string`; `type`: `"chartImage"`; `assetId`: `string`; `caption?`: `string`; } | { `id`: `string`; `intent?`: `string`; `type`: `"chart"`; `tableName`: `string`; `config`: `unknown`; `selectionGroupId?`: `string`; `caption?`: `string`; } | { `id`: `string`; `intent?`: `string`; `type`: `"statefulBlock"`; `blockType`: `string`; `blockInstanceId`: `string`; `ownership?`: `"owned"` | `"shared"` | `"external"`; `title?`: `string`; `caption?`: `string`; `height?`: `number`; }

Creates a heading, paragraph, or list block with a unique block ID.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | { `type`: `"heading"` | `"paragraph"` | `"list"`; `text?`: `string`; `level`: `1` | `2` | `3`; `items?`: `string`\[]; `ordered`: `boolean`; `reasoning`: `string`; } |
| `params.type` | `"heading"` | `"paragraph"` | `"list"` |
| `params.text?` | `string` |
| `params.level` | `1` | `2` | `3` |
| `params.items?` | `string`\[] |
| `params.ordered` | `boolean` |
| `params.reasoning` | `string` |

## Returns

{ `id`: `string`; `intent?`: `string`; `type`: `"heading"`; `level`: `1` | `2` | `3`; `text`: `string`; } | { `id`: `string`; `intent?`: `string`; `type`: `"paragraph"`; `text`: `string`; } | { `id`: `string`; `intent?`: `string`; `type`: `"list"`; `ordered?`: `boolean`; `items`: `string`\[]; } | { `id`: `string`; `intent?`: `string`; `type`: `"todo"`; `checked`: `boolean`; `text`: `string`; } | { `id`: `string`; `intent?`: `string`; `type`: `"image"`; `assetId`: `string`; `caption?`: `string`; } | { `id`: `string`; `intent?`: `string`; `type`: `"chartImage"`; `assetId`: `string`; `caption?`: `string`; } | { `id`: `string`; `intent?`: `string`; `type`: `"chart"`; `tableName`: `string`; `config`: `unknown`; `selectionGroupId?`: `string`; `caption?`: `string`; } | { `id`: `string`; `intent?`: `string`; `type`: `"statefulBlock"`; `blockType`: `string`; `blockInstanceId`: `string`; `ownership?`: `"owned"` | `"shared"` | `"external"`; `title?`: `string`; `caption?`: `string`; `height?`: `number`; }
