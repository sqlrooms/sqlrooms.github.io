---
url: /api/cosmos/functions/useHoverState.md
---
[@sqlrooms/cosmos](../index.md) / useHoverState

# Function: useHoverState()

> **useHoverState**(`calcRelativeCoordinates`): `object`

A custom hook that manages hover state for graph points.

This hook provides functionality to:

* Track which point is currently being hovered
* Store the hover position coordinates
* Clear the hover state
* Provide event handlers for hover-related graph interactions

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `calcRelativeCoordinates` | (`x`, `y`) => \[`number`, `number`] | A function that converts client coordinates to container-relative coordinates |

## Returns

`object`

An object containing the hover state and event handlers for the graph

| Name | Type |
| ------ | ------ |
|  `hoveredPoint` | [`HoverState`](../type-aliases/HoverState.md) |
|  `eventHandlers` | { `onPointMouseOver`: (`index`, `pointPosition`, `event`) => `void`; `onPointMouseOut`: () => `void`; `onZoomStart`: () => `void`; `onDragStart`: () => `void`; } |

## Example

```tsx
const Graph = () => {
  const calcRelativeCoords = useRelativeCoordinates(containerRef);
  const { hoveredPoint, eventHandlers } = useHoverState(calcRelativeCoords);

  return (
    <div ref={containerRef}>
      <CosmosGraph
        config={eventHandlers}
      />
      {hoveredPoint && (
        <Tooltip
          x={hoveredPoint.position[0]}
          y={hoveredPoint.position[1]}
        />
      )}
    </div>
  );
};
```
