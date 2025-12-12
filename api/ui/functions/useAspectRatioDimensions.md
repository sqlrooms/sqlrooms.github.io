---
url: /api/ui/functions/useAspectRatioDimensions.md
---
[@sqlrooms/ui](../index.md) / useAspectRatioDimensions

# Function: useAspectRatioDimensions()

> **useAspectRatioDimensions**(`props`): [`Dimensions`](../interfaces/Dimensions.md)

A hook that calculates element dimensions based on provided values and container size

This hook handles various combinations of width/height specifications:

* If both width and height are provided, uses those exact dimensions
* If only width is provided, calculates height using the aspect ratio
* If only height is provided, calculates width using the aspect ratio
* If both are 'auto', uses container width and calculates height using the aspect ratio

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`UseAspectRatioDimensionsProps`](../interfaces/UseAspectRatioDimensionsProps.md) | The input parameters for dimension calculation |

## Returns

[`Dimensions`](../interfaces/Dimensions.md)

The calculated width and height

## Example

```tsx
const containerRef = useRef<HTMLDivElement>(null);
const {width, height} = useAspectRatioDimensions({
  width: 'auto',
  height: 'auto',
  aspectRatio: 16/9,
  containerRef
});
// Returns dimensions based on container size
```
