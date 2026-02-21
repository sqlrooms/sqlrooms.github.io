---
url: /api/mosaic/mosaic/namespaces/vg/classes/Coordinator.md
---
[@sqlrooms/mosaic](../../../../index.md) / [vg](../index.md) / Coordinator

# Class: Coordinator

A Mosaic Coordinator manages all database communication for clients and
handles selection updates. The Coordinator also performs optimizations
including query caching, consolidation, and pre-aggregation.

## Constructors

### Constructor

> **new Coordinator**(`db?`, `options?`): `Coordinator`

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `db?` | `Connector` | Database connector. Defaults to a web socket connection. |
| `options?` | { `logger?`: `Logger` | `null`; `manager?`: `QueryManager`; `cache?`: `boolean`; `consolidate?`: `boolean`; `preagg?`: `PreAggregateOptions`; } | Coordinator options. |
| `options.logger?` | `Logger` | `null` | The logger to use, defaults to `console`. |
| `options.manager?` | `QueryManager` | The query manager to use. |
| `options.cache?` | `boolean` | Boolean flag to enable/disable query caching. |
| `options.consolidate?` | `boolean` | Boolean flag to enable/disable query consolidation. |
| `options.preagg?` | `PreAggregateOptions` | Options for the Pre-aggregator. |

#### Returns

`Coordinator`

## Properties

| Property | Modifier | Type |
| ------ | ------ | ------ |
|  `manager` | `public` | `QueryManager` |
|  `preaggregator` | `public` | `PreAggregator` |
|  `clients` | `public` | `Set`<[`MosaicClient`](MosaicClient.md)> |
|  `filterGroups` | `public` | `Map`<[`Selection`](../../../../classes/Selection.md), `FilterGroupEntry`> |
|  `_logger` | `protected` | `Logger` |

## Methods

### clear()

> **clear**(`options?`): `void`

Clear the coordinator state.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | { `clients?`: `boolean`; `cache?`: `boolean`; } | Options object. |
| `options.clients?` | `boolean` | If true, disconnect all clients. |
| `options.cache?` | `boolean` | If true, clear the query cache. |

#### Returns

`void`

***

### databaseConnector()

#### Call Signature

> **databaseConnector**(): `Connector` | `null`

Get or set the database connector.

##### Returns

`Connector` | `null`

The current database connector.

#### Call Signature

> **databaseConnector**(`db`): `Connector`

Get or set the database connector.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `db` | `Connector` | The database connector to use. |

##### Returns

`Connector`

The current database connector.

***

### logger()

> **logger**(`logger?`): `Logger`

Get or set the logger.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `logger?` | `Logger` | `null` | The logger to use. |

#### Returns

`Logger`

The current logger

***

### cancel()

> **cancel**(`requests`): `void`

Cancel previously submitted query requests. These queries will be
canceled if they are queued but have not yet been submitted.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `requests` | `QueryResult`<`unknown`>\[] | An array of query result objects, such as those returned by the `query` method. |

#### Returns

`void`

***

### exec()

> **exec**(`query`, `options?`): `QueryResult`

Issue a query for which no result (return value) is needed.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `query` | `MaybeArray`<`QueryType`> | The query or an array of queries. Each query should be either a Query builder object or a SQL string. |
| `options?` | { `priority?`: `number`; } | An options object. |
| `options.priority?` | `number` | The query priority, defaults to `Priority.Normal`. |

#### Returns

`QueryResult`

A query result promise.

***

### query()

#### Call Signature

> **query**(`query`, `options?`): `QueryResult`<`Table`<`TypeMap`>>

Issue a query to the backing database. The submitted query may be
consolidate with other queries and its results may be cached.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `query` | `QueryType` | The query as either a Query builder object or a SQL string. |
| `options?` | {\[`key`: `string`]: `unknown`; `type?`: `"arrow"`; `cache?`: `boolean`; `persist?`: `boolean`; `priority?`: `number`; } | An options object. |
| `options.type?` | `"arrow"` | The query result format type. |
| `options.cache?` | `boolean` | If true, cache the query result client-side within the QueryManager. |
| `options.persist?` | `boolean` | If true, request the database server to persist a cached query server-side. |
| `options.priority?` | `number` | The query priority, defaults to `Priority.Normal`. |

##### Returns

`QueryResult`<`Table`<`TypeMap`>>

A query result promise.

#### Call Signature

> **query**(`query`, `options?`): `QueryResult`<`unknown`>

Issue a query to the backing database. The submitted query may be
consolidate with other queries and its results may be cached.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `query` | `QueryType` | The query as either a Query builder object or a SQL string. |
| `options?` | {\[`key`: `string`]: `unknown`; `type?`: `"json"`; `cache?`: `boolean`; `persist?`: `boolean`; `priority?`: `number`; } | An options object. |
| `options.type?` | `"json"` | The query result format type. |
| `options.cache?` | `boolean` | If true, cache the query result client-side within the QueryManager. |
| `options.persist?` | `boolean` | If true, request the database server to persist a cached query server-side. |
| `options.priority?` | `number` | The query priority, defaults to `Priority.Normal`. |

##### Returns

`QueryResult`<`unknown`>

A query result promise.

***

### prefetch()

#### Call Signature

> **prefetch**(`query`, `options?`): `QueryResult`<`Table`<`TypeMap`>>

Issue a query to prefetch data for later use. The query result is cached
for efficient future access.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `query` | `QueryType` | The query as either a Query builder object or a SQL string. |
| `options?` | {\[`key`: `string`]: `unknown`; `type?`: `"arrow"`; } | An options object. |
| `options.type?` | `"arrow"` | The query result format type. |

##### Returns

`QueryResult`<`Table`<`TypeMap`>>

A query result promise.

#### Call Signature

> **prefetch**(`query`, `options?`): `QueryResult`<`unknown`>

Issue a query to prefetch data for later use. The query result is cached
for efficient future access.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `query` | `QueryType` | The query as either a Query builder object or a SQL string. |
| `options?` | {\[`key`: `string`]: `unknown`; `type?`: `"json"`; } | An options object. |
| `options.type?` | `"json"` | The query result format type. |

##### Returns

`QueryResult`<`unknown`>

A query result promise.

***

### updateClient()

> **updateClient**(`client`, `query`, `priority?`): `Promise`<`unknown`>

Update client data by submitting the given query and returning the()
data (or error) to the client.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | [`MosaicClient`](MosaicClient.md) | A Mosaic client. |
| `query` | `QueryType` | The data query. |
| `priority?` | `number` | The query priority. |

#### Returns

`Promise`<`unknown`>

A Promise that resolves upon completion of the update.

***

### requestQuery()

> **requestQuery**(`client`, `query?`): `Promise`<`unknown`>

Issue a query request for a client. If the query is null or undefined,
the client is simply updated. Otherwise `updateClient` is called. As a
side effect, this method clears the current preaggregator state.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | [`MosaicClient`](MosaicClient.md) | The client to update. |
| `query?` | `QueryType` | `null` | The query to issue. |

#### Returns

`Promise`<`unknown`>

***

### connect()

> **connect**(`client`): `void`

Connect a client to the coordinator.
Throws an error if the client is already connected.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | [`MosaicClient`](MosaicClient.md) | The Mosaic client to connect. |

#### Returns

`void`

***

### disconnect()

> **disconnect**(`client`): `void`

Disconnect a client from the coordinator.
This method has no effect if the client is already disconnected.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | [`MosaicClient`](MosaicClient.md) | The Mosaic client to disconnect. |

#### Returns

`void`
