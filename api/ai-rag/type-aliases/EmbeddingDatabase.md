---
url: /api/ai-rag/type-aliases/EmbeddingDatabase.md
---
[@sqlrooms/ai-rag](../index.md) / EmbeddingDatabase

# Type Alias: EmbeddingDatabase

> **EmbeddingDatabase** = `object`

## Properties

### databaseFilePathOrUrl

> **databaseFilePathOrUrl**: `string`

Path or URL to the DuckDB embedding database file

***

### databaseName

> **databaseName**: `string`

Name to use when attaching the database

***

### embeddingProvider

> **embeddingProvider**: [`EmbeddingProvider`](EmbeddingProvider.md)

Embedding provider for this database.
MUST match the model used during database preparation.
Example: If database was prepared with OpenAI text-embedding-3-small,
provide an OpenAI embedding function here.

Note: API key management (if needed) should be configured during provider
creation using `createAiEmbeddingProvider` with a `getApiKey` function.

***

### embeddingDimensions?

> `optional` **embeddingDimensions**: `number`

Expected embedding dimensions (for validation).
Should match the model used during preparation.
Will be validated against database metadata.
