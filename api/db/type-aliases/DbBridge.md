---
url: 'https://sqlrooms.org/api/db/type-aliases/DbBridge.md'
---
[@sqlrooms/db](../index.md) / DbBridge

# Type Alias: DbBridge

> **DbBridge** = `object`

Bridge interface for delegated (typically backend) execution.

Bridges are used when a connection cannot run directly in the current runtime.

## Properties

### id

> **id**: `string`

***

### runtimeSupport

> **runtimeSupport**: [`RuntimeSupport`](RuntimeSupport.md)

***

### testConnection

> **testConnection**: (`connectionId`) => `Promise`<`boolean`>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `connectionId` | `string` |

#### Returns

`Promise`<`boolean`>

***

### listCatalog

> **listCatalog**: (`connectionId`) => `Promise`<{ `databases`: [`CatalogDatabase`](CatalogDatabase.md)\[]; `schemas`: [`CatalogSchema`](CatalogSchema.md)\[]; `tables`: [`CatalogTable`](CatalogTable.md)\[]; }>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `connectionId` | `string` |

#### Returns

`Promise`<{ `databases`: [`CatalogDatabase`](CatalogDatabase.md)\[]; `schemas`: [`CatalogSchema`](CatalogSchema.md)\[]; `tables`: [`CatalogTable`](CatalogTable.md)\[]; }>

***

### executeQuery

> **executeQuery**: (`args`) => `Promise`<{ `jsonData?`: `Iterable`<`Record`<`string`, `unknown`>>; }>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | { `connectionId`: `string`; `sql`: `string`; `queryType`: `"exec"` | `"json"`; `signal?`: `AbortSignal`; } |
| `args.connectionId` | `string` |
| `args.sql` | `string` |
| `args.queryType` | `"exec"` | `"json"` |
| `args.signal?` | `AbortSignal` |

#### Returns

`Promise`<{ `jsonData?`: `Iterable`<`Record`<`string`, `unknown`>>; }>

***

### fetchArrow

> **fetchArrow**: (`args`) => `Promise`<`arrow.Table`>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | { `connectionId`: `string`; `sql`: `string`; `signal?`: `AbortSignal`; } |
| `args.connectionId` | `string` |
| `args.sql` | `string` |
| `args.signal?` | `AbortSignal` |

#### Returns

`Promise`<`arrow.Table`>

***

### fetchArrowStream?

> `optional` **fetchArrowStream?**: (`args`) => `AsyncIterable`<`Uint8Array`>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | { `connectionId`: `string`; `sql`: `string`; `signal?`: `AbortSignal`; `queryId?`: `string`; `chunkRows?`: `number`; } |
| `args.connectionId` | `string` |
| `args.sql` | `string` |
| `args.signal?` | `AbortSignal` |
| `args.queryId?` | `string` |
| `args.chunkRows?` | `number` |

#### Returns

`AsyncIterable`<`Uint8Array`>

***

### cancelQuery

> **cancelQuery**: (`queryId`) => `Promise`<`boolean`>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `queryId` | `string` |

#### Returns

`Promise`<`boolean`>
