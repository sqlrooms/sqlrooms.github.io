---
url: 'https://sqlrooms.org/api/mosaic/classes/MosaicDashboardPanelErrorBoundary.md'
---
[@sqlrooms/mosaic](../index.md) / MosaicDashboardPanelErrorBoundary

# Class: MosaicDashboardPanelErrorBoundary

## Extends

* `Component`<`Props`, `State`>

## Constructors

### Constructor

> **new MosaicDashboardPanelErrorBoundary**(`props`): `MosaicDashboardPanelErrorBoundary`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `props` | `Props` |

#### Returns

`MosaicDashboardPanelErrorBoundary`

#### Overrides

`Component<Props, State>.constructor`

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
