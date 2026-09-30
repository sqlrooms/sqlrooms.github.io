---
url: https://sqlrooms.org/api/documents/type-aliases/SelectablePanelWrapperProps.md
---
[@sqlrooms/documents](../index.md) / SelectablePanelWrapperProps

# Type Alias: SelectablePanelWrapperProps

> **SelectablePanelWrapperProps** = `object`

## Properties

### dashboardId

> **dashboardId**: `string`

Dashboard or document ID containing the block

***

### panelId

> **panelId**: `string`

Unique ID of the panel/block

***

### panelType

> **panelType**: `string`

Type of panel (e.g., 'vgplot', 'chart-block')

***

### blockInstanceId?

> `optional` **blockInstanceId?**: `string`

Backing state id for stateful document blocks, when it differs from panelId

***

### blockType

> **blockType**: `"dashboard-panel"` | `"standalone-block"` | `"dashboard-block"`

Whether this is a dashboard panel, standalone block, or dashboard itself

***

### settingsComponent?

> `optional` **settingsComponent?**: [`BlockSettingsComponent`](BlockSettingsComponent.md)

Settings component supplied by the owning block/panel definition

***

### readOnly?

> `optional` **readOnly?**: `boolean`

Whether settings for this selected surface should avoid mutating state

***

### children

> **children**: `ReactNode`

Content to render inside the selectable wrapper

***

### className?

> `optional` **className?**: `string`

Additional CSS classes to apply to the wrapper
