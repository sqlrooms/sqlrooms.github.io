---
url: 'https://sqlrooms.org/api/deck/type-aliases/DeckMapDashboardFitToDataConfig.md'
---
[@sqlrooms/deck](../index.md) / DeckMapDashboardFitToDataConfig

# Type Alias: DeckMapDashboardFitToDataConfig

> **DeckMapDashboardFitToDataConfig** = `object`

## Properties

### dataset

> **dataset**: `string`

***

### longitudeColumn?

> `optional` **longitudeColumn?**: `string`

***

### latitudeColumn?

> `optional` **latitudeColumn?**: `string`

***

### geometryColumn?

> `optional` **geometryColumn?**: `string`

Geometry column name (WKB) for computing bounds from geometry directly.

***

### h3Column?

> `optional` **h3Column?**: `string`

H3 hex index column for computing bounds from H3 cells.

***

### padding?

> `optional` **padding?**: `number`

***

### maxZoom?

> `optional` **maxZoom?**: `number`
