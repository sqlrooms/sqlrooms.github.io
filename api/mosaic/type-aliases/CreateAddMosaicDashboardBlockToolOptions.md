---
url: >-
  https://sqlrooms.org/api/mosaic/type-aliases/CreateAddMosaicDashboardBlockToolOptions.md
---
[@sqlrooms/mosaic](../index.md) / CreateAddMosaicDashboardBlockToolOptions

# Type Alias: CreateAddMosaicDashboardBlockToolOptions

> **CreateAddMosaicDashboardBlockToolOptions** = `object`

Options for creating a Mosaic dashboard block-document tool.

## Properties

### blockDocumentAdapter

> **blockDocumentAdapter**: `BlockDocumentAiAdapter`

Adapter for block document operations.

***

### blockDocumentId

> **blockDocumentId**: `string`

ID of the block document where dashboard blocks will be added.

***

### addDashboardBlock?

> `optional` **addDashboardBlock?**: (`params`) => `Promise`<{ `dashboardId`: `string`; `blockId`: `string`; }>

Host callback that performs the full durable block creation.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | { `title`: `string`; `tableName`: `string`; `intent?`: `string`; } |
| `params.title` | `string` |
| `params.tableName` | `string` |
| `params.intent?` | `string` |

#### Returns

`Promise`<{ `dashboardId`: `string`; `blockId`: `string`; }>

***

### createDashboardBlock

> **createDashboardBlock**: (`params`) => { `dashboardId`: `string`; `block`: `BlockDocumentStatefulBlockBlock`; } | `Promise`<{ `dashboardId`: `string`; `block`: `BlockDocumentStatefulBlockBlock`; }>

Host callback that creates Mosaic dashboard state and its document block.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | { `title`: `string`; `tableName`: `string`; `intent?`: `string`; } |
| `params.title` | `string` |
| `params.tableName` | `string` |
| `params.intent?` | `string` |

#### Returns

{ `dashboardId`: `string`; `block`: `BlockDocumentStatefulBlockBlock`; } | `Promise`<{ `dashboardId`: `string`; `block`: `BlockDocumentStatefulBlockBlock`; }>
