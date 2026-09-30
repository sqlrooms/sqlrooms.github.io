---
url: https://sqlrooms.org/api/ai-core/functions/getChatActiveStatus.md
---
[@sqlrooms/ai-core](../index.md) / getChatActiveStatus

# Function: getChatActiveStatus()

> **getChatActiveStatus**(`messages`, `behavior?`): [`ChatActiveStatusInfo`](../type-aliases/ChatActiveStatusInfo.md)

Derives the current user-facing activity from the latest chat turn.
Tool labels honor `toolRenderBehavior` before falling back to a humanized
tool name.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `messages` | `UIMessage`<`unknown`, `UIDataTypes`, `UITools`>\[] | `undefined` |
| `behavior` | [`ToolRenderBehavior`](../type-aliases/ToolRenderBehavior.md) |

## Returns

[`ChatActiveStatusInfo`](../type-aliases/ChatActiveStatusInfo.md)
