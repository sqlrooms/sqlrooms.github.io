---
url: /api/cosmos/variables/CosmosGraph.md
---
[@sqlrooms/cosmos](../index.md) / CosmosGraph

# Variable: CosmosGraph

> `const` **CosmosGraph**: `FC`<[`CosmosGraphProps`](../type-aliases/CosmosGraphProps.md)>

A React component that renders an interactive graph visualization using Cosmos.

Features:

* Renders points and optional links in a WebGL canvas
* Supports point hovering with customizable tooltips
* Handles point focusing
* Provides graph state to child components through zustand store

## Example

```tsx
const MyGraph = () => {
  const config = {
    backgroundColor: '#ffffff',
    nodeSize: 5,
    simulation: {
      repulsion: 0.5,
      gravity: 0.1,
    },
  };

  return (
    <div style={{ width: '800px', height: '600px' }}>
      <CosmosGraph
        config={config}
        pointPositions={new Float32Array([0, 0, 1, 1])}
        pointColors={new Float32Array([1, 0, 0, 1, 0, 1, 0, 1])}
        pointSizes={new Float32Array([5, 5])}
        renderPointTooltip={(index) => `Point ${index}`}
      >
        <GraphControls />
      </CosmosGraph>
    </div>
  );
};
```
