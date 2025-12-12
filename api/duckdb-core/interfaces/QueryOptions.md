---
url: /api/duckdb-core/interfaces/QueryOptions.md
---
[@sqlrooms/duckdb-core](../index.md) / QueryOptions

# Interface: QueryOptions

Options for query execution

## Properties

### signal?

> `optional` **signal**: `AbortSignal`

Optional external abort signal for coordinated cancellation.
When provided, the query will be cancelled if this signal is aborted.
This enables powerful composition patterns like cancelling multiple
queries together or integrating with other cancellable operations.
