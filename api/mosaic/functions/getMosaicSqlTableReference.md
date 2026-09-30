---
url: https://sqlrooms.org/api/mosaic/functions/getMosaicSqlTableReference.md
---
[@sqlrooms/mosaic](../index.md) / getMosaicSqlTableReference

# Function: getMosaicSqlTableReference()

> **getMosaicSqlTableReference**(`tableName`): `TableRefNode`

Converts SQLRooms table identity into a Mosaic query table reference.

SQLRooms keeps the DuckDB catalog/database in QualifiedTableName for stable
identity, but Mosaic queries execute against the active connector. Including
that catalog in generated SQL can target a catalog that is not attached in
the query connection. Mosaic also is not quote-aware when parsing table
strings, so return a TableRefNode for generated SQL.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `tableName` | [`MosaicTableReferenceInput`](../type-aliases/MosaicTableReferenceInput.md) |

## Returns

`TableRefNode`
