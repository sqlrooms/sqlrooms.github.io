---
url: >-
  https://sqlrooms.org/api/documents/functions/createBlockDocumentCommandAiAdapter.md
---
[@sqlrooms/documents](../index.md) / createBlockDocumentCommandAiAdapter

# Function: createBlockDocumentCommandAiAdapter()

> **createBlockDocumentCommandAiAdapter**<`TRoomState`>(`__namedParameters`): [`BlockDocumentAiAdapter`](../type-aliases/BlockDocumentAiAdapter.md) & `Pick`<[`BlockDocumentAiAdapter`](../type-aliases/BlockDocumentAiAdapter.md), `"ensureBlockDocument"`> & `object`

Creates a block-document AI adapter that mutates blocks through canonical
block-document commands.

## Type Parameters

| Type Parameter |
| ------ |
| `TRoomState` *extends* `BlockDocumentCommandAiAdapterState` |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | [`CreateBlockDocumentCommandAiAdapterOptions`](../type-aliases/CreateBlockDocumentCommandAiAdapterOptions.md)<`TRoomState`> |

## Returns
