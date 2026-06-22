---
url: 'https://sqlrooms.org/api/ai-core/functions/getSessionUserMessageText.md'
---
[@sqlrooms/ai-core](../index.md) / getSessionUserMessageText

# Function: getSessionUserMessageText()

> **getSessionUserMessageText**(`session`): `string`\[]

## Parameters

| Parameter | Type |
| ------ | ------ |
| `session` | { `id`: `string`; `name`: `string`; `modelProvider`: `string`; `model`: `string`; `customModelName?`: `string`; `baseUrl?`: `string`; `createdAt?`: `Date`; `uiMessages`: `object`\[]; `messagesRevision`: `number`; `prompt`: `string`; `draftContextItemIds?`: `string`\[]; `isRunning`: `boolean`; `lastOpenedAt?`: `number`; `runContext?`: {\[`key`: `string`]: `unknown`; `items`: `object`\[]; `primaryItemId?`: `string`; `primaryItemKind?`: `string`; `capturedAt`: `number`; }; `agentProgress?`: `Record`<`string`, `unknown`\[]>; `agentSnapshots?`: `Record`<`string`, {\[`key`: `string`]: `unknown`; `agentName?`: `string`; `parentToolCallId`: `string`; `availableTools`: `object`\[]; `settings?`: { `maxSteps?`: `number`; `model?`: `string`; `provider?`: `string`; }; `startedAt`: `number`; }>; } |
| `session.id` | `string` |
| `session.name` | `string` |
| `session.modelProvider` | `string` |
| `session.model` | `string` |
| `session.customModelName?` | `string` |
| `session.baseUrl?` | `string` |
| `session.createdAt?` | `Date` |
| `session.uiMessages` | `object`\[] |
| `session.messagesRevision` | `number` |
| `session.prompt` | `string` |
| `session.draftContextItemIds?` | `string`\[] |
| `session.isRunning` | `boolean` |
| `session.lastOpenedAt?` | `number` |
| `session.runContext?` | {\[`key`: `string`]: `unknown`; `items`: `object`\[]; `primaryItemId?`: `string`; `primaryItemKind?`: `string`; `capturedAt`: `number`; } |
| `session.runContext.items` | `object`\[] |
| `session.runContext.primaryItemId?` | `string` |
| `session.runContext.primaryItemKind?` | `string` |
| `session.runContext.capturedAt` | `number` |
| `session.agentProgress?` | `Record`<`string`, `unknown`\[]> |
| `session.agentSnapshots?` | `Record`<`string`, {\[`key`: `string`]: `unknown`; `agentName?`: `string`; `parentToolCallId`: `string`; `availableTools`: `object`\[]; `settings?`: { `maxSteps?`: `number`; `model?`: `string`; `provider?`: `string`; }; `startedAt`: `number`; }> |

## Returns

`string`\[]
