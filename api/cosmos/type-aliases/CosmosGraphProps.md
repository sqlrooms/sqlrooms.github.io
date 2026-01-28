---
url: /api/cosmos/type-aliases/CosmosGraphProps.md
---
[@sqlrooms/cosmos](../index.md) / CosmosGraphProps

# Type Alias: CosmosGraphProps

> **CosmosGraphProps** = `object`

Props for the CosmosGraph component.

## Properties

### config

> **config**: `GraphConfigInterface`

Configuration object for the graph's visual and behavioral properties

***

### pointPositions

> **pointPositions**: `Float32Array`

Float32Array containing x,y coordinates for each point (2 values per point)

***

### pointSizes

> **pointSizes**: `Float32Array`

Float32Array containing size values for each point (1 value per point)

***

### pointColors

> **pointColors**: `Float32Array`

Float32Array containing RGBA values for each point (4 values per point)

***

### linkIndexes?

> `optional` **linkIndexes**: `Float32Array`

Optional Float32Array containing pairs of point indices defining links

***

### linkColors?

> `optional` **linkColors**: `Float32Array`

Optional Float32Array containing RGBA values for each link (4 values per link)

***

### focusedPointIndex?

> `optional` **focusedPointIndex**: `number`

Optional index of the point to focus on

***

### renderPointTooltip()?

> `optional` **renderPointTooltip**: (`index`) => `React.ReactNode`

Optional function to render custom tooltip content for a point

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `index` | `number` |

#### Returns

`React.ReactNode`

***

### children?

> `optional` **children**: `React.ReactNode`

Optional child elements to render inside the graph container
