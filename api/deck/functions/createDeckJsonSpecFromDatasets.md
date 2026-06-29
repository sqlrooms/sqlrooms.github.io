---
url: 'https://sqlrooms.org/api/deck/functions/createDeckJsonSpecFromDatasets.md'
---
[@sqlrooms/deck](../index.md) / createDeckJsonSpecFromDatasets

# Function: createDeckJsonSpecFromDatasets()

> **createDeckJsonSpecFromDatasets**(`options`): `object`

Generate a conservative starter Deck JSON spec from SQLRooms datasets.

The helper favors predictable defaults:
native point/line/polygon datasets become the matching GeoArrow layer, while
mixed or unsupported inputs fall back to `GeoJsonLayer`. Callers can provide
semantic hints for special layers such as trips, arcs, H3, or heatmaps.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`CreateDeckJsonSpecFromDatasetsOptions`](../type-aliases/CreateDeckJsonSpecFromDatasetsOptions.md) |

## Returns

`object`

| Name | Type |
| ------ | ------ |
| `initialViewState?` | `Record`<`string`, `unknown`> |
| `viewState?` | `Record`<`string`, `unknown`> |
| `controller?` | `boolean` | `Record`<`string`, `unknown`> |
| `layers?` | `object`\[] |
