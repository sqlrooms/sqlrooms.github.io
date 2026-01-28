---
url: /api/vega/interfaces/UseVegaChartEditorReturn.md
---
[@sqlrooms/vega](../index.md) / UseVegaChartEditorReturn

# Interface: UseVegaChartEditorReturn

Return type for useVegaChartEditor hook

## Properties

### state

> **state**: [`VegaEditorState`](VegaEditorState.md)

***

### actions

> **actions**: [`VegaEditorActions`](VegaEditorActions.md)

***

### parsedSpec

> **parsedSpec**: [`VisualizationSpec`](../type-aliases/VisualizationSpec.md) | `null`

Parsed spec ready for rendering (null if parse error)

***

### canApply

> **canApply**: `boolean`

Whether apply button should be enabled

***

### hasChanges

> **hasChanges**: `boolean`

Whether there are any unsaved changes
