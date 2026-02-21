---
url: /api/ai-rag/functions/createRagTool.md
---
[@sqlrooms/ai-rag](../index.md) / createRagTool

# Function: createRagTool()

> **createRagTool**(): `OpenAssistantTool`<`ZodObject`<{ `query`: `ZodString`; `database`: `ZodOptional`<`ZodString`>; `topK`: `ZodDefault`<`ZodOptional`<`ZodNumber`>>; }, `$strip`>, [`RagToolLlmResult`](../type-aliases/RagToolLlmResult.md), [`RagToolAdditionalData`](../type-aliases/RagToolAdditionalData.md), `unknown`>

Create a RAG (Retrieval Augmented Generation) tool for AI.

This tool allows the AI to search through embedded documentation
to find relevant context before answering questions.

## Returns

`OpenAssistantTool`<`ZodObject`<{ `query`: `ZodString`; `database`: `ZodOptional`<`ZodString`>; `topK`: `ZodDefault`<`ZodOptional`<`ZodNumber`>>; }, `$strip`>, [`RagToolLlmResult`](../type-aliases/RagToolLlmResult.md), [`RagToolAdditionalData`](../type-aliases/RagToolAdditionalData.md), `unknown`>

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
