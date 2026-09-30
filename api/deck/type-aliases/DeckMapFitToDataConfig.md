---
url: https://sqlrooms.org/api/deck/type-aliases/DeckMapFitToDataConfig.md
---
[@sqlrooms/deck](../index.md) / DeckMapFitToDataConfig

# Type Alias: DeckMapFitToDataConfig

> **DeckMapFitToDataConfig** = `object`

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

***

### geometryColumns?

> `optional` **geometryColumns?**: `string`\[]

Multiple geometry columns whose extents should be combined when fitting
the view. Used for arc layers that have separate source and target
geometries — a single `geometryColumn` would only cover one endpoint.

***

### h3Column?

> `optional` **h3Column?**: `string`

***

### padding?

> `optional` **padding?**: `number`

***

### maxZoom?

> `optional` **maxZoom?**: `number`
