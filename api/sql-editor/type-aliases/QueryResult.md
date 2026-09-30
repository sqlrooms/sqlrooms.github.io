---
url: https://sqlrooms.org/api/sql-editor/type-aliases/QueryResult.md
---
[@sqlrooms/sql-editor](../index.md) / QueryResult

# Type Alias: QueryResult

> **QueryResult** = { `status`: `"loading"`; `isBeingAborted?`: `boolean`; `controller`: `AbortController`; `startedAt?`: `number`; `isWrite?`: `boolean`; } | { `status`: `"aborted"`; `durationMs?`: `number`; `completedAt?`: `number`; `warning?`: `string`; } | { `status`: `"error"`; `error`: `string`; `durationMs?`: `number`; `completedAt?`: `number`; } | { `status`: `"success"`; `type`: `"pragma"` | `"explain"` | `"select"`; `result`: `arrow.Table` | `undefined`; `query`: `string`; `lastQueryStatement`: `string`; `durationMs?`: `number`; `completedAt?`: `number`; } | { `status`: `"success"`; `type`: `"exec"`; `query`: `string`; `lastQueryStatement`: `string`; `durationMs?`: `number`; `completedAt?`: `number`; }

Lifecycle state and output of a single SQL query execution, keyed by query id
in the editor slice.

* `loading` results may gain an QueryResult.isWrite | isWrite
  classification once the statement has been parsed.
* `aborted` results may carry a QueryResult.warning | warning when
  the connector cannot guarantee the statement was stopped server-side.

## Union Members

### Type Literal

{ `status`: `"loading"`; `isBeingAborted?`: `boolean`; `controller`: `AbortController`; `startedAt?`: `number`; `isWrite?`: `boolean`; }

| Name | Type | Description |
| ------ | ------ | ------ |
| `status` | `"loading"` | - |
| `isBeingAborted?` | `boolean` | - |
| `controller` | `AbortController` | - |
| `startedAt?` | `number` | - |
| `isWrite?` | `boolean` | Whether the running statement is a write (non-SELECT or multi-statement). Stamped once the statement has been parsed (see `runQueryById`); `undefined` until then. `abortQueryById` reads this to decide whether cancelling needs a warning: aborting a read is harmless, but the underlying cancel is best-effort, so a write may still complete on the backend after the UI reports it aborted. |

***

### Type Literal

{ `status`: `"aborted"`; `durationMs?`: `number`; `completedAt?`: `number`; `warning?`: `string`; }

| Name | Type | Description |
| ------ | ------ | ------ |
| `status` | `"aborted"` | - |
| `durationMs?` | `number` | - |
| `completedAt?` | `number` | - |
| `warning?` | `string` | User-facing warning shown in the result pane when a write (or a statement of not-yet-known type) was aborted but the connector cannot guarantee it was actually stopped server-side. Absent for reads. |

***

### Type Literal

{ `status`: `"error"`; `error`: `string`; `durationMs?`: `number`; `completedAt?`: `number`; }

***

### Type Literal

{ `status`: `"success"`; `type`: `"pragma"` | `"explain"` | `"select"`; `result`: `arrow.Table` | `undefined`; `query`: `string`; `lastQueryStatement`: `string`; `durationMs?`: `number`; `completedAt?`: `number`; }

***

### Type Literal

{ `status`: `"success"`; `type`: `"exec"`; `query`: `string`; `lastQueryStatement`: `string`; `durationMs?`: `number`; `completedAt?`: `number`; }
