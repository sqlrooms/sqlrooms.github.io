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
* `LayoutNode`, `LayoutPanelNode`, `LayoutSplitNode`, `LayoutTabsNode`, `LayoutDockNode`
* `isLayoutPanelNode`, `isLayoutSplitNode`, `isLayoutTabsNode`, `isLayoutDockNode`
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

* [LayoutNodeKey](type-aliases/LayoutNodeKey.md)
* [LayoutNodeSize](type-aliases/LayoutNodeSize.md)
* [PanelIdentity](type-aliases/PanelIdentity.md)
* [LayoutPanelNode](type-aliases/LayoutPanelNode.md)
* [LayoutSplitNode](type-aliases/LayoutSplitNode.md)
* [LayoutTabsNode](type-aliases/LayoutTabsNode.md)
* [LayoutDockNode](type-aliases/LayoutDockNode.md)
* [LayoutNode](type-aliases/LayoutNode.md)
* [LayoutConfig](type-aliases/LayoutConfig.md)
* [LayoutDirection](type-aliases/LayoutDirection.md)
* [LayoutDirection](type-aliases/LayoutDirection-1.md)

## Variables

* [MAIN\_VIEW](variables/MAIN_VIEW.md)
* [LayoutNodeKey](variables/LayoutNodeKey.md)
* [LayoutNodeSize](variables/LayoutNodeSize.md)
* [LayoutPanelNode](variables/LayoutPanelNode.md)
* [LayoutSplitNode](variables/LayoutSplitNode.md)
* [LayoutTabsNode](variables/LayoutTabsNode.md)
* [LayoutDockNode](variables/LayoutDockNode.md)
* [LayoutNode](variables/LayoutNode.md)
* [LayoutConfig](variables/LayoutConfig.md)

## Functions

* [isLayoutNodeKey](functions/isLayoutNodeKey.md)
* [isLayoutPanelNode](functions/isLayoutPanelNode.md)
* [isLayoutSplitNode](functions/isLayoutSplitNode.md)
* [isLayoutTabsNode](functions/isLayoutTabsNode.md)
* [isLayoutDockNode](functions/isLayoutDockNode.md)
* [createDefaultLayout](functions/createDefaultLayout.md)
* [getLayoutNodeId](functions/getLayoutNodeId.md)
* [getChildrenIds](functions/getChildrenIds.md)
* [getVisibleTabChildren](functions/getVisibleTabChildren.md)
* [getHiddenTabChildren](functions/getHiddenTabChildren.md)
