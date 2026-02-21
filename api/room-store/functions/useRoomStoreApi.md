---
url: /api/room-store/functions/useRoomStoreApi.md
---
[@sqlrooms/room-store](../index.md) / useRoomStoreApi

# Function: useRoomStoreApi()

> **useRoomStoreApi**<`RS`>(): [`StoreApi`](../interfaces/StoreApi.md)<`RS`>

Returns the raw Zustand store API from room context for imperative usage.

This hook is non-reactive: it does not subscribe to store updates and does not
trigger rerenders for normal state changes. For reactive UI reads, prefer
`useBaseRoomStore` / `useRoomStore` selectors.

## Type Parameters

| Type Parameter |
| ------ |
| `RS` *extends* [`BaseRoomStoreState`](../type-aliases/BaseRoomStoreState.md) |

## Returns

[`StoreApi`](../interfaces/StoreApi.md)<`RS`>
