---
url: 'https://sqlrooms.org/api/ai/type-aliases/AgentSnapshot.md'
---
[@sqlrooms/ai](../index.md) / AgentSnapshot

# Type Alias: AgentSnapshot

> **AgentSnapshot** = `object`

Serializable agent metadata captured for AI devtools.

Snapshot capture is optional and intentionally stores descriptions, names,
capability flags, and bounded settings only. It must not contain executable
tool objects, closures, API keys, or unbounded prompt/output content.

## Properties

### agentName?

> `optional` **agentName?**: `string`

***

### parentToolCallId

> **parentToolCallId**: `string`

***

### availableTools

> **availableTools**: `object`\[]

| Name | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | - |
| `description?` | `string` | - |
| `hasExecute?` | `boolean` | Whether the captured tool exposed an execute function. |
| `hasRenderer?` | `boolean` | Whether the captured tool exposed a renderer-like function. |
| `needsApproval?` | `boolean` | - |

***

### settings?

> `optional` **settings?**: `object`

| Name | Type |
| ------ | ------ |
| `maxSteps?` | `number` |
| `model?` | `string` |
| `provider?` | `string` |

***

### startedAt

> **startedAt**: `number`
