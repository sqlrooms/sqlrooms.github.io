---
url: 'https://sqlrooms.org/api/ai-core/type-aliases/ChatSessionSchema.md'
---
[@sqlrooms/ai-core](../index.md) / ChatSessionSchema

# Type Alias: ChatSessionSchema

> **ChatSessionSchema** = `object`

## Type Declaration

| Name | Type |
| ------ | ------ |
|  `id` | `string` |
|  `name` | `string` |
|  `modelProvider` | `string` |
|  `model` | `string` |
|  `customModelName?` | `string` |
|  `baseUrl?` | `string` |
|  `createdAt?` | `Date` |
|  `uiMessages` | `object`\[] |
|  `messagesRevision` | `number` |
|  `prompt` | `string` |
|  `draftContextItemIds?` | `string`\[] |
|  `isRunning` | `boolean` |
|  `lastOpenedAt?` | `number` |
|  `runContext?` | {\[`key`: `string`]: `unknown`; `items`: `object`\[]; `primaryItemId?`: `string`; `primaryItemKind?`: `string`; `capturedAt`: `number`; } |
|  `agentProgress?` | `Record`<`string`, `unknown`\[]> |
|  `agentSnapshots?` | `Record`<`string`, {\[`key`: `string`]: `unknown`; `agentName?`: `string`; `parentToolCallId`: `string`; `availableTools`: `object`\[]; `settings?`: { `maxSteps?`: `number`; `model?`: `string`; `provider?`: `string`; }; `startedAt`: `number`; }> |
