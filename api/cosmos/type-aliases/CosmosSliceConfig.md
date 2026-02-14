---
url: /api/cosmos/type-aliases/CosmosSliceConfig.md
---
[@sqlrooms/cosmos](../index.md) / CosmosSliceConfig

# Type Alias: CosmosSliceConfig

> **CosmosSliceConfig** = `object`

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

## Type Declaration

| Name | Type | Description |
| ------ | ------ | ------ |
|  `pointSizeScale` | `number` | Scale factor for point (node) sizes in the graph. Values > 1 make nodes larger, values < 1 make them smaller. **Default** `1.1` |
|  `scalePointsOnZoom` | `boolean` | When true, nodes will dynamically resize based on the current zoom level. This helps maintain visual clarity at different zoom levels. **Default** `true` |
|  `renderLinks` | `boolean` | Controls whether links (edges) between nodes are displayed. **Default** `true` |
|  `linkWidthScale` | `number` | Scale factor for link (edge) width. Values > 1 make links thicker, values < 1 make them thinner. **Default** `1` |
|  `linkArrowsSizeScale` | `number` | Scale factor for the size of directional arrows on links. Only applies when linkArrows is true. **Default** `1` |
|  `linkArrows` | `boolean` | When true, displays arrows indicating link direction. Useful for directed graphs. **Default** `false` |
|  `curvedLinks` | `boolean` | When true, links are rendered as curved Bezier paths. When false, links are straight lines. **Default** `false` |
|  `simulationGravity` | `number` | Controls the strength of the central gravitational force. Higher values pull nodes more strongly toward the center. **Default** `0.25` |
|  `simulationRepulsion` | `number` | Controls how strongly nodes repel each other. Higher values create more space between unconnected nodes. **Default** `1.0` |
|  `simulationLinkSpring` | `number` | Controls the strength of the spring force between linked nodes. Higher values pull connected nodes more tightly together. **Default** `1.0` |
|  `simulationLinkDistance` | `number` | The natural or resting length of links between nodes. Higher values create more spacing between connected nodes. **Default** `10` |
|  `simulationFriction` | `number` | Controls how quickly node movement decays. Higher values (closer to 1) create more damped movement. **Default** `0.85` |
|  `simulationDecay` | `number` | Controls how quickly the simulation stabilizes. Lower values result in longer, smoother transitions. **Default** `1000` |

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
