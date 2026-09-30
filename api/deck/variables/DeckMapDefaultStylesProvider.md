---
url: https://sqlrooms.org/api/deck/variables/DeckMapDefaultStylesProvider.md
---
[@sqlrooms/deck](../index.md) / DeckMapDefaultStylesProvider

# ~~Variable: DeckMapDefaultStylesProvider~~

> `const` **DeckMapDefaultStylesProvider**: `FC`<`PropsWithChildren`<{ `styles`: [`DeckMapDefaultStyles`](../type-aliases/DeckMapDefaultStyles.md); }>>

Supplies host-owned, theme-aware basemap defaults without persisting them in
individual map resources. The required `styles` object is keyed by `light`
and/or `dark`. Explicit map styles and basemap callbacks take precedence.

## Deprecated

Configure `basemapProvider` on `createDeckMapsSlice` or pass it
directly to `DeckJsonMap` instead. Retained for backward compatibility.
