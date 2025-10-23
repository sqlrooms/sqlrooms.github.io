---
url: /api/cosmos/functions/CosmosGraphControls.md
---
[@sqlrooms/cosmos](../index.md) / CosmosGraphControls

# Function: CosmosGraphControls()

> **CosmosGraphControls**(`props`): `ReactNode` | `Promise`<`ReactNode`>

A flexible control panel component for CosmosGraph that provides view controls.
Must be used within a CosmosGraph component as it relies on the graph state from the store.

The component shows the default fit view control and allows adding custom controls as children.
For simulation controls, use the CosmosSimulationControls component.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `props` | `PropsWithChildren` |

## Returns

`ReactNode` | `Promise`<`ReactNode`>

## Examples

```tsx
<CosmosGraph {...graphProps}>
  <CosmosGraphControls />
</CosmosGraph>
```

```tsx
<CosmosGraph {...graphProps}>
  <CosmosGraphControls className="absolute bottom-4 right-4" />
</CosmosGraph>
```

```tsx
<CosmosGraph {...graphProps}>
  <CosmosGraphControls>
    <Button onClick={handleExport}>
      <Download className="h-4 w-4" />
    </Button>
  </CosmosGraphControls>
</CosmosGraph>
```
