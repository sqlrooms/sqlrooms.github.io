---
url: /api/cosmos/type-aliases/CosmosSliceState.md
---
[@sqlrooms/cosmos](../index.md) / CosmosSliceState

# Type Alias: CosmosSliceState

> **CosmosSliceState**: `object`

Core state interface for the Cosmos graph visualization.
Contains the graph instance, simulation state, and all control functions.

## Type declaration

| Name | Type |
| ------ | ------ |
|  `cosmos` | { `config`: [`CosmosSliceConfig`](CosmosSliceConfig.md); `graph`: `Graph` | `null`; `isSimulationRunning`: `boolean`; `setConfig`: (`config`) => `void`; `createGraph`: (`container`) => `void`; `toggleSimulation`: () => `void`; `fitView`: () => `void`; `startWithEnergy`: () => `void`; `destroyGraph`: () => `void`; `updateSimulationConfig`: (`config`) => `void`; `updateGraphConfig`: (`config`) => `void`; `updateGraphData`: (`data`) => `void`; `setFocusedPoint`: (`index`) => `void`; `setZoomLevel`: (`level`) => `void`; } |
