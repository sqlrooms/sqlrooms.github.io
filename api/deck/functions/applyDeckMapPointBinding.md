---
url: https://sqlrooms.org/api/deck/functions/applyDeckMapPointBinding.md
---
[@sqlrooms/deck](../index.md) / applyDeckMapPointBinding

# Function: applyDeckMapPointBinding()

> **applyDeckMapPointBinding**<`T`>(`options`): `T`

Applies a structured longitude/latitude point binding to a native Deck map
config. The generated geometry SQL intentionally comes from the same
canonical helper used by first-party map builders.

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`DeckMapConfig`](../type-aliases/DeckMapConfig.md) |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | { `config`: `T`; `pointBinding`: [`DeckMapPointBinding`](../type-aliases/DeckMapPointBinding.md); `sourceColumns`: readonly [`DeckMapConfigColumn`](../type-aliases/DeckMapConfigColumn.md)\[]; } |
| `options.config` | `T` |
| `options.pointBinding` | [`DeckMapPointBinding`](../type-aliases/DeckMapPointBinding.md) |
| `options.sourceColumns` | readonly [`DeckMapConfigColumn`](../type-aliases/DeckMapConfigColumn.md)\[] |

## Returns

`T`
