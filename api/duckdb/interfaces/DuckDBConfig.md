---
url: /api/duckdb/interfaces/DuckDBConfig.md
---
[@sqlrooms/duckdb](../index.md) / DuckDBConfig

# Interface: DuckDBConfig

## Properties

### path?

> `optional` **path**: `string`

The database path

***

### accessMode?

> `optional` **accessMode**: [`DuckDBAccessMode`](../enumerations/DuckDBAccessMode.md)

The access mode

***

### maximumThreads?

> `optional` **maximumThreads**: `number`

The maximum number of threads.
Note that this will only work with cross-origin isolated sites since it requires SharedArrayBuffers.

***

### useDirectIO?

> `optional` **useDirectIO**: `boolean`

The direct io flag

***

### query?

> `optional` **query**: `DuckDBQueryConfig`

The query config

***

### filesystem?

> `optional` **filesystem**: `DuckDBFilesystemConfig`

The filesystem config

***

### allowUnsignedExtensions?

> `optional` **allowUnsignedExtensions**: `boolean`

Whether to allow unsigned extensions

***

### arrowLosslessConversion?

> `optional` **arrowLosslessConversion**: `boolean`

Whether to use alternate Arrow conversion that preserves full range and precision of data.

***

### customUserAgent?

> `optional` **customUserAgent**: `string`

Custom user agent string

***

### opfs?

> `optional` **opfs**: `DuckDBOPFSConfig`

opfs string
