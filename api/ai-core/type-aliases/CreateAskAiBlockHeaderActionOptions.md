---
url: >-
  https://sqlrooms.org/api/ai-core/type-aliases/CreateAskAiBlockHeaderActionOptions.md
---
[@sqlrooms/ai-core](../index.md) / CreateAskAiBlockHeaderActionOptions

# Type Alias: CreateAskAiBlockHeaderActionOptions

> **CreateAskAiBlockHeaderActionOptions** = `object`

## Properties

### supportsAiEditing

> **supportsAiEditing**: (`blockType`) => `boolean`

Interim gate for which block types show Ask AI.
Stage 6 of the sharing plan replaces this with a per-block-type registry.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `blockType` | `string` |

#### Returns

`boolean`

***

### onSubmit

> **onSubmit**: (`ctx`, `prompt`) => `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ctx` | [`AskAiBlockHeaderActionRenderContext`](AskAiBlockHeaderActionRenderContext.md) |
| `prompt` | `string` |

#### Returns

`void`

***

### label?

> `optional` **label?**: `string`

***

### placeholder?

> `optional` **placeholder?**: `string`

***

### popoverProps?

> `optional` **popoverProps?**: `Omit`<[`BlockAiPromptPopoverProps`](BlockAiPromptPopoverProps.md), `"trigger"` | `"onSubmit"` | `"label"` | `"placeholder"`>
