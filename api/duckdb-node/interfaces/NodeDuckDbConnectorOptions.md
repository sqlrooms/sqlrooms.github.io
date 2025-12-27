---
url: /api/duckdb-node/interfaces/NodeDuckDbConnectorOptions.md
---
[@sqlrooms/duckdb-node](../index.md) / NodeDuckDbConnectorOptions

# Interface: NodeDuckDbConnectorOptions

Options for the Node.js DuckDB connector.

## Properties

### dbPath?

> `optional` **dbPath**: `string`

Path to the database file, or ':memory:' for in-memory database.

#### Default

```ts
':memory:'
```

***

### initializationQuery?

> `optional` **initializationQuery**: `string`

SQL to run after initialization.

***

### config?

> `optional` **config**: `Record`<`string`, `string`>

Configuration options passed to DuckDB instance.
