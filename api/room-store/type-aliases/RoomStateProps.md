---
url: /api/room-store/type-aliases/RoomStateProps.md
---
[@sqlrooms/room-store](../index.md) / RoomStateProps

# Type Alias: RoomStateProps\<PC>

> **RoomStateProps**<`PC`>: `object`

## Type Parameters

| Type Parameter |
| ------ |
| `PC` |

## Type declaration

| Name | Type |
| ------ | ------ |
|  `initialized` | `boolean` |
|  `lastSavedConfig` | `PC` | `undefined` |
|  `tasksProgress` | `Record`<`string`, [`TaskProgress`](TaskProgress.md)> |
|  `captureException` | (`exception`, `captureContext`?) => `void` |
