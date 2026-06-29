---
url: 'https://sqlrooms.org/api/room-shell/type-aliases/CreateCommandSliceProps.md'
---
[@sqlrooms/room-shell](../index.md) / CreateCommandSliceProps

# Type Alias: CreateCommandSliceProps\<RS>

> **CreateCommandSliceProps**<`RS`> = `object`

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `RS` *extends* [`BaseRoomStoreState`](BaseRoomStoreState.md) | [`BaseRoomStoreState`](BaseRoomStoreState.md) |

## Properties

### middleware?

> `optional` **middleware?**: [`RoomCommandMiddleware`](RoomCommandMiddleware.md)<`RS`>\[]

***

### onCommandInvokeStart?

> `optional` **onCommandInvokeStart?**: (`event`) => `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | [`RoomCommandInvokeStartEvent`](RoomCommandInvokeStartEvent.md)<`RS`> |

#### Returns

`void`

***

### onCommandInvokeSuccess?

> `optional` **onCommandInvokeSuccess?**: (`event`) => `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | [`RoomCommandInvokeSuccessEvent`](RoomCommandInvokeSuccessEvent.md)<`RS`> |

#### Returns

`void`

***

### onCommandInvokeFailure?

> `optional` **onCommandInvokeFailure?**: (`event`) => `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | [`RoomCommandInvokeFailureEvent`](RoomCommandInvokeFailureEvent.md)<`RS`> |

#### Returns

`void`

***

### onCommandInvokeError?

> `optional` **onCommandInvokeError?**: (`event`) => `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | [`RoomCommandInvokeErrorEvent`](RoomCommandInvokeErrorEvent.md)<`RS`> |

#### Returns

`void`
