---
url: /api/duckdb-core/functions/makeQualifiedTableName.md
---
[@sqlrooms/duckdb-core](../index.md) / makeQualifiedTableName

# Function: makeQualifiedTableName()

> **makeQualifiedTableName**(`table`): `object`

Get a qualified table name from a table name, schema, and database.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `table` | [`QualifiedTableName`](../type-aliases/QualifiedTableName.md) | The name of the table. |

## Returns

`object`

The qualified table name.

| Name | Type |
| ------ | ------ |
| `database` | `string` | `undefined` |
| `schema` | `string` | `undefined` |
| `table` | `string` |
| `toString()` | () => `string` |
