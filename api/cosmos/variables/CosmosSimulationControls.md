---
url: /api/cosmos/variables/CosmosSimulationControls.md
---
[@sqlrooms/cosmos](../index.md) / CosmosSimulationControls

# Variable: CosmosSimulationControls

> `const` **CosmosSimulationControls**: `FC`<`CosmosSimulationControlsProps`>

A component that provides fine-grained controls for adjusting graph simulation parameters.
Uses the zustand store to access and control the graph state.

Features:

* Slider controls for all simulation parameters
* Real-time parameter adjustment
* Tooltips with parameter descriptions
* Customizable positioning
* Default values optimized for common use cases

Available parameters:

* Gravity (0-0.5): Controls how strongly nodes are pulled toward the center
* Repulsion (0-2): Controls how strongly nodes push away from each other
* Link Strength (0-2): Controls the spring force between connected nodes
* Link Distance (1-20): Sets the natural length of links between nodes
* Friction (0-1): Controls how quickly node movement decays
* Decay (100-10000): Controls how quickly the simulation "cools down"

## Examples

```tsx
import { CosmosGraph, CosmosSimulationControls } from '@sqlrooms/cosmos';

const MyGraph = () => {
  return (
      <CosmosGraph {...graphProps}>
        <CosmosSimulationControls />
      </CosmosGraph>
  );
};
```

```tsx
import { CosmosGraph, CosmosGraphControls, CosmosSimulationControls } from '@sqlrooms/cosmos';

const MyGraph = () => {
  return (
      <CosmosGraph {...graphProps}>
        <CosmosGraphControls className="absolute top-4 left-4" />
        <CosmosSimulationControls className="absolute top-4 right-4" />
      </CosmosGraph>
  );
};
```

```tsx
<CosmosGraph {...graphProps}>
  <CosmosSimulationControls
    className="absolute bottom-4 right-4 bg-opacity-75 backdrop-blur-sm"
  />
</CosmosGraph>
```
