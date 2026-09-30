---
url: https://sqlrooms.org/api/ai-core/type-aliases/ChatTurnRenderPlan.md
---
[@sqlrooms/ai-core](../index.md) / ChatTurnRenderPlan

# Type Alias: ChatTurnRenderPlan

> **ChatTurnRenderPlan** = `object`

Chronological presentation plan derived from [buildChatTurnModel](../functions/buildChatTurnModel.md).

Prefer [buildChatTurnModel](../functions/buildChatTurnModel.md) for new code. This adapter preserves the
activity → response → hoisted → summary projection used by chronological
recipes and existing tests.

## Properties

### activity

> **activity**: [`ChatTurnActivityItem`](ChatTurnActivityItem.md)\[]

Reasoning + tool/agent activity in source order.

***

### responseText

> **responseText**: [`ChatTurnTextItem`](ChatTurnTextItem.md)\[]

Orchestrator text before the first hoist-producing call.

***

### hoisted

> **hoisted**: [`HoistableToolCall`](HoistableToolCall.md)\[]

Hoisted tool renderers in execution order (deduped by toolCallId).

***

### summaryText

> **summaryText**: [`ChatTurnTextItem`](ChatTurnTextItem.md)\[]

Orchestrator text after the first hoist-producing call.

***

### leafToolCount

> **leafToolCount**: `number`

Leaf tool count for the activity summary label.

***

### isActivityRunning

> **isActivityRunning**: `boolean`

True when any activity tool is still pending.
