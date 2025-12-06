---
url: /api/cosmos/variables/CosmosSliceConfig.md
---
[@sqlrooms/cosmos](../index.md) / CosmosSliceConfig

# Variable: CosmosSliceConfig

> `const` **CosmosSliceConfig**: `ZodObject`<{ `pointSizeScale`: `ZodNumber`; `scalePointsOnZoom`: `ZodBoolean`; `renderLinks`: `ZodBoolean`; `linkWidthScale`: `ZodNumber`; `linkArrowsSizeScale`: `ZodNumber`; `linkArrows`: `ZodBoolean`; `curvedLinks`: `ZodBoolean`; `simulationGravity`: `ZodNumber`; `simulationRepulsion`: `ZodNumber`; `simulationLinkSpring`: `ZodNumber`; `simulationLinkDistance`: `ZodNumber`; `simulationFriction`: `ZodNumber`; `simulationDecay`: `ZodNumber`; }, `$strip`>

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
