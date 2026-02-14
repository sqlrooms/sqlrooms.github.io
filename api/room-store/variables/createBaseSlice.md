---
url: /api/room-store/variables/createBaseSlice.md
---
[@sqlrooms/room-store](../index.md) / createBaseSlice

# ~~Variable: createBaseSlice()~~

> `const` **createBaseSlice**: <`SliceState`, `StoreState`>(`sliceCreator`) => [`StateCreator`](../type-aliases/StateCreator.md)<`SliceState`> = `createSlice`

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

## Deprecated

Use createSlice instead
