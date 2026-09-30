---
url: https://sqlrooms.org/api/ai-core/type-aliases/ActivityBoxProps.md
---
[@sqlrooms/ai-core](../index.md) / ActivityBoxProps

# Type Alias: ActivityBoxProps

> **ActivityBoxProps** = `object`

Props for the collapsible SQLRooms activity container.

## Properties

### children

> **children**: `React.ReactNode`

***

### maxCollapsedHeight?

> `optional` **maxCollapsedHeight?**: `number`

Max collapsed height in px. Defaults to 100.

***

### isRunning?

> `optional` **isRunning?**: `boolean`

When true, the box auto-scrolls to the bottom as content changes.

***

### className?

> `optional` **className?**: `string`

***

### summaryLabel?

> `optional` **summaryLabel?**: `string`

When provided, the box can be fully hidden behind a single clickable
summary line (e.g. "Worked with 4 tools"). Clicking the line toggles
visibility of the full activity box. While `isRunning` is true the
box is always shown regardless of this prop.
