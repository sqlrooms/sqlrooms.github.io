---
url: https://sqlrooms.org/api/deck/functions/regenerateMapConfigForTable.md
---
[@sqlrooms/deck](../index.md) / regenerateMapConfigForTable

# Function: regenerateMapConfigForTable()

> **regenerateMapConfigForTable**(`panel`, `table`, `longitudeColumn?`, `latitudeColumn?`): `Record`<`string`, `unknown`> | [`DeckMapConfig`](../type-aliases/DeckMapConfig.md) | { `datasets`: `Record`<`string`, [`DeckMapDatasetConfig`](../type-aliases/DeckMapDatasetConfig.md)>; `configMode?`: [`DeckMapConfigMode`](../type-aliases/DeckMapConfigMode.md); `mapStyle?`: `string`; `mapProps?`: `Record`<`string`, `unknown`>; `showLegends?`: `boolean`; `interaction?`: [`DeckMapInteractionConfig`](../type-aliases/DeckMapInteractionConfig.md); `fitToData?`: [`DeckMapFitToDataConfig`](../type-aliases/DeckMapFitToDataConfig.md); `dataPolicy?`: [`DeckMapDataPolicyOverride`](../type-aliases/DeckMapDataPolicyOverride.md); `settingsOpen?`: `boolean`; `spec`: { `layers`: `any`\[]; }; }

Regenerates a map's dataset source and fit configuration for a table while
preserving an existing single dataset ID so retained layer bindings remain
valid. Empty maps adopt the generated dataset and layer spec. Returns the
existing config unchanged when the table has no supported geospatial columns
or when multiple datasets make the target ambiguous.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `panel` | { `config`: `Record`<`string`, `unknown`>; } |
| `panel.config` | `Record`<`string`, `unknown`> |
| `table` | `DataTable` |
| `longitudeColumn?` | `string` |
| `latitudeColumn?` | `string` |

## Returns

`Record`<`string`, `unknown`>

***

[`DeckMapConfig`](../type-aliases/DeckMapConfig.md)

***

### Type Literal

{ `datasets`: `Record`<`string`, [`DeckMapDatasetConfig`](../type-aliases/DeckMapDatasetConfig.md)>; `configMode?`: [`DeckMapConfigMode`](../type-aliases/DeckMapConfigMode.md); `mapStyle?`: `string`; `mapProps?`: `Record`<`string`, `unknown`>; `showLegends?`: `boolean`; `interaction?`: [`DeckMapInteractionConfig`](../type-aliases/DeckMapInteractionConfig.md); `fitToData?`: [`DeckMapFitToDataConfig`](../type-aliases/DeckMapFitToDataConfig.md); `dataPolicy?`: [`DeckMapDataPolicyOverride`](../type-aliases/DeckMapDataPolicyOverride.md); `settingsOpen?`: `boolean`; `spec`: { `layers`: `any`\[]; }; }

| Name | Type | Description |
| ------ | ------ | ------ |
| `datasets` | `Record`<`string`, [`DeckMapDatasetConfig`](../type-aliases/DeckMapDatasetConfig.md)> | - |
| `configMode?` | [`DeckMapConfigMode`](../type-aliases/DeckMapConfigMode.md) | - |
| `mapStyle?` | `string` | Built-in basemap ID (`light`/`dark`) or custom style URL. |
| `mapProps?` | `Record`<`string`, `unknown`> | - |
| `showLegends?` | `boolean` | - |
| `interaction?` | [`DeckMapInteractionConfig`](../type-aliases/DeckMapInteractionConfig.md) | - |
| `fitToData?` | [`DeckMapFitToDataConfig`](../type-aliases/DeckMapFitToDataConfig.md) | - |
| `dataPolicy?` | [`DeckMapDataPolicyOverride`](../type-aliases/DeckMapDataPolicyOverride.md) | - |
| `settingsOpen?` | `boolean` | - |
| `spec` | { `layers`: `any`\[]; } | - |
