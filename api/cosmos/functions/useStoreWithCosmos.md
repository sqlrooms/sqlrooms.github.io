---
url: /api/cosmos/functions/useStoreWithCosmos.md
---
[@sqlrooms/cosmos](../index.md) / useStoreWithCosmos

# Function: useStoreWithCosmos()

> **useStoreWithCosmos**<`T`>(`selector`): `T`

Hook to access the Cosmos store with proper typing.
Provides type-safe access to the combined room and Cosmos state.

## Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `T` | The type of the selected state slice |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `selector` | (`state`) => `T` | A function that selects a portion of the state |

## Returns

`T`

The selected state portion

## Example

```typescript
const graph = useStoreWithCosmos(state => state.cosmos.graph);
const isRunning = useStoreWithCosmos(state => state.cosmos.isSimulationRunning);
```
