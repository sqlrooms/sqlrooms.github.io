---
url: /api/room-store/functions/createRoomStoreCreator.md
---
[@sqlrooms/room-store](../index.md) / createRoomStoreCreator

# Function: createRoomStoreCreator()

> **createRoomStoreCreator**<`TState`>(): <`TFactory`>(`stateCreatorFactory`) => `object`

Factory to create a room store creator with custom params.

## Type Parameters

| Type Parameter |
| ------ |
| `TState` *extends* [`RoomState`](../type-aliases/RoomState.md)<`any`> |

## Returns

`Function`

An object with createRoomStore(params) and useRoomStore(selector)

### Type Parameters

| Type Parameter |
| ------ |
| `TFactory` *extends* (...`args`) => [`StateCreator`](../type-aliases/StateCreator.md)<`TState`> |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `stateCreatorFactory` | `TFactory` |

### Returns

`object`

| Name | Type |
| ------ | ------ |
|  `createRoomStore` | (...`args`) => [`StoreApi`](../interfaces/StoreApi.md)<`TState`> |
|  `useRoomStore` | <`T`>(`selector`) => `T` |
