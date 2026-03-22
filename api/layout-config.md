---
url: 'https://sqlrooms.org/api/layout-config.md'
---
# @sqlrooms/layout-config

Zod schemas and types for SQLRooms layout configuration (Mosaic layout).

## Installation

```bash
npm install @sqlrooms/layout-config
```

## Main exports

* `MAIN_VIEW`
* `LayoutTypes`
* `MosaicLayoutConfig`, `LayoutConfig`
* `MosaicLayoutNode`, `MosaicLayoutParent`, `isMosaicLayoutParent`
* `createDefaultMosaicLayout()`, `DEFAULT_MOSAIC_LAYOUT`

## Basic usage

```ts
import {
  LayoutConfig,
  MAIN_VIEW,
  MosaicLayoutConfig,
  createDefaultMosaicLayout,
} from '@sqlrooms/layout-config';

const minimalLayout = createDefaultMosaicLayout();

const twoPaneLayout: MosaicLayoutConfig = {
  type: 'mosaic',
  nodes: {
    direction: 'row',
    first: 'data',
    second: MAIN_VIEW,
    splitPercentage: 30,
  },
};

const validatedMinimal: LayoutConfig = LayoutConfig.parse(minimalLayout);
const validated: LayoutConfig = LayoutConfig.parse(twoPaneLayout);
```

## Typical integration

```ts
import {createRoomShellSlice} from '@sqlrooms/room-shell';
// `DataPanel` and `MainPanel` are app-level React components in your project.

createRoomShellSlice({
  layout: {
    config: twoPaneLayout,
    panels: {
      data: {title: 'Data', component: DataPanel, placement: 'sidebar'},
      main: {title: 'Main', component: MainPanel, placement: 'main'},
    },
  },
});
```

## Type Aliases

* [LayoutTypes](type-aliases/LayoutTypes.md)
* [MosaicLayoutDirection](type-aliases/MosaicLayoutDirection.md)
* [MosaicLayoutParent](type-aliases/MosaicLayoutParent.md)
* [MosaicLayoutNodeKey](type-aliases/MosaicLayoutNodeKey.md)
* [MosaicLayoutNode](type-aliases/MosaicLayoutNode.md)
* [MosaicLayoutConfig](type-aliases/MosaicLayoutConfig.md)
* [LayoutConfig](type-aliases/LayoutConfig.md)

## Variables

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

* [createDefaultMosaicLayout](functions/createDefaultMosaicLayout.md)
* [isMosaicLayoutParent](functions/isMosaicLayoutParent.md)
