---
url: 'https://sqlrooms.org/api/canvas/type-aliases/CanvasSliceState.md'
---
[@sqlrooms/canvas](../index.md) / CanvasSliceState

# Type Alias: CanvasSliceState

> **CanvasSliceState** = `object`

## Properties

### canvas

> **canvas**: `object`

| Name | Type |
| ------ | ------ |
| `config` | [`CanvasSliceConfig`](CanvasSliceConfig.md) |
| `initialize()` | () => `Promise`<`void`> |
| `setConfig()` | (`config`) => `void` |
| `ensureArtifact()` | (`artifactId`) => `void` |
| `removeArtifact()` | (`artifactId`) => `void` |
| `setViewport()` | (`artifactId`, `viewport`) => `void` |
| `addNode()` | (`params`) => `Promise`<`string`> |
| `renameNode()` | (`nodeId`, `newTitle`) => `Promise`<`void`> |
| `updateNode()` | (`nodeId`, `updater`) => `Promise`<`void`> |
| `deleteNode()` | (`nodeId`) => `void` |
| `applyNodeChanges()` | (`artifactId`, `changes`) => `void` |
| `applyEdgeChanges()` | (`changes`) => `void` |
| `addEdge()` | (`edge`) => `void` |
| `executeSqlNodeQuery()` | (`nodeId`, `opts?`) => `Promise`<`void`> |
