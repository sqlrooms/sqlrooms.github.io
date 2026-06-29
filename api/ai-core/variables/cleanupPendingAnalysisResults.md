---
url: 'https://sqlrooms.org/api/ai-core/variables/cleanupPendingAnalysisResults.md'
---
[@sqlrooms/ai-core](../index.md) / cleanupPendingAnalysisResults

# ~~Variable: cleanupPendingAnalysisResults~~

> `const` **cleanupPendingAnalysisResults**: (`session`) => `object` = `cleanupPendingUiMessages`

Cleans up interrupted chat UI messages after reload/abort.

Should be called once when loading persisted session data, not in migrations.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `session` | { `id`: `string`; `name`: `string`; `modelProvider`: `string`; `model`: `string`; `customModelName?`: `string`; `baseUrl?`: `string`; `createdAt?`: `Date`; `uiMessages`: `object`\[]; `messagesRevision`: `number`; `prompt`: `string`; `draftContextItemIds?`: `string`\[]; `isRunning`: `boolean`; `lastOpenedAt?`: `number`; `runContext?`: {\[`key`: `string`]: `unknown`; `items`: `object`\[]; `primaryItemId?`: `string`; `primaryItemKind?`: `string`; `capturedAt`: `number`; }; `agentProgress?`: `Record`<`string`, `unknown`\[]>; `agentSnapshots?`: `Record`<`string`, {\[`key`: `string`]: `unknown`; `agentName?`: `string`; `parentToolCallId`: `string`; `availableTools`: `object`\[]; `settings?`: { `maxSteps?`: `number`; `model?`: `string`; `provider?`: `string`; }; `startedAt`: `number`; }>; } | The session to clean up |
| `session.id` | `string` | - |
| `session.name` | `string` | - |
| `session.modelProvider` | `string` | - |
| `session.model` | `string` | - |
| `session.customModelName?` | `string` | - |
| `session.baseUrl?` | `string` | - |
| `session.createdAt?` | `Date` | - |
| `session.uiMessages` | `object`\[] | - |
| `session.messagesRevision` | `number` | - |
| `session.prompt` | `string` | - |
| `session.draftContextItemIds?` | `string`\[] | - |
| `session.isRunning` | `boolean` | - |
| `session.lastOpenedAt?` | `number` | - |
| `session.runContext?` | {\[`key`: `string`]: `unknown`; `items`: `object`\[]; `primaryItemId?`: `string`; `primaryItemKind?`: `string`; `capturedAt`: `number`; } | - |
| `session.runContext.items` | `object`\[] | - |
| `session.runContext.primaryItemId?` | `string` | - |
| `session.runContext.primaryItemKind?` | `string` | - |
| `session.runContext.capturedAt` | `number` | - |
| `session.agentProgress?` | `Record`<`string`, `unknown`\[]> | - |
| `session.agentSnapshots?` | `Record`<`string`, {\[`key`: `string`]: `unknown`; `agentName?`: `string`; `parentToolCallId`: `string`; `availableTools`: `object`\[]; `settings?`: { `maxSteps?`: `number`; `model?`: `string`; `provider?`: `string`; }; `startedAt`: `number`; }> | - |

## Returns

`object`

The cleaned session with valid UI messages

| Name | Type |
| ------ | ------ |
| `id` | `string` |
| `name` | `string` |
| `modelProvider` | `string` |
| `model` | `string` |
| `customModelName?` | `string` |
| `baseUrl?` | `string` |
| `createdAt?` | `Date` |
| `uiMessages` | `object`\[] |
| `messagesRevision` | `number` |
| `prompt` | `string` |
| `draftContextItemIds?` | `string`\[] |
| `isRunning` | `boolean` |
| `lastOpenedAt?` | `number` |
| `runContext?` | {\[`key`: `string`]: `unknown`; `items`: `object`\[]; `primaryItemId?`: `string`; `primaryItemKind?`: `string`; `capturedAt`: `number`; } |
| `agentProgress?` | `Record`<`string`, `unknown`\[]> |
| `agentSnapshots?` | `Record`<`string`, {\[`key`: `string`]: `unknown`; `agentName?`: `string`; `parentToolCallId`: `string`; `availableTools`: `object`\[]; `settings?`: { `maxSteps?`: `number`; `model?`: `string`; `provider?`: `string`; }; `startedAt`: `number`; }> |

## Deprecated

Use `cleanupPendingUiMessages` instead.
