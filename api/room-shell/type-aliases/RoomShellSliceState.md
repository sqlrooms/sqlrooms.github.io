---
url: /api/room-shell/type-aliases/RoomShellSliceState.md
---
[@sqlrooms/room-shell](../index.md) / RoomShellSliceState

# Type Alias: RoomShellSliceState

> **RoomShellSliceState** = `object` & `DuckDbSliceState` & `LayoutSliceState`

## Type Declaration

| Name | Type |
| ------ | ------ |
| `initialize()?` | () => `Promise`<`void`> |
| `room` | [`BaseRoomStoreState`](BaseRoomStoreState.md)\[`"room"`] & `object` |
