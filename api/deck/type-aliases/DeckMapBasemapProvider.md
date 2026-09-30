---
url: https://sqlrooms.org/api/deck/type-aliases/DeckMapBasemapProvider.md
---
[@sqlrooms/deck](../index.md) / DeckMapBasemapProvider

# Type Alias: DeckMapBasemapProvider

> **DeckMapBasemapProvider** = (`theme`) => [`DeckMapStyle`](DeckMapStyle.md) | `undefined`

Resolves a basemap's light/dark variant. Return stable style objects or URLs,
or undefined to use host defaults. Providers and credentials are runtime-only.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `theme` | `ResolvedTheme` |

## Returns

[`DeckMapStyle`](DeckMapStyle.md) | `undefined`
