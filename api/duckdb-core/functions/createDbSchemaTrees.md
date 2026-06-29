---
url: 'https://sqlrooms.org/api/duckdb-core/functions/createDbSchemaTrees.md'
---
[@sqlrooms/duckdb-core](../index.md) / createDbSchemaTrees

# Function: createDbSchemaTrees()

> **createDbSchemaTrees**(`schemas`): [`DbSchemaNode`](../type-aliases/DbSchemaNode.md)\[]

Build a tree of databases → schemas → tables → columns from the grouped schema list.
Empty schemas (`tables: []`) are preserved as leaf-less schema nodes.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `schemas` | [`SchemaWithTables`](../type-aliases/SchemaWithTables.md)\[] | Schemas grouped by database, each carrying its tables (may be empty) |

## Returns

[`DbSchemaNode`](../type-aliases/DbSchemaNode.md)\[]

An array of database nodes
