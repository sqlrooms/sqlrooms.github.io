---
url: https://sqlrooms.org/api/documents/type-aliases/SelectedBlock.md
---
[@sqlrooms/documents](../index.md) / SelectedBlock

# Type Alias: SelectedBlock

> **SelectedBlock** = `object`

Represents a selected block in the editor or dashboard.

## Properties

### type

> **type**: `"dashboard-panel"` | `"standalone-block"` | `"dashboard-block"`

The type of selected block:

* 'dashboard-panel': A panel inside a dashboard (chart, map, data table)
* 'standalone-block': A standalone block in a block document (chart block, data table block, etc.)
* 'dashboard-block': The entire dashboard block itself

***

### id

> **id**: `string`

The unique identifier of the selected block or panel

***

### dashboardId?

> `optional` **dashboardId?**: `string`

The ID of the parent dashboard (optional, used for context)

***

### blockInstanceId?

> `optional` **blockInstanceId?**: `string`

Backing state id for stateful document blocks, when available

***

### panelType?

> `optional` **panelType?**: `string`

The type of panel (e.g., 'vgplot', 'deck-json-map') for dashboard panels

***

### settingsComponent?

> `optional` **settingsComponent?**: [`BlockSettingsComponent`](BlockSettingsComponent.md)

Runtime settings component supplied by the selected surface

***

### readOnly?

> `optional` **readOnly?**: `boolean`

Whether the selected block is in a read-only document
