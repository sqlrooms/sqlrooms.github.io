---
url: 'https://sqlrooms.org/api/room-shell/type-aliases/RoomPanelInfo.md'
---
[@sqlrooms/room-shell](../index.md) / RoomPanelInfo

# Type Alias: RoomPanelInfo

> **RoomPanelInfo** = `object`

## Properties

### title?

> `optional` **title?**: `string`

***

### icon?

> `optional` **icon?**: `ComponentType`<{ `className?`: `string`; }>

***

### ~~placement?~~

> `optional` **placement?**: `string`

#### Deprecated

No longer used — panel area is determined by the layout tree

***

### component?

> `optional` **component?**: [`RoomPanelComponent`](RoomPanelComponent.md)

***

### dragOverlay?

> `optional` **dragOverlay?**: `ComponentType`<{ `node`: [`LayoutNode`](LayoutNode.md); }>
