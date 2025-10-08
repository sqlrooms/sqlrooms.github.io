---
url: /api/duckdb/functions/useStoreWithDuckDb.md
---
[@sqlrooms/duckdb](../index.md) / useStoreWithDuckDb

# Function: useStoreWithDuckDb()

> **useStoreWithDuckDb**<`T`>(`selector`): `T`

**`Internal`**

Select values from the room store that includes the DuckDB slice.

This is a typed wrapper around `useBaseRoomStore` that narrows the
state to `RoomStateWithDuckDb` so selectors can access `db` safely.

## Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `T` | The selected slice of state returned by the selector |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `selector` | (`state`) => `T` | Function that selects a value from the store state |

## Returns

`T`

The selected value of type `T`
