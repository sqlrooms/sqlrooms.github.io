---
url: https://sqlrooms.org/api/mosaic/type-aliases/MosaicDashboardProps.md
---
[@sqlrooms/mosaic](../index.md) / MosaicDashboardProps

# Type Alias: MosaicDashboardProps

> **MosaicDashboardProps** = `object`

## Properties

### dashboardId

> **dashboardId**: `string`

***

### defaultTitle?

> `optional` **defaultTitle?**: `string`

Title used when this dashboard needs to be created during render.

***

### defaultLayoutType?

> `optional` **defaultLayoutType?**: `MosaicDashboardLayoutType`

Layout used when this dashboard needs to be created during render.

***

### headerActions?

> `optional` **headerActions?**: `ReactNode`

Actions rendered at the end of the dashboard toolbar.

***

### selectable?

> `optional` **selectable?**: `boolean`

Whether to enable selection of the entire dashboard

***

### readOnly?

> `optional` **readOnly?**: `boolean`

Whether settings for this dashboard should avoid mutating state.
