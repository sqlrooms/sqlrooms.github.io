---
url: https://sqlrooms.org/api/documents/functions/blockContextItemId.md
---
[@sqlrooms/documents](../index.md) / blockContextItemId

# Function: blockContextItemId()

> **blockContextItemId**(`target`): `string`

Builds the stable context item id used when a block is added to AI context.

The block document id, block id, and optional panel id are URL-encoded so
host-generated ids can safely contain separator characters.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `target` | [`BlockAiTarget`](../type-aliases/BlockAiTarget.md) |

## Returns

`string`
