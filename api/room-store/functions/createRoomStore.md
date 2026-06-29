---
url: 'https://sqlrooms.org/api/room-store/functions/createRoomStore.md'
---
[@sqlrooms/room-store](../index.md) / createRoomStore

# Function: createRoomStore()

> **createRoomStore**<`RS`>(`stateCreator`): `object`

Create a room store with custom fields and methods

## Type Parameters

| Type Parameter |
| ------ |
| `RS` *extends* [`BaseRoomStoreState`](../type-aliases/BaseRoomStoreState.md) |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `stateCreator` | `StateCreator`<`RS`> |

## Returns

`object`

The room store and a hook for accessing the room store

| Name | Type |
| ------ | ------ |
| `roomStore` | `StoreApi`<[`BaseRoomStoreState`](../type-aliases/BaseRoomStoreState.md) & `RS`> |
| `useRoomStore` | [`UseRoomStore`](../type-aliases/UseRoomStore.md)<`RS`> |
