---
url: 'https://sqlrooms.org/api/db/type-aliases/DbSliceState.md'
---
[@sqlrooms/db](../index.md) / DbSliceState

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
| `config` | [`DbSliceConfig`](DbSliceConfig.md) | Orchestration config shared by connector actions. |
| `setConfig()` | (`config`) => `void` | Replace the full orchestration config. |
| `connectors` | { `connectors`: `Record`<`string`, [`DbConnector`](DbConnector.md)>; `bridges`: `Record`<`string`, [`DbBridge`](DbBridge.md)>; `registerConnection`: (`connection`) => `void`; `removeConnection`: (`connectionId`) => `void`; `registerConnector`: (`connectionId`, `connector`) => `void`; `registerBridge`: (`bridge`) => `void`; `listConnections`: () => [`DbConnection`](DbConnection.md)\[]; `testConnection`: (`connectionId`) => `Promise`<`boolean`>; `listCatalog`: (`connectionId?`) => `Promise`<[`CatalogEntry`](CatalogEntry.md)\[]>; `runQuery`: (`request`) => `Promise`<[`QueryExecutionResult`](QueryExecutionResult.md)>; } | Connector orchestration actions and registries. |
