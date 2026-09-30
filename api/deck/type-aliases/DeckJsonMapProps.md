---
url: https://sqlrooms.org/api/deck/type-aliases/DeckJsonMapProps.md
---
[@sqlrooms/deck](../index.md) / DeckJsonMapProps

# Type Alias: DeckJsonMapProps

> **DeckJsonMapProps** = `object`

Renders a JSON deck.gl specification with named datasets in a room store.
A per-map basemap provider overrides the room's provider; explicit custom
map styles take precedence over both providers.

## Properties

### spec

> **spec**: `string` | `Record`<`string`, `unknown`>

***

### datasets

> **datasets**: `Record`<`string`, [`DeckDatasetInput`](DeckDatasetInput.md)>

***

### mapStyle?

> `optional` **mapStyle?**: `string`

***

### basemapProvider?

> `optional` **basemapProvider?**: [`DeckMapBasemapProvider`](DeckMapBasemapProvider.md)

Overrides the room's optional basemap provider for this map instance.

***

### interleaved?

> `optional` **interleaved?**: `boolean`

When true, deck.gl renders into the map's own WebGL context rather than
creating a separate overlay canvas. This halves the number of WebGL
contexts per map panel (from 2 to 1), which matters because browsers
limit active contexts to ~8–16 per page. Defaults to true.

***

### deckProps?

> `optional` **deckProps?**: `Partial`<`DeckProps`>

***

### mapProps?

> `optional` **mapProps?**: `Partial`<`MapProps`>

MapLibre runtime props. Drawing-buffer preservation defaults to true so
DOM image capture includes the basemap and interleaved deck layers.
Set canvasContextAttributes.preserveDrawingBuffer to false to opt out.

***

### showLegends?

> `optional` **showLegends?**: `boolean`

***

### className?

> `optional` **className?**: `string`

***

### children?

> `optional` **children?**: `ReactNode`

***

### onDatasetStatesChange?

> `optional` **onDatasetStatesChange?**: (`states`) => `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `states` | `Record`<`string`, [`PreparedDeckDatasetState`](PreparedDeckDatasetState.md)> |

#### Returns

`void`

***

### onRenderingError?

> `optional` **onRenderingError?**: (`error`) => `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `error` | `Error` |

#### Returns

`void`
