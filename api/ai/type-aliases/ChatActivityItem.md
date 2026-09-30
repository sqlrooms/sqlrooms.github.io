---
url: https://sqlrooms.org/api/ai/type-aliases/ChatActivityItem.md
---
[@sqlrooms/ai](../index.md) / ChatActivityItem

# Type Alias: ChatActivityItem

> **ChatActivityItem** = { `id`: `string`; `kind`: `"reasoning"`; `text`: `string`; `Content`: [`ChatComponentType`](ChatComponentType.md); } | { `id`: `string`; `kind`: `"tool"`; `toolName`: `string`; `state`: [`ChatToolState`](ChatToolState.md); `isAgent`: `boolean`; `isHoisted`: `boolean`; `Content`: [`ChatComponentType`](ChatComponentType.md); }

One semantic activity item with pre-wired leaf rendering.
