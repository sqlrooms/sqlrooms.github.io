---
url: 'https://sqlrooms.org/api/duckdb-core/functions/resolveTableReference.md'
---
[@sqlrooms/duckdb-core](../index.md) / resolveTableReference

# Function: resolveTableReference()

> **resolveTableReference**<`T`>(`tables`, `tableReference`): [`ResolveTableReferenceResult`](../type-aliases/ResolveTableReferenceResult.md)<`T`>

Resolves a table reference against an already-flat table catalog.

Resolution prefers exact canonical table ids, then qualified SQL identifiers,
then unique bare table names. Ambiguous bare names are returned as matches
instead of silently selecting one table.

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `TableReferenceCandidate` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `tables` | `T`\[] | Flat catalog whose entries carry a QualifiedTableName. |
| `tableReference` | `string` | [`QualifiedTableName`](../type-aliases/QualifiedTableName.md) | Table reference string or QualifiedTableName. |

## Returns

[`ResolveTableReferenceResult`](../type-aliases/ResolveTableReferenceResult.md)<`T`>

Matching table, ambiguous matches, or an empty result.
