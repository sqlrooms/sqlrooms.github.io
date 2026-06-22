---
url: 'https://sqlrooms.org/api/room-shell/functions/persistSliceConfigs.md'
---
[@sqlrooms/room-shell](../index.md) / persistSliceConfigs

# Function: persistSliceConfigs()

> **persistSliceConfigs**<`S`, `TSliceConfigs`, `PersistedState`>(`options`, `stateCreator`): `StateCreator`<`S`>

Wraps a state creator with Zustand's persist middleware and automatically
handles slice config serialization/deserialization using Zod schemas.

This helper combines persist functionality with automatic `partialize` and `merge`
functions generated from your slice config schemas, eliminating manual type casting.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `S` | - |
| `TSliceConfigs` *extends* `Record`<`string`, `ZodType`<`unknown`, `unknown`, `$ZodTypeInternals`<`unknown`, `unknown`>>> | `Record`<`string`, `ZodType`<`unknown`, `unknown`, `$ZodTypeInternals`<`unknown`, `unknown`>>> |
| `PersistedState` | `PersistedSliceConfigs`<`TSliceConfigs`> |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | `object` & `Omit`<`PersistOptions`<`S`, `PersistedState`, `unknown`>, `"partialize"` | `"merge"`> | Persist configuration object |
| `stateCreator` | `StateCreator`<`S`> | Zustand state creator function |

## Returns

`StateCreator`<`S`>

Properly typed StateCreator with persist middleware applied

## See

[Zustand persist middleware docs](https://zustand.docs.pmnd.rs/middlewares/persist)

## Examples

Basic usage:

```ts
export const {roomStore, useRoomStore} = createRoomStore<RoomState>(
  persistSliceConfigs(
    {
      name: 'my-app-state-storage',
      sliceConfigSchemas: {
        room: BaseRoomConfig,
        layout: LayoutConfig,
        sqlEditor: SqlEditorSliceConfig,
      },
    },
    (set, get, store) => ({
      ...createRoomSlice()(set, get, store),
      ...createLayoutSlice({...})(set, get, store),
    })
  )
);
```

With custom partialize/merge for additional state:

```ts
export const {roomStore, useRoomStore} = createRoomStore<RoomState>(
  persistSliceConfigs(
    {
      name: 'my-app-state-storage',
      sliceConfigSchemas: {
        room: BaseRoomConfig,
        layout: LayoutConfig,
      },
      partialize: (state) => ({
        apiKey: state.apiKey, // Persist additional field
        ...createPersistHelpers({room: BaseRoomConfig, layout: LayoutConfig}).partialize(state),
      }),
      merge: (persisted, current) => ({
        ...createPersistHelpers({room: BaseRoomConfig, layout: LayoutConfig}).merge(persisted, current),
        apiKey: persisted.apiKey, // Restore additional field
      }),
    },
    (set, get, store) => ({...})
  )
);
```
