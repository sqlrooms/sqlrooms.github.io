---
url: /api/sql-editor/type-aliases/QueryResult.md
---
[@sqlrooms/sql-editor](../index.md) / QueryResult

# Type Alias: QueryResult

> **QueryResult**: { `status`: `"loading"`; `isBeingAborted`: `boolean`; `controller`: `AbortController`; } | { `status`: `"aborted"`; } | { `status`: `"error"`; `error`: `string`; } | { `status`: `"success"`; `type`: `"pragma"` | `"explain"` | `"select"`; `result`: `arrow.Table` | `undefined`; `lastQueryStatement`: `string`; } | { `status`: `"success"`; `type`: `"exec"`; `lastQueryStatement`: `string`; }
