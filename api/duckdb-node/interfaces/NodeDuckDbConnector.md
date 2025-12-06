---
url: /api/duckdb-node/interfaces/NodeDuckDbConnector.md
---
[@sqlrooms/duckdb-node](../index.md) / NodeDuckDbConnector

# Interface: NodeDuckDbConnector

Extended DuckDB connector for Node.js environments.
Includes access to the underlying DuckDB instance and connection.

## Extends

* [`DuckDbConnector`](DuckDbConnector.md)

## Methods

### initialize()

> **initialize**(): `Promise`<`void`>

Initialize the connector.
The function returns a promise that resolves when the connector is initialized.
Calling the initialize() function multiple times should not restart the initialization.
See BaseDuckDbConnector for an implementation example.

#### Returns

`Promise`<`void`>

#### Inherited from

[`DuckDbConnector`](DuckDbConnector.md).[`initialize`](DuckDbConnector.md#initialize)

***

### destroy()

> **destroy**(): `Promise`<`void`>

Destroy the connector and clean up resources

#### Returns

`Promise`<`void`>

#### Inherited from

[`DuckDbConnector`](DuckDbConnector.md).[`destroy`](DuckDbConnector.md#destroy)

***

### execute()

> **execute**(`sql`, `options`?): [`QueryHandle`](../type-aliases/QueryHandle.md)

Execute a SQL query without returning a result

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `sql` | `string` | SQL query to execute |
| `options`? | [`QueryOptions`](QueryOptions.md) | Optional query options including abort signal for coordinated cancellation |

#### Returns

[`QueryHandle`](../type-aliases/QueryHandle.md)

QueryHandle containing:

* result: Promise that resolves when execution completes
* cancel: Method to cancel the query with cleanup
* signal: AbortSignal for composability with other cancellable operations

#### Example

```typescript
// Simple execution
const handle = connector.execute('CREATE TABLE test AS SELECT * FROM source');
await handle.result;

// With external cancellation control
const controller = new AbortController();
const handle = connector.execute('DROP TABLE large_table', {
  signal: controller.signal
});

// Cancel if it takes too long
setTimeout(() => controller.abort(), 5000);
```

#### Inherited from

[`DuckDbConnector`](DuckDbConnector.md).[`execute`](DuckDbConnector.md#execute)

***

### query()

> **query**<`T`>(`query`, `options`?): [`QueryHandle`](../type-aliases/QueryHandle.md)<`Table`<`T`>>

Execute a SQL query and return the result as an Arrow table

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* `TypeMap` | `any` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `query` | `string` | SQL query to execute |
| `options`? | [`QueryOptions`](QueryOptions.md) | Optional query options including abort signal for coordinated cancellation |

#### Returns

[`QueryHandle`](../type-aliases/QueryHandle.md)<`Table`<`T`>>

QueryHandle containing:

* result: Promise that resolves with Arrow table
* cancel: Method to cancel the query with cleanup
* signal: AbortSignal for composability with other cancellable operations

#### Example

```typescript
// Basic query
const handle = await connector.query('SELECT * FROM users WHERE active = true');
console.log(`Found ${table.numRows} active users`);

// Query with timeout
const controller = new AbortController();
setTimeout(() => controller.abort(), 30000); // 30s timeout

const handle = connector.query('SELECT * FROM very_large_table', {
  signal: controller.signal
});

try {
  const result = await handle;
  console.log('Query completed within timeout');
} catch (error) {
  if (error.name === 'AbortError') {
    console.log('Query timed out');
  }
}
```

#### Inherited from

[`DuckDbConnector`](DuckDbConnector.md).[`query`](DuckDbConnector.md#query)

***

### queryJson()

> **queryJson**<`T`>(`query`, `options`?): [`QueryHandle`](../type-aliases/QueryHandle.md)<`Iterable`<`T`, `any`, `any`>>

Execute a SQL query and return the result as a JSON object

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `Record`<`string`, `any`> |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `query` | `string` | SQL query to execute |
| `options`? | [`QueryOptions`](QueryOptions.md) | Optional query options including abort signal for coordinated cancellation |

#### Returns

[`QueryHandle`](../type-aliases/QueryHandle.md)<`Iterable`<`T`, `any`, `any`>>

QueryHandle containing:

* result: Promise that resolves with iterable of JSON objects
* cancel: Method to cancel the query with cleanup
* signal: AbortSignal for composability with other cancellable operations

#### Example

```typescript
// Simple JSON query
const users = await connector.queryJson('SELECT name, email FROM users LIMIT 10');
for (const user of users) {
  console.log(`${user.name}: ${user.email}`);
}

// Coordinated cancellation with multiple operations
const operationController = new AbortController();

const usersHandle = connector.queryJson('SELECT * FROM users', {
  signal: operationController.signal
});

const ordersHandle = connector.queryJson('SELECT * FROM orders', {
  signal: operationController.signal
});

// Cancel both queries if user navigates away
window.addEventListener('beforeunload', () => {
  operationController.abort();
});
```

#### Inherited from

[`DuckDbConnector`](DuckDbConnector.md).[`queryJson`](DuckDbConnector.md#queryjson)

***

### loadFile()

> **loadFile**(`fileName`, `tableName`, `opts`?): `Promise`<`void`>

Load a file into DuckDB and create a table

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `fileName` | `string` | `File` | Path to the file to load |
| `tableName` | `string` | Name of the table to create |
| `opts`? | { `[key: string]`: `unknown`; `schema`: `string`; `select`: `string`\[]; `where`: `string`; `view`: `boolean`; `temp`: `boolean`; `replace`: `boolean`; `method`: `"read_json"` | `"read_ndjson"` | `"read_parquet"` | `"read_csv"` | `"auto"`; } | { `[key: string]`: `unknown`; `schema`: `string`; `select`: `string`\[]; `where`: `string`; `view`: `boolean`; `temp`: `boolean`; `replace`: `boolean`; `options`: `string` | `Record`<`string`, `unknown`> | `string`\[]; `method`: `"st_read"`; } | Load options |

#### Returns

`Promise`<`void`>

#### Inherited from

[`DuckDbConnector`](DuckDbConnector.md).[`loadFile`](DuckDbConnector.md#loadfile)

***

### loadArrow()

> **loadArrow**(`table`, `tableName`, `opts`?): `Promise`<`void`>

Load an arrow table or an arrow IPC stream into DuckDB

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `table` | `Table`<`any`> | `Uint8Array`<`ArrayBufferLike`> | Arrow table or arrow IPC stream to load |
| `tableName` | `string` | Name of the table to create |
| `opts`? | { `schema`: `string`; } | - |
| `opts.schema`? | `string` | - |

#### Returns

`Promise`<`void`>

#### Inherited from

[`DuckDbConnector`](DuckDbConnector.md).[`loadArrow`](DuckDbConnector.md#loadarrow)

***

### loadObjects()

> **loadObjects**(`data`, `tableName`, `opts`?): `Promise`<`void`>

Load JavaScript objects into DuckDB

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `Record`<`string`, `unknown`>\[] | Array of objects to load |
| `tableName` | `string` | Name of the table to create |
| `opts`? | { `[key: string]`: `unknown`; `schema`: `string`; `select`: `string`\[]; `where`: `string`; `view`: `boolean`; `temp`: `boolean`; `replace`: `boolean`; } | Load options |
| `opts.schema`? | `string` | - |
| `opts.select`? | `string`\[] | - |
| `opts.where`? | `string` | - |
| `opts.view`? | `boolean` | - |
| `opts.temp`? | `boolean` | - |
| `opts.replace`? | `boolean` | - |

#### Returns

`Promise`<`void`>

#### Inherited from

[`DuckDbConnector`](DuckDbConnector.md).[`loadObjects`](DuckDbConnector.md#loadobjects)

***

### getInstance()

> **getInstance**(): `DuckDBInstance`

Get the underlying DuckDB instance

#### Returns

`DuckDBInstance`

***

### getConnection()

> **getConnection**(): `DuckDBConnection`

Get the underlying DuckDB connection

#### Returns

`DuckDBConnection`
