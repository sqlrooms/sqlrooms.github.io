---
url: 'https://sqlrooms.org/api/ai-core/type-aliases/PendingSubAgentApproval.md'
---
[@sqlrooms/ai-core](../index.md) / PendingSubAgentApproval

# Type Alias: PendingSubAgentApproval

> **PendingSubAgentApproval** = `object`

Pending approval request for a sub-agent tool.
Stored in the AI slice state so the UI can render approval prompts.

## Properties

### toolCallId

> **toolCallId**: `string`

***

### approvalId

> **approvalId**: `string`

***

### toolName

> **toolName**: `string`

***

### input

> **input**: `unknown`

***

### resolve

> **resolve**: (`approved`) => `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `approved` | `boolean` |

#### Returns

`void`
