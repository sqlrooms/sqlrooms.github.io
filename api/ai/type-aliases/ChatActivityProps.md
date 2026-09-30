---
url: https://sqlrooms.org/api/ai/type-aliases/ChatActivityProps.md
---
[@sqlrooms/ai](../index.md) / ChatActivityProps

# Type Alias: ChatActivityProps

> **ChatActivityProps** = `object`

Props for activity chrome around reasoning and tool activity.

## Properties

### children

> **children**: `ReactNode`

***

### isRunning

> **isRunning**: `boolean`

***

### isCompleted

> **isCompleted**: `boolean`

***

### toolCount

> **toolCount**: `number`

***

### summaryLabel?

> `optional` **summaryLabel?**: `string`

Presentation-ready summary, e.g. "Worked with 4 tools".

***

### computationTimeMs?

> `optional` **computationTimeMs?**: `number`

Aggregated tool runtime in milliseconds, when available.

***

### computationTimeLabel?

> `optional` **computationTimeLabel?**: `string`

Presentation-ready timing label, e.g. "Computation Time: 12.4 s".

***

### className?

> `optional` **className?**: `string`
