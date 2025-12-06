---
url: /api/room-shell/interfaces/StoreApi.md
---
[@sqlrooms/room-shell](../index.md) / StoreApi

# Interface: StoreApi\<T>

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Properties

### setState()

> **setState**: (`partial`, `replace`?) => `void`(`state`, `replace`) => `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `partial` | `T` | `Partial`<`T`> | (`state`) => `T` | `Partial`<`T`> |
| `replace`? | `false` |

#### Returns

`void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `state` | `T` | (`state`) => `T` |
| `replace` | `true` |

#### Returns

`void`

***

### getState()

> **getState**: () => `T`

#### Returns

`T`

***

### getInitialState()

> **getInitialState**: () => `T`

#### Returns

`T`

***

### subscribe()

> **subscribe**: (`listener`) => () => `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `listener` | (`state`, `prevState`) => `void` |

#### Returns

`Function`

##### Returns

`void`
