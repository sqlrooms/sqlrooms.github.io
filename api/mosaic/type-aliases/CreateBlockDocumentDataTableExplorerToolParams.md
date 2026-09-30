---
url: >-
  https://sqlrooms.org/api/mosaic/type-aliases/CreateBlockDocumentDataTableExplorerToolParams.md
---
[@sqlrooms/mosaic](../index.md) / CreateBlockDocumentDataTableExplorerToolParams

# Type Alias: CreateBlockDocumentDataTableExplorerToolParams

> **CreateBlockDocumentDataTableExplorerToolParams** = `object`

Parameters for creating a Mosaic data-table explorer block-document tool.

## Properties

### databaseAdapter

> **databaseAdapter**: [`DatabaseAiAdapter`](DatabaseAiAdapter.md)

Database adapter for table validation and column information.

***

### blockDocumentAdapter

> **blockDocumentAdapter**: `BlockDocumentAiAdapter`

Adapter for block document operations.

***

### blockDocumentId

> **blockDocumentId**: `string`

ID of the block document where data-table explorer blocks will be added.

***

### addDataTableExplorerBlock?

> `optional` **addDataTableExplorerBlock?**: (`params`) => `Promise`<`unknown`>

Host callback that performs the full durable block creation.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | { `title`: `string`; `tableName`: `string`; `intent?`: `string`; } |
| `params.title` | `string` |
| `params.tableName` | `string` |
| `params.intent?` | `string` |

#### Returns

`Promise`<`unknown`>

***

### createDataTableExplorerBlock

> **createDataTableExplorerBlock**: (`params`) => `BlockDocumentStatefulBlockBlock` | `Promise`<`BlockDocumentStatefulBlockBlock`>

Host callback that creates the data-table explorer stateful block.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | { `title`: `string`; `tableName`: `string`; `intent?`: `string`; } |
| `params.title` | `string` |
| `params.tableName` | `string` |
| `params.intent?` | `string` |

#### Returns

`BlockDocumentStatefulBlockBlock` | `Promise`<`BlockDocumentStatefulBlockBlock`>
