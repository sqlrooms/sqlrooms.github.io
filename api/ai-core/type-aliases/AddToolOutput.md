---
url: 'https://sqlrooms.org/api/ai-core/type-aliases/AddToolOutput.md'
---
[@sqlrooms/ai-core](../index.md) / AddToolOutput

# Type Alias: AddToolOutput

> **AddToolOutput** = (`options`) => `void`

Type for adding tool outputs to the chat.
Defined here (in types.ts) to avoid circular dependencies.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | { `tool`: `string`; `toolCallId`: `string`; `output`: `unknown`; } | { `tool`: `string`; `toolCallId`: `string`; `state`: `"output-error"`; `errorText`: `string`; } |

## Returns

`void`
