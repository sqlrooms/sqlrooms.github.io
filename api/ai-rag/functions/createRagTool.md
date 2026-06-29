---
url: 'https://sqlrooms.org/api/ai-rag/functions/createRagTool.md'
---
[@sqlrooms/ai-rag](../index.md) / createRagTool

# Function: createRagTool()

> **createRagTool**(): `Tool`<{ `query`: `string`; `database?`: `string`; `topK`: `number`; }, [`RagToolLlmResult`](../type-aliases/RagToolLlmResult.md)>

Create a RAG (Retrieval Augmented Generation) tool for AI.

This tool allows the AI to search through embedded documentation
to find relevant context before answering questions.

## Returns

`Tool`<{ `query`: `string`; `database?`: `string`; `topK`: `number`; }, [`RagToolLlmResult`](../type-aliases/RagToolLlmResult.md)>

## Example

```typescript
const store = createRoomStore({
  slices: [
    createRagSlice({embeddingsDatabases: [...]}),
    createAiSlice({
      tools: {
        rag: createRagTool(),
      }
    })
  ]
});
```
