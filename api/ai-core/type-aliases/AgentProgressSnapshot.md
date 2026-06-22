---
url: 'https://sqlrooms.org/api/ai-core/type-aliases/AgentProgressSnapshot.md'
---
[@sqlrooms/ai-core](../index.md) / AgentProgressSnapshot

# Type Alias: AgentProgressSnapshot

> **AgentProgressSnapshot** = `object`

Structured snapshot of a sub-agent's progress at the time of abort.
Captured recursively: when a child tool is itself an agent, its
`childSnapshot` contains the nested agent's own progress.
Used to give the parent orchestrator enough context to resume
intelligently when the user types "continue".

## Properties

### agentName

> **agentName**: `string`

***

### completedTools

> **completedTools**: `object`\[]

| Name | Type |
| ------ | ------ |
| `toolName` | `string` |
| `input` | `unknown` |
| `output` | `unknown` |
| `childSnapshot?` | `AgentProgressSnapshot` |

***

### failedTools

> **failedTools**: `object`\[]

| Name | Type |
| ------ | ------ |
| `toolName` | `string` |
| `input` | `unknown` |
| `errorText` | `string` |
| `childSnapshot?` | `AgentProgressSnapshot` |

***

### pendingTools

> **pendingTools**: `object`\[]

| Name | Type |
| ------ | ------ |
| `toolName` | `string` |
| `input` | `unknown` |
| `childSnapshot?` | `AgentProgressSnapshot` |

***

### partialText

> **partialText**: `string`
