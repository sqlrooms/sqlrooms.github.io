---
url: >-
  https://sqlrooms.org/api/deck/type-aliases/CreateOrUpdateDeckMapResourceParams.md
---
[@sqlrooms/deck](../index.md) / CreateOrUpdateDeckMapResourceParams

# Type Alias: CreateOrUpdateDeckMapResourceParams

> **CreateOrUpdateDeckMapResourceParams** = `object`

Input for creating or updating a Deck map resource and its owning block.

## Properties

### blockDocumentId

> **blockDocumentId**: `string`

***

### config

> **config**: [`DeckMapConfig`](DeckMapConfig.md)

***

### pointBinding?

> `optional` **pointBinding?**: [`DeckMapPointBinding`](DeckMapPointBinding.md)

Generates canonical point geometry from structured lon/lat provenance.

***

### mapId?

> `optional` **mapId?**: `string`

***

### tableName?

> `optional` **tableName?**: `string`

***

### title?

> `optional` **title?**: `string`

***

### caption?

> `optional` **caption?**: `string`

***

### intent?

> `optional` **intent?**: `string`

***

### height?

> `optional` **height?**: `number`

***

### replaceLayers?

> `optional` **replaceLayers?**: `boolean`

Treat `config.spec.layers` as the complete replacement layer list.

***

### replaceDatasets?

> `optional` **replaceDatasets?**: `boolean`

Treat `config.datasets` as the complete replacement dataset registry.

***

### requireTableNameForSqlOnlyUpdate?

> `optional` **requireTableNameForSqlOnlyUpdate?**: `boolean`

***

### artifactLabel?

> `optional` **artifactLabel?**: `string`

***

### createMapId?

> `optional` **createMapId?**: () => `string`

#### Returns

`string`

***

### missingMapBlockBehavior?

> `optional` **missingMapBlockBehavior?**: `"throw"` | `"create"`
