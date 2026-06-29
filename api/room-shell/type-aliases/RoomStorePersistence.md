---
url: 'https://sqlrooms.org/api/room-shell/type-aliases/RoomStorePersistence.md'
---
[@sqlrooms/room-shell](../index.md) / RoomStorePersistence

# Type Alias: RoomStorePersistence\<TState, TPersisted, TSnapshot>

> **RoomStorePersistence**<`TState`, `TPersisted`, `TSnapshot`> = `object`

Controller-backed persistence utilities for a room store.

`storage` is typed as `PersistStorage<TPersisted>` because Zustand persist
calls custom storage with the already-partialized state shape, not the full
runtime store state.

## Type Parameters

| Type Parameter |
| ------ |
| `TState` |
| `TPersisted` |
| `TSnapshot` |

## Properties

### controller

> **controller**: [`PersistenceController`](PersistenceController.md)<`TSnapshot`>

Low-level persistence controller for save state, dirty tracking, and flushes.

***

### storage

> **storage**: `PersistStorage`<`TPersisted`>

Zustand persist storage backed by the controller and adapter callbacks.

***

### partialize

> **partialize**: (`state`) => `TPersisted`

The partialization function passed into the helper.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `state` | `TState` |

#### Returns

`TPersisted`

***

### hydrate

> **hydrate**: () => `Promise`<`TPersisted` | `null`>

Hydrates through the controller, deserializes the snapshot, and optionally
applies it to the bound store while persistence is paused.

#### Returns

`Promise`<`TPersisted` | `null`>

***

### flush

> **flush**: (`reason?`) => `Promise`<`void`>

Flushes pending dirty state immediately.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `reason?` | [`PersistenceSaveReason`](PersistenceSaveReason.md) |

#### Returns

`Promise`<`void`>

***

### markStateSnapshotSaved

> **markStateSnapshotSaved**: (`state`) => `void`

Marks the partialized snapshot for a full store state as saved.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `state` | `TState` |

#### Returns

`void`

***

### onRehydrateStorage

> **onRehydrateStorage**: () => (`state?`, `error?`) => `void`

Convenience callback for Zustand persist's `onRehydrateStorage` option.

Use this after Zustand has merged persisted state into the full runtime
store, so the controller treats that merged runtime shape as clean.

#### Returns

(`state?`, `error?`) => `void`

***

### bindStore

> **bindStore**: (`store`, `options?`) => () => `void`

Subscribes to a Zustand store and marks changed partialized snapshots dirty.

Returns the unsubscribe function from `store.subscribe()`.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `store` | `StoreApi`<`TState`> |
| `options?` | `object` & [`RoomStorePersistenceSnapshotEquivalence`](RoomStorePersistenceSnapshotEquivalence.md)<`TSnapshot`> |

#### Returns

() => `void`
