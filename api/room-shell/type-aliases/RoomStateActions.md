---
url: /api/room-shell/type-aliases/RoomStateActions.md
---
[@sqlrooms/room-shell](../index.md) / RoomStateActions

# Type Alias: RoomStateActions\<PC>

> **RoomStateActions**<`PC`>: `object`

## Type Parameters

| Type Parameter |
| ------ |
| `PC` |

## Type declaration

| Name | Type | Description |
| ------ | ------ | ------ |
|  `initialize` | () => `Promise`<`void`> | - |
|  `setRoomConfig` | (`config`) => `void` | Set the room config. |
|  `setLastSavedConfig` | (`config`) => `void` | Set the last saved room config. This can be used to check if the room has unsaved changes. |
|  `hasUnsavedChanges()` |  | - |
|  `onSaveConfig`? | (`config`) => `Promise`<`void`> | `undefined` | Called when the project config gets changed. Can be used for saving. To be overridden by the custom project state. |
|  `setTaskProgress` | (`id`, `taskProgress`) => `void` | - |
|  `getLoadingProgress` | () => [`TaskProgress`](TaskProgress.md) | `undefined` | - |
