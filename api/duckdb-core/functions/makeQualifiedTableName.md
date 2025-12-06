---
url: /api/duckdb-core/functions/makeQualifiedTableName.md
---
[@sqlrooms/duckdb-core](../index.md) / makeQualifiedTableName

# Function: makeQualifiedTableName()

> **makeQualifiedTableName**(`__namedParameters`): `object`

Get a qualified table name from a table name, schema, and database.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | [`QualifiedTableName`](../type-aliases/QualifiedTableName.md) |

## Returns

`object`

The qualified table name.

| Name | Type |
| ------ | ------ |
|  `database` | `undefined` | `string` |
|  `schema` | `undefined` | `string` |
|  `table` | `string` |
|  `toString` | () => `string` |
