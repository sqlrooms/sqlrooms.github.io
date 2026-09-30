---
url: https://sqlrooms.org/api/deck/functions/createProtomapsBasemapProvider.md
---
[@sqlrooms/deck](../index.md) / createProtomapsBasemapProvider

# Function: createProtomapsBasemapProvider()

> **createProtomapsBasemapProvider**(`apiKey?`): [`DeckMapBasemapProvider`](../type-aliases/DeckMapBasemapProvider.md)

Creates a cached Protomaps provider for createDeckMapsSlice or DeckJsonMap.
A missing/blank key returns no style, allowing the default basemaps to load.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `apiKey?` | `string` |

## Returns

[`DeckMapBasemapProvider`](../type-aliases/DeckMapBasemapProvider.md)
