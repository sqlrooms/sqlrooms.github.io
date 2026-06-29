---
url: 'https://sqlrooms.org/api/room-shell/type-aliases/RoomShellSliceState.md'
---
[@sqlrooms/room-shell](../index.md) / RoomShellSliceState

# Type Alias: RoomShellSliceState

> **RoomShellSliceState** = `object` & [`DbSliceState`](DbSliceState.md) & `LayoutSliceState` & [`CommandSliceState`](CommandSliceState.md)

## Type Declaration

| Name | Type |
| ------ | ------ |
| `initialize()?` | () => `Promise`<`void`> |
| `room` | [`BaseRoomStoreState`](BaseRoomStoreState.md)\[`"room"`] & `object` |
