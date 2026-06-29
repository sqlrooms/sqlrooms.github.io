---
url: 'https://sqlrooms.org/api/ai/functions/streamSubAgent.md'
---
[@sqlrooms/ai](../index.md) / streamSubAgent

# Function: streamSubAgent()

> **streamSubAgent**<`TOOLS`>(`agent`, `prompt`, `store`, `parentToolCallId`, `abortSignal?`): `Promise`<[`AgentStreamOutput`](../type-aliases/AgentStreamOutput.md)>

Streams a sub-agent with the given prompt, collecting tool call progress for
live UI rendering via the store, and returns the final text output along with
the collected tool calls.

When a tool with `needsApproval` is encountered, the stream pauses, surfaces
an approval request through the store, waits for the user's response, then
restarts the stream with the approval response so the agent loop can continue.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TOOLS` *extends* `ToolSet` | `ToolSet` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `agent` | `ToolLoopAgent`<`never`, `TOOLS`, `any`> | The ToolLoopAgent to run |
| `prompt` | `string` | The prompt string to send to the agent |
| `store` | `AgentStreamStore` | Store providing updateAgentProgress / clearAgentProgress / approval methods |
| `parentToolCallId` | `string` | The parent tool call ID for progress tracking |
| `abortSignal?` | `AbortSignal` | Optional abort signal for cancellation |

## Returns

`Promise`<[`AgentStreamOutput`](../type-aliases/AgentStreamOutput.md)>

The final text and collected tool calls from the agent
