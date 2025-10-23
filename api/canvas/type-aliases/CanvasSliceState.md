---
url: /api/canvas/type-aliases/CanvasSliceState.md
---
[@sqlrooms/canvas](../index.md) / CanvasSliceState

# Type Alias: CanvasSliceState

> **CanvasSliceState**: `AiSliceState` & `object`

## Type declaration

| Name | Type |
| ------ | ------ |
| `canvas` | { `config`: [`CanvasSliceConfig`](CanvasSliceConfig.md); `isAssistantOpen`: `boolean`; `sqlResults`: `Record`<`string`, `SqlNodeQueryResult`>; `initialize`: () => `Promise`<`void`>; `setViewport`: (`viewport`) => `void`; `setAssistantOpen`: (`isAssistantOpen`) => `void`; `addNode`: (`params`) => `string`; `executeDownstreamFrom`: (`nodeId`) => `Promise`<`void`>; `renameNode`: (`nodeId`, `newTitle`) => `Promise`<`void`>; `updateNode`: (`nodeId`, `updater`) => `void`; `deleteNode`: (`nodeId`) => `void`; `applyNodeChanges`: (`changes`) => `void`; `applyEdgeChanges`: (`changes`) => `void`; `addEdge`: (`edge`) => `void`; `executeSqlNodeQuery`: (`nodeId`, `opts`?) => `Promise`<`void`>; } |
