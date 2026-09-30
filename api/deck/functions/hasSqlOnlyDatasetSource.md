---
url: https://sqlrooms.org/api/deck/functions/hasSqlOnlyDatasetSource.md
---
[@sqlrooms/deck](../index.md) / hasSqlOnlyDatasetSource

# Function: hasSqlOnlyDatasetSource()

> **hasSqlOnlyDatasetSource**(`config`): `boolean`

Returns true when any dataset source is a literal `sqlQuery` without a
structured `tableName` (so selected-table switching cannot apply).

## Parameters

| Parameter | Type |
| ------ | ------ |
| `config` | [`DeckMapDatasetSourceConfig`](../type-aliases/DeckMapDatasetSourceConfig.md) |

## Returns

`boolean`
