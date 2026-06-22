---
url: 'https://sqlrooms.org/api/cells/type-aliases/CellsSliceState.md'
---
[@sqlrooms/cells](../index.md) / CellsSliceState

# Type Alias: CellsSliceState

> **CellsSliceState** = `object`

## Properties

### cells

> **cells**: `SliceFunctions` & `object`

#### Type Declaration

| Name | Type | Description |
| ------ | ------ | ------ |
| `config` | [`CellsSliceConfig`](CellsSliceConfig.md) | - |
| `status` | `Record`<`string`, [`CellStatus`](CellStatus.md)> | - |
| `activeAbortControllers` | `Record`<`string`, `AbortController`> | - |
| `cellRegistry` | [`CellRegistry`](CellRegistry.md) | - |
| `resultVersion` | `Record`<`string`, `number`> | Monotonic counter per cell, incremented when a new execution result arrives. Used to trigger pagination reset and re-render. |
| `pageVersion` | `Record`<`string`, `number`> | Monotonic counter per cell, incremented when a pagination/sorting fetch completes. Used to trigger re-render without resetting pagination. |
| `crossFilterSelections` | `Record`<`string`, `Record`<`string`, [`CrossFilterSelection`](CrossFilterSelection.md) | `null`>> | Ephemeral cross-filter selections (not persisted). Outer key: sqlId (the shared data source), inner key: chartCellId. |
| `setCrossFilterSelection()` | (`chartCellId`, `sqlId`, `selection`) => `void` | - |
| `getCrossFilterPredicate()` | (`chartCellId`, `sqlId`) => `string` | `null` | - |
| `clearCrossFilterGroup()` | (`sqlId`) => `void` | - |
| `ensureArtifact()` | (`artifactId`, `options?`) => `void` | - |
| `removeArtifact()` | (`artifactId`) => `void` | - |
| `addCell()` | (`artifactId`, `cell`, `index?`) => `Promise`<`void`> | - |
| `removeCell()` | (`id`) => `void` | - |
| `updateCell()` | (`id`, `updater`, `opts?`) => `Promise`<`void`> | - |
| `addEdge()` | (`artifactId`, `edge`) => `void` | - |
| `removeEdge()` | (`artifactId`, `edgeId`) => `void` | - |
| `updateEdgesFromSql()` | (`artifactId`, `cellId`) => `Promise`<`void`> | - |
| `runCell()` | (`id`, `opts?`) => `Promise`<`void`> | - |
| `cancelCell()` | (`id`) => `void` | - |
| `invalidateCellStatus()` | (`id`) => `void` | - |
| `setCellResult()` | (`id`, `data`) => `void` | - |
| `setCellResultPage()` | (`id`, `data`) => `void` | - |
| `getCellResult()` | (`id`) => [`CellResultData`](CellResultData.md) | `undefined` | - |
| `clearCellResult()` | (`id`) => `void` | - |
| `fetchCellResultPage()` | (`id`, `pagination`, `sorting?`) => `Promise`<`void`> | - |
| `getArtifactIdForCell()` | (`cellId`) => `string` | `undefined` | - |
| `getDownstream()` | (`artifactId`, `sourceCellId`) => `string`\[] | - |
| `getRootCells()` | (`artifactId`) => `string`\[] | - |
| `runAllCellsCascade()` | (`artifactId`) => `Promise`<`void`> | - |
| `runDownstreamCascade()` | (`artifactId`, `sourceCellId`) => `Promise`<`void`> | - |

***

### initialize?

> `optional` **initialize?**: () => `Promise`<`void`>

#### Returns

`Promise`<`void`>
