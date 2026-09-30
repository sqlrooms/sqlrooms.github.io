---
url: https://sqlrooms.org/api/ai-core/functions/useReportRenderedChatSearchBlock.md
---
[@sqlrooms/ai-core](../index.md) / useReportRenderedChatSearchBlock

# Function: useReportRenderedChatSearchBlock()

> **useReportRenderedChatSearchBlock**(`blockId?`, `text?`): `void`

Marks `blockId` as on screen for the lifetime of the calling component, so
it joins the search index's rendered-set intersection. Reports on mount
and whenever `text` changes, releases on unmount. When `text` is given, it
becomes the string search offsets are computed against for this block,
replacing whatever text the block was registered with; omit it when the
slot's own highlighting mechanism (e.g. a rehype plugin) already matches
offsets to the registered text itself.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `blockId?` | `string` |
| `text?` | `string` |

## Returns

`void`
