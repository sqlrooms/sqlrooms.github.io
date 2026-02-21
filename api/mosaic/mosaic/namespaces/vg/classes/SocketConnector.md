---
url: /api/mosaic/mosaic/namespaces/vg/classes/SocketConnector.md
---
[@sqlrooms/mosaic](../../../../index.md) / [vg](../index.md) / SocketConnector

# Class: SocketConnector

DuckDB socket connector.

## Implements

* `Connector`

## Constructors

### Constructor

> **new SocketConnector**(`options?`): `SocketConnector`

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | `SocketOptions` | Connector options. |

#### Returns

`SocketConnector`

## Properties

| Property | Modifier | Type |
| ------ | ------ | ------ |
|  `_uri` | `private` | `any` |
|  `_queue` | `private` | `any` |
|  `_connected` | `private` | `any` |
|  `_request` | `private` | `any` |
|  `_ws` | `private` | `any` |
|  `_events` | `private` | `any` |

## Accessors

### connected

#### Get Signature

> **get** **connected**(): `boolean`

##### Returns

`boolean`

## Methods

### init()

> **init**(): `void`

#### Returns

`void`

***

### enqueue()

> **enqueue**(`query`, `resolve`, `reject`): `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `query` | `ConnectorQueryRequest` |
| `resolve` | (`value?`) => `void` |
| `reject` | (`reason?`) => `void` |

#### Returns

`void`

***

### next()

> **next**(): `void`

#### Returns

`void`

***

### query()

#### Call Signature

> **query**(`query`): `Promise`<`Table`<`TypeMap`>>

Issue a query and return the result.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `query` | `ArrowQueryRequest` |

##### Returns

`Promise`<`Table`<`TypeMap`>>

##### Implementation of

`Connector.query`

#### Call Signature

> **query**(`query`): `Promise`<`void`>

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `query` | `ExecQueryRequest` |

##### Returns

`Promise`<`void`>

##### Implementation of

`Connector.query`

#### Call Signature

> **query**(`query`): `Promise`<`Record`<`string`, `unknown`>\[]>

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `query` | `JSONQueryRequest` |

##### Returns

`Promise`<`Record`<`string`, `unknown`>\[]>

##### Implementation of

`Connector.query`
