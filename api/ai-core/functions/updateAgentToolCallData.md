---
url: /api/ai-core/functions/updateAgentToolCallData.md
---
[@sqlrooms/ai-core](../index.md) / updateAgentToolCallData

# Function: updateAgentToolCallData()

> **updateAgentToolCallData**(`store`, `parentToolCallId`, `agentToolCalls`, `finalOutput?`): `void`

Updates the additional data for an agent tool call in the current session

## Parameters

| Parameter | Type |
| ------ | ------ |
| `store` | `StoreApi`<[`AiSliceState`](../type-aliases/AiSliceState.md)> |
| `parentToolCallId` | `string` |
| `agentToolCalls` | [`AgentToolCall`](../interfaces/AgentToolCall.md)\[] |
| `finalOutput?` | `string` |

## Returns

`void`
