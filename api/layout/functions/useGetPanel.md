---
url: 'https://sqlrooms.org/api/layout/functions/useGetPanel.md'
---
[@sqlrooms/layout](../index.md) / useGetPanel

# Function: useGetPanel()

> **useGetPanel**(`node`): [`RoomPanelInfo`](../type-aliases/RoomPanelInfo.md) | `null`

React hook to get panel info from a layout node using direct panel identity.

Reads the `panel` property from panel/dock nodes or falls back to the node's `id`,
looks it up in the panels registry, and resolves function-form definitions.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `node` | [`LayoutNode`](../type-aliases/LayoutNode.md) | The layout node to resolve panel info for |

## Returns

[`RoomPanelInfo`](../type-aliases/RoomPanelInfo.md) | `null`

Panel info object, or null if no match in registry
