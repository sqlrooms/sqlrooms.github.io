---
url: 'https://sqlrooms.org/api/ai-core/functions/shouldEndAnalysis.md'
---
[@sqlrooms/ai-core](../index.md) / shouldEndAnalysis

# Function: shouldEndAnalysis()

> **shouldEndAnalysis**(`messages`): `boolean`

Determines whether the analysis should end based on completed messages.

The analysis should continue (return false) when the last assistant message
has tool calls that the agent loop needs to process. It should end (return true)
when the assistant has finished responding with no pending tool work.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `messages` | `UIMessage`<`unknown`, `UIDataTypes`, `UITools`>\[] | The completed messages to evaluate |

## Returns

`boolean`

True if the analysis should end, false if it should continue
