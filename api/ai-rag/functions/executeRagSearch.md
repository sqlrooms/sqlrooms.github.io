---
url: 'https://sqlrooms.org/api/ai-rag/functions/executeRagSearch.md'
---
[@sqlrooms/ai-rag](../index.md) / executeRagSearch

# Function: executeRagSearch()

> **executeRagSearch**(`params`, `state`): `Promise`<[`RagToolLlmResult`](../type-aliases/RagToolLlmResult.md)>

Execute a RAG search against a given rag slice state.
Can be called directly (e.g. from UI components) without going through the AI tool layer.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | { `query`: `string`; `database?`: `string`; `topK`: `number`; } |
| `params.query` | `string` |
| `params.database?` | `string` |
| `params.topK` | `number` |
| `state` | [`RagSliceState`](../type-aliases/RagSliceState.md) |

## Returns

`Promise`<[`RagToolLlmResult`](../type-aliases/RagToolLlmResult.md)>
