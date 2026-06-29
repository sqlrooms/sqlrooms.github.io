---
url: 'https://sqlrooms.org/api/ai/type-aliases/ToolRendererProps.md'
---
[@sqlrooms/ai](../index.md) / ToolRendererProps

# Type Alias: ToolRendererProps\<TOutput, TInput>

> **ToolRendererProps**<`TOutput`, `TInput`> = `object`

Props passed to tool renderer components.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TOutput` | `unknown` |
| `TInput` | `unknown` |

## Properties

### output

> **output**: `TOutput` | `undefined`

***

### input

> **input**: `TInput`

***

### toolCallId

> **toolCallId**: `string`

***

### state

> **state**: `"input-streaming"` | `"input-available"` | `"output-available"` | `"output-error"` | `"approval-requested"` | `"approval-responded"` | `"output-denied"`

***

### errorText?

> `optional` **errorText?**: `string`

***

### approvalId?

> `optional` **approvalId?**: `string`

Approval ID for tools with `needsApproval`.
Always defined when `state` is `'approval-requested'`, `'approval-responded'`,
or `'output-denied'`. Renderers handling those states can safely assert
this value is a `string` without additional null checks.
