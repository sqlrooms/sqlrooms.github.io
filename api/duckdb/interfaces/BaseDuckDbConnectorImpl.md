---
url: /api/duckdb/interfaces/BaseDuckDbConnectorImpl.md
---
[@sqlrooms/duckdb](../index.md) / BaseDuckDbConnectorImpl

# Interface: BaseDuckDbConnectorImpl

## Methods

### initializeInternal()?

> `optional` **initializeInternal**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

***

### destroyInternal()?

> `optional` **destroyInternal**(): `Promise`<`void`>

#### Returns

`Promise`<`void`>

***

### executeQueryInternal()

> **executeQueryInternal**<`T`>(`query`, `signal`, `queryId`?): `Promise`<`Table`<`T`>>

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* `TypeMap` | `any` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `query` | `string` |
| `signal` | `AbortSignal` |
| `queryId`? | `string` |

#### Returns

`Promise`<`Table`<`T`>>

***

### cancelQueryInternal()?

> `optional` **cancelQueryInternal**(`queryId`): `Promise`<`void`>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `queryId` | `string` |

#### Returns

`Promise`<`void`>

***

### loadArrowInternal()?

> `optional` **loadArrowInternal**(`file`, `tableName`, `opts`?): `Promise`<`void`>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `file` | `Table`<`any`> | `Uint8Array`<`ArrayBufferLike`> |
| `tableName` | `string` |
| `opts`? | { `schema`: `string`; } |
| `opts.schema`? | `string` |

#### Returns

`Promise`<`void`>

***

### loadObjectsInternal()?

> `optional` **loadObjectsInternal**(`file`, `tableName`, `opts`?): `Promise`<`void`>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `file` | `Record`<`string`, `unknown`>\[] |
| `tableName` | `string` |
| `opts`? | `objectOutputType`<{ `schema`: `ZodOptional`<`ZodString`>; `select`: `ZodOptional`<`ZodArray`<`ZodString`, `"many"`>>; `where`: `ZodOptional`<`ZodString`>; `view`: `ZodOptional`<`ZodBoolean`>; `temp`: `ZodOptional`<`ZodBoolean`>; `replace`: `ZodOptional`<`ZodBoolean`>; }, `ZodUnknown`, `"strip"`> |

#### Returns

`Promise`<`void`>

***

### loadFileInternal()?

> `optional` **loadFileInternal**(`file`, `tableName`, `opts`?): `Promise`<`void`>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `file` | `string` | `File` |
| `tableName` | `string` |
| `opts`? | `objectOutputType`<`object` & `object`, `ZodUnknown`, `"strip"`> | `objectOutputType`<`object` & `object` & `object`, `ZodUnknown`, `"strip"`> |

#### Returns

`Promise`<`void`>
