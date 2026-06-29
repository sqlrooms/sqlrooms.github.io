---
url: 'https://sqlrooms.org/api/python/type-aliases/PythonSliceState.md'
---
[@sqlrooms/python](../index.md) / PythonSliceState

# Type Alias: PythonSliceState

> **PythonSliceState** = `object`

Zustand slice state for durable Python blocks.

## Properties

### python

> **python**: `object`

| Name | Type |
| ------ | ------ |
| `config` | [`PythonSliceConfig`](PythonSliceConfig.md) |
| `runtimeByBlockId` | `Record`<`string`, [`PythonBlockRuntimeState`](PythonBlockRuntimeState.md) | `undefined`> |
| `setConfig()` | (`config`) => |
| `ensureBlock()` | (`blockId`, `options?`) => |
| `removeBlock()` | (`blockId`) => |
| `renameBlock()` | (`blockId`, `title`) => |
| `updateBlockCode()` | (`blockId`, `code`) => |
| `patchBlock()` | (`blockId`, `patch`) => |
| `clearBlockResult()` | (`blockId`) => |
| `getBlock()` | (`blockId`) => |
| `runBlock()` | (`blockId`, `options?`) => |
