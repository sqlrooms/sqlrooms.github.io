---
url: /api/ai-rag/type-aliases/RagSliceState.md
---
[@sqlrooms/ai-rag](../index.md) / RagSliceState

# Type Alias: RagSliceState

> **RagSliceState**: `object`

## Type declaration

| Name | Type |
| ------ | ------ |
|  `rag` | { `initialize`: () => `Promise`<`void`>; `queryEmbeddings`: (`queryEmbedding`, `options`?) => `Promise`<[`EmbeddingResult`](EmbeddingResult.md)\[]>; `queryByText`: (`queryText`, `options`?) => `Promise`<[`EmbeddingResult`](EmbeddingResult.md)\[]>; `getMetadata`: (`databaseName`) => `Promise`<[`DatabaseMetadata`](DatabaseMetadata.md) | `null`>; `listDatabases`: () => `string`\[]; } |
