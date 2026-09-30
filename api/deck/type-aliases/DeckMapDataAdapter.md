---
url: https://sqlrooms.org/api/deck/type-aliases/DeckMapDataAdapter.md
---
[@sqlrooms/deck](../index.md) / DeckMapDataAdapter

# Type Alias: DeckMapDataAdapter

> **DeckMapDataAdapter** = `object`

Host-neutral data boundary for Deck map resources. Document maps use the
direct adapter below and are intentionally independent: no Mosaic selection
or cross-filter state is read or published.

## Properties

### resolveDatasets

> **resolveDatasets**: (`options`) => `Record`<`string`, [`DeckDatasetInput`](DeckDatasetInput.md)>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | { `mapId`: `string`; `map`: [`DeckMapResource`](DeckMapResource.md); } |
| `options.mapId` | `string` |
| `options.map` | [`DeckMapResource`](DeckMapResource.md) |

#### Returns

`Record`<`string`, [`DeckDatasetInput`](DeckDatasetInput.md)>

***

### resolveFitDataset?

> `optional` **resolveFitDataset?**: (`options`) => [`DeckDatasetInput`](DeckDatasetInput.md) | `undefined`

Resolves an unsampled dataset input for fit-to-data bounds queries.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | { `mapId`: `string`; `map`: [`DeckMapResource`](DeckMapResource.md); `datasetId`: `string`; } |
| `options.mapId` | `string` |
| `options.map` | [`DeckMapResource`](DeckMapResource.md) |
| `options.datasetId` | `string` |

#### Returns

[`DeckDatasetInput`](DeckDatasetInput.md) | `undefined`

***

### getTableColumns?

> `optional` **getTableColumns?**: (`tableName`) => `DataTable`\[`"columns"`] | `undefined`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `tableName` | `string` |

#### Returns

`DataTable`\[`"columns"`] | `undefined`
