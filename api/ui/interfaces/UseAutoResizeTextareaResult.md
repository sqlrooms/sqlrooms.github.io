---
url: https://sqlrooms.org/api/ui/interfaces/UseAutoResizeTextareaResult.md
---
[@sqlrooms/ui](../index.md) / UseAutoResizeTextareaResult

# Interface: UseAutoResizeTextareaResult

Return value of [useAutoResizeTextarea](../functions/useAutoResizeTextarea.md).

## Properties

### hasOverflow

> **hasOverflow**: `boolean`

True when the content's height exceeds the element's `max-height`.

***

### resizeToFitContent

> **resizeToFitContent**: () => `void`

Schedules a re-measure and height update on the next animation frame —
the element's height is not yet updated when this returns.

#### Returns

`void`
