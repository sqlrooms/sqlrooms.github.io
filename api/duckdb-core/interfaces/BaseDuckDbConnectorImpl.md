---
url: /api/duckdb-core/interfaces/BaseDuckDbConnectorImpl.md
---
[@sqlrooms/duckdb-core](../index.md) / BaseDuckDbConnectorImpl

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

> **executeQueryInternal**<`T`>(`query`, `signal`, `queryId?`): `Promise`<`Table`<`T`>>

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* `TypeMap` | `any` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `query` | `string` |
| `signal` | `AbortSignal` |
| `queryId?` | `string` |

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

> `optional` **loadArrowInternal**(`file`, `tableName`, `opts?`): `Promise`<`void`>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `file` | `Table`<`any`> | `Uint8Array`<`ArrayBufferLike`> |
| `tableName` | `string` |
| `opts?` | { `schema?`: `string`; } |
| `opts.schema?` | `string` |

#### Returns

`Promise`<`void`>

***

### loadObjectsInternal()?

> `optional` **loadObjectsInternal**(`file`, `tableName`, `opts?`): `Promise`<`void`>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `file` | `Record`<`string`, `unknown`>\[] |
| `tableName` | `string` |
| `opts?` | {\[`key`: `string`]: `unknown`; `schema?`: `string`; `select?`: `string`\[]; `where?`: `string`; `view?`: `boolean`; `temp?`: `boolean`; `replace?`: `boolean`; } |
| `opts.schema?` | `string` |
| `opts.select?` | `string`\[] |
| `opts.where?` | `string` |
| `opts.view?` | `boolean` |
| `opts.temp?` | `boolean` |
| `opts.replace?` | `boolean` |

#### Returns

`Promise`<`void`>

***

### loadFileInternal()?

> `optional` **loadFileInternal**(`file`, `tableName`, `opts?`): `Promise`<`void`>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `file` | `string` | `File` |
| `tableName` | `string` |
| `opts?` | {\[`key`: `string`]: `unknown`; `schema?`: `string`; `select?`: `string`\[]; `where?`: `string`; `view?`: `boolean`; `temp?`: `boolean`; `replace?`: `boolean`; `method`: `"read_json"` | `"read_ndjson"` | `"read_parquet"` | `"read_csv"` | `"auto"`; } | {\[`key`: `string`]: `unknown`; `schema?`: `string`; `select?`: `string`\[]; `where?`: `string`; `view?`: `boolean`; `temp?`: `boolean`; `replace?`: `boolean`; `options?`: `string` | `Record`<`string`, `unknown`> | `string`\[]; `method`: `"st_read"`; } |

#### Returns

`Promise`<`void`>
