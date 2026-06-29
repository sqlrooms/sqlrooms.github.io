---
url: 'https://sqlrooms.org/api/mosaic/interfaces/MosaicEditorState.md'
---
[@sqlrooms/mosaic](../index.md) / MosaicEditorState

# Interface: MosaicEditorState

State managed by the Mosaic spec editor

## Properties

### editedSpecString

> **editedSpecString**: `string`

The edited spec as a JSON string

***

### parsedSpec

> **parsedSpec**: `Spec` | `null`

Parsed spec object (null if parse error)

***

### lastValidSpec

> **lastValidSpec**: `Spec`

Last successfully parsed spec (for fallback during errors)

***

### specParseError

> **specParseError**: `string` | `null`

JSON parse error message if any

***

### isSpecDirty

> **isSpecDirty**: `boolean`

Whether spec has been modified from last applied state
