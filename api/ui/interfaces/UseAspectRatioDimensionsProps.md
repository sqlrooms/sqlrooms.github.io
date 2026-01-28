---
url: /api/ui/interfaces/UseAspectRatioDimensionsProps.md
---
[@sqlrooms/ui](../index.md) / UseAspectRatioDimensionsProps

# Interface: UseAspectRatioDimensionsProps

Props for the useAspectRatioDimensions hook
UseAspectRatioDimensionsProps

## Properties

### width

> **width**: `number` | `"auto"`

The explicitly provided width, or 'auto' for container-based width

***

### height

> **height**: `number` | `"auto"`

The explicitly provided height, or 'auto' for aspect ratio-based height

***

### aspectRatio

> **aspectRatio**: `number`

The desired width-to-height ratio when dimensions are auto-calculated

***

### containerRef

> **containerRef**: `RefObject`<`HTMLElement` | `null`>

Reference to the container element
