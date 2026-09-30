---
url: https://sqlrooms.org/api/mosaic/functions/getMosaicRawSqlTableReference.md
---
[@sqlrooms/mosaic](../index.md) / getMosaicRawSqlTableReference

# Function: getMosaicRawSqlTableReference()

> **getMosaicRawSqlTableReference**(`tableName`): `RawSqlTableReference`

Converts SQLRooms table identity into a schema/table SQL fragment for raw SQL
builders. The active Mosaic connector owns the catalog, so the database part
is intentionally omitted.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `tableName` | [`MosaicTableReferenceInput`](../type-aliases/MosaicTableReferenceInput.md) |

## Returns

`RawSqlTableReference`
