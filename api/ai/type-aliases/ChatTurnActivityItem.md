---
url: https://sqlrooms.org/api/ai/type-aliases/ChatTurnActivityItem.md
---
[@sqlrooms/ai](../index.md) / ChatTurnActivityItem

# Type Alias: ChatTurnActivityItem

> **ChatTurnActivityItem** = { `kind`: `"reasoning"`; `index`: `number`; `text`: `string`; } | { `kind`: `"tool"`; `index`: `number`; `part`: `ToolPartWithId`; `state`: [`AgentToolCall`](AgentToolCall.md)\[`"state"`]; `isAgent`: `boolean`; `agentToolCalls?`: [`AgentToolCall`](AgentToolCall.md)\[]; `isHoisted`: `boolean`; }

## Union Members

### Type Literal

{ `kind`: `"reasoning"`; `index`: `number`; `text`: `string`; }

***

### Type Literal

{ `kind`: `"tool"`; `index`: `number`; `part`: `ToolPartWithId`; `state`: [`AgentToolCall`](AgentToolCall.md)\[`"state"`]; `isAgent`: `boolean`; `agentToolCalls?`: [`AgentToolCall`](AgentToolCall.md)\[]; `isHoisted`: `boolean`; }

| Name | Type | Description |
| ------ | ------ | ------ |
| `kind` | `"tool"` | - |
| `index` | `number` | - |
| `part` | `ToolPartWithId` | - |
| `state` | [`AgentToolCall`](AgentToolCall.md)\[`"state"`] | - |
| `isAgent` | `boolean` | - |
| `agentToolCalls?` | [`AgentToolCall`](AgentToolCall.md)\[] | Live or persisted child calls when this tool represents an agent. |
| `isHoisted` | `boolean` | True when this top-level tool is collected into the hoisted region. |
