---
url: /api/duckdb/functions/arrowTableToJson.md
---
[@sqlrooms/duckdb](../index.md) / arrowTableToJson

# Function: arrowTableToJson()

> **arrowTableToJson**(`table`): `Record`<`string`, `unknown`>\[]

Converts an Arrow table to a JSON-compatible array of objects

## Parameters

| Parameter | Type |
| ------ | ------ |
| `table` | `Table` |

## Returns

`Record`<`string`, `unknown`>\[]

## See

* https://duckdb.org/docs/api/wasm/query.html#arrow-table-to-json
* https://github.com/apache/arrow/issues/37856
