---
url: https://sqlrooms.org/api/ui/functions/useAutoResizeTextarea.md
---
[@sqlrooms/ui](../index.md) / useAutoResizeTextarea

# Function: useAutoResizeTextarea()

> **useAutoResizeTextarea**(`options`): [`UseAutoResizeTextareaResult`](../interfaces/UseAutoResizeTextareaResult.md)

Keeps a textarea's height synchronized with its content and container
width.

Reads and writes only through the DOM node reached via `textareaRef`, so
auto-grow can be layered onto a text input rendered by any component,
including one that does not implement it itself.

The resize path is triggered from several sources (input, value changes,
width changes) and deduped per frame.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`UseAutoResizeTextareaOptions`](../interfaces/UseAutoResizeTextareaOptions.md) | See [UseAutoResizeTextareaOptions](../interfaces/UseAutoResizeTextareaOptions.md). |

## Returns

[`UseAutoResizeTextareaResult`](../interfaces/UseAutoResizeTextareaResult.md)

See [UseAutoResizeTextareaResult](../interfaces/UseAutoResizeTextareaResult.md).
