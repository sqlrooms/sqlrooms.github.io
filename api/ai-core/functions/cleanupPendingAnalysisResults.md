---
url: /api/ai-core/functions/cleanupPendingAnalysisResults.md
---
[@sqlrooms/ai-core](../index.md) / cleanupPendingAnalysisResults

# Function: cleanupPendingAnalysisResults()

> **cleanupPendingAnalysisResults**(`session`): `object`

Cleans up pending analysis results from interrupted conversations and restores them
with proper IDs from actual user messages. This handles the case where a page refresh
occurred during an active analysis, leaving orphaned "**pending**" results.

Should be called once when loading persisted session data, not in migrations.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `session` | { `id`: `string`; `name`: `string`; `modelProvider`: `string`; `model`: `string`; `customModelName?`: `string`; `baseUrl?`: `string`; `analysisResults`: `object`\[]; `createdAt?`: `Date`; `uiMessages`: `object`\[]; `toolAdditionalData?`: `Record`<`string`, `unknown`>; `messagesRevision`: `number`; `prompt`: `string`; `isRunning`: `boolean`; } | The session to clean up |
| `session.id` | `string` | - |
| `session.name` | `string` | - |
| `session.modelProvider` | `string` | - |
| `session.model` | `string` | - |
| `session.customModelName?` | `string` | - |
| `session.baseUrl?` | `string` | - |
| `session.analysisResults` | `object`\[] | - |
| `session.createdAt?` | `Date` | - |
| `session.uiMessages` | `object`\[] | - |
| `session.toolAdditionalData?` | `Record`<`string`, `unknown`> | - |
| `session.messagesRevision` | `number` | - |
| `session.prompt` | `string` | - |
| `session.isRunning` | `boolean` | - |

## Returns

`object`

The cleaned session with restored analysis results

| Name | Type |
| ------ | ------ |
| `id` | `string` |
| `name` | `string` |
| `modelProvider` | `string` |
| `model` | `string` |
| `customModelName?` | `string` |
| `baseUrl?` | `string` |
| `analysisResults` | `object`\[] |
| `createdAt?` | `Date` |
| `uiMessages` | `object`\[] |
| `toolAdditionalData?` | `Record`<`string`, `unknown`> |
| `messagesRevision` | `number` |
| `prompt` | `string` |
| `isRunning` | `boolean` |
