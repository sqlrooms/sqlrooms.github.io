---
url: 'https://sqlrooms.org/api/notebook/type-aliases/NotebookSliceState.md'
---
[@sqlrooms/notebook](../index.md) / NotebookSliceState

# Type Alias: NotebookSliceState

> **NotebookSliceState** = `object`

## Properties

### notebook

> **notebook**: `object`

| Name | Type |
| ------ | ------ |
| `config` | [`NotebookSliceConfig`](NotebookSliceConfig.md) |
| `schemaName` | `string` |
| `setSchemaName()` | (`name`) => `void` |
| `ensureArtifact()` | (`artifactId`) => `void` |
| `removeArtifact()` | (`artifactId`) => `void` |
| `addCell()` | (`artifactId`, `type`, `index?`) => `Promise`<`string`> |
| `moveCell()` | (`artifactId`, `cellId`, `direction`) => `void` |
| `removeCell()` | (`cellId`) => `void` |
| `renameCell()` | (`cellId`, `name`) => `void` |
| `updateCell()` | (`cellId`, `updater`) => `void` |
| `setCurrentCell()` | (`id`) => `void` |
| `runCell()` | (`cellId`, `opts?`) => `Promise`<`void`> |
| `runAllCells()` | (`artifactId`) => `Promise`<`void`> |
| `runAllCellsCascade()` | (`artifactId`) => `Promise`<`void`> |
| `cancelRunCell()` | (`cellId`) => `void` |
