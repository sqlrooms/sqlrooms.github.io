---
url: /api/ai-core/type-aliases/AddToolResult.md
---
[@sqlrooms/ai-core](../index.md) / AddToolResult

# Type Alias: AddToolResult()

> **AddToolResult** = (`options`) => `void`

Type for adding tool results to the chat.
Extracted to a separate file to avoid circular dependencies.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | { `tool`: `string`; `toolCallId`: `string`; `output`: `unknown`; } | { `tool`: `string`; `toolCallId`: `string`; `state`: `"output-error"`; `errorText`: `string`; } |

## Returns

`void`
