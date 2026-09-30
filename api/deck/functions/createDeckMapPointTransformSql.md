---
url: https://sqlrooms.org/api/deck/functions/createDeckMapPointTransformSql.md
---
[@sqlrooms/deck](../index.md) / createDeckMapPointTransformSql

# Function: createDeckMapPointTransformSql()

> **createDeckMapPointTransformSql**(`options`): `string`

Builds the standard lon/lat → WKB point transform SQL used by Deck map
datasets that follow the selected table via [DECK\_TABLE\_DATASET\_SOURCE\_RELATION](../variables/DECK_TABLE_DATASET_SOURCE_RELATION.md).

## Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | { `longitudeColumn`: `string`; `latitudeColumn`: `string`; `geometryColumn`: `string`; } |
| `options.longitudeColumn` | `string` |
| `options.latitudeColumn` | `string` |
| `options.geometryColumn` | `string` |

## Returns

`string`
