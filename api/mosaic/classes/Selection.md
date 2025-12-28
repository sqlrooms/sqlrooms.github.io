---
url: /api/mosaic/classes/Selection.md
---
[@sqlrooms/mosaic](../index.md) / Selection

# Class: Selection

Represents a dynamic set of query filter predicates.

## Extends

* [`Param`](Param.md)<`SelectionClauseArray`>

## Constructors

### Constructor

> **new Selection**(`resolver?`, `include?`): `Selection`

Create a new Selection instance.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `resolver?` | `SelectionResolver` | The selection resolution strategy to apply. |
| `include?` | `Selection`\[] | Upstream selections whose clauses should be included as part of this selection. Any clauses published to these upstream selections will be relayed to this selection. |

#### Returns

`Selection`

#### Overrides

[`Param`](Param.md).[`constructor`](Param.md#constructor)

## Properties

| Property | Modifier | Type | Inherited from |
| ------ | ------ | ------ | ------ |
|  `_value?` | `protected` | `SelectionClauseArray` | [`Param`](Param.md).[`_value`](Param.md#value) |
|  `_resolved` | `public` | `SelectionClauseArray` | - |
|  `_resolver` | `public` | `SelectionResolver` | - |
|  `_relay` | `public` | `Set`<`Selection`> | - |
|  `_callbacks` | `public` | `Map`<`string`, `DispatchEntry`<`SelectionClauseArray`>> | [`Param`](Param.md).[`_callbacks`](Param.md#callbacks) |

## Accessors

### resolver

#### Get Signature

> **get** **resolver**(): `SelectionResolver`

The selection clause resolver.

##### Returns

`SelectionResolver`

***

### single

#### Get Signature

> **get** **single**(): `boolean`

Indicate if this selection has a single resolution strategy.

##### Returns

`boolean`

***

### clauses

#### Get Signature

> **get** **clauses**(): `SelectionClauseArray`

The current array of selection clauses.

##### Returns

`SelectionClauseArray`

***

### active

#### Get Signature

> **get** **active**(): `SelectionClause`

The current active (most recently updated) selection clause.

##### Returns

`SelectionClause`

***

### value

#### Get Signature

> **get** **value**(): `unknown`

The value corresponding to the current active selection clause.
This method ensures compatibility where a normal Param is expected.

##### Returns

`unknown`

#### Overrides

[`Param`](Param.md).[`value`](Param.md#value-2)

## Methods

### value()

> `static` **value**<`T`>(`value`): [`Param`](Param.md)<`T`>

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

[`Param`](Param.md)<`T`>

The new Param instance.

#### Inherited from

[`Param`](Param.md).[`value`](Param.md#value)

***

### array()

> `static` **array**<`T`>(`values`): [`Param`](Param.md)<`T`\[]>

Create a new Param instance over an array of initial values,
which may contain nested Params.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `values` | (`T` | [`Param`](Param.md)<`T`>)\[] | The initial values of the Param. |

#### Returns

[`Param`](Param.md)<`T`\[]>

The new Param instance.

#### Inherited from

[`Param`](Param.md).[`array`](Param.md#array)

***

### intersect()

> `static` **intersect**(`options?`): `Selection`

Create a new Selection instance with an
intersect (conjunction) resolution strategy.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | `SelectionOptions` | The selection options. |

#### Returns

`Selection`

The new Selection instance.

***

### union()

> `static` **union**(`options?`): `Selection`

Create a new Selection instance with a
union (disjunction) resolution strategy.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | `SelectionOptions` | The selection options. |

#### Returns

`Selection`

The new Selection instance.

***

### single()

> `static` **single**(`options?`): `Selection`

Create a new Selection instance with a singular resolution strategy
that keeps only the most recent selection clause.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | `SelectionOptions` | The selection options. |

#### Returns

`Selection`

The new Selection instance.

***

### crossfilter()

> `static` **crossfilter**(`options?`): `Selection`

Create a new Selection instance with a
cross-filtered intersect resolution strategy.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | `Omit`<`SelectionOptions`, `"cross"`> | The selection options. |

#### Returns

`Selection`

The new Selection instance.

***

### clone()

> **clone**(): `Selection`

Create a cloned copy of this Selection instance.

#### Returns

`Selection`

A clone of this selection.

***

### remove()

> **remove**(`source`): `Selection`

Create a clone of this Selection with clauses corresponding
to the provided source removed.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `source` | `ClauseSource` | The clause source to remove. |

#### Returns

`Selection`

A cloned and updated Selection.

***

### valueFor()

> **valueFor**(`source`): `unknown`

The value corresponding to a given source. Returns undefined if
this selection does not include a clause from this source.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `source` | `unknown` | The clause source to look up the value for. |

#### Returns

`unknown`

***

### activate()

> **activate**(`clause`): `void`

Emit an activate event with the given selection clause.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `clause` | `SelectionClause` | The clause representing the potential activation. |

#### Returns

`void`

***

### update()

> **update**(`clause`): `this`

Update the selection with a new selection clause.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `clause` | `SelectionClause` | The selection clause to add. |

#### Returns

`this`

This Selection instance.

#### Overrides

[`Param`](Param.md).[`update`](Param.md#update)

***

### reset()

> **reset**(`clauses?`): `this`

Reset the selection state by removing all provided clauses. If no clause
array is provided as an argument, all current clauses are removed. The
reset method (if defined) is invoked on all corresponding clause sources.
The reset is relayed to downstream selections that include this selection.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `clauses?` | `SelectionClause`\[] | The clauses to remove. If unspecified, all current clauses are removed. |

#### Returns

`this`

This selection instance.

***

### willEmit()

> **willEmit**(`type`, `value`): `unknown`

Upon value-typed updates, sets the current clause list to the
input value and returns the active clause value.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `string` | The event type. |
| `value` | `unknown` | The input event value. |

#### Returns

`unknown`

For value-typed events, returns the active clause
values. Otherwise returns the input event value as-is.

#### Overrides

[`Param`](Param.md).[`willEmit`](Param.md#willemit)

***

### emitQueueFilter()

> **emitQueueFilter**(`type`, `value`): (`value`) => `boolean` | `null`

Upon value-typed updates, returns a dispatch queue filter function.
The return value depends on the selection resolution strategy.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `string` | The event type. |
| `value` | `SelectionClauseArray` | The new event value that will be enqueued. |

#### Returns

(`value`) => `boolean` | `null`

A dispatch queue filter function. For non-value events,
returns a function that always returns null (no filtering).

#### Overrides

[`Param`](Param.md).[`emitQueueFilter`](Param.md#emitqueuefilter)

***

### skip()

> **skip**(`client`, `clause`): `boolean`

Indicates if a selection clause should not be applied to a given client.
The return value depends on the selection resolution strategy.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | [`MosaicClient`](../mosaic/namespaces/vg/classes/MosaicClient.md) | `null` | `undefined` | The client to test. If null or undefined, return false. |
| `clause` | `SelectionClause` | The selection clause. |

#### Returns

`boolean`

True if the client should be skipped, false otherwise.

***

### predicate()

> **predicate**(`client?`, `noSkip?`): `ResolvedPredicate`

Return a selection query predicate for the given client.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client?` | [`MosaicClient`](../mosaic/namespaces/vg/classes/MosaicClient.md) | `null` | The client whose data may be filtered. If null or undefined, return a predicate with all clauses. |
| `noSkip?` | `boolean` | Disable skipping of active cross-filtered sources. If set true, the source of the active clause in a cross-filtered selection will not be skipped. |

#### Returns

`ResolvedPredicate`

The query predicate for filtering client data,
based on the current state of this selection.

***

### addEventListener()

> **addEventListener**(`type`, `callback`): `void`

Add an event listener callback for the provided event type.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `string` | The event type. |
| `callback` | `EventCallback`<`SelectionClauseArray`> | The event handler callback function to add. If the callback has already been added for the event type, this method has no effect. |

#### Returns

`void`

#### Inherited from

[`Param`](Param.md).[`addEventListener`](Param.md#addeventlistener)

***

### removeEventListener()

> **removeEventListener**(`type`, `callback`): `void`

Remove an event listener callback for the provided event type.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `string` | The event type. |
| `callback` | `EventCallback`<`SelectionClauseArray`> | The event handler callback function to remove. |

#### Returns

`void`

#### Inherited from

[`Param`](Param.md).[`removeEventListener`](Param.md#removeeventlistener)

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

[`Param`](Param.md).[`cancel`](Param.md#cancel)

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

[`Param`](Param.md).[`pending`](Param.md#pending)

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
| `value` | `SelectionClauseArray` | The event value. |

#### Returns

`void`

#### Inherited from

[`Param`](Param.md).[`emit`](Param.md#emit)
