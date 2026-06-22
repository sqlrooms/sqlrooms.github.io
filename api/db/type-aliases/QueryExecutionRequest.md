---
url: 'https://sqlrooms.org/api/db/type-aliases/QueryExecutionRequest.md'
---
[@sqlrooms/db](../index.md) / QueryExecutionRequest

# Type Alias: QueryExecutionRequest

> **QueryExecutionRequest** = `object`

Request payload for routed query execution.

## Properties

### connectionId?

> `optional` **connectionId?**: `string`

Target connection id. If omitted, core DuckDB is used.

***

### sql

> **sql**: `string`

SQL statement(s) to execute.

***

### queryType?

> `optional` **queryType?**: `"arrow"` | `"json"` | `"exec"`

Expected result shape.

***

### materialize?

> `optional` **materialize?**: `boolean`

Whether arrow results from non-core connectors should be materialized into
core DuckDB. Defaults to true for arrow queries.

***

### materializedName?

> `optional` **materializedName?**: `string`

Optional target relation name used when materializing.

***

### materializedSchema?

> `optional` **materializedSchema?**: `string`

Optional schema override for materialized relations.

When omitted, routing falls back to `coreMaterialization` defaults.

***

### materializedDatabase?

> `optional` **materializedDatabase?**: `string`

Optional database/catalog override for materialized relations.

When omitted, routing falls back to `coreMaterialization` defaults.

***

### signal?

> `optional` **signal?**: `AbortSignal`

Abort signal for cancellation.
