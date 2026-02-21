---
url: /api/ai-core/functions/processAgentStream.md
---
[@sqlrooms/ai-core](../index.md) / processAgentStream

# Function: processAgentStream()

> **processAgentStream**(`agentResult`, `store`, `parentToolCallId`, `abortSignal?`): `Promise`<`string`>

Processes an agent stream result, tracking tool calls and forwarding chunks to the writer

This function handles:

* Tracking all tool calls made by the agent
* Updating session additional data for UI progress rendering
* Forwarding text deltas and tool outputs to the stream writer
* Returning the final text result

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `agentResult` | [`AgentStreamResult`](../type-aliases/AgentStreamResult.md) | The stream result from agent.stream() |
| `store` | `StoreApi`<[`AiSliceState`](../type-aliases/AiSliceState.md)> | The store containing AiSliceState |
| `parentToolCallId` | `string` | The tool call ID of the parent agent tool (for storing additional data) |
| `abortSignal?` | `AbortSignal` | The abort signal to use for cancelling the stream |

## Returns

`Promise`<`string`>

The final text output from the agent
