---
url: 'https://sqlrooms.org/api/db/functions/findTableInSchemaTrees.md'
---
[@sqlrooms/db](../index.md) / findTableInSchemaTrees

# Function: findTableInSchemaTrees()

> **findTableInSchemaTrees**(`schemaTrees`, `qualifiedName`): [`TableNodeObject`](../type-aliases/TableNodeObject.md) | `undefined`

Finds a specific table by its qualified name in the schema tree.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `schemaTrees` | [`DbSchemaNode`](../type-aliases/DbSchemaNode.md)\[] | `undefined` | Array of database schema tree nodes |
| `qualifiedName` | `string` | Qualified table name (e.g., "database.schema.table") |

## Returns

[`TableNodeObject`](../type-aliases/TableNodeObject.md) | `undefined`

The table object if found, undefined otherwise
