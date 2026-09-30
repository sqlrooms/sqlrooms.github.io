---
url: https://sqlrooms.org/api/documents/functions/parseBlockContextItemId.md
---
[@sqlrooms/documents](../index.md) / parseBlockContextItemId

# Function: parseBlockContextItemId()

> **parseBlockContextItemId**(`id`): { `blockDocumentId`: `string`; `blockId`: `string`; `panelId?`: `string`; } | `undefined`

Parses a block AI context item id created by [blockContextItemId](blockContextItemId.md).

Returns `undefined` when the id is not a block context id, has the wrong
number of parts, or contains invalid URL-encoded components.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |

## Returns

{ `blockDocumentId`: `string`; `blockId`: `string`; `panelId?`: `string`; } | `undefined`
