---
url: 'https://sqlrooms.org/api/db/type-aliases/DbSliceConfig.md'
---
[@sqlrooms/db](../index.md) / DbSliceConfig

# Type Alias: DbSliceConfig

> **DbSliceConfig** = `object`

Global configuration for the DB orchestration layer.

This config sits at `state.db.config` and controls:

* Runtime routing behavior (`currentRuntime`)
* Which connection is treated as the core DuckDB engine (`coreConnectionId`)
* How external query results are materialized into core DuckDB
  (`coreMaterialization`)
* The known connection registry (`connections`)

## Properties

### currentRuntime

> **currentRuntime**: [`RuntimeSupport`](RuntimeSupport.md)

Runtime where this store instance executes.
Used to decide whether a connection can run directly or must be bridged.

***

### coreConnectionId

> **coreConnectionId**: `string`

Connection id of the core DuckDB engine used as the canonical execution
and materialization target.

***

### coreMaterialization

> **coreMaterialization**: [`CoreMaterializationConfig`](CoreMaterializationConfig.md)

Strategy for materializing non-core connector results into core DuckDB.

***

### connections

> **connections**: `Record`<`string`, [`DbConnection`](DbConnection.md)>

Registered connections keyed by connection id.
