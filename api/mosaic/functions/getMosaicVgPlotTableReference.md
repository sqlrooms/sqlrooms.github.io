---
url: https://sqlrooms.org/api/mosaic/functions/getMosaicVgPlotTableReference.md
---
[@sqlrooms/mosaic](../index.md) / getMosaicVgPlotTableReference

# Function: getMosaicVgPlotTableReference()

> **getMosaicVgPlotTableReference**(`tableName`): [`VgPlotTableReference`](../type-aliases/VgPlotTableReference.md)

Converts SQLRooms table identity into a serializable vgplot `data.from`
reference.

SQLRooms normalizes this string into a Mosaic TableRefNode before handing the
spec to Mosaic at runtime. Keeping this string SQL-quoted preserves dotted
identifier boundaries through JSON serialization.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `tableName` | [`MosaicTableReferenceInput`](../type-aliases/MosaicTableReferenceInput.md) |

## Returns

[`VgPlotTableReference`](../type-aliases/VgPlotTableReference.md)
