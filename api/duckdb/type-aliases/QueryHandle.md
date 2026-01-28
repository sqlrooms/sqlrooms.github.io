---
url: /api/duckdb/type-aliases/QueryHandle.md
---
[@sqlrooms/duckdb](../index.md) / QueryHandle

# Type Alias: QueryHandle\<T>

> **QueryHandle**<`T`> = `PromiseLike`<`T`> & `object`

Handle for managing query execution and cancellation.

It is **Promise-like**, so you can either:

• `await handle` – the most ergonomic form, or
• `await handle.result` – kept for backwards-compatibility.

Additional capabilities:
• Standard Promise API: `.then()`, `.catch()`, `.finally()`
• `handle.cancel()` – cancel the running query.
• `handle.signal` – `AbortSignal` that fires when the query is cancelled.

## Type Declaration

| Name | Type | Description |
| ------ | ------ | ------ |
| `result` | `Promise`<`T`> | Promise that resolves with query results |
| `cancel()` | () => `Promise`<`void`> | Method to cancel the query with optional cleanup. This provides a clean abstraction over the underlying cancellation mechanism. |
| `signal` | `AbortSignal` | Read-only access to the abort signal for composability. Key benefits: - **Event-driven**: Listen for abort events to update UI or perform cleanup - **Integration**: Use with other Web APIs like fetch() that accept AbortSignal - **Status checking**: Check if query is already cancelled with signal.aborted **Example** `// Listen for cancellation events handle.signal.addEventListener('abort', () => { console.log('Query cancelled'); updateUI('Operation cancelled'); }); // Check cancellation status if (handle.signal.aborted) { console.log('Query was already cancelled'); } // Use with other APIs const response = await fetch('/api/data', { signal: handle.signal });` |
| `catch` | `Promise`<`T`>\[`"catch"`] | Attach a callback for only the rejection of the Promise |
| `finally` | `Promise`<`T`>\[`"finally"`] | Attach a callback that's invoked when the Promise is settled (fulfilled or rejected) |

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `any` |

## Example

```typescript
// Simple usage
const handle = connector.query('SELECT * FROM table');
const table = await handle; // no .result needed

// With cancellation
const controller = new AbortController();
const handle = connector.query('SELECT * FROM large_table', { signal: controller.signal });
setTimeout(() => controller.abort(), 5000);

// Manual cancel via the handle
const h = connector.query('SELECT * FROM table');
await someCondition;
await h.cancel();

// Composable cancellation (multiple queries, one controller)
const controller = new AbortController();
const h1 = connector.query('SELECT * FROM table1', { signal: controller.signal });
const h2 = connector.query('SELECT * FROM table2', { signal: controller.signal });
// Later...
controller.abort(); // Cancels h1 and h2 together

// Using Promise utilities
const [t1, t2] = await Promise.all([
  connector.query('select 1'),
  connector.query('select 2')
]);
```
