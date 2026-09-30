---
url: https://sqlrooms.org/api/ai-config/functions/createBlockContextItem.md
---
[@sqlrooms/ai-config](../index.md) / createBlockContextItem

# Function: createBlockContextItem()

> **createBlockContextItem**(`fields`): `object`

Create and validate a block-scoped AI run context item.

The returned item is parsed through [BlockAiRunContextItemSchema](../variables/BlockAiRunContextItemSchema.md) so
omitted optional fields are normalized consistently with stored chat context.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `fields` | { `id`: `string`; `blockDocumentId`: `string`; `blockId`: `string`; `blockType`: `string`; `blockInstanceId?`: `string`; `panelId?`: `string`; `title`: `string`; `subtitle?`: `string`; } |
| `fields.id` | `string` |
| `fields.blockDocumentId` | `string` |
| `fields.blockId` | `string` |
| `fields.blockType` | `string` |
| `fields.blockInstanceId?` | `string` |
| `fields.panelId?` | `string` |
| `fields.title` | `string` |
| `fields.subtitle?` | `string` |

## Returns

`object`

| Name | Type |
| ------ | ------ |
| `kind` | `"block"` |
| `blockDocumentId` | `string` |
| `blockId` | `string` |
| `blockType` | `string` |
| `blockInstanceId?` | `string` |
| `panelId?` | `string` |
| `id` | `string` |
| `title` | `string` |
| `type?` | `string` |
| `subtitle?` | `string` |
