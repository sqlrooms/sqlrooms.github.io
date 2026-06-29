---
url: 'https://sqlrooms.org/api/ui/classes/ErrorBoundary.md'
---
[@sqlrooms/ui](../index.md) / ErrorBoundary

# Class: ErrorBoundary

## Extends

* `Component`<`Props`, `State`>

## Constructors

### Constructor

> **new ErrorBoundary**(`props`): `ErrorBoundary`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `props` | `Props` |

#### Returns

`ErrorBoundary`

#### Inherited from

`Component<Props, State>.constructor`

### Constructor

> **new ErrorBoundary**(`props`, `context`): `ErrorBoundary`

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | `Props` | - |
| `context` | `any` | value of the parent [Context](https://react.dev/reference/react/Component#context) specified in `contextType`. |

#### Returns

`ErrorBoundary`

#### Inherited from

`Component<Props, State>.constructor`

## Properties

| Property | Modifier | Type | Overrides |
| ------ | ------ | ------ | ------ |
|  `state` | `public` | `State` | `Component.state` |

## Methods

### getDerivedStateFromError()

> `static` **getDerivedStateFromError**(`error`): `State`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `error` | `Error` |

#### Returns

`State`

***

### componentDidCatch()

> **componentDidCatch**(`error`, `errorInfo`): `void`

Catches exceptions generated in descendant components. Unhandled exceptions will cause
the entire component tree to unmount.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `error` | `Error` |
| `errorInfo` | `ErrorInfo` |

#### Returns

`void`

#### Overrides

`Component.componentDidCatch`

***

### render()

> **render**(): `string` | `number` | `bigint` | `boolean` | `Iterable`<`ReactNode`, `any`, `any`> | `Promise`<`AwaitedReactNode`> | `Element` | `null` | `undefined`

#### Returns

`string` | `number` | `bigint` | `boolean` | `Iterable`<`ReactNode`, `any`, `any`> | `Promise`<`AwaitedReactNode`> | `Element` | `null` | `undefined`

#### Overrides

`Component.render`
