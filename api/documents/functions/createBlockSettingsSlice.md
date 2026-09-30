---
url: https://sqlrooms.org/api/documents/functions/createBlockSettingsSlice.md
---
[@sqlrooms/documents](../index.md) / createBlockSettingsSlice

# Function: createBlockSettingsSlice()

> **createBlockSettingsSlice**<`TRoomState`>(): `StateCreator`<[`BlockSettingsSliceState`](../type-aliases/BlockSettingsSliceState.md)>

Creates a Zustand slice for managing block selection state.

This slice handles:

* Selecting/deselecting blocks
* Querying selection state

## Type Parameters

| Type Parameter |
| ------ |
| `TRoomState` *extends* `BaseRoomStoreState` & [`BlockSettingsSliceState`](../type-aliases/BlockSettingsSliceState.md) |

## Returns

`StateCreator`<[`BlockSettingsSliceState`](../type-aliases/BlockSettingsSliceState.md)>

Zustand slice creator function
