---
url: 'https://sqlrooms.org/api/layout.md'
---
# @sqlrooms/layout

Layout slice and renderer for SQLRooms panel-based UIs.

This package renders layout trees using `react-resizable-panels` for split layouts, `dnd-kit` for dockable panel rearrangement, and `react-grid-layout` for scrollable grid dashboard layouts.

## Installation

```bash
npm install @sqlrooms/layout
```

## Main exports

* `createLayoutSlice()`, `useStoreWithLayout()`
* `LayoutRenderer` component — renders a `LayoutNode` tree using resizable panels, tabs, and generic docking
* `useExpandGridPanel()` — expands a grid child panel horizontally to available row space
* Grid layout defaults/helpers: `DEFAULT_GRID_COLS`, `DEFAULT_GRID_BREAKPOINTS`, `getResponsiveGridCols()`, `getGridColsForBreakpoint()`
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

## Tabs layout composition

`TabsLayout.TabContent` accepts `forceMount` to keep all visible tab contents
mounted while hiding inactive tabs. This is useful for expensive panels that
should preserve local state or setup work during tab changes:

```tsx
<TabsLayout.TabContentContainer>
  <TabsLayout.TabContent forceMount />
</TabsLayout.TabContentContainer>
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

## Interfaces

* [TabsLayoutTabContentProps](/api/layout/interfaces/TabsLayoutTabContentProps.md)

## Type Aliases

* [LayoutNodeContextTabs](/api/layout/type-aliases/LayoutNodeContextTabs.md)
* [LayoutNodeContextSplit](/api/layout/type-aliases/LayoutNodeContextSplit.md)
* [LayoutNodeContextDock](/api/layout/type-aliases/LayoutNodeContextDock.md)
* [LayoutNodeContextGrid](/api/layout/type-aliases/LayoutNodeContextGrid.md)
* [LayoutNodeContextPanel](/api/layout/type-aliases/LayoutNodeContextPanel.md)
* [LayoutNodeContextLeaf](/api/layout/type-aliases/LayoutNodeContextLeaf.md)
* [LayoutNodeContextValue](/api/layout/type-aliases/LayoutNodeContextValue.md)
* [LayoutRendererProps](/api/layout/type-aliases/LayoutRendererProps.md)
* [DockDirection](/api/layout/type-aliases/DockDirection.md)
* [DockAxis](/api/layout/type-aliases/DockAxis.md)
* [ParentDirection](/api/layout/type-aliases/ParentDirection.md)
* [LayoutSliceConfig](/api/layout/type-aliases/LayoutSliceConfig.md)
* [LayoutSliceConfig](/api/layout/type-aliases/LayoutSliceConfig-1.md)
* [LayoutSliceState](/api/layout/type-aliases/LayoutSliceState.md)
* [CreateLayoutSliceProps](/api/layout/type-aliases/CreateLayoutSliceProps.md)
* [PanelIdentityResult](/api/layout/type-aliases/PanelIdentityResult.md)
* [LayoutPath](/api/layout/type-aliases/LayoutPath.md)
* [PanelContainerType](/api/layout/type-aliases/PanelContainerType.md)
* [RoomPanelComponent](/api/layout/type-aliases/RoomPanelComponent.md)
* [RoomPanelInfo](/api/layout/type-aliases/RoomPanelInfo.md)
* [PanelDefinitionContext](/api/layout/type-aliases/PanelDefinitionContext.md)
* [PanelDefinition](/api/layout/type-aliases/PanelDefinition.md)
* [Panels](/api/layout/type-aliases/Panels.md)
* [LayoutNodeKey](/api/layout/type-aliases/LayoutNodeKey.md)
* [LayoutPanelNode](/api/layout/type-aliases/LayoutPanelNode.md)
* [LayoutSplitNode](/api/layout/type-aliases/LayoutSplitNode.md)
* [LayoutTabsNode](/api/layout/type-aliases/LayoutTabsNode.md)
* [LayoutDockNode](/api/layout/type-aliases/LayoutDockNode.md)
* [LayoutGridItem](/api/layout/type-aliases/LayoutGridItem.md)
* [LayoutGridNode](/api/layout/type-aliases/LayoutGridNode.md)
* [LayoutNode](/api/layout/type-aliases/LayoutNode.md)
* [LayoutConfig](/api/layout/type-aliases/LayoutConfig.md)
* [LayoutDirection](/api/layout/type-aliases/LayoutDirection.md)
* [LayoutDirection](/api/layout/type-aliases/LayoutDirection-1.md)

## Variables

* [LayoutNodeProvider](/api/layout/variables/LayoutNodeProvider.md)
* [LayoutRenderer](/api/layout/variables/LayoutRenderer.md)
* [RoomDndProvider](/api/layout/variables/RoomDndProvider.md)
* [DEFAULT\_GRID\_BREAKPOINTS](/api/layout/variables/DEFAULT_GRID_BREAKPOINTS.md)
* [DEFAULT\_GRID\_COLS](/api/layout/variables/DEFAULT_GRID_COLS.md)
* [DockLayout](/api/layout/variables/DockLayout.md)
* [GridLayout](/api/layout/variables/GridLayout.md)
* [LeafLayout](/api/layout/variables/LeafLayout.md)
* [SplitLayout](/api/layout/variables/SplitLayout.md)
* [TabsLayout](/api/layout/variables/TabsLayout.md)
* [MAIN\_VIEW](/api/layout/variables/MAIN_VIEW.md)
* [LayoutNodeKey](/api/layout/variables/LayoutNodeKey.md)
* [LayoutPanelNode](/api/layout/variables/LayoutPanelNode.md)
* [LayoutSplitNode](/api/layout/variables/LayoutSplitNode.md)
* [LayoutTabsNode](/api/layout/variables/LayoutTabsNode.md)
* [LayoutDockNode](/api/layout/variables/LayoutDockNode.md)
* [LayoutGridNode](/api/layout/variables/LayoutGridNode.md)
* [LayoutNode](/api/layout/variables/LayoutNode.md)
* [LayoutConfig](/api/layout/variables/LayoutConfig.md)

## Functions

* [useLayoutNodeContext](/api/layout/functions/useLayoutNodeContext.md)
* [useTabsNodeContext](/api/layout/functions/useTabsNodeContext.md)
* [useSplitNodeContext](/api/layout/functions/useSplitNodeContext.md)
* [useDockNodeContext](/api/layout/functions/useDockNodeContext.md)
* [useGridNodeContext](/api/layout/functions/useGridNodeContext.md)
* [getLayoutNodeContextValue](/api/layout/functions/getLayoutNodeContextValue.md)
* [createDefaultLayoutConfig](/api/layout/functions/createDefaultLayoutConfig.md)
* [createLayoutSlice](/api/layout/functions/createLayoutSlice.md)
* [useStoreWithLayout](/api/layout/functions/useStoreWithLayout.md)
* [movePanel](/api/layout/functions/movePanel.md)
* [getGridColsForBreakpoint](/api/layout/functions/getGridColsForBreakpoint.md)
* [getResponsiveGridCols](/api/layout/functions/getResponsiveGridCols.md)
* [createLayoutId](/api/layout/functions/createLayoutId.md)
* [visitLayoutLeafNodes](/api/layout/functions/visitLayoutLeafNodes.md)
* [getVisibleLayoutPanels](/api/layout/functions/getVisibleLayoutPanels.md)
* [findNodeById](/api/layout/functions/findNodeById.md)
* [findTabsNodeForPanel](/api/layout/functions/findTabsNodeForPanel.md)
* [findNearestDockAncestor](/api/layout/functions/findNearestDockAncestor.md)
* [isDockablePanel](/api/layout/functions/isDockablePanel.md)
* [removeLayoutNodeByKey](/api/layout/functions/removeLayoutNodeByKey.md)
* [useLeafLayoutPanelDraggable](/api/layout/functions/useLeafLayoutPanelDraggable.md)
* [useExpandGridPanel](/api/layout/functions/useExpandGridPanel.md)
* [resolvePanelDefinition](/api/layout/functions/resolvePanelDefinition.md)
* [resolvePanelIdentity](/api/layout/functions/resolvePanelIdentity.md)
* [useGetPanel](/api/layout/functions/useGetPanel.md)
* [isLayoutNodeKey](/api/layout/functions/isLayoutNodeKey.md)
* [isLayoutPanelNode](/api/layout/functions/isLayoutPanelNode.md)
* [isLayoutSplitNode](/api/layout/functions/isLayoutSplitNode.md)
* [isLayoutTabsNode](/api/layout/functions/isLayoutTabsNode.md)
* [isLayoutDockNode](/api/layout/functions/isLayoutDockNode.md)
* [isLayoutGridNode](/api/layout/functions/isLayoutGridNode.md)
* [createDefaultLayout](/api/layout/functions/createDefaultLayout.md)
* [getLayoutNodeId](/api/layout/functions/getLayoutNodeId.md)
* [getChildrenIds](/api/layout/functions/getChildrenIds.md)
* [getVisibleTabChildren](/api/layout/functions/getVisibleTabChildren.md)
* [getHiddenTabChildren](/api/layout/functions/getHiddenTabChildren.md)
