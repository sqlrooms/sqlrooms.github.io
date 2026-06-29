---
url: 'https://sqlrooms.org/api/deck/type-aliases/DeckJsonMapProps.md'
---
[@sqlrooms/deck](../index.md) / DeckJsonMapProps

# Type Alias: DeckJsonMapProps

> **DeckJsonMapProps** = `object`

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
