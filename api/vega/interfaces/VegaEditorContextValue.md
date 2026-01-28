---
url: /api/vega/interfaces/VegaEditorContextValue.md
---
[@sqlrooms/vega](../index.md) / VegaEditorContextValue

# Interface: VegaEditorContextValue

Context value provided by VegaLiteChart.Container

## Properties

### state

> **state**: [`VegaEditorState`](VegaEditorState.md)

***

### actions

> **actions**: [`VegaEditorActions`](VegaEditorActions.md)

***

### editable

> **editable**: `boolean`

Whether editing is enabled

***

### sqlQuery

> **sqlQuery**: `string` | `undefined`

Initial SQL query (if using SQL data source)

***

### arrowTable

> **arrowTable**: `Table`<`any`> | `undefined`

Arrow table data (alternative to sqlQuery)

***

### options

> **options**: `EmbedOptions`<`string`, `Renderers`> | `undefined`

Vega embed options

***

### canApply

> **canApply**: `boolean`

Whether apply is possible (no errors, has changes)

***

### hasChanges

> **hasChanges**: `boolean`

Whether there are any unsaved changes
