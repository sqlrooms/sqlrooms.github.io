---
url: /api/crdt/type-aliases/CreateCrdtSliceOptions.md
---
[@sqlrooms/crdt](../index.md) / CreateCrdtSliceOptions

# Type Alias: CreateCrdtSliceOptions\<S, TSchema>

> **CreateCrdtSliceOptions**<`S`, `TSchema`> = `object`

## Type Parameters

| Type Parameter |
| ------ |
| `S` |
| `TSchema` *extends* `SchemaType` |

## Properties

### mirrors

> **mirrors**: `Record`<`string`, [`CrdtMirror`](CrdtMirror.md)<`S`, `any`>>

CRDT mirrors keyed by their root key in the Loro document.

Each entry becomes one `loro-mirror` `Mirror` instance on a shared `LoroDoc`.

***

### doc?

> `optional` **doc**: `LoroDoc`

***

### createDoc()?

> `optional` **createDoc**: () => `LoroDoc`

#### Returns

`LoroDoc`

***

### storage?

> `optional` **storage**: [`CrdtDocStorage`](CrdtDocStorage.md)

***

### sync?

> `optional` **sync**: [`CrdtSyncConnector`](CrdtSyncConnector.md)

***

### mirrorOptions?

> `optional` **mirrorOptions**: `Record`<`string`, `unknown`>

***

### onError()?

> `optional` **onError**: (`error`) => `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `error` | `unknown` |

#### Returns

`void`
