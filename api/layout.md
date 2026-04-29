---
url: 'https://sqlrooms.org/api/layout.md'
---
# @sqlrooms/layout

Layout slice and renderer for SQLRooms panel-based UIs.

This package renders layout trees using `react-resizable-panels` for split layouts and `dnd-kit` for dockable panel rearrangement.

## Installation

```bash
npm install @sqlrooms/layout
```

## Main exports

* `createLayoutSlice()`, `useStoreWithLayout()`
* `LayoutRenderer` component — renders a `LayoutNode` tree using resizable panels, tabs, and generic docking
* Layout helpers:
  * `visitLayoutLeafNodes`
  * `getVisibleLayoutPanels`
  * `removeLayoutNodeByKey`
  * `findNodeById`, `findTabsNodeForPanel`
  * `movePanel`
* Layout config schemas/types re-exported from `@sqlrooms/layout-config`

## Store usage

```tsx
import {LayoutSliceState, createLayoutSlice} from '@sqlrooms/layout';
import {
  BaseRoomStoreState,
  createBaseRoomSlice,
  createRoomStore,
} from '@sqlrooms/room-store';

function DataPanel() {
  return <div>Data</div>;
}

function MainPanel() {
  return <div>Main</div>;
}

type State = BaseRoomStoreState & LayoutSliceState;

export const {roomStore, useRoomStore} = createRoomStore<State>(
  (set, get, store) => ({
    ...createBaseRoomSlice()(set, get, store),
    ...createLayoutSlice({
      config: {
        type: 'split',
        direction: 'row',
        children: [
          {type: 'panel', id: 'data', defaultSize: '30%'},
          {type: 'panel', id: 'main', defaultSize: '70%'},
        ],
      },
      panels: {
        data: {
          title: 'Data',
          component: DataPanel,
        },
        main: {
          title: 'Main',
          component: MainPanel,
        },
      },
    })(set, get, store),
  }),
);
```

## Render callbacks

`createLayoutSlice` accepts optional render callbacks for custom panel and tab strip rendering:

```ts
createLayoutSlice({
  config: {
    /* ... */
  },
  panels: {
    /* ... */
  },
  renderPanel: (context) => {
    // Return custom JSX or undefined to fall back to the default renderer
  },
});
```

## Area-based panel management

Named `tabs` nodes (with an `id`) act as **areas** that can be managed programmatically:

```tsx
import {Button} from '@sqlrooms/ui';

function PanelButtons() {
  const setActiveTab = useRoomStore((state) => state.layout.setActiveTab);
  const addTab = useRoomStore((state) => state.layout.addTab);
  const setCollapsed = useRoomStore((state) => state.layout.setCollapsed);

  return (
    <div className="flex gap-2">
      <Button onClick={() => setActiveTab('sidebar', 'data')}>
        Show Data Panel
      </Button>
      <Button onClick={() => addTab('sidebar', 'schema')}>
        Add Schema Tab
      </Button>
      <Button onClick={() => setCollapsed('sidebar', true)}>
        Collapse Sidebar
      </Button>
    </div>
  );
}
```

## Note

`@sqlrooms/layout` (panel layout system) is different from `@sqlrooms/mosaic` (UW IDL data visualization package).

## Type Aliases

