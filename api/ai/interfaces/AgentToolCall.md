---
url: /api/ai/interfaces/AgentToolCall.md
---
[@sqlrooms/ai](../index.md) / AgentToolCall

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

> **state**: `"error"` | `"pending"` | `"success"`
