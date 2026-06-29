---
url: 'https://sqlrooms.org/api/mosaic/interfaces/MosaicEditorContextValue.md'
---
[@sqlrooms/mosaic](../index.md) / MosaicEditorContextValue

# Interface: MosaicEditorContextValue

Context value provided by MosaicChart.Container

## Properties

### state

> **state**: [`MosaicEditorState`](MosaicEditorState.md)

***

### actions

> **actions**: [`MosaicEditorActions`](MosaicEditorActions.md)

***

### editable

> **editable**: `boolean`

Whether editing is enabled

***

### params?

> `optional` **params?**: `Map`<`string`, `Param`<`any`>>

Pre-defined params/selections for shared cross-filtering

***

### canApply

> **canApply**: `boolean`

Whether apply is possible (no errors, has changes)

***

### hasChanges

> **hasChanges**: `boolean`

Whether there are any unsaved changes
