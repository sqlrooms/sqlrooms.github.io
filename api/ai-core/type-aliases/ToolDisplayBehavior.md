---
url: 'https://sqlrooms.org/api/ai-core/type-aliases/ToolDisplayBehavior.md'
---
[@sqlrooms/ai-core](../index.md) / ToolDisplayBehavior

# Type Alias: ToolDisplayBehavior

> **ToolDisplayBehavior** = `object`

Controls how tool calls are labeled in the UI. All callbacks return
`undefined` to fall back to the renderer's default.

* `getToolDisplayName`: label for agent summary lines (ParentSummaryLine).
  Falls back to the raw tool name.
* `getActivityLabel`: label for leaf activity log lines (ActivityLogLine,
  OrchestratorLogLineInner). Used only when the tool call has no
  `reasoning` input field — a present `reasoning` always wins so that
  model-provided thoughts are never hidden. Falls back to "Thinking..."
  while pending, then to the raw tool name.

## Properties

### getToolDisplayName?

> `optional` **getToolDisplayName?**: (`toolCall`) => `string` | `undefined`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `toolCall` | [`AgentToolCall`](AgentToolCall.md) |

#### Returns

`string` | `undefined`

***

### getActivityLabel?

> `optional` **getActivityLabel?**: (`toolCall`) => `string` | `undefined`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `toolCall` | [`AgentToolCall`](AgentToolCall.md) |

#### Returns

`string` | `undefined`
