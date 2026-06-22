---
url: 'https://sqlrooms.org/api/ai/interfaces/StoredTool.md'
---
[@sqlrooms/ai](../index.md) / StoredTool

# Interface: StoredTool

Shallow tool representation stored in state.

The AI SDK's `ToolSet` type contains deeply recursive Zod generics that
exceed TypeScript's type-instantiation depth when wrapped in Immer's
`Draft<>` (TS2589). This interface preserves the properties consumers
need to read from state while keeping the type shallow enough for Immer.

Tools are still accepted as the full `ToolSet` in `AiSliceOptions` for
type-safe tool creation. Internal call-sites that pass tools to
`ToolLoopAgent` cast back to `ToolSet`.

## Indexable

> \[`key`: `string`]: `unknown`

## Properties

### description?

> `optional` **description?**: `string`

***

### execute?

> `optional` **execute?**: (`args`, `options?`) => `PromiseLike`<`unknown`>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | `any` |
| `options?` | `any` |

#### Returns

`PromiseLike`<`unknown`>
