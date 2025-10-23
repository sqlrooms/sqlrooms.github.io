---
url: /api/cosmos/type-aliases/CosmosGraphProps.md
---
[@sqlrooms/cosmos](../index.md) / CosmosGraphProps

# Type Alias: CosmosGraphProps

> **CosmosGraphProps**: `object`

Props for the CosmosGraph component.

## Type declaration

| Name | Type | Description |
| ------ | ------ | ------ |
|  `config` | `GraphConfigInterface` | Configuration object for the graph's visual and behavioral properties |
|  `pointPositions` | `Float32Array` | Float32Array containing x,y coordinates for each point (2 values per point) |
|  `pointSizes` | `Float32Array` | Float32Array containing size values for each point (1 value per point) |
|  `pointColors` | `Float32Array` | Float32Array containing RGBA values for each point (4 values per point) |
|  `linkIndexes`? | `Float32Array` | Optional Float32Array containing pairs of point indices defining links |
|  `linkColors`? | `Float32Array` | Optional Float32Array containing RGBA values for each link (4 values per link) |
|  `focusedPointIndex`? | `number` | Optional index of the point to focus on |
|  `renderPointTooltip`? | (`index`) => `React.ReactNode` | Optional function to render custom tooltip content for a point |
|  `children`? | `React.ReactNode` | Optional child elements to render inside the graph container |
