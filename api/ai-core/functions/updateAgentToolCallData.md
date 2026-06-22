---
url: 'https://sqlrooms.org/api/ai-core/functions/updateAgentToolCallData.md'
---
[@sqlrooms/ai-core](../index.md) / updateAgentToolCallData

# Function: updateAgentToolCallData()

> **updateAgentToolCallData**(`toolEditState`, `chunk`): `void`

Updates a tool call entry in the provided toolEditState map based on a stream chunk.
Used by renderers to track per-tool-call progress.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `toolEditState` | `Map`<`string`, [`AgentToolCall`](../type-aliases/AgentToolCall.md)> | Mutable map of toolCallId to AgentToolCall |
| `chunk` | `UIMessageChunk` | A UIMessageChunk from the agent stream |

## Returns

`void`
