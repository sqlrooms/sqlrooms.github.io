---
url: 'https://sqlrooms.org/api/cells/functions/useCellsStore.md'
---
[@sqlrooms/cells](../index.md) / useCellsStore

# Function: useCellsStore()

> **useCellsStore**<`T`>(`selector`): `T`

Hook to access the cells slice from the room store.
This works in any app that includes createCellsSlice in its store.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `selector` | (`state`) => `T` |

## Returns

`T`
