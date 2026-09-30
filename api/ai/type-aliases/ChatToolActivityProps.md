---
url: https://sqlrooms.org/api/ai/type-aliases/ChatToolActivityProps.md
---
[@sqlrooms/ai](../index.md) / ChatToolActivityProps

# Type Alias: ChatToolActivityProps

> **ChatToolActivityProps** = `object`

Props for one tool or nested-agent activity slot.

## Properties

### toolCall

> **toolCall**: [`AgentToolCall`](AgentToolCall.md)

Normalized tool-call semantics, available for top-level and nested calls.

***

### part?

> `optional` **part?**: `ToolPartWithId`

Original AI SDK part when this activity came from the turn message.

***

### index?

> `optional` **index?**: `number`

Source-message index; absent for calls nested inside an agent.

***

### isAgent

> **isAgent**: `boolean`

***

### isHoisted

> **isHoisted**: `boolean`

True when this call's rich UI is rendered in a hoisted region.

***

### searchBlockId?

> `optional` **searchBlockId?**: `string`

Registered search block; absent for nested activity.
