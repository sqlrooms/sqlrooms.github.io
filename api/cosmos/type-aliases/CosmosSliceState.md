---
url: /api/cosmos/type-aliases/CosmosSliceState.md
---
[@sqlrooms/cosmos](../index.md) / CosmosSliceState

# Type Alias: CosmosSliceState

> **CosmosSliceState** = `object`

Core state interface for the Cosmos graph visualization.
Contains the graph instance, simulation state, and all control functions.

## Properties

### cosmos

> **cosmos**: `object`

| Name | Type | Description |
| ------ | ------ | ------ |
| `config` | [`CosmosSliceConfig`](CosmosSliceConfig.md) | - |
| `graph` | `Graph` | `null` | The current graph instance |
| `isSimulationRunning` | `boolean` | Whether the physics simulation is currently running |
| `setConfig()` | (`config`) => `void` | Sets the config for the cosmos slice |
| `createGraph()` | (`container`) => `void` | Creates a new graph instance in the specified container |
| `toggleSimulation()` | () => `void` | Toggles the physics simulation on/off |
| `fitView()` | () => `void` | Adjusts the view to fit all nodes |
| `startWithEnergy()` | () => `void` | Starts the simulation with initial energy |
| `destroyGraph()` | () => `void` | Cleans up and removes the current graph |
| `updateSimulationConfig()` | (`config`) => `void` | Updates the simulation configuration parameters |
| `updateGraphConfig()` | (`config`) => `void` | Updates the graph's visual configuration |
| `updateGraphData()` | (`data`) => `void` | Updates the graph's data (points, links, colors, etc.) |
| `setFocusedPoint()` | (`index`) => `void` | Sets the currently focused point by its index |
| `setZoomLevel()` | (`level`) => `void` | Sets the zoom level of the graph view |
