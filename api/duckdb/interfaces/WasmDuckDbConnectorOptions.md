---
url: 'https://sqlrooms.org/api/duckdb/interfaces/WasmDuckDbConnectorOptions.md'
---
[@sqlrooms/duckdb](../index.md) / WasmDuckDbConnectorOptions

# Interface: WasmDuckDbConnectorOptions

## Extends

* `DuckDBConfig`

## Properties

### ~~dbPath?~~

> `optional` **dbPath?**: `string`

#### Deprecated

use `path` instead

***

### initializationQuery?

> `optional` **initializationQuery?**: `string`

***

### logging?

> `optional` **logging?**: `boolean`

***

### bundles?

> `optional` **bundles?**: `DuckDBBundles`

DuckDB bundles to use. Defaults to jsDelivr bundles. To use locally
bundled files, you will need to import them in your app and construct a
`DuckDBBundles` object.
