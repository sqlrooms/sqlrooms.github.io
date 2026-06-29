---
url: 'https://sqlrooms.org/api/duckdb-core/functions/makeQualifiedTableName.md'
---
[@sqlrooms/duckdb-core](../index.md) / makeQualifiedTableName

# Function: makeQualifiedTableName()

> **makeQualifiedTableName**(`table`): [`QualifiedTableName`](../type-aliases/QualifiedTableName.md)

Builds a pure QualifiedTableName value from explicit identifier parts.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `table` | `QualifiedTableNameParts` | The name of the table. |

## Returns

[`QualifiedTableName`](../type-aliases/QualifiedTableName.md)

The qualified table name.

## Remarks

Prefer `state.db.qualifyTableName()` when a table reference should use the
current/default database context, and prefer `state.db.findTable()` when resolving
an existing table reference from user input or persisted table IDs.
Use this helper only when all qualification context is already known.