* [LayoutNodeContextTabs](type-aliases/LayoutNodeContextTabs.md)
* [LayoutNodeContextSplit](type-aliases/LayoutNodeContextSplit.md)
* [LayoutNodeContextDock](type-aliases/LayoutNodeContextDock.md)
* [LayoutNodeContextPanel](type-aliases/LayoutNodeContextPanel.md)
* [LayoutNodeContextLeaf](type-aliases/LayoutNodeContextLeaf.md)
* [LayoutNodeContextValue](type-aliases/LayoutNodeContextValue.md)
* [LayoutRendererProps](type-aliases/LayoutRendererProps.md)
* [DockDirection](type-aliases/DockDirection.md)
* [DockAxis](type-aliases/DockAxis.md)
* [ParentDirection](type-aliases/ParentDirection.md)
* [LayoutSliceConfig](type-aliases/LayoutSliceConfig.md)
* [LayoutSliceConfig](type-aliases/LayoutSliceConfig-1.md)
* [LayoutSliceState](type-aliases/LayoutSliceState.md)
* [CreateLayoutSliceProps](type-aliases/CreateLayoutSliceProps.md)
* [PanelIdentityResult](type-aliases/PanelIdentityResult.md)
* [LayoutPath](type-aliases/LayoutPath.md)
* [PanelContainerType](type-aliases/PanelContainerType.md)
* [RoomPanelComponent](type-aliases/RoomPanelComponent.md)
* [RoomPanelInfo](type-aliases/RoomPanelInfo.md)
* [PanelDefinitionContext](type-aliases/PanelDefinitionContext.md)
* [PanelDefinition](type-aliases/PanelDefinition.md)
* [Panels](type-aliases/Panels.md)
* [LayoutNodeKey](type-aliases/LayoutNodeKey.md)
* [LayoutPanelNode](type-aliases/LayoutPanelNode.md)
* [LayoutSplitNode](type-aliases/LayoutSplitNode.md)
* [LayoutTabsNode](type-aliases/LayoutTabsNode.md)
* [LayoutDockNode](type-aliases/LayoutDockNode.md)
* [LayoutNode](type-aliases/LayoutNode.md)
* [LayoutConfig](type-aliases/LayoutConfig.md)
* [LayoutDirection](type-aliases/LayoutDirection.md)
* [LayoutDirection](type-aliases/LayoutDirection-1.md)

## Variables

* [LayoutNodeProvider](variables/LayoutNodeProvider.md)
* [LayoutRenderer](variables/LayoutRenderer.md)
* [DockLayout](variables/DockLayout.md)
* [LeafLayout](variables/LeafLayout.md)
* [SplitLayout](variables/SplitLayout.md)
* [TabsLayout](variables/TabsLayout.md)
* [MAIN\_VIEW](variables/MAIN_VIEW.md)
* [LayoutNodeKey](variables/LayoutNodeKey.md)
* [LayoutPanelNode](variables/LayoutPanelNode.md)
* [LayoutSplitNode](variables/LayoutSplitNode.md)
* [LayoutTabsNode](variables/LayoutTabsNode.md)
* [LayoutDockNode](variables/LayoutDockNode.md)
* [LayoutNode](variables/LayoutNode.md)
* [LayoutConfig](variables/LayoutConfig.md)

## Functions

* [useLayoutNodeContext](functions/useLayoutNodeContext.md)
* [useTabsNodeContext](functions/useTabsNodeContext.md)
* [useSplitNodeContext](functions/useSplitNodeContext.md)
* [useDockNodeContext](functions/useDockNodeContext.md)
* [getLayoutNodeContextValue](functions/getLayoutNodeContextValue.md)
* [createDefaultLayoutConfig](functions/createDefaultLayoutConfig.md)
* [createLayoutSlice](functions/createLayoutSlice.md)
* [useStoreWithLayout](functions/useStoreWithLayout.md)
* [movePanel](functions/movePanel.md)
* [createLayoutId](functions/createLayoutId.md)
* [visitLayoutLeafNodes](functions/visitLayoutLeafNodes.md)
* [getVisibleLayoutPanels](functions/getVisibleLayoutPanels.md)
* [findNodeById](functions/findNodeById.md)
* [findTabsNodeForPanel](functions/findTabsNodeForPanel.md)
* [findNearestDockAncestor](functions/findNearestDockAncestor.md)
* [isDockablePanel](functions/isDockablePanel.md)
* [removeLayoutNodeByKey](functions/removeLayoutNodeByKey.md)
* [useLeafLayoutPanelDraggable](functions/useLeafLayoutPanelDraggable.md)
* [resolvePanelDefinition](functions/resolvePanelDefinition.md)
* [resolvePanelIdentity](functions/resolvePanelIdentity.md)
* [useGetPanel](functions/useGetPanel.md)
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
