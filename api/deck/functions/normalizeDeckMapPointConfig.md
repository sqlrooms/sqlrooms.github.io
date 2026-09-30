---
url: https://sqlrooms.org/api/deck/functions/normalizeDeckMapPointConfig.md
---
[@sqlrooms/deck](../index.md) / normalizeDeckMapPointConfig

# Function: normalizeDeckMapPointConfig()

> **normalizeDeckMapPointConfig**<`T`>(`options`): `T`

Post-normalizes an existing Deck map config so table-backed lon/lat datasets
without `transformSql`, `sqlQuery`, or a native geometry column get a WKB
point transform, geometry bindings, and `fitToData.geometryColumn` alignment.

Prefer this for AI/tool configs that arrive without a transform. Fresh configs
from [createDeckMapDashboardConfigForTable](../variables/createDeckMapDashboardConfigForTable.md) already include the transform;
this helper patches in place without rebuilding layers.

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`DeckMapConfig`](../type-aliases/DeckMapConfig.md) |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | { `config`: `T`; `resolveTable`: (`tableName`) => `DataTable` | `undefined`; } |
| `options.config` | `T` |
| `options.resolveTable` | (`tableName`) => `DataTable` | `undefined` |

## Returns

`T`
