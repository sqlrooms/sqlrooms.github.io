---
url: https://sqlrooms.org/api/deck/functions/createDeckMapBlockDocumentType.md
---
[@sqlrooms/deck](../index.md) / createDeckMapBlockDocumentType

# Function: createDeckMapBlockDocumentType()

> **createDeckMapBlockDocumentType**<`TState`>(`options`): `BlockDocumentStatefulBlockType`

Builds the shared TipTap/UI registration metadata for a Deck map stateful
block. Hosts still own renderer maps, delete handlers, and product labels.

## Type Parameters

| Type Parameter |
| ------ |
| `TState` *extends* [`DeckMapsSliceState`](../type-aliases/DeckMapsSliceState.md) & `DuckDbSliceState` |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`DeckMapBlockDocumentRegistrationOptions`](../type-aliases/DeckMapBlockDocumentRegistrationOptions.md)<`TState`> & `object` |

## Returns

`BlockDocumentStatefulBlockType`
