---
url: 'https://sqlrooms.org/api/sql-editor/type-aliases/QueryResult.md'
---
[@sqlrooms/sql-editor](../index.md) / QueryResult

# Type Alias: QueryResult

> **QueryResult** = { `status`: `"loading"`; `isBeingAborted?`: `boolean`; `controller`: `AbortController`; `startedAt?`: `number`; } | { `status`: `"aborted"`; `durationMs?`: `number`; `completedAt?`: `number`; } | { `status`: `"error"`; `error`: `string`; `durationMs?`: `number`; `completedAt?`: `number`; } | { `status`: `"success"`; `type`: `"pragma"` | `"explain"` | `"select"`; `result`: `arrow.Table` | `undefined`; `query`: `string`; `lastQueryStatement`: `string`; `durationMs?`: `number`; `completedAt?`: `number`; } | { `status`: `"success"`; `type`: `"exec"`; `query`: `string`; `lastQueryStatement`: `string`; `durationMs?`: `number`; `completedAt?`: `number`; }
