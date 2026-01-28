---
url: /api/room-store/functions/createRoomStoreCreator.md
---
[@sqlrooms/room-store](../index.md) / createRoomStoreCreator

# Function: createRoomStoreCreator()

> **createRoomStoreCreator**<`RS`>(): <`TFactory`>(`stateCreatorFactory`) => `object`

Factory to create a room store creator with custom params.

## Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `RS` *extends* [`BaseRoomStoreState`](../type-aliases/BaseRoomStoreState.md) | Room state type |

## Returns

An object with createRoomStore(params) and useRoomStore(selector)

> <`TFactory`>(`stateCreatorFactory`): `object`

### Type Parameters

| Type Parameter |
| ------ |
| `TFactory` *extends* (...`args`) => [`StateCreator`](../type-aliases/StateCreator.md)<`RS`> |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `stateCreatorFactory` | `TFactory` |

### Returns

`object`

| Name | Type |
| ------ | ------ |
| `createRoomStore()` | (...`args`) => [`StoreApi`](../interfaces/StoreApi.md)<`RS`> |
| `useRoomStore()` | <`T`>(`selector`) => `T` |

## Example

```ts
const {createRoomStore} = createRoomStoreCreator<MyRoomState>()(
  (projectId: string) => createMyRoomState(projectId),
);
createRoomStore('project-a', {storeKey: 'project-a'});
```
