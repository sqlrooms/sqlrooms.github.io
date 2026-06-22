---
url: 'https://sqlrooms.org/api/ai-config/type-aliases/AnalysisSessionSchema.md'
---
[@sqlrooms/ai-config](../index.md) / AnalysisSessionSchema

# ~~Type Alias: AnalysisSessionSchema~~

> **AnalysisSessionSchema** = `object`

## Type Declaration

| Name | Type | Description |
| ------ | ------ | ------ |
|  `id` | `string` | - |
|  `name` | `string` | - |
|  `modelProvider` | `string` | - |
|  `model` | `string` | - |
|  `customModelName?` | `string` | - |
|  `baseUrl?` | `string` | - |
|  `createdAt?` | `Date` | - |
|  `uiMessages` | `object`\[] | - |
|  `messagesRevision` | `number` | Revision counter that increments when messages are deleted, used to force useChat reset |
|  `prompt` | `string` | Per-session analysis prompt text |
|  `draftContextItemIds?` | `string`\[] | Per-session draft context selected in the composer before the next request. |
|  `isRunning` | `boolean` | Per-session flag indicating if analysis is running |
|  `lastOpenedAt?` | `number` | Last time the session was opened/selected (epoch ms) |
|  `runContext?` | {\[`key`: `string`]: `unknown`; `items`: `object`\[]; `primaryItemId?`: `string`; `primaryItemKind?`: `string`; `capturedAt`: `number`; } | Context captured when the current run started. |
|  `agentProgress?` | `Record`<`string`, `unknown`\[]> | Persisted sub-agent tool call trees, keyed by parent toolCallId |
|  `agentSnapshots?` | `Record`<`string`, {\[`key`: `string`]: `unknown`; `agentName?`: `string`; `parentToolCallId`: `string`; `availableTools`: `object`\[]; `settings?`: { `maxSteps?`: `number`; `model?`: `string`; `provider?`: `string`; }; `startedAt`: `number`; }> | Optional persisted agent devtools snapshots, keyed by parent toolCallId |

## Deprecated

Use `ChatSessionSchema` instead.
