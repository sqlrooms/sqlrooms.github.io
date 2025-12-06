---
url: /api/cosmos/functions/createDefaultCosmosConfig.md
---
[@sqlrooms/cosmos](../index.md) / createDefaultCosmosConfig

# Function: createDefaultCosmosConfig()

> **createDefaultCosmosConfig**(): `object`

## Returns

`object`

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
