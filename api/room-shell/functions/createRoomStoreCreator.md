---
url: 'https://sqlrooms.org/api/room-shell/functions/createRoomStoreCreator.md'
---
[@sqlrooms/room-shell](../index.md) / createRoomStoreCreator

# Function: createRoomStoreCreator()

> **createRoomStoreCreator**<`RS`>(): <`TFactory`>(`stateCreatorFactory`) => `object`

Factory to create a room store creator with custom params.

## Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `RS` *extends* [`BaseRoomStoreState`](../type-aliases/BaseRoomStoreState.md) | Room state type |

## Returns

An object with createRoomStore(params) and useRoomStore(selector)

<`TFactory`>(`stateCreatorFactory`) => `object`

## Example

```ts
const {createRoomStore} = createRoomStoreCreator<MyRoomState>()(
  (projectId: string) => createMyRoomState(projectId),
);
createRoomStore('project-a', {storeKey: 'project-a'});
```
