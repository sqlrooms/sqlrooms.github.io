---
url: /api/duckdb/functions/createDbSchemaTrees.md
---
[@sqlrooms/duckdb](../index.md) / createDbSchemaTrees

# Function: createDbSchemaTrees()

> **createDbSchemaTrees**(`tables`): [`DbSchemaNode`](../type-aliases/DbSchemaNode.md)\[]

Group tables by database, schema and create a tree of databases, schemas, tables, and columns.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `tables` | [`DataTable`](../type-aliases/DataTable.md)\[] | The tables to group |

## Returns

[`DbSchemaNode`](../type-aliases/DbSchemaNode.md)\[]

An array of database nodes containing schemas, tables and columns
