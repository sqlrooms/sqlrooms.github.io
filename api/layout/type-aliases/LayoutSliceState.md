---
url: /api/layout/type-aliases/LayoutSliceState.md
---
[@sqlrooms/layout](../index.md) / LayoutSliceState

# Type Alias: LayoutSliceState

> **LayoutSliceState** = `object`

## Properties

### layout

> **layout**: `object`

| Name | Type |
| ------ | ------ |
| `config` | [`LayoutSliceConfig`](LayoutSliceConfig.md) |
| `panels` | `Record`<`string`, [`RoomPanelInfo`](RoomPanelInfo.md)> |
| `setConfig()` | (`layout`) => |
| `setLayout()` | (`layout`) => |
| `togglePanel()` | (`panel`, `show?`) => `void` |
| `togglePanelPin()` | (`panel`) => `void` |
