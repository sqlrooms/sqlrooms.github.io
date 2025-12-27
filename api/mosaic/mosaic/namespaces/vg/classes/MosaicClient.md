---
url: /api/mosaic/mosaic/namespaces/vg/classes/MosaicClient.md
---
[@sqlrooms/mosaic](../../../../index.md) / [vg](../index.md) / MosaicClient

# Class: MosaicClient

A Mosaic client is a data consumer that indicates its data needs to a
Mosaic coordinator via the query method. The coordinator is responsible
for issuing queries and returning results to the client.

The client life-cycle consists of connection to a coordinator,
initialization (potentially involving queries for data schema and summary
statistic information), and then interactive queries that may be driven by
an associated selection. When no longer needed, a client should be
disconnected from the coordinator.

When enabled, a client will initialize and respond to query update requests.
If disabled, the client will delay initialization and not respond to queries
until enabled again. Disabling a client can improve system performance when
associated interface elements are offscreen or disabled.

## Constructors

### Constructor

> **new MosaicClient**(`filterSelection?`): `MosaicClient`

Create a new client instance.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `filterSelection?` | [`Selection`](../../../../classes/Selection.md) | An optional selection to interactively filter this client's data. If provided, a coordinator will re-query and update the client when the selection updates. |

#### Returns

`MosaicClient`

## Properties

| Property | Type |
| ------ | ------ |
|  `_filterBy` | [`Selection`](../../../../classes/Selection.md) | `undefined` |
|  `_requestUpdate` | () => `void` |
|  `_coordinator` | [`Coordinator`](Coordinator.md) | `null` |
|  `_pending` | `Promise`<`unknown`> |
|  `_enabled` | `boolean` |
|  `_initialized` | `boolean` |
|  `_request` | `boolean` | [`Query`](../../../../classes/Query.md) | `null` |

## Accessors

### coordinator

#### Get Signature

> **get** **coordinator**(): [`Coordinator`](Coordinator.md) | `null`

##### Returns

[`Coordinator`](Coordinator.md) | `null`

this client's connected coordinator.

#### Set Signature

> **set** **coordinator**(`coordinator`): `void`

Set this client's connected coordinator.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `coordinator` | [`Coordinator`](Coordinator.md) | `null` |

##### Returns

`void`

***

### enabled

#### Get Signature

> **get** **enabled**(): `boolean`

Return this client's enabled state.

##### Returns

`boolean`

#### Set Signature

> **set** **enabled**(`state`): `void`

Set this client's enabled state;

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `state` | `boolean` |

##### Returns

`void`

***

### pending

#### Get Signature

> **get** **pending**(): `Promise`<`unknown`>

Return a Promise that resolves once the client has updated.

##### Returns

`Promise`<`unknown`>

***

### filterBy

#### Get Signature

> **get** **filterBy**(): [`Selection`](../../../../classes/Selection.md) | `undefined`

##### Returns

[`Selection`](../../../../classes/Selection.md) | `undefined`

this client's filter selection.

***

### filterStable

#### Get Signature

> **get** **filterStable**(): `boolean`

Return a boolean indicating if the client query can be sped up with
materialized views of pre-aggregated data. Should return true if changes
to the filterBy selection do not change the groupby domain of the client
query.

##### Returns

`boolean`

## Methods

### prepare()

> **prepare**(): `Promise`<`void`>

Prepare the client before the `query()` method is called. Subclasses
should override this method as needed, potentially issuing one or more
queries to gather data or metadata needed prior to `query` calls.

#### Returns

`Promise`<`void`>

***

### query()

> **query**(`filter?`): `ClientQuery`

Return a query specifying the data needed by this client.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `filter?` | `FilterExpr` | `null` | The filtering criteria to apply in the query. |

#### Returns

`ClientQuery`

The client query

***

### queryPending()

> **queryPending**(): `this`

Called by the coordinator to inform the client that a query is pending.

#### Returns

`this`

this

***

### queryResult()

> **queryResult**(`data`): `this`

Called by the coordinator to return a query result.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `unknown` | The query result. |

#### Returns

`this`

this

***

### queryError()

> **queryError**(`error`): `this`

Called by the coordinator to report a query execution error.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `error` | `Error` |  |

#### Returns

`this`

this

***

### requestQuery()

> **requestQuery**(`query?`): `Promise`<`unknown`> | `null`

Request the coordinator to execute a query for this client.
If an explicit query is not provided, the client `query` method will
be called, filtered by the current `filterBy` selection. This method has
no effect if the client is not connected to a coordinator. If the client
is connected by currently disabled, the request will be serviced if the
client is later enabled.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `query?` | [`Query`](../../../../classes/Query.md) | The query to request. If unspecified, the query will be determined by the client's `query` method and the current `filterBy` selection state. |

#### Returns

`Promise`<`unknown`> | `null`

***

### requestUpdate()

> **requestUpdate**(): `void`

Request that the coordinator perform a throttled update of this client
using the default query. Unlike requestQuery, for which every call results
in an executed query, multiple calls to requestUpdate may be consolidated
into a single update. This method has no effect if the client is not
connected to a coordinator. If the client is connected but currently
disabled, the request will be serviced if the client is later enabled.

#### Returns

`void`

***

### initialize()

> **initialize**(): `void`

Reset this client, calling the prepare method and query requests. This
method has no effect if the client is not registered with a coordinator.

#### Returns

`void`

***

### destroy()

> **destroy**(): `void`

Remove this client: disconnect from the coordinator and free up any
resource use. This method has no effect if the client is not connected
to a coordinator.

If overriding this method in a client subclass, be sure to also
disconnect from the coordinator.

#### Returns

`void`

***

### update()

> **update**(): `MosaicClient` | `Promise`<`unknown`>

Requests a client update, for example to (re-)render an interface
component.

#### Returns

`MosaicClient` | `Promise`<`unknown`>
