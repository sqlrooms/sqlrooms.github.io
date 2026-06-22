---
url: 'https://sqlrooms.org/api/room-store/type-aliases/PersistenceController.md'
---
[@sqlrooms/room-store](../index.md) / PersistenceController

# Type Alias: PersistenceController\<TSnapshot>

> **PersistenceController**<`TSnapshot`> = `object`

## Type Parameters

| Type Parameter |
| ------ |
| `TSnapshot` |

## Properties

### hydrate

> **hydrate**: () => `Promise`<`TSnapshot` | `null`>

Loads the adapter snapshot and treats it as the saved snapshot.

Hydration does not mark the controller dirty. Hosts should merge the loaded
snapshot into their runtime store, then call `markSnapshotSaved` if the merged
runtime shape differs from the raw loaded snapshot.

#### Returns

`Promise`<`TSnapshot` | `null`>

***

### markSnapshotSaved

> **markSnapshotSaved**: (`snapshot`) => `void`

Marks a snapshot as clean without writing it.

Use this after hydration or other trusted reconciliation work once runtime
state reflects durable storage and should not be interpreted as a user edit.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `snapshot` | `TSnapshot` | `null` |

#### Returns

`void`

***

### setSnapshot

> **setSnapshot**: (`snapshot`, `reason?`) => `void`

Provides the latest snapshot to save and marks it dirty when it differs
from the saved snapshot.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `snapshot` | `TSnapshot` |
| `reason?` | [`PersistenceSaveReason`](PersistenceSaveReason.md) |

#### Returns

`void`

***

### markDirty

> **markDirty**: (`reason?`) => `void`

Marks the current `getSnapshot` result dirty without providing it eagerly.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `reason?` | [`PersistenceSaveReason`](PersistenceSaveReason.md) |

#### Returns

`void`

***

### saveNow

> **saveNow**: (`reason?`) => `Promise`<`void`>

Saves the dirty snapshot immediately, bypassing autosave delay.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `reason?` | [`PersistenceSaveReason`](PersistenceSaveReason.md) |

#### Returns

`Promise`<`void`>

***

### flush

> **flush**: (`reason?`) => `Promise`<`void`>

Flushes pending dirty state before unload, close, or project switch.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `reason?` | [`PersistenceSaveReason`](PersistenceSaveReason.md) |

#### Returns

`Promise`<`void`>

***

### pause

> **pause**: <`TResult`>(`fn`) => `Promise`<`TResult`>

Runs work while dirty marking and snapshot updates are ignored.

Use this around hydration or programmatic restore flows that should not be
treated as user edits.

#### Type Parameters

| Type Parameter |
| ------ |
| `TResult` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `fn` | () => `TResult` | `Promise`<`TResult`> |

#### Returns

`Promise`<`TResult`>

***

### getState

> **getState**: () => [`PersistenceControllerState`](PersistenceControllerState.md)

Returns a copy of the current observable controller state.

#### Returns

[`PersistenceControllerState`](PersistenceControllerState.md)

***

### subscribe

> **subscribe**: (`listener`) => () => `void`

Subscribes to observable controller state changes.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `listener` | [`PersistenceControllerListener`](PersistenceControllerListener.md) |

#### Returns

() => `void`
