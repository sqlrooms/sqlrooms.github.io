---
url: 'https://sqlrooms.org/api/deck/functions/ensureDeckMapBlockState.md'
---
[@sqlrooms/deck](../index.md) / ensureDeckMapBlockState

# Function: ensureDeckMapBlockState()

> **ensureDeckMapBlockState**(`state`, `mapId`, `title`): `void`

Ensures persisted map block state exists for an embeddable map surface.
If a geospatial table is available, the block is seeded with a starter map.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `state` | `MosaicDashboardStoreState` |
| `mapId` | `string` |
| `title` | `string` |

## Returns

`void`
