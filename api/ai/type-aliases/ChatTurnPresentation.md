---
url: https://sqlrooms.org/api/ai/type-aliases/ChatTurnPresentation.md
---
[@sqlrooms/ai](../index.md) / ChatTurnPresentation

# Type Alias: ChatTurnPresentation

> **ChatTurnPresentation** = `object`

Semantic data and pre-wired rendering for one turn. Custom layouts may use
either level without rebuilding search ids, slot props, or hoist decisions.

## Properties

### id

> **id**: `string`

***

### isCompleted

> **isCompleted**: `boolean`

***

### prompt

> **prompt**: [`ChatPromptRegion`](ChatPromptRegion.md)

***

### activity

> **activity**: [`ChatActivityRegion`](ChatActivityRegion.md)

***

### response

> **response**: [`ChatTextRegion`](ChatTextRegion.md)

***

### hoistedOutputs

> **hoistedOutputs**: [`ChatOutputRegion`](ChatOutputRegion.md)

***

### summary

> **summary**: [`ChatTextRegion`](ChatTextRegion.md)

***

### error?

> `optional` **error?**: [`ChatErrorRegion`](ChatErrorRegion.md)

***

### actions

> **actions**: [`ChatActionsRegion`](ChatActionsRegion.md)

***

### timeline

> **timeline**: [`ChatTimelineRegion`](ChatTimelineRegion.md)
