---
url: https://sqlrooms.org/api/deck/functions/createDeckMapsSlice.md
---
[@sqlrooms/deck](../index.md) / createDeckMapsSlice

# Function: createDeckMapsSlice()

> **createDeckMapsSlice**(`props?`): `StateCreator`<[`DeckMapsSliceState`](../type-aliases/DeckMapsSliceState.md)>

Creates the room-store slice that owns durable Deck map resources and their
instance-scoped runtime issues.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props?` | { `config?`: `Partial`<[`DeckMapsSliceConfig`](../type-aliases/DeckMapsSliceConfig.md)>; `basemapProvider?`: [`DeckMapBasemapProvider`](../type-aliases/DeckMapBasemapProvider.md); } | - |
| `props.config?` | `Partial`<[`DeckMapsSliceConfig`](../type-aliases/DeckMapsSliceConfig.md)> | - |
| `props.basemapProvider?` | [`DeckMapBasemapProvider`](../type-aliases/DeckMapBasemapProvider.md) | Optional host-owned basemaps. The provider is not persisted in map config. |

## Returns

`StateCreator`<[`DeckMapsSliceState`](../type-aliases/DeckMapsSliceState.md)>
