---
url: 'https://sqlrooms.org/api/layout.md'
---
# @sqlrooms/layout

Layout slice and mosaic utilities for SQLRooms panel-based UIs.

This package uses `react-mosaic` to compose resizable panel layouts.

## Installation

```bash
npm install @sqlrooms/layout
```

## Main exports

* `createLayoutSlice()`, `useStoreWithLayout()`
* `MosaicLayout` component
* mosaic helpers:
  * `makeMosaicStack`
  * `visitMosaicLeafNodes`
  * `getVisibleMosaicLayoutPanels`
  * `findMosaicNodePathByKey`
  * `removeMosaicNodeByKey`
* layout config schemas/types re-exported from `@sqlrooms/layout-config`

## Store usage

```tsx
import {
  LayoutSliceState,
  LayoutTypes,
  MAIN_VIEW,
  createLayoutSlice,
} from '@sqlrooms/layout';
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
        type: LayoutTypes.enum.mosaic,
        nodes: {
          direction: 'row',
          first: 'data',
          second: MAIN_VIEW,
          splitPercentage: 30,
        },
      },
      panels: {
        data: {
          title: 'Data',
          component: DataPanel,
          placement: 'sidebar',
        },
        main: {
          title: 'Main',
          component: MainPanel,
          placement: 'main',
        },
      },
    })(set, get, store),
  }),
);
```

## Programmatic panel visibility

```tsx
import {Button} from '@sqlrooms/ui';

function PanelButtons() {
  const togglePanel = useRoomStore((state) => state.layout.togglePanel);
  const togglePanelPin = useRoomStore((state) => state.layout.togglePanelPin);

  return (
    <div className="flex gap-2">
      <Button onClick={() => togglePanel('data')}>Toggle Data Panel</Button>
      <Button onClick={() => togglePanelPin('data')}>Pin/Unpin Data Panel</Button>
    </div>
  );
}
```

## Note

`@sqlrooms/layout` (react-mosaic layout) is different from `@sqlrooms/mosaic` (UW IDL data visualization package).

## Type Aliases

* [RoomPanelInfo](type-aliases/RoomPanelInfo.md)
* [LayoutSliceConfig](type-aliases/LayoutSliceConfig.md)
* [LayoutSliceState](type-aliases/LayoutSliceState.md)
* [CreateLayoutSliceProps](type-aliases/CreateLayoutSliceProps.md)
* [LayoutTypes](type-aliases/LayoutTypes.md)
* [MosaicLayoutDirection](type-aliases/MosaicLayoutDirection.md)
* [MosaicLayoutParent](type-aliases/MosaicLayoutParent.md)
* [MosaicLayoutNodeKey](type-aliases/MosaicLayoutNodeKey.md)
* [MosaicLayoutNode](type-aliases/MosaicLayoutNode.md)
* [MosaicLayoutConfig](type-aliases/MosaicLayoutConfig.md)
* [LayoutConfig](type-aliases/LayoutConfig.md)

## Variables

* [LayoutSliceConfig](variables/LayoutSliceConfig.md)
* [MosaicLayout](variables/MosaicLayout.md)
* [MAIN\_VIEW](variables/MAIN_VIEW.md)
* [LayoutTypes](variables/LayoutTypes.md)
* [~~DEFAULT\_MOSAIC\_LAYOUT~~](variables/DEFAULT_MOSAIC_LAYOUT.md)
* [MosaicLayoutDirection](variables/MosaicLayoutDirection.md)
* [MosaicLayoutParent](variables/MosaicLayoutParent.md)
* [MosaicLayoutNodeKey](variables/MosaicLayoutNodeKey.md)
* [MosaicLayoutNode](variables/MosaicLayoutNode.md)
* [MosaicLayoutConfig](variables/MosaicLayoutConfig.md)
* [LayoutConfig](variables/LayoutConfig.md)

## Functions

* [createDefaultLayoutConfig](functions/createDefaultLayoutConfig.md)
* [createLayoutSlice](functions/createLayoutSlice.md)
* [useStoreWithLayout](functions/useStoreWithLayout.md)
* [makeMosaicStack](functions/makeMosaicStack.md)
* [visitMosaicLeafNodes](functions/visitMosaicLeafNodes.md)
* [getVisibleMosaicLayoutPanels](functions/getVisibleMosaicLayoutPanels.md)
* [findMosaicNodePathByKey](functions/findMosaicNodePathByKey.md)
* [removeMosaicNodeByKey](functions/removeMosaicNodeByKey.md)
* [createDefaultMosaicLayout](functions/createDefaultMosaicLayout.md)
* [isMosaicLayoutParent](functions/isMosaicLayoutParent.md)
