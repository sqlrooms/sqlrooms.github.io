---
url: https://sqlrooms.org/api/deck/type-aliases/DeckMapRuntimeIssue.md
---
[@sqlrooms/deck](../index.md) / DeckMapRuntimeIssue

# Type Alias: DeckMapRuntimeIssue

> **DeckMapRuntimeIssue** = `object`

Ephemeral rendering or data issue associated with one Deck map resource.

## Properties

### kind

> **kind**: `"sql-error"` | `"fit-error"` | `"render-error"` | `"data-policy-error"` | `"config-error"`

***

### mapId

> **mapId**: `string`

***

### message

> **message**: `string`

***

### recoverable

> **recoverable**: `boolean`

***

### details?

> `optional` **details?**: `Record`<`string`, `unknown`>
