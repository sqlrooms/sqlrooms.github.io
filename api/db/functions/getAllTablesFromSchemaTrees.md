---
url: 'https://sqlrooms.org/api/db/functions/getAllTablesFromSchemaTrees.md'
---
[@sqlrooms/db](../index.md) / getAllTablesFromSchemaTrees

# ~~Function: getAllTablesFromSchemaTrees()~~

> **getAllTablesFromSchemaTrees**(`schemaTrees`): [`TableNodeObject`](../type-aliases/TableNodeObject.md)\[]

Flattens a schema tree and extracts all table nodes.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `schemaTrees` | [`DbSchemaNode`](../type-aliases/DbSchemaNode.md)\[] | `undefined` | Array of database schema tree nodes |

## Returns

[`TableNodeObject`](../type-aliases/TableNodeObject.md)\[]

Array of all table objects found in the tree

## Deprecated

Use state.db.tables
