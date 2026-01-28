---
url: /api/ai-core/functions/fixIncompleteToolCalls.md
---
[@sqlrooms/ai-core](../index.md) / fixIncompleteToolCalls

# Function: fixIncompleteToolCalls()

> **fixIncompleteToolCalls**(`messages`): `UIMessage`<`unknown`, `UIDataTypes`, `UITools`>\[]

Validates and completes UIMessages to ensure all tool-call parts have corresponding tool-result parts.
This is important when canceling with AbortController, which may leave incomplete tool-calls.
Assumes sequential tool execution (only one tool runs at a time).

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `messages` | `UIMessage`<`unknown`, `UIDataTypes`, `UITools`>\[] | The messages to validate and complete |

## Returns

`UIMessage`<`unknown`, `UIDataTypes`, `UITools`>\[]

Cleaned messages with completed tool-call/result pairs
