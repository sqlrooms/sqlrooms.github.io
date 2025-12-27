---
url: /api/room-store/functions/persistSliceConfigs.md
---
[@sqlrooms/room-store](../index.md) / persistSliceConfigs

# Function: persistSliceConfigs()

> **persistSliceConfigs**<`S`>(`options`, `stateCreator`): [`StateCreator`](../type-aliases/StateCreator.md)<`S`>

Wraps a state creator with Zustand's persist middleware and automatically
handles slice config serialization/deserialization using Zod schemas.

This helper combines persist functionality with automatic `partialize` and `merge`
functions generated from your slice config schemas, eliminating manual type casting.

## Type Parameters

| Type Parameter |
| ------ |
| `S` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | `object` & `Omit`<`PersistOptions`<`S`, `S`, `unknown`>, `"partialize"` | `"merge"`> | Persist configuration object |
| `stateCreator` | [`StateCreator`](../type-aliases/StateCreator.md)<`S`> | Zustand state creator function |

## Returns

[`StateCreator`](../type-aliases/StateCreator.md)<`S`>

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
