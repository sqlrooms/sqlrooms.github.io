---
url: /api/ai-rag/type-aliases/RagSliceState.md
---
[@sqlrooms/ai-rag](../index.md) / RagSliceState

# Type Alias: RagSliceState

> **RagSliceState** = `object`

## Properties

### rag

> **rag**: `object`

| Name | Type | Description |
| ------ | ------ | ------ |
| `initialize()` | () => `Promise`<`void`> | Initialize RAG by attaching all embedding databases and validating metadata |
| `queryEmbeddings()` | (`queryEmbedding`, `options?`) => `Promise`<[`EmbeddingResult`](EmbeddingResult.md)\[]> | Query embeddings using a pre-computed embedding vector |
| `queryByText()` | (`queryText`, `options?`) => `Promise`<[`EmbeddingResult`](EmbeddingResult.md)\[]> | Query embeddings using text. Uses the embedding provider configured for the specified database. By default, performs hybrid search combining vector similarity with full-text search. **Throws** Error if database not found or no embedding provider configured |
| `getMetadata()` | (`databaseName`) => `Promise`<[`DatabaseMetadata`](DatabaseMetadata.md) | `null`> | Get metadata for a specific database |
| `listDatabases()` | () => `string`\[] | List all attached embedding databases |
