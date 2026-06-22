---
url: 'https://sqlrooms.org/api/db/type-aliases/QueryExecutionResult.md'
---
[@sqlrooms/db](../index.md) / QueryExecutionResult

# Type Alias: QueryExecutionResult

> **QueryExecutionResult** = `object`

Response payload from routed query execution.

## Properties

### connectionId

> **connectionId**: `string`

Connection id that handled the query.

***

### engineId

> **engineId**: `string`

Engine id for the handling connection.

***

### materialized

> **materialized**: `boolean`

Indicates whether result data was materialized into core DuckDB.

***

### relationName?

> `optional` **relationName?**: `string`

Qualified relation name created in core DuckDB when materialized is true.

***

### arrowTable?

> `optional` **arrowTable?**: `arrow.Table`

Arrow result table for arrow queries.

***

### jsonData?

> `optional` **jsonData?**: `Iterable`<`Record`<`string`, `unknown`>>

JSON rows for json queries.

***

### execHandle?

> `optional` **execHandle?**: [`QueryHandle`](QueryHandle.md)

Execution handle for exec queries when available.
