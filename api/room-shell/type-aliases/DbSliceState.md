---
url: 'https://sqlrooms.org/api/room-shell/type-aliases/DbSliceState.md'
---
[@sqlrooms/room-shell](../index.md) / DbSliceState

# Type Alias: DbSliceState

> **DbSliceState** = `object`

State shape contributed by `createDbSlice`.

The API is intentionally split into:

* `db` for core DuckDB operations plus orchestration config
* `db.connectors` for connector/bridge registry and query routing actions

## Properties

### db

> **db**: `DuckDbSliceState`\[`"db"`] & `object`

#### Type Declaration

| Name | Type | Description |
| ------ | ------ | ------ |
| `config` | `DbSliceConfig` | Orchestration config shared by connector actions. |
| `setConfig()` | (`config`) => `void` | Replace the full orchestration config. |
| `connectors` | { `connectors`: `Record`<`string`, `DbConnector`>; `bridges`: `Record`<`string`, `DbBridge`>; `registerConnection`: (`connection`) => `void`; `removeConnection`: (`connectionId`) => `void`; `registerConnector`: (`connectionId`, `connector`) => `void`; `registerBridge`: (`bridge`) => `void`; `listConnections`: () => `DbConnection`\[]; `testConnection`: (`connectionId`) => `Promise`<`boolean`>; `listCatalog`: (`connectionId?`) => `Promise`<`CatalogEntry`\[]>; `runQuery`: (`request`) => `Promise`<`QueryExecutionResult`>; } | Connector orchestration actions and registries. |
