---
url: /api/room-store/type-aliases/BaseRoomStoreState.md
---
[@sqlrooms/room-store](../index.md) / BaseRoomStoreState

# Type Alias: BaseRoomStoreState

> **BaseRoomStoreState**: `object`

## Type declaration

| Name | Type |
| ------ | ------ |
|  `room` | { `initialized`: `boolean`; `initialize`: () => `Promise`<`void`>; `destroy`: () => `Promise`<`void`>; `captureException`: (`exception`, `captureContext`?) => `void`; } |
