---
url: >-
  https://sqlrooms.org/api/documents/functions/useBlockDocumentChartGetBlockFrameClassName.md
---
[@sqlrooms/documents](../index.md) / useBlockDocumentChartGetBlockFrameClassName

# Function: useBlockDocumentChartGetBlockFrameClassName()

> **useBlockDocumentChartGetBlockFrameClassName**(): [`BlockDocumentBlockFrameClassNameGetter`](../type-aliases/BlockDocumentBlockFrameClassNameGetter.md) | `undefined`

Returns the host-provided [BlockDocumentBlockFrameClassNameGetter](../type-aliases/BlockDocumentBlockFrameClassNameGetter.md) from
the chart renderer context, or `undefined` when the host has not configured
one. Callers should treat `undefined` as "no extra frame classes".

## Returns

[`BlockDocumentBlockFrameClassNameGetter`](../type-aliases/BlockDocumentBlockFrameClassNameGetter.md) | `undefined`
