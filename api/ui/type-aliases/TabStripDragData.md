---
url: 'https://sqlrooms.org/api/ui/type-aliases/TabStripDragData.md'
---
[@sqlrooms/ui](../index.md) / TabStripDragData

# Type Alias: TabStripDragData

> **TabStripDragData** = `Record`<`string`, `unknown`>

Extra payload attached to tab drags. `TabStrip` always preserves `tabId` and
`tabStripId`; callers may intentionally override `kind` for cross-component
drags such as artifact tabs.
