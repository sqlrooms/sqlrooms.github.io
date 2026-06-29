---
url: 'https://sqlrooms.org/api/ai-core/type-aliases/AgentToolCall.md'
---
[@sqlrooms/ai-core](../index.md) / AgentToolCall

# Type Alias: AgentToolCall

> **AgentToolCall** = `object`

Represents the state of a single tool call made by an agent.
When the tool is itself an agent, `agentToolCalls` contains the
nested sub-agent's tool calls so the UI can render them recursively.

## Properties

### toolCallId

> **toolCallId**: `string`

***

### toolName

> **toolName**: `string`

***

### input?

> `optional` **input?**: `unknown`

***

### output?

> `optional` **output?**: `unknown`

***

### errorText?

> `optional` **errorText?**: `string`

***

### state

> **state**: `"pending"` | `"success"` | `"error"` | `"approval-requested"`

***

### agentToolCalls?

> `optional` **agentToolCalls?**: `AgentToolCall`\[]

***

### approvalId?

> `optional` **approvalId?**: `string`

***

### startedAt?

> `optional` **startedAt?**: `number`

***

### completedAt?

> `optional` **completedAt?**: `number`
