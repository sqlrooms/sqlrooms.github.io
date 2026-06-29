---
url: 'https://sqlrooms.org/api/room-store/type-aliases/PersistenceControllerState.md'
---
[@sqlrooms/room-store](../index.md) / PersistenceControllerState

# Type Alias: PersistenceControllerState

> **PersistenceControllerState** = `object`

## Properties

### hydrating

> **hydrating**: `boolean`

True while the adapter is loading a snapshot into memory.

***

### dirty

> **dirty**: `boolean`

True when the controller has a snapshot that differs from the saved
snapshot and should be persisted by autosave, `saveNow`, or `flush`.

***

### saving

> **saving**: `boolean`

True while an adapter `save` call is in flight.

***

### error

> **error**: `unknown`

Last adapter load/save error, or null after a successful save/snapshot mark.

***

### lastSaveReason

> **lastSaveReason**: [`PersistenceSaveReason`](PersistenceSaveReason.md) | `null`

Last reason passed to a save or dirty-marking operation.

***

### lastSavedAt

> **lastSavedAt**: `number` | `null`

Unix timestamp, in milliseconds, of the last successful adapter save.

***

### savedSnapshotVersion

> **savedSnapshotVersion**: `number`

Monotonic counter for changes to the saved snapshot.

This is the snapshot the controller currently considers clean: either the
snapshot loaded during hydration, the snapshot passed to `markSnapshotSaved`,
or the latest snapshot successfully written by the adapter.
Consumers can watch this value to know that the clean saved state changed
without reading or comparing the snapshot itself.

***

### pendingSave

> **pendingSave**: `boolean`

True when a save was requested while another save was already in flight.
The controller will coalesce those requests and persist the latest snapshot.
