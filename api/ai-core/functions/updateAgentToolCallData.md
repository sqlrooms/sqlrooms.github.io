---
url: /api/ai-core/functions/updateAgentToolCallData.md
---
[@sqlrooms/ai-core](../index.md) / updateAgentToolCallData

# Function: updateAgentToolCallData()

> **updateAgentToolCallData**(`params`): `void`

Updates the additional data for an agent tool call.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | { `store`: `StoreApi`<[`AiSliceState`](../type-aliases/AiSliceState.md)>; `parentToolCallId`: `string`; `agentToolCalls`: [`AgentToolCall`](../type-aliases/AgentToolCall.md)\[]; `sessionId`: `string`; `finalOutput?`: `string`; } |
| `params.store` | `StoreApi`<[`AiSliceState`](../type-aliases/AiSliceState.md)> |
| `params.parentToolCallId` | `string` |
| `params.agentToolCalls` | [`AgentToolCall`](../type-aliases/AgentToolCall.md)\[] |
| `params.sessionId` | `string` |
| `params.finalOutput?` | `string` |

## Returns

`void`
