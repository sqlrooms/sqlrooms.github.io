---
url: >-
  https://sqlrooms.org/api/room-shell/type-aliases/CreateRoomStorePersistenceOptions.md
---
[@sqlrooms/room-shell](../index.md) / CreateRoomStorePersistenceOptions

# Type Alias: CreateRoomStorePersistenceOptions\<TState, TPersisted, TSnapshot>

> **CreateRoomStorePersistenceOptions**<`TState`, `TPersisted`, `TSnapshot`> = [`RoomStorePersistenceSnapshotCodec`](RoomStorePersistenceSnapshotCodec.md)<`TPersisted`, `TSnapshot`> & [`RoomStorePersistenceSnapshotEquivalence`](RoomStorePersistenceSnapshotEquivalence.md)<`TSnapshot`> & `object`

Options for creating controller-backed persistence for a room store.

This helper composes Zustand persist storage, room-store partialization, and
`createPersistenceController()` so apps can share dirty tracking, autosave,
final flush, and hydration saved-snapshot behavior without repeating glue.

## Type Declaration

| Name | Type | Description |
| ------ | ------ | ------ |
| `partialize()` | (`state`) => `TPersisted` | Selects the portion of full room-store state that should be persisted. When using Zustand's `persist` middleware, pass the same function to its `partialize` option so the storage receives the same `TPersisted` shape. |
| `load()` | () => `Promise`<`TSnapshot` | `null`> | Loads the latest durable snapshot, or `null` when none exists. |
| `save()` | (`snapshot`, `metadata?`) => `Promise`<`void`> | Writes a durable snapshot. Metadata carries the save reason, such as `setItem`, `store-change`, `autosave`, or `final-flush`, for adapters that want observability. |
| `remove()?` | (`name`) => `Promise`<`void`> | Removes the durable snapshot when Zustand clears persistence. |
| `store?` | `StoreApi`<`TState`> | Optional Zustand store to observe directly. Provide this when persistence should track store changes independently of Zustand persist's `setItem` calls. |
| `shouldPersistChange?` | [`RoomStorePersistenceChangePredicate`](RoomStorePersistenceChangePredicate.md)<`TState`> | Returns true when a changed partialized snapshot should mark persistence dirty. Use this for host lifecycle guards, such as skipping restore-time updates or failed initialization states. Skipped snapshots are still recorded as observed so they are not saved later by an unrelated state change. |
| `applySnapshot()?` | (`persisted`, `context`) => `void` | `Promise`<`void`> | Applies a deserialized snapshot to runtime state during `hydrate()`. The helper runs this callback while persistence is paused, so restoring state does not mark the controller dirty. |
| `autosaveDelayMs?` | `number` | `null` | Debounce delay for autosaves, or `null` to disable autosave. |
| `version?` | `number` | Version returned from `storage.getItem()` for Zustand persist migrations. |
| `now()?` | () => `number` | Clock used by the underlying controller, mostly useful for tests. |
| `initialState?` | `TState` | Initial state to snapshot when binding `store` immediately. Useful when the host creates persistence inside a Zustand state creator, before `store.getState()` returns the completed initial state. |
| `markInitialSnapshotSaved?` | `boolean` | Whether an initially-bound store snapshot should be treated as already saved. Defaults to `true`, which avoids treating the current runtime state as a user edit immediately after binding. |
| `subscribeReason?` | [`PersistenceSaveReason`](PersistenceSaveReason.md) | Save reason used when `bindStore()` detects a changed partialized snapshot. |

## Type Parameters

| Type Parameter | Default type | Description |
| ------ | ------ | ------ |
| `TState` | - | The full room-store state. |
| `TPersisted` | `Partial`<`TState`> | The partial state shape written by Zustand persist. |
| `TSnapshot` | `string` | The durable snapshot shape handled by the adapter. |
