---
url: 'https://sqlrooms.org/api/cosmos.md'
---
# @sqlrooms/cosmos

GPU-accelerated graph visualization components and slice for SQLRooms (powered by Cosmograph Cosmos).

## Installation

```bash
npm install @sqlrooms/cosmos @sqlrooms/room-shell @sqlrooms/ui
```

## Store setup

```tsx
import {CosmosSliceState, createCosmosSlice} from '@sqlrooms/cosmos';
import {
  createRoomShellSlice,
  createRoomStore,
  RoomShellSliceState,
} from '@sqlrooms/room-shell';

type RoomState = RoomShellSliceState & CosmosSliceState;

export const {roomStore, useRoomStore} = createRoomStore<RoomState>(
  (set, get, store) => ({
    ...createRoomShellSlice({
      config: {title: 'Cosmos Demo', dataSources: []},
    })(set, get, store),
    ...createCosmosSlice()(set, get, store),
  }),
);
```

## Render a graph

```tsx
import {
  CosmosGraph,
  CosmosGraphControls,
  CosmosSimulationControls,
} from '@sqlrooms/cosmos';
import {GraphConfigInterface} from '@cosmos.gl/graph';

const config: GraphConfigInterface = {
  backgroundColor: 'transparent',
  simulationGravity: 0.2,
  simulationRepulsion: 1,
  simulationLinkSpring: 1,
  simulationLinkDistance: 10,
};

const pointPositions = new Float32Array([
  0,
  0, // node 0
  1,
  0, // node 1
  0.5,
  1, // node 2
]);
const pointSizes = new Float32Array([5, 5, 5]);
const pointColors = new Float32Array([1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1]);
const linkIndexes = new Float32Array([0, 1, 1, 2]);

export function GraphView() {
  return (
    <CosmosGraph
      config={config}
      pointPositions={pointPositions}
      pointSizes={pointSizes}
      pointColors={pointColors}
      linkIndexes={linkIndexes}
      renderPointTooltip={(index) => `Node ${index}`}
    >
      <CosmosGraphControls />
      <CosmosSimulationControls className="absolute top-2 right-2" />
    </CosmosGraph>
  );
}
```

## Update simulation programmatically

```tsx
import {useRoomStore} from './store';
import {Button} from '@sqlrooms/ui';

function SimulationButtons() {
  const toggleSimulation = useRoomStore(
    (state) => state.cosmos.toggleSimulation,
  );
  const fitView = useRoomStore((state) => state.cosmos.fitView);
  const updateSimulationConfig = useRoomStore(
    (state) => state.cosmos.updateSimulationConfig,
  );

  return (
    <div className="flex gap-2">
      <Button onClick={toggleSimulation}>Toggle simulation</Button>
      <Button onClick={fitView}>Fit view</Button>
      <Button
        onClick={() => updateSimulationConfig({simulationRepulsion: 1.5})}
      >
        Stronger repulsion
      </Button>
    </div>
  );
}
```

## Example app

* https://github.com/sqlrooms/examples/tree/main/cosmos

## Type Aliases

* [CosmosGraphProps](/api/cosmos/type-aliases/CosmosGraphProps.md)
* [CosmosSliceState](/api/cosmos/type-aliases/CosmosSliceState.md)
* [RoomStateWithCosmos](/api/cosmos/type-aliases/RoomStateWithCosmos.md)
* [CosmosSliceConfig](/api/cosmos/type-aliases/CosmosSliceConfig.md)
* [HoverState](/api/cosmos/type-aliases/HoverState.md)

## Variables

* [CosmosGraph](/api/cosmos/variables/CosmosGraph.md)
* [CosmosGraphControls](/api/cosmos/variables/CosmosGraphControls.md)
* [CosmosSimulationControls](/api/cosmos/variables/CosmosSimulationControls.md)
* [CosmosSliceConfig](/api/cosmos/variables/CosmosSliceConfig.md)

## Functions

* [createCosmosSlice](/api/cosmos/functions/createCosmosSlice.md)
* [useStoreWithCosmos](/api/cosmos/functions/useStoreWithCosmos.md)
* [createDefaultCosmosConfig](/api/cosmos/functions/createDefaultCosmosConfig.md)
* [useHoverState](/api/cosmos/functions/useHoverState.md)
