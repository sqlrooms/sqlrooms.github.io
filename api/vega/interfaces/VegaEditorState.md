---
url: /api/vega/interfaces/VegaEditorState.md
---
[@sqlrooms/vega](../index.md) / VegaEditorState

# Interface: VegaEditorState

State managed by the editor

## Properties

### editedSpecString

> **editedSpecString**: `string`

The edited spec as a JSON string

***

### editedSql

> **editedSql**: `string`

The edited SQL query

***

### appliedSql

> **appliedSql**: `string`

The last applied SQL query (for chart rendering)

***

### parsedSpec

> **parsedSpec**: [`VisualizationSpec`](../type-aliases/VisualizationSpec.md) | `null`

Parsed spec object (null if parse error)

***

### lastValidSpec

> **lastValidSpec**: [`VisualizationSpec`](../type-aliases/VisualizationSpec.md)

Last successfully parsed spec (for fallback during errors)

***

### specParseError

> **specParseError**: `string` | `null`

JSON parse error message if any

***

### isSpecDirty

> **isSpecDirty**: `boolean`

Whether spec has been modified from initial

***

### isSqlDirty

> **isSqlDirty**: `boolean`

Whether SQL has been modified from initial
