---
url: >-
  https://sqlrooms.org/api/deck/functions/createDeckMapDashboardConfigForTable.md
---
[@sqlrooms/deck](../index.md) / createDeckMapDashboardConfigForTable

# Function: createDeckMapDashboardConfigForTable()

> **createDeckMapDashboardConfigForTable**(`options`): [`DeckMapDashboardPanelConfig`](../type-aliases/DeckMapDashboardPanelConfig.md)

## Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | { `tableName`: `string`; `columns`: [`DeckMapConfigColumn`](../type-aliases/DeckMapConfigColumn.md)\[]; `tableReference?`: [`DeckMapTableReference`](../type-aliases/DeckMapTableReference.md); `sourceSqlQuery?`: `string`; `longitudeColumn?`: `string`; `latitudeColumn?`: `string`; `geometryColumn?`: `string`; `geometryEncodingHint?`: [`GeometryEncodingHint`](../type-aliases/GeometryEncodingHint.md); `pointRadius?`: `number`; `fillColor?`: [`DeckMapFillColor`](../type-aliases/DeckMapFillColor.md); `mapStyle?`: `string`; } |
| `options.tableName` | `string` |
| `options.columns` | [`DeckMapConfigColumn`](../type-aliases/DeckMapConfigColumn.md)\[] |
| `options.tableReference?` | [`DeckMapTableReference`](../type-aliases/DeckMapTableReference.md) |
| `options.sourceSqlQuery?` | `string` |
| `options.longitudeColumn?` | `string` |
| `options.latitudeColumn?` | `string` |
| `options.geometryColumn?` | `string` |
| `options.geometryEncodingHint?` | [`GeometryEncodingHint`](../type-aliases/GeometryEncodingHint.md) |
| `options.pointRadius?` | `number` |
| `options.fillColor?` | [`DeckMapFillColor`](../type-aliases/DeckMapFillColor.md) |
| `options.mapStyle?` | `string` |

## Returns

[`DeckMapDashboardPanelConfig`](../type-aliases/DeckMapDashboardPanelConfig.md)
