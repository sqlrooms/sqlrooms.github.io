---
url: /api/mosaic/classes/Param.md
---
[@sqlrooms/mosaic](../index.md) / Param

# Class: Param\<T>

Represents a dynamic parameter that dispatches updates
upon parameter changes.

## Extends

* `AsyncDispatch`<`T`>

## Extended by

* [`Selection`](Selection.md)

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Constructors

### Constructor

> **new Param**<`T`>(`value?`): `Param`<`T`>

Create a new Param instance.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value?` | `T` | The initial value of the Param. |

#### Returns

`Param`<`T`>

#### Overrides

`AsyncDispatch<T>.constructor`

## Properties

| Property | Modifier | Type | Inherited from |
| ------ | ------ | ------ | ------ |
|  `_value?` | `protected` | `T` | - |
|  `_callbacks` | `public` | `Map`<`string`, `DispatchEntry`<`T`>> | `AsyncDispatch._callbacks` |

## Accessors

### value

#### Get Signature

> **get** **value**(): `T` | `undefined`

The current value of the Param.

##### Returns

`T` | `undefined`

## Methods

### value()

> `static` **value**<`T`>(`value`): `Param`<`T`>

Create a new Param instance with the given initial value.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `T` | The initial value of the Param. |

#### Returns

`Param`<`T`>

The new Param instance.

***

### array()

> `static` **array**<`T`>(`values`): `Param`<`T`\[]>

Create a new Param instance over an array of initial values,
which may contain nested Params.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `values` | (`T` | `Param`<`T`>)\[] | The initial values of the Param. |

#### Returns

`Param`<`T`\[]>

The new Param instance.

***

### update()

> **update**(`value`, `options?`): `this`

Update the Param value

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `T` | The new value of the Param. |
| `options?` | { `force?`: `boolean`; } | The update options. |
| `options.force?` | `boolean` | A boolean flag indicating if the Param should emit a 'value' event even if the internal value is unchanged. |

#### Returns

`this`

This Param instance.

***

### willEmit()

> **willEmit**(`type`, `value`): `T`

Upon value-typed updates, sets the current value to the input value
immediately prior to the event value being emitted to listeners.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `string` | The event type. |
| `value` | `T` | The input event value. |

#### Returns

`T`

The input event value.

#### Overrides

`AsyncDispatch.willEmit`

***

### addEventListener()

> **addEventListener**(`type`, `callback`): `void`

Add an event listener callback for the provided event type.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `string` | The event type. |
| `callback` | `EventCallback`<`T`> | The event handler callback function to add. If the callback has already been added for the event type, this method has no effect. |

#### Returns

`void`

#### Inherited from

`AsyncDispatch.addEventListener`

***

### removeEventListener()

> **removeEventListener**(`type`, `callback`): `void`

Remove an event listener callback for the provided event type.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `string` | The event type. |
| `callback` | `EventCallback`<`T`> | The event handler callback function to remove. |

#### Returns

`void`

#### Inherited from

`AsyncDispatch.removeEventListener`

***

### emitQueueFilter()

> **emitQueueFilter**(`_type`, `_value`): (`value`) => `boolean` | `null` | `null`

Lifecycle method that returns a filter function for updating the
queue of unemitted event values prior to enqueueing a new value.
This default implementation simply returns null, indicating that
unknown other unemitted event values should be dropped (that is, all
queued events are filtered).

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `_type` | `string` |
| `_value` | `unknown` |

#### Returns

(`value`) => `boolean` | `null` | `null`

A dispatch queue filter
function, or null if all unemitted event values should be filtered.

#### Inherited from

`AsyncDispatch.emitQueueFilter`

***

### cancel()

> **cancel**(`type`): `void`

Cancel all unemitted event values for the given event type.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `string` | The event type. |

#### Returns

`void`

#### Inherited from

`AsyncDispatch.cancel`

***

### pending()

> **pending**(`type`): `Promise`<`void`>

Returns a promise that resolves when unknown pending updates complete for
the event of the given type currently being processed. The Promise will
resolve immediately if the queue for the given event type is empty.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `string` | The event type to wait for. |

#### Returns

`Promise`<`void`>

A pending event promise.

#### Inherited from

`AsyncDispatch.pending`

***

### emit()

> **emit**(`type`, `value`): `void`

Emit an event value to listeners for the given event type.
If a previous emit has not yet resolved, the event value
will be queued to be emitted later.
The actual event value given to listeners will be the result
of passing the input value through the emitValue() method.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `string` | The event type. |
| `value` | `T` | The event value. |

#### Returns

`void`

#### Inherited from

`AsyncDispatch.emit`
