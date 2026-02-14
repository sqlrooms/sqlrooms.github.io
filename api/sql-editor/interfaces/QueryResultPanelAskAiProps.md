---
url: /api/sql-editor/interfaces/QueryResultPanelAskAiProps.md
---
[@sqlrooms/sql-editor](../index.md) / QueryResultPanelAskAiProps

# Interface: QueryResultPanelAskAiProps

## Properties

### onClick()?

> `optional` **onClick**: (`query`, `error`) => `void`

Called when clicked with the current query and error message

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `query` | `string` |
| `error` | `string` |

#### Returns

`void`

***

### icon?

> `optional` **icon**: `ReactNode`

Custom icon (defaults to MessageCircleQuestion)

***

### className?

> `optional` **className**: `string`

Custom className

***

### tooltipContent?

> `optional` **tooltipContent**: `string`

Tooltip text to display on hover
