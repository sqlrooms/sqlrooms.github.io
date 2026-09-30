---
url: https://sqlrooms.org/api/deck/type-aliases/DeckMapConfig.md
---
[@sqlrooms/deck](../index.md) / DeckMapConfig

# Type Alias: DeckMapConfig

> **DeckMapConfig** = `object`

Durable, host-neutral Deck map configuration.

## Properties

### spec

> **spec**: [`DeckJsonMapProps`](DeckJsonMapProps.md)\[`"spec"`]

***

### datasets

> **datasets**: `Record`<`string`, [`DeckMapDatasetConfig`](DeckMapDatasetConfig.md)>

***

### configMode?

> `optional` **configMode?**: [`DeckMapConfigMode`](DeckMapConfigMode.md)

***

### mapStyle?

> `optional` **mapStyle?**: `string`

Built-in basemap ID (`light`/`dark`) or custom style URL.

***

### mapProps?

> `optional` **mapProps?**: `Record`<`string`, `unknown`>

***

### showLegends?

> `optional` **showLegends?**: `boolean`

***

### interaction?

> `optional` **interaction?**: [`DeckMapInteractionConfig`](DeckMapInteractionConfig.md)

***

### fitToData?

> `optional` **fitToData?**: [`DeckMapFitToDataConfig`](DeckMapFitToDataConfig.md)

***

### dataPolicy?

> `optional` **dataPolicy?**: [`DeckMapDataPolicyOverride`](DeckMapDataPolicyOverride.md)

***

### settingsOpen?

> `optional` **settingsOpen?**: `boolean`
