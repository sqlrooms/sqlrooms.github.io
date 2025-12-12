---
url: /api/ai-core/interfaces/AgentToolCall.md
---
[@sqlrooms/ai-core](../index.md) / AgentToolCall

# Interface: AgentToolCall

Represents the state of a single tool call made by an agent

## Properties

### toolCallId

> **toolCallId**: `string`

***

### toolName

> **toolName**: `string`

***

### output?

> `optional` **output**: `unknown`

***

### errorText?

> `optional` **errorText**: `string`

***

### state

> **state**: `"error"` | `"success"` | `"pending"`
