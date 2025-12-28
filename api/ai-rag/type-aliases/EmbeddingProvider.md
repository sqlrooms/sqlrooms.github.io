---
url: /api/ai-rag/type-aliases/EmbeddingProvider.md
---
[@sqlrooms/ai-rag](../index.md) / EmbeddingProvider

# Type Alias: EmbeddingProvider()

> **EmbeddingProvider** = (`text`) => `Promise`<`number`\[]>

Function that generates an embedding vector from text.
This can be implemented using:

* OpenAI API (e.g., text-embedding-3-small)
* Transformers.js (client-side, e.g., BAAI/bge-small-en-v1.5)
* Custom embedding service
* Cohere, Anthropic, etc.

IMPORTANT: The embedding provider MUST match the model used during database preparation.
Check the database metadata to ensure compatibility.

API key management (if needed) should be handled during provider creation,
not at call time. See `createAiEmbeddingProvider` for examples.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `text` | `string` |

## Returns

`Promise`<`number`\[]>
