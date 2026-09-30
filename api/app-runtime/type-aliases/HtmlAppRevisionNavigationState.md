---
url: >-
  https://sqlrooms.org/api/app-runtime/type-aliases/HtmlAppRevisionNavigationState.md
---
[@sqlrooms/app-runtime](../index.md) / HtmlAppRevisionNavigationState

# Type Alias: HtmlAppRevisionNavigationState

> **HtmlAppRevisionNavigationState** = `object`

Derived revision navigation state for history controls.

`nextRevision` reflects the next linear revision in the retained revision
list, while redo availability is tracked separately through
`redoRevisionIds`.

## Properties

### activeRevision?

> `optional` **activeRevision?**: [`HtmlAppRevision`](HtmlAppRevision.md)

***

### activeIndex

> **activeIndex**: `number`

***

### totalRevisions

> **totalRevisions**: `number`

***

### canUndo

> **canUndo**: `boolean`

***

### canRedo

> **canRedo**: `boolean`

***

### previousRevision?

> `optional` **previousRevision?**: [`HtmlAppRevision`](HtmlAppRevision.md)

***

### nextRevision?

> `optional` **nextRevision?**: [`HtmlAppRevision`](HtmlAppRevision.md)
