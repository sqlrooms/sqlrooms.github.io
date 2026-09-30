---
url: >-
  https://sqlrooms.org/api/documents/type-aliases/BlockDocumentBlockFrameClassNameGetter.md
---
[@sqlrooms/documents](../index.md) / BlockDocumentBlockFrameClassNameGetter

# Type Alias: BlockDocumentBlockFrameClassNameGetter

> **BlockDocumentBlockFrameClassNameGetter** = (`ctx`) => `string` | `undefined`

Optional host function returning extra classes for a chart block's outer frame
(the `NodeViewWrapper`), letting the host recolor the block's border/outline
from its own state (e.g. an in-progress AI edit). Returned classes are merged
last, so they win over the built-in border/selection outline.

This is a plain (pure) function, not a hook: the host owns any reactive
subscription and passes a fresh function when the result should change.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `ctx` | [`BlockDocumentBlockFrameContext`](BlockDocumentBlockFrameContext.md) |

## Returns

`string` | `undefined`
