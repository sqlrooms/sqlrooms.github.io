---
url: /api/duckdb/interfaces/DuckDBBundles.md
---
[@sqlrooms/duckdb](../index.md) / DuckDBBundles

# Interface: DuckDBBundles

Bundles have different characteristics:

* MVP: minimum viable product (uses features from first stable version of WebAssembly standard)
* EH: exception handling
* COI: cross origin isolation

## Properties

### mvp

> **mvp**: `object`

| Name | Type |
| ------ | ------ |
| `mainModule` | `string` |
| `mainWorker` | `string` |

***

### eh?

> `optional` **eh**: `object`

| Name | Type |
| ------ | ------ |
| `mainModule` | `string` |
| `mainWorker` | `string` |

***

### coi?

> `optional` **coi**: `object`

| Name | Type |
| ------ | ------ |
| `mainModule` | `string` |
| `mainWorker` | `string` |
| `pthreadWorker` | `string` |
