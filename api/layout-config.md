---
url: 'https://sqlrooms.org/api/layout-config.md'
---
# @sqlrooms/layout-config

Zod schemas and types for SQLRooms layout configuration.

## Installation

```bash
npm install @sqlrooms/layout-config
```

## Main exports

* `MAIN_VIEW`
* `LayoutConfig` (`LayoutNode | null`)
* `LayoutNode`, `LayoutPanelNode`, `LayoutSplitNode`, `LayoutTabsNode`, `LayoutDockNode`, `LayoutGridNode`
* `isLayoutPanelNode`, `isLayoutSplitNode`, `isLayoutTabsNode`, `isLayoutDockNode`, `isLayoutGridNode`
* `createDefaultLayout()`

## Basic usage

```ts
import {
  LayoutConfig,
  LayoutNode,
  createDefaultLayout,
} from '@sqlrooms/layout-config';

// Simplest config — just the main view
const simpleLayout = createDefaultLayout(); // returns 'main'

// Two-pane split layout
const twoPaneLayout: LayoutConfig = {
  type: 'split',
  direction: 'row',
  children: [
    {type: 'panel', id: 'data', defaultSize: '30%'},
    {type: 'panel', id: 'main', defaultSize: '70%'},
  ],
};

// Validated via Zod
const validated: LayoutConfig = LayoutConfig.parse(twoPaneLayout);
```

## Layout node types

`LayoutConfig` is `LayoutNode | null`. A `LayoutNode` is one of:

| Type     | Description                                                   |
| -------- | ------------------------------------------------------------- |
| `string` | Leaf panel key (e.g. `'main'`, `'data'`)                      |
| `panel`  | Leaf with sizing constraints (`defaultSize`, `minSize`, etc.) |
| `split`  | Resizable panel group (rendered via `react-resizable-panels`) |
| `tabs`   | Tabbed container with collapsible areas                       |
| `dock`   | Docking container with a nested layout tree                   |
| `grid`   | Scrollable dashboard grid with draggable/resizable panels     |

### Panel node

```ts
{type: 'panel', id: 'sidebar', defaultSize: '25%', minSize: '150px', collapsible: true}
```

### Split node

```ts
{
  type: 'split',
  direction: 'row',
  children: [
    {type: 'panel', id: 'left', defaultSize: '30%'},
    {type: 'panel', id: 'right'},
  ],
}
```

### Tabs node

```ts
{
  type: 'tabs',
  id: 'sidebar',
  children: ['data', 'schema'],
  activeTabIndex: 0,
  collapsible: true,
}
```

### Dock node

```ts
{
  type: 'dock',
  id: 'docking-area',
  root: {
    type: 'split',
    direction: 'row',
    children: [
      {type: 'panel', id: 'editor', defaultSize: '70%'},
      {type: 'panel', id: 'preview', defaultSize: '30%'},
    ],
  },
  defaultSize: '100%',
}
```

### Grid node

```ts
{
  type: 'grid',
  id: 'dashboard-grid',
  breakpoints: {lg: 768, sm: 0},
  cols: {lg: 12, sm: 6},
  rowHeight: 220,
  compactType:  'vertical',
  preventCollision: false,
  resizeHandles: ['e', 's', 'w', 'se', 'sw'],
  children: [
    {type: 'panel', id: 'chart-a', panel: 'chart'},
    {type: 'panel', id: 'chart-b', panel: 'chart'},
  ],
}
```

## Typical integration

```ts
import {createRoomShellSlice} from '@sqlrooms/room-shell';

createRoomShellSlice({
  layout: {
    config: twoPaneLayout,
    panels: {
      data: {title: 'Data', component: DataPanel},
      main: {title: 'Main', component: MainPanel},
    },
  },
});
```

## Backward compatibility

Legacy binary-tree split configs are still migrated via `z.preprocess`, but the old `mosaic` node shape is no longer part of the public schema.

## Type Aliases

* [LayoutNodeKey](/api/layout-config/type-aliases/LayoutNodeKey.md)
* [LayoutNodeSize](/api/layout-config/type-aliases/LayoutNodeSize.md)
* [PanelIdentity](/api/layout-config/type-aliases/PanelIdentity.md)
* [LayoutPanelNode](/api/layout-config/type-aliases/LayoutPanelNode.md)
* [LayoutSplitNode](/api/layout-config/type-aliases/LayoutSplitNode.md)
* [LayoutTabsNode](/api/layout-config/type-aliases/LayoutTabsNode.md)
* [LayoutDockNode](/api/layout-config/type-aliases/LayoutDockNode.md)
* [LayoutGridItem](/api/layout-config/type-aliases/LayoutGridItem.md)
* [LayoutGridNode](/api/layout-config/type-aliases/LayoutGridNode.md)
* [LayoutNode](/api/layout-config/type-aliases/LayoutNode.md)
* [LayoutConfig](/api/layout-config/type-aliases/LayoutConfig.md)
* [LayoutDirection](/api/layout-config/type-aliases/LayoutDirection.md)
* [LayoutDirection](/api/layout-config/type-aliases/LayoutDirection-1.md)

## Variables

* [MAIN\_VIEW](/api/layout-config/variables/MAIN_VIEW.md)
* [LayoutNodeKey](/api/layout-config/variables/LayoutNodeKey.md)
* [LayoutNodeSize](/api/layout-config/variables/LayoutNodeSize.md)
* [LayoutPanelNode](/api/layout-config/variables/LayoutPanelNode.md)
* [LayoutSplitNode](/api/layout-config/variables/LayoutSplitNode.md)
* [LayoutTabsNode](/api/layout-config/variables/LayoutTabsNode.md)
* [LayoutDockNode](/api/layout-config/variables/LayoutDockNode.md)
* [LayoutGridNode](/api/layout-config/variables/LayoutGridNode.md)
* [LayoutNode](/api/layout-config/variables/LayoutNode.md)
* [LayoutConfig](/api/layout-config/variables/LayoutConfig.md)

## Functions

* [isLayoutNodeKey](/api/layout-config/functions/isLayoutNodeKey.md)
* [isLayoutPanelNode](/api/layout-config/functions/isLayoutPanelNode.md)
* [isLayoutSplitNode](/api/layout-config/functions/isLayoutSplitNode.md)
* [isLayoutTabsNode](/api/layout-config/functions/isLayoutTabsNode.md)
* [isLayoutDockNode](/api/layout-config/functions/isLayoutDockNode.md)
* [isLayoutGridNode](/api/layout-config/functions/isLayoutGridNode.md)
* [createDefaultLayout](/api/layout-config/functions/createDefaultLayout.md)
* [getLayoutNodeId](/api/layout-config/functions/getLayoutNodeId.md)
* [getChildrenIds](/api/layout-config/functions/getChildrenIds.md)
* [getVisibleTabChildren](/api/layout-config/functions/getVisibleTabChildren.md)
* [getHiddenTabChildren](/api/layout-config/functions/getHiddenTabChildren.md)
