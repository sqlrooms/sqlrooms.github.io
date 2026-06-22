---
url: 'https://sqlrooms.org/api/ai/functions/fixIncompleteToolCalls.md'
---
[@sqlrooms/ai](../index.md) / fixIncompleteToolCalls

# Function: fixIncompleteToolCalls()

> **fixIncompleteToolCalls**(`messages`): `UIMessage`<`unknown`, `UIDataTypes`, `UITools`>\[]

Validates and completes UIMessages to ensure all tool-call parts have corresponding tool-result parts.
This is important when canceling with AbortController, which may leave incomplete tool-calls.
Assumes sequential tool execution (only one tool runs at a time).

For any `output-error` tool part (cancelled or failed), the partial/invalid
`input` is moved to `rawInput` and `input` is set to `undefined`. The AI SDK
only validates `output-error` input when it is defined, so this prevents
"Type validation failed ... parts\[n].input" errors from poisoning a session
after the user stops a tool call mid-stream.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `messages` | `UIMessage`<`unknown`, `UIDataTypes`, `UITools`>\[] | The messages to validate and complete |

## Returns

`UIMessage`<`unknown`, `UIDataTypes`, `UITools`>\[]

Cleaned messages with completed tool-call/result pairs
