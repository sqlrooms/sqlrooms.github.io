---
url: /api/ui/functions/useRelativeCoordinates.md
---
[@sqlrooms/ui](../index.md) / useRelativeCoordinates

# Function: useRelativeCoordinates()

> **useRelativeCoordinates**(`containerRef`): (`x`, `y`) => \[`number`, `number`]

A hook that converts absolute screen coordinates to coordinates relative to a container element.

This hook is useful when you need to position elements (like tooltips, popovers, or context menus)
relative to a container, especially when dealing with mouse or touch events.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `containerRef` | `RefObject`<`HTMLElement` | `null`> | A React ref object pointing to the container HTML element |

## Returns

A callback function that converts absolute coordinates to relative ones

> (`x`, `y`): \[`number`, `number`]

### Parameters

| Parameter | Type |
| ------ | ------ |
| `x` | `number` |
| `y` | `number` |

### Returns

\[`number`, `number`]

## Examples

```typescript
const MyComponent = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const getRelativeCoords = useRelativeCoordinates(containerRef);

  const handleMouseMove = (e: React.MouseEvent) => {
    // Convert screen coordinates to container-relative coordinates
    const [relativeX, relativeY] = getRelativeCoords(e.clientX, e.clientY);

    // Use the coordinates to position a tooltip, etc.
    setTooltipPosition({ x: relativeX, y: relativeY });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative"
    >
      Content
    </div>
  );
};
```

```typescript
// Using with touch events
const handleTouch = (e: React.TouchEvent) => {
  const touch = e.touches[0];
  const [x, y] = getRelativeCoords(touch.clientX, touch.clientY);
  // Position elements based on touch coordinates
};
```
