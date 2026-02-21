---
url: /api/mosaic/mosaic/namespaces/vg/classes/DuckDBWASMConnector.md
---
[@sqlrooms/mosaic](../../../../index.md) / [vg](../index.md) / DuckDBWASMConnector

# Class: DuckDBWASMConnector

DuckDB-WASM connector.

## Implements

* `Connector`

## Constructors

### Constructor

> **new DuckDBWASMConnector**(`options?`): `DuckDBWASMConnector`

Create a new DuckDB-WASM connector instance.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | `DuckDBWASMConnectorOptions` | Connector options. |

#### Returns

`DuckDBWASMConnector`

## Properties

| Property | Modifier | Type |
| ------ | ------ | ------ |
|  `_ipc?` | `private` | `any` |
|  `_options` | `public` | `DuckDBWASMOptions` |
|  `_db?` | `public` | `AsyncDuckDB` |
|  `_con?` | `public` | `AsyncDuckDBConnection` |
|  `_config?` | `public` | `DuckDBConfig` |
|  `_loadPromise?` | `public` | `Promise`<`unknown`> |

## Methods

### getDuckDB()

> **getDuckDB**(): `Promise`<`AsyncDuckDB`>

Get the backing DuckDB-WASM instance.
Lazily initializes DuckDB-WASM if not already loaded.

#### Returns

`Promise`<`AsyncDuckDB`>

The DuckDB-WASM instance.

***

### getConnection()

> **getConnection**(): `Promise`<`AsyncDuckDBConnection`>

Get the backing DuckDB-WASM connection.
Lazily initializes DuckDB-WASM if not already loaded.

#### Returns

`Promise`<`AsyncDuckDBConnection`>

The DuckDB-WASM connection.

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
