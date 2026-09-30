---
url: >-
  https://sqlrooms.org/api/codemirror/functions/foldAllExceptFirstFoldableRange.md
---
[@sqlrooms/codemirror](../index.md) / foldAllExceptFirstFoldableRange

# Function: foldAllExceptFirstFoldableRange()

> **foldAllExceptFirstFoldableRange**(`view`): `void`

Fold every foldable range in an editor except the first one.

For JSON documents this leaves the root object/array open while collapsing
nested objects and arrays, which is useful for compact read-only inspectors.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `view` | `EditorView` |

## Returns

`void`
