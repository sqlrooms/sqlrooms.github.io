---
url: /api/room-shell/functions/createPersistHelpers.md
---
[@sqlrooms/room-shell](../index.md) / createPersistHelpers

# Function: createPersistHelpers()

> **createPersistHelpers**<`T`>(`sliceConfigs`): `object`

Creates partialize and merge functions for Zustand persist middleware.
Automatically handles extracting and merging slice configs.

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `Record`<`string`, `ZodType`<`unknown`, `unknown`, `$ZodTypeInternals`<`unknown`, `unknown`>>> |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `sliceConfigs` | `T` | Map of slice names to their Zod config schemas |

## Returns

`object`

Object with partialize and merge functions

| Name | Type |
| ------ | ------ |
|  `partialize` | (`state`) => `Record`<`string`, `any`> |
|  `merge` | (`persistedState`, `currentState`) => `any` |

## Example

```ts
const {partialize, merge} = createPersistHelpers({
  room: BaseRoomConfig,
  layout: LayoutConfig,
  sqlEditor: SqlEditorSliceConfig,
});

export const {roomStore, useRoomStore} = createRoomStore<RoomState>(
  persist(
    (set, get, store) => ({...}),
    {
      name: 'my-app-state-storage',
      partialize,
      merge,
    },
  ) as StateCreator<RoomState>,
);
```
