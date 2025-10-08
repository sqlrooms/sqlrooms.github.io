---
url: /api/cosmos/type-aliases/CosmosSliceConfig.md
---
[@sqlrooms/cosmos](../index.md) / CosmosSliceConfig

# Type Alias: CosmosSliceConfig

> **CosmosSliceConfig**: `object`

Zod schema for validating and configuring the Cosmos graph visualization.
This schema defines all available configuration options and their types.

The configuration is divided into several categories:

Node Appearance:

* `pointSizeScale`: Controls the size of nodes
* `scalePointsOnZoom`: Enables dynamic node sizing based on zoom level

Link Appearance:

* `renderLinks`: Toggles link visibility
* `linkWidthScale`: Controls link thickness
* `linkArrows`: Toggles directional arrows
* `linkArrowsSizeScale`: Controls arrow size
* `curvedLinks`: Toggles curved/straight links

Physics Simulation:

* `simulationGravity`: Central gravitational force (0.25)
* `simulationRepulsion`: Node repulsion force (1.0)
* `simulationLinkSpring`: Link spring force (1.0)
* `simulationLinkDistance`: Natural link length (10)
* `simulationFriction`: Movement damping (0.85)
* `simulationDecay`: Simulation cooling rate (1000)

## Type declaration

| Name | Type |
| ------ | ------ |
|  `cosmos` | { `pointSizeScale`: `number`; `scalePointsOnZoom`: `boolean`; `renderLinks`: `boolean`; `linkWidthScale`: `number`; `linkArrowsSizeScale`: `number`; `linkArrows`: `boolean`; `curvedLinks`: `boolean`; `simulationGravity`: `number`; `simulationRepulsion`: `number`; `simulationLinkSpring`: `number`; `simulationLinkDistance`: `number`; `simulationFriction`: `number`; `simulationDecay`: `number`; } |

## Examples

```typescript
const config: CosmosSliceConfig = {
  cosmos: {
    pointSizeScale: 1.2,
    scalePointsOnZoom: true,
    renderLinks: true,
    linkWidthScale: 1.5,
    simulationGravity: 0.25
  }
};
```

```typescript
const directedGraphConfig: CosmosSliceConfig = {
  cosmos: {
    linkArrows: true,
    linkArrowsSizeScale: 1.2,
    curvedLinks: true,
    simulationLinkDistance: 15,
    simulationLinkSpring: 1.2
  }
};
```

```typescript
const largeGraphConfig: CosmosSliceConfig = {
  cosmos: {
    simulationGravity: 0.1,
    simulationRepulsion: 0.8,
    simulationFriction: 0.9,
    simulationDecay: 2000,
    scalePointsOnZoom: false
  }
};
```
