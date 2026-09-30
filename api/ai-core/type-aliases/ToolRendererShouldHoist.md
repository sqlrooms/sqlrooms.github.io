---
url: https://sqlrooms.org/api/ai-core/type-aliases/ToolRendererShouldHoist.md
---
[@sqlrooms/ai-core](../index.md) / ToolRendererShouldHoist

# Type Alias: ToolRendererShouldHoist

> **ToolRendererShouldHoist** = (`args`) => `boolean`

Optional static predicate on a [ToolRenderer](ToolRenderer.md). Return false when this
particular call has no visible UI so it is not collected into the hoisted
turn-body slot list.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `args` | { `output`: `unknown`; `input`: `unknown`; `state`: [`AgentToolCall`](AgentToolCall.md)\[`"state"`]; } | - |
| `args.output` | `unknown` | - |
| `args.input` | `unknown` | - |
| `args.state` | [`AgentToolCall`](AgentToolCall.md)\[`"state"`] | Normalized tool-call state shared by top-level and nested calls. |

## Returns

`boolean`
