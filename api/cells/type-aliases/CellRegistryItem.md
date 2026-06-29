---
url: 'https://sqlrooms.org/api/cells/type-aliases/CellRegistryItem.md'
---
[@sqlrooms/cells](../index.md) / CellRegistryItem

# Type Alias: CellRegistryItem\<TCell>

> **CellRegistryItem**<`TCell`> = `object`

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TCell` *extends* [`Cell`](Cell.md) | [`Cell`](Cell.md) |

## Properties

### type

> **type**: `string`

***

### title

> **title**: `string`

***

### createCell

> **createCell**: (`args`) => `TCell`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | [`CreateCellArgs`](CreateCellArgs.md) |

#### Returns

`TCell`

***

### renderCell

> **renderCell**: (`props`) => `React.ReactElement`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `props` | { `id`: `string`; `cell`: `TCell`; `renderContainer`: (`props`) => `React.ReactElement`; } |
| `props.id` | `string` |
| `props.cell` | `TCell` |
| `props.renderContainer` | (`props`) => `React.ReactElement` |

#### Returns

`React.ReactElement`

***

### findDependencies

> **findDependencies**: (`args`) => `Promise`<`string`\[] | [`CellDependencies`](CellDependencies.md)>

Find dependencies for DAG using AST-enabled async resolution.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | { `cell`: `TCell`; `cells`: `Record`<`string`, [`Cell`](Cell.md)>; `artifactId`: `string`; `sqlSelectToJson`: [`SqlSelectToJsonFn`](SqlSelectToJsonFn.md); } |
| `args.cell` | `TCell` |
| `args.cells` | `Record`<`string`, [`Cell`](Cell.md)> |
| `args.artifactId` | `string` |
| `args.sqlSelectToJson` | [`SqlSelectToJsonFn`](SqlSelectToJsonFn.md) |

#### Returns

`Promise`<`string`\[] | [`CellDependencies`](CellDependencies.md)>

***

### runCell?

> `optional` **runCell?**: (`args`) => `Promise`<`void`>

Optional: custom execution logic (defaults to SQL execution for sql type)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | { `id`: `string`; `opts?`: { `cascade?`: `boolean`; `schemaName?`: `string`; }; `get`: () => [`CellsRootState`](CellsRootState.md); `set`: (`updater`) => `void`; } |
| `args.id` | `string` |
| `args.opts?` | { `cascade?`: `boolean`; `schemaName?`: `string`; } |
| `args.opts.cascade?` | `boolean` |
| `args.opts.schemaName?` | `string` |
| `args.get` | () => [`CellsRootState`](CellsRootState.md) |
| `args.set` | (`updater`) => `void` |

#### Returns

`Promise`<`void`>

***

### renameResult?

> `optional` **renameResult?**: (`args`) => `Promise`<`void`>

Optional: rename the result view when resultName changes

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | { `id`: `string`; `oldResultView`: `string`; `get`: () => [`CellsRootState`](CellsRootState.md); `set`: (`updater`) => `void`; } |
| `args.id` | `string` |
| `args.oldResultView` | `string` |
| `args.get` | () => [`CellsRootState`](CellsRootState.md) |
| `args.set` | (`updater`) => `void` |

#### Returns

`Promise`<`void`>

***

### createStatus?

> `optional` **createStatus?**: (`id`) => [`CellStatus`](CellStatus.md)

Return initial CellStatus when a cell is first added. Default: {type:'other'}

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |

#### Returns

[`CellStatus`](CellStatus.md)

***

### onInitialize?

> `optional` **onInitialize?**: (`args`) => `void`

Called once during cells.initialize() for each cell of this type. Reset ephemeral runtime state after hydration.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | { `id`: `string`; `status`: [`CellStatus`](CellStatus.md) | `undefined`; `get`: () => [`CellsRootState`](CellsRootState.md); `set`: (`updater`) => `void`; } |
| `args.id` | `string` |
| `args.status` | [`CellStatus`](CellStatus.md) | `undefined` |
| `args.get` | () => [`CellsRootState`](CellsRootState.md) |
| `args.set` | (`updater`) => `void` |

#### Returns

`void`

***

### onRemove?

> `optional` **onRemove?**: (`args`) => `Promise`<`void`> | `void`

Called when cell is removed. Clean up DuckDB relations, caches, etc.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | { `id`: `string`; `status`: [`CellStatus`](CellStatus.md) | `undefined`; `get`: () => [`CellsRootState`](CellsRootState.md); `set`: (`updater`) => `void`; } |
| `args.id` | `string` |
| `args.status` | [`CellStatus`](CellStatus.md) | `undefined` |
| `args.get` | () => [`CellsRootState`](CellsRootState.md) |
| `args.set` | (`updater`) => `void` |

#### Returns

`Promise`<`void`> | `void`

***

### hasSemanticChange?

> `optional` **hasSemanticChange?**: (`oldCell`, `newCell`) => `boolean`

Detect whether an updateCell change is semantically significant for this cell type.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `oldCell` | `TCell` |
| `newCell` | `TCell` |

#### Returns

`boolean`

***

### invalidateStatus?

> `optional` **invalidateStatus?**: (`currentStatus`) => [`CellStatus`](CellStatus.md)

Reset status to idle/stale. Called by invalidateCellStatus. If not provided, status is set to {type:'other'}.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `currentStatus` | [`CellStatus`](CellStatus.md) |

#### Returns

[`CellStatus`](CellStatus.md)

***

### getRelationsToDrop?

> `optional` **getRelationsToDrop?**: (`status`) => `string`\[]

Collect DuckDB relation names that should be dropped when this cell is removed.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `status` | [`CellStatus`](CellStatus.md) |

#### Returns

`string`\[]

***

### recordError?

> `optional` **recordError?**: (`currentStatus`, `message`) => [`CellStatus`](CellStatus.md)

Record an error on the cell status during cascade execution.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `currentStatus` | [`CellStatus`](CellStatus.md) |
| `message` | `string` |

#### Returns

[`CellStatus`](CellStatus.md)

***

### getResultRelation?

> `optional` **getResultRelation?**: (`status`) => `string` | `undefined`

Return the query relation name for paged fetches, if applicable.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `status` | [`CellStatus`](CellStatus.md) |

#### Returns

`string` | `undefined`
