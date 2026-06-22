---
url: 'https://sqlrooms.org/api/ai-core/type-aliases/HoistableToolCall.md'
---
[@sqlrooms/ai-core](../index.md) / HoistableToolCall

# Type Alias: HoistableToolCall

> **HoistableToolCall** = `object`

A tool call whose registered renderer should be hoisted to the parent
level instead of being rendered nested inside an ActivityBox.

## Properties

### toolCallId

> **toolCallId**: `string`

***

### toolName

> **toolName**: `string`

***

### output

> **output**: `unknown`

***

### input

> **input**: `unknown`

***

### errorText?

> `optional` **errorText?**: `string`

***

### state

> **state**: [`AgentToolCall`](AgentToolCall.md)\[`"state"`]

***

### approvalId?

> `optional` **approvalId?**: `string`
