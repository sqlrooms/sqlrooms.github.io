---
url: https://sqlrooms.org/api/documents/classes/SettingsErrorBoundary.md
---
[@sqlrooms/documents](../index.md) / SettingsErrorBoundary

# Class: SettingsErrorBoundary

Error boundary for settings components.
Catches and displays errors that occur in settings panels.

## Extends

* `Component`<`SettingsErrorBoundaryProps`, `SettingsErrorBoundaryState`>

## Constructors

### Constructor

> **new SettingsErrorBoundary**(`props`): `SettingsErrorBoundary`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `props` | `SettingsErrorBoundaryProps` |

#### Returns

`SettingsErrorBoundary`

#### Overrides

`Component< SettingsErrorBoundaryProps, SettingsErrorBoundaryState >.constructor`

## Methods

### getDerivedStateFromError()

> `static` **getDerivedStateFromError**(`error`): `SettingsErrorBoundaryState`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `error` | `Error` |

#### Returns

`SettingsErrorBoundaryState`

***

### render()

> **render**(): `string` | `number` | `bigint` | `boolean` | `Iterable`<`ReactNode`, `any`, `any`> | `Promise`<`AwaitedReactNode`> | `Element` | `null` | `undefined`

#### Returns

`string` | `number` | `bigint` | `boolean` | `Iterable`<`ReactNode`, `any`, `any`> | `Promise`<`AwaitedReactNode`> | `Element` | `null` | `undefined`

#### Overrides

`Component.render`
