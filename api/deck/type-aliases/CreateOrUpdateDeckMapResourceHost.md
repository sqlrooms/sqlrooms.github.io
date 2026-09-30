---
url: >-
  https://sqlrooms.org/api/deck/type-aliases/CreateOrUpdateDeckMapResourceHost.md
---
[@sqlrooms/deck](../index.md) / CreateOrUpdateDeckMapResourceHost

# Type Alias: CreateOrUpdateDeckMapResourceHost

> **CreateOrUpdateDeckMapResourceHost** = `object`

Host callbacks used to coordinate a durable Deck map resource with its block
document container, table registry, and optional config preparation.

## Properties

### ensureBlockDocument

> **ensureBlockDocument**: (`blockDocumentId`) => `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `blockDocumentId` | `string` |

#### Returns

`void`

***

### findMapBlock

> **findMapBlock**: (`blockDocumentId`, `mapId`) => { `blockId`: `string`; `mapId`: `string`; `caption?`: `string`; } | `undefined`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `blockDocumentId` | `string` |
| `mapId` | `string` |

#### Returns

{ `blockId`: `string`; `mapId`: `string`; `caption?`: `string`; } | `undefined`

***

### findMap

> **findMap**: (`mapId`) => [`DeckMapResource`](DeckMapResource.md) | `undefined`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `mapId` | `string` |

#### Returns

[`DeckMapResource`](DeckMapResource.md) | `undefined`

***

### createMapBlock

> **createMapBlock**: (`options`) => `Promise`<{ `blockId`: `string`; `mapId`: `string`; }>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | { `blockDocumentId`: `string`; `mapId`: `string`; `title`: `string`; `caption?`: `string`; `intent?`: `string`; `height?`: `number`; } |
| `options.blockDocumentId` | `string` |
| `options.mapId` | `string` |
| `options.title` | `string` |
| `options.caption?` | `string` |
| `options.intent?` | `string` |
| `options.height?` | `number` |

#### Returns

`Promise`<{ `blockId`: `string`; `mapId`: `string`; }>

***

### updateBlockMetadata

> **updateBlockMetadata**: (`options`) => `void` | `Promise`<`void`>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | { `blockDocumentId`: `string`; `blockId`: `string`; `caption?`: `string`; `intent?`: `string`; `height?`: `number`; } |
| `options.blockDocumentId` | `string` |
| `options.blockId` | `string` |
| `options.caption?` | `string` |
| `options.intent?` | `string` |
| `options.height?` | `number` |

#### Returns

`void` | `Promise`<`void`>

***

### ensureMap

> **ensureMap**: (`mapId`, `title`) => `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `mapId` | `string` |
| `title` | `string` |

#### Returns

`void`

***

### writeMap

> **writeMap**: (`options`) => `void` | `Promise`<`void`>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | { `mapId`: `string`; `title`: `string`; `config`: [`DeckMapConfig`](DeckMapConfig.md); `selectedTable?`: `string`; } |
| `options.mapId` | `string` |
| `options.title` | `string` |
| `options.config` | [`DeckMapConfig`](DeckMapConfig.md) |
| `options.selectedTable?` | `string` |

#### Returns

`void` | `Promise`<`void`>

***

### findTable

> **findTable**: (`tableName`) => { `tableIdentity`: `string`; `columns`: readonly [`DeckMapConfigColumn`](DeckMapConfigColumn.md)\[]; } | `undefined`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `tableName` | `string` |

#### Returns

{ `tableIdentity`: `string`; `columns`: readonly [`DeckMapConfigColumn`](DeckMapConfigColumn.md)\[]; } | `undefined`

***

### prepareConfig?

> `optional` **prepareConfig?**: (`options`) => [`DeckMapConfig`](DeckMapConfig.md) | `Promise`<[`DeckMapConfig`](DeckMapConfig.md)>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | { `config`: [`DeckMapConfig`](DeckMapConfig.md); `existingMapConfig?`: [`DeckMapConfig`](DeckMapConfig.md); `tableName?`: `string`; `replaceLayers?`: `boolean`; `replaceDatasets?`: `boolean`; } |
| `options.config` | [`DeckMapConfig`](DeckMapConfig.md) |
| `options.existingMapConfig?` | [`DeckMapConfig`](DeckMapConfig.md) |
| `options.tableName?` | `string` |
| `options.replaceLayers?` | `boolean` |
| `options.replaceDatasets?` | `boolean` |

#### Returns

[`DeckMapConfig`](DeckMapConfig.md) | `Promise`<[`DeckMapConfig`](DeckMapConfig.md)>
