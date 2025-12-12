---
url: /api/cosmos/variables/CosmosGraphControls.md
---
[@sqlrooms/cosmos](../index.md) / CosmosGraphControls

# Variable: CosmosGraphControls

> `const` **CosmosGraphControls**: `FC`<`PropsWithChildren`<`CosmosGraphControlsProps`>>

A flexible control panel component for CosmosGraph that provides view controls.
Must be used within a CosmosGraph component as it relies on the graph state from the store.

The component shows the default fit view control and allows adding custom controls as children.
For simulation controls, use the CosmosSimulationControls component.

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
