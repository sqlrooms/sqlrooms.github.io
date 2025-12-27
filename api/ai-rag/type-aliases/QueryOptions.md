---
url: /api/ai-rag/type-aliases/QueryOptions.md
---
[@sqlrooms/ai-rag](../index.md) / QueryOptions

# Type Alias: QueryOptions

> **QueryOptions** = `object`

## Properties

### topK?

> `optional` **topK**: `number`

Number of results to return (default: 5)

***

### database?

> `optional` **database**: `string`

Database to search (defaults to first database)

***

### hybrid?

> `optional` **hybrid**: `boolean` | `number`

Enable hybrid search combining vector similarity with full-text search (BM25).

* true: Use hybrid search with default settings (k=60)
* false: Use pure vector search only
* number: Use hybrid search with custom k value for RRF
  Default: true
