---
url: /api/crdt/type-aliases/CrdtSyncConnector.md
---
[@sqlrooms/crdt](../index.md) / CrdtSyncConnector

# Type Alias: CrdtSyncConnector

> **CrdtSyncConnector** = `object`

## Properties

### connect()

> **connect**: (`doc`) => `Promise`<`void`>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `doc` | `LoroDoc` |

#### Returns

`Promise`<`void`>

***

### disconnect()?

> `optional` **disconnect**: () => `Promise`<`void`>

#### Returns

`Promise`<`void`>

***

### setStatusListener()?

> `optional` **setStatusListener**: (`listener`) => `void`

Optional hook for connectors to report connection status into the CRDT slice.

`createCrdtSlice` will wire this automatically to `crdt.setConnectionStatus`,
so consumer apps don't need to pass `onStatus` callbacks manually.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `listener` | (`status`) => `void` |

#### Returns

`void`
