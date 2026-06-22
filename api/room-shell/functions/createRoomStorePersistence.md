---
url: 'https://sqlrooms.org/api/room-shell/functions/createRoomStorePersistence.md'
---
[@sqlrooms/room-shell](../index.md) / createRoomStorePersistence

# Function: createRoomStorePersistence()

> **createRoomStorePersistence**<`TState`, `TPersisted`, `TSnapshot`>(`__namedParameters`): [`RoomStorePersistence`](../type-aliases/RoomStorePersistence.md)<`TState`, `TPersisted`, `TSnapshot`>

Creates persistence glue for a Zustand-backed room store.

Use this helper when an app owns durable storage, such as a DuckDB project
table or workspace file, but wants to reuse SQLRooms persistence semantics:
explicit hydration, dirty tracking, autosave scheduling, final flushes, and
saved-snapshot reconciliation after rehydrate.

The helper can be used in two modes:

* As custom Zustand persist `storage`, paired with the same `partialize`
  function passed to Zustand persist.
* As a direct store subscription via `store` or `bindStore()` when the host
  wants to observe room-store changes outside Zustand persist.

## Type Parameters

| Type Parameter | Default type | Description |
| ------ | ------ | ------ |
| `TState` | - | The full room-store state. |
| `TPersisted` | `Partial`<`TState`> | The partial state shape written by Zustand persist. |
| `TSnapshot` | `string` | The durable snapshot shape handled by the adapter. |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | [`CreateRoomStorePersistenceOptions`](../type-aliases/CreateRoomStorePersistenceOptions.md)<`TState`, `TPersisted`, `TSnapshot`> |

## Returns

[`RoomStorePersistence`](../type-aliases/RoomStorePersistence.md)<`TState`, `TPersisted`, `TSnapshot`>

## Example

```ts
const persistence = createRoomStorePersistence<RoomState>({
  partialize: persistHelpers.partialize,
  autosaveDelayMs: 300,
  load: () => loadWorkspaceState(),
  save: (snapshot, metadata) =>
    saveWorkspaceState(snapshot, metadata?.reason),
});

const storeCreator = persistSliceConfigs(
  {
    name: 'workspace-state',
    sliceConfigSchemas,
    storage: persistence.storage,
    partialize: persistence.partialize,
    onRehydrateStorage: persistence.onRehydrateStorage,
  },
  createState,
);
```
