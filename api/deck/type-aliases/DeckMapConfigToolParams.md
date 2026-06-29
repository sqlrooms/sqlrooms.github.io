---
url: 'https://sqlrooms.org/api/deck/type-aliases/DeckMapConfigToolParams.md'
---
[@sqlrooms/deck](../index.md) / DeckMapConfigToolParams

# Type Alias: DeckMapConfigToolParams

> **DeckMapConfigToolParams** = `object`

## Type Declaration

| Name | Type |
| ------ | ------ |
|  `title` | `string` |
|  `config` | {\[`key`: `string`]: `unknown`; `spec`: {\[`key`: `string`]: `unknown`; `initialViewState?`: `Record`<`string`, `unknown`>; `viewState?`: `Record`<`string`, `unknown`>; `controller?`: `unknown`; `layers?`: `object`\[]; }; `datasets`: `Record`<`string`, {\[`key`: `string`]: `unknown`; `source?`: {\[`key`: `string`]: `unknown`; `tableName?`: `string`; `sqlQuery?`: `string`; }; `geometryColumn?`: `string`; `geometryEncodingHint?`: `"geoarrow"` | `"wkb"` | `"wkt"`; }>; `mapStyle?`: `string`; `mapProps?`: `Record`<`string`, `unknown`>; `showLegends?`: `boolean`; `interaction?`: `Record`<`string`, `unknown`>; `fitToData?`: { `dataset`: `string`; `longitudeColumn?`: `string`; `latitudeColumn?`: `string`; `geometryColumn?`: `string`; `h3Column?`: `string`; `padding?`: `number`; `maxZoom?`: `number`; }; `dataPolicy?`: {\[`key`: `string`]: `unknown`; `disabled?`: `boolean`; `maxRows?`: `number`; `reason?`: `string`; }; `settingsOpen?`: `boolean`; } |
|  `reasoning` | `string` |
