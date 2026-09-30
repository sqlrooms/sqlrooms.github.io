---
url: >-
  https://sqlrooms.org/api/deck/functions/createDeckMapBlockDocumentCommandType.md
---
[@sqlrooms/deck](../index.md) / createDeckMapBlockDocumentCommandType

# Function: createDeckMapBlockDocumentCommandType()

> **createDeckMapBlockDocumentCommandType**<`TState`>(`options?`): `BlockDocumentStatefulBlockCommandType`<`TState`>

Builds the shared command-type registration for a Deck map stateful block.

## Type Parameters

| Type Parameter |
| ------ |
| `TState` *extends* [`DeckMapsSliceState`](../type-aliases/DeckMapsSliceState.md) & `DuckDbSliceState` |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`DeckMapBlockDocumentRegistrationOptions`](../type-aliases/DeckMapBlockDocumentRegistrationOptions.md)<`TState`> |

## Returns

`BlockDocumentStatefulBlockCommandType`<`TState`>
