---
url: https://sqlrooms.org/api/documents/functions/useSelectedBlockOrPanel.md
---
[@sqlrooms/documents](../index.md) / useSelectedBlockOrPanel

# Function: useSelectedBlockOrPanel()

> **useSelectedBlockOrPanel**(`editor`): [`SelectedItem`](../type-aliases/SelectedItem.md)

Hook that returns the currently selected block or panel.

Priority order:

1. Panel selection from blockSelection store (custom selection)
2. Block selection from TipTap editor state (node selection)
3. null if neither is selected

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `editor` | `Editor` | `null` | TipTap editor instance |

## Returns

[`SelectedItem`](../type-aliases/SelectedItem.md)

Selected block/panel info or null
