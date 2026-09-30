---
url: https://sqlrooms.org/api/deck/functions/resolveDeckMapStyle.md
---
[@sqlrooms/deck](../index.md) / resolveDeckMapStyle

# Function: resolveDeckMapStyle()

> **resolveDeckMapStyle**(`options`): [`DeckMapStyle`](../type-aliases/DeckMapStyle.md)

Resolves explicit styles, a basemap provider, host defaults, then the fallback.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | { `mapStyle?`: `string`; `mapPropsMapStyle?`: `string` | `StyleSpecification` | `ImmutableLike`<`StyleSpecification`>; `basemapProvider?`: [`DeckMapBasemapProvider`](../type-aliases/DeckMapBasemapProvider.md); `hostDefaultStyles?`: `Partial`<`Record`<`ResolvedTheme`, [`DeckMapStyle`](../type-aliases/DeckMapStyle.md)>>; `resolvedTheme`: `ResolvedTheme`; `fallbackStyles`: `Record`<`ResolvedTheme`, [`DeckMapStyle`](../type-aliases/DeckMapStyle.md)>; } |
| `options.mapStyle?` | `string` |
| `options.mapPropsMapStyle?` | `string` | `StyleSpecification` | `ImmutableLike`<`StyleSpecification`> |
| `options.basemapProvider?` | [`DeckMapBasemapProvider`](../type-aliases/DeckMapBasemapProvider.md) |
| `options.hostDefaultStyles?` | `Partial`<`Record`<`ResolvedTheme`, [`DeckMapStyle`](../type-aliases/DeckMapStyle.md)>> |
| `options.resolvedTheme` | `ResolvedTheme` |
| `options.fallbackStyles` | `Record`<`ResolvedTheme`, [`DeckMapStyle`](../type-aliases/DeckMapStyle.md)> |

## Returns

[`DeckMapStyle`](../type-aliases/DeckMapStyle.md)
