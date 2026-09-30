---
url: https://sqlrooms.org/api/ai/type-aliases/ChatTurnModel.md
---
[@sqlrooms/ai](../index.md) / ChatTurnModel

# Type Alias: ChatTurnModel

> **ChatTurnModel** = `object`

Presentation-neutral semantic model for one chat turn.

Owns classification, nesting signals, status, chronological activity,
interleaved grouping, hoist eligibility, counts, and timing inputs.
Visual order and labels are left to presentation recipes.

## Properties

### activity

> **activity**: [`ChatTurnActivityItem`](ChatTurnActivityItem.md)\[]

Reasoning + tool/agent activity in source order.

***

### textItems

> **textItems**: [`ChatTurnTextItem`](ChatTurnTextItem.md)\[]

Non-suppressed text parts in source order.

***

### answerTextIndex

> **answerTextIndex**: `number` | `null`

Source index of the answer text when the final message part is text.

***

### segments

> **segments**: `ChatTurnSegment`\[]

Interleaved segments for the default SQLRooms recipe.

***

### hoisted

> **hoisted**: `HoistableToolCall`\[]

Hoisted tool renderers in execution order (deduped by toolCallId).

***

### firstHoistPartIndex

> **firstHoistPartIndex**: `number` | `null`

Index of the first part that produced a hoisted renderer, if any.

***

### leafToolCount

> **leafToolCount**: `number`

Leaf tool count for summary labels.

***

### isActivityRunning

> **isActivityRunning**: `boolean`

True when any activity tool is still pending.

***

### timingToolCallIds

> **timingToolCallIds**: `string`\[]

Tool call ids contributing to turn-level timing aggregation.

***

### suppressedIndices

> **suppressedIndices**: `ReadonlySet`<`number`>
