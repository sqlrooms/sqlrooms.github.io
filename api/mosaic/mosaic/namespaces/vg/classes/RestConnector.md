---
url: /api/mosaic/mosaic/namespaces/vg/classes/RestConnector.md
---
[@sqlrooms/mosaic](../../../../index.md) / [vg](../index.md) / RestConnector

# Class: RestConnector

## Implements

* `Connector`

## Constructors

### Constructor

> **new RestConnector**(`__namedParameters?`): `RestConnector`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters?` | `RestOptions` |

#### Returns

`RestConnector`

## Properties

| Property | Modifier | Type |
| ------ | ------ | ------ |
|  `_uri` | `private` | `any` |
|  `_ipc?` | `private` | `any` |

## Methods

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
