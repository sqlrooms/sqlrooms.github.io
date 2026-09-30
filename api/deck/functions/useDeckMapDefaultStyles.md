---
url: https://sqlrooms.org/api/deck/functions/useDeckMapDefaultStyles.md
---
[@sqlrooms/deck](../index.md) / useDeckMapDefaultStyles

# ~~Function: useDeckMapDefaultStyles()~~

> **useDeckMapDefaultStyles**(): `Partial`<`Record`<`ResolvedTheme`, [`DeckMapStyle`](../type-aliases/DeckMapStyle.md)>> | `undefined`

Returns theme-aware host map defaults from the nearest provider, if any.

## Returns

`Partial`<`Record`<`ResolvedTheme`, [`DeckMapStyle`](../type-aliases/DeckMapStyle.md)>> | `undefined`

## Deprecated

Use the room's `deckMaps.basemapProvider` or an explicitly supplied
basemap callback instead. Retained for backward compatibility.
