---
url: /api/room-store/functions/createSlice.md
---
[@sqlrooms/room-store](../index.md) / createSlice

# Function: createSlice()

> **createSlice**<`SliceState`, `StoreState`>(`sliceCreator`): [`StateCreator`](../type-aliases/StateCreator.md)<`SliceState`>

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `SliceState` | - |
| `StoreState` | [`BaseRoomStoreState`](../type-aliases/BaseRoomStoreState.md) & `SliceState` |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `sliceCreator` | (...`args`) => `SliceState` |

## Returns

[`StateCreator`](../type-aliases/StateCreator.md)<`SliceState`>
