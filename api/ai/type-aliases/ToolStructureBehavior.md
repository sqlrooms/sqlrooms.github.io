---
url: 'https://sqlrooms.org/api/ai/type-aliases/ToolStructureBehavior.md'
---
[@sqlrooms/ai](../index.md) / ToolStructureBehavior

# Type Alias: ToolStructureBehavior

> **ToolStructureBehavior** = `object`

Controls the segment-tree structure: which tool calls are treated as
transparent wrappers whose children are promoted to the caller's level.

* `isPassthroughTool`: when true, no summary line is rendered and nested
  calls are flattened into the parent's segment list.

## Properties

### isPassthroughTool?

> `optional` **isPassthroughTool?**: (`toolCall`) => `boolean`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `toolCall` | [`AgentToolCall`](AgentToolCall.md) |

#### Returns

`boolean`
