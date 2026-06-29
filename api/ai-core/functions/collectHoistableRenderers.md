---
url: 'https://sqlrooms.org/api/ai-core/functions/collectHoistableRenderers.md'
---
[@sqlrooms/ai-core](../index.md) / collectHoistableRenderers

# Function: collectHoistableRenderers()

> **collectHoistableRenderers**(`toolCalls`, `agentProgress`, `toolRenderers`, `hoistableToolNames`): [`HoistableToolCall`](../type-aliases/HoistableToolCall.md)\[]

Recursively walk an AgentToolCall tree and collect every tool call that
has a registered renderer AND is in the explicit hoistable set.
Results are returned in depth-first order so they appear in the natural
execution sequence.

Agent tool calls (name starts with `agent-`) are never themselves
hoisted — only their leaf tool calls with renderers are collected.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `toolCalls` | [`AgentToolCall`](../type-aliases/AgentToolCall.md)\[] | - |
| `agentProgress` | `Record`<`string`, [`AgentToolCall`](../type-aliases/AgentToolCall.md)\[]> | - |
| `toolRenderers` | [`ToolRendererRegistry`](../type-aliases/ToolRendererRegistry.md) | - |
| `hoistableToolNames` | `ReadonlySet`<`string`> | Set of tool names whose renderers should be hoisted. If empty, nothing is hoisted (safe default). This is typically the `hoistedRenderers` list from the parent context. |

## Returns

[`HoistableToolCall`](../type-aliases/HoistableToolCall.md)\[]
