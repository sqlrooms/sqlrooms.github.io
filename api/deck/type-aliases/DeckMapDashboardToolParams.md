---
url: 'https://sqlrooms.org/api/deck/type-aliases/DeckMapDashboardToolParams.md'
---
[@sqlrooms/deck](../index.md) / DeckMapDashboardToolParams

# Type Alias: DeckMapDashboardToolParams

> **DeckMapDashboardToolParams** = `object`

## Type Declaration

| Name | Type |
| ------ | ------ |
|  `title` | `string` |
|  `config` | {\[`key`: `string`]: `unknown`; `spec`: {\[`key`: `string`]: `unknown`; `initialViewState?`: `Record`<`string`, `unknown`>; `viewState?`: `Record`<`string`, `unknown`>; `controller?`: `unknown`; `layers?`: `object`\[]; }; `datasets`: `Record`<`string`, {\[`key`: `string`]: `unknown`; `source?`: {\[`key`: `string`]: `unknown`; `tableName?`: `string`; `sqlQuery?`: `string`; }; `geometryColumn?`: `string`; `geometryEncodingHint?`: `"geoarrow"` | `"wkb"` | `"wkt"`; }>; `mapStyle?`: `string`; `mapProps?`: `Record`<`string`, `unknown`>; `showLegends?`: `boolean`; `interaction?`: `Record`<`string`, `unknown`>; `fitToData?`: `Record`<`string`, `unknown`>; `dataPolicy?`: {\[`key`: `string`]: `unknown`; `disabled?`: `boolean`; `maxRows?`: `number`; `reason?`: `string`; }; `settingsOpen?`: `boolean`; } |
|  `tableName?` | `string` |
|  `panelId?` | `string` |
|  `reasoning` | `string` |
