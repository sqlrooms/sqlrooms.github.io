---
url: 'https://sqlrooms.org/api/mosaic/interfaces/UseMosaicChartEditorReturn.md'
---
[@sqlrooms/mosaic](../index.md) / UseMosaicChartEditorReturn

# Interface: UseMosaicChartEditorReturn

Return type for useMosaicChartEditor hook

## Properties

### state

> **state**: [`MosaicEditorState`](MosaicEditorState.md)

***

### actions

> **actions**: [`MosaicEditorActions`](MosaicEditorActions.md)

***

### parsedSpec

> **parsedSpec**: `Spec` | `null`

Parsed spec ready for rendering (null if parse error)

***

### canApply

> **canApply**: `boolean`

Whether apply button should be enabled

***

### hasChanges

> **hasChanges**: `boolean`

Whether there are any unsaved changes
