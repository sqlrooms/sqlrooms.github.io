---
url: 'https://sqlrooms.org/api/ai/interfaces/AiSliceOptions.md'
---
[@sqlrooms/ai](../index.md) / AiSliceOptions

# Interface: AiSliceOptions\<TTools>

Configuration options for creating an AI slice.

`TTools` is inferred from the `tools` value and constrains `toolRenderers`:

* Keys must be present in `tools`
* Each renderer's `output` prop is typed to that tool's return type

## Example

```ts
createAiSlice({
  tools: {query: createQueryTool(store), chart: createVegaChartTool()},
  toolRenderers: {
    query: QueryToolResult,        // ToolRenderer<QueryToolOutput>
    chart: VegaChartToolResult,    // ToolRenderer<VegaChartToolOutput>
    TYPO: SomeRenderer,            // compile error — not a key of tools
  },
})
```

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TTools` *extends* `ToolSet` | `ToolSet` |

## Properties

### config?

> `optional` **config?**: `Partial`<{ `sessions`: `object`\[]; `currentSessionId?`: `string`; `openSessionTabs?`: `string`\[]; `sessionForks`: `z.ZodDefault`<`z.ZodRecord`<`z.ZodString`, `z.ZodObject`<{ `sourceSessionId`: `z.ZodString`; `sourceMessageId`: `z.ZodOptional`<`z.ZodString`>; `sourceTurnId`: `z.ZodOptional`<`z.ZodString`>; `sourceMessageIndex`: `z.ZodOptional`<`z.ZodNumber`>; `legacySourceAnalysisResultId`: `z.ZodOptional`<`z.ZodString`>; `sourceSessionNameAtFork`: `z.ZodString`; `createdAt`: `z.ZodNumber`; }, `z.core.$strip`>>>; }>

***

### initialPrompt?

> `optional` **initialPrompt?**: `string`

***

### tools

> **tools**: `TTools`

***

### toolRenderers?

> `optional` **toolRenderers?**: [`ToolRenderers`](../type-aliases/ToolRenderers.md)<`TTools`>

***

### getInstructions

> **getInstructions**: (`args?`) => `string`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args?` | { `session?`: { `id`: `string`; `name`: `string`; `modelProvider`: `string`; `model`: `string`; `customModelName?`: `string`; `baseUrl?`: `string`; `createdAt?`: `Date`; `uiMessages`: `object`\[]; `messagesRevision`: `number`; `prompt`: `string`; `draftContextItemIds?`: `string`\[]; `isRunning`: `boolean`; `lastOpenedAt?`: `number`; `runContext?`: {\[`key`: `string`]: `unknown`; `items`: `object`\[]; `primaryItemId?`: `string`; `primaryItemKind?`: `string`; `capturedAt`: `number`; }; `agentProgress?`: `Record`<`string`, `unknown`\[]>; `agentSnapshots?`: `Record`<`string`, {\[`key`: `string`]: `unknown`; `agentName?`: `string`; `parentToolCallId`: `string`; `availableTools`: `object`\[]; `settings?`: { `maxSteps?`: ... | ...; `model?`: ... | ...; `provider?`: ... | ...; }; `startedAt`: `number`; }>; }; `runContext?`: {\[`key`: `string`]: `unknown`; `items`: `object`\[]; `primaryItemId?`: `string`; `primaryItemKind?`: `string`; `capturedAt`: `number`; }; } |
| `args.session?` | { `id`: `string`; `name`: `string`; `modelProvider`: `string`; `model`: `string`; `customModelName?`: `string`; `baseUrl?`: `string`; `createdAt?`: `Date`; `uiMessages`: `object`\[]; `messagesRevision`: `number`; `prompt`: `string`; `draftContextItemIds?`: `string`\[]; `isRunning`: `boolean`; `lastOpenedAt?`: `number`; `runContext?`: {\[`key`: `string`]: `unknown`; `items`: `object`\[]; `primaryItemId?`: `string`; `primaryItemKind?`: `string`; `capturedAt`: `number`; }; `agentProgress?`: `Record`<`string`, `unknown`\[]>; `agentSnapshots?`: `Record`<`string`, {\[`key`: `string`]: `unknown`; `agentName?`: `string`; `parentToolCallId`: `string`; `availableTools`: `object`\[]; `settings?`: { `maxSteps?`: ... | ...; `model?`: ... | ...; `provider?`: ... | ...; }; `startedAt`: `number`; }>; } |
| `args.session.id?` | `string` |
| `args.session.name?` | `string` |
| `args.session.modelProvider?` | `string` |
| `args.session.model?` | `string` |
| `args.session.customModelName?` | `string` |
| `args.session.baseUrl?` | `string` |
| `args.session.createdAt?` | `Date` |
| `args.session.uiMessages?` | `object`\[] |
| `args.session.messagesRevision?` | `number` |
| `args.session.prompt?` | `string` |
| `args.session.draftContextItemIds?` | `string`\[] |
| `args.session.isRunning?` | `boolean` |
| `args.session.lastOpenedAt?` | `number` |
| `args.session.runContext?` | {\[`key`: `string`]: `unknown`; `items`: `object`\[]; `primaryItemId?`: `string`; `primaryItemKind?`: `string`; `capturedAt`: `number`; } |
| `args.session.runContext.items?` | `object`\[] |
| `args.session.runContext.primaryItemId?` | `string` |
| `args.session.runContext.primaryItemKind?` | `string` |
| `args.session.runContext.capturedAt?` | `number` |
| `args.session.agentProgress?` | `Record`<`string`, `unknown`\[]> |
| `args.session.agentSnapshots?` | `Record`<`string`, {\[`key`: `string`]: `unknown`; `agentName?`: `string`; `parentToolCallId`: `string`; `availableTools`: `object`\[]; `settings?`: { `maxSteps?`: ... | ...; `model?`: ... | ...; `provider?`: ... | ...; }; `startedAt`: `number`; }> |
| `args.runContext?` | {\[`key`: `string`]: `unknown`; `items`: `object`\[]; `primaryItemId?`: `string`; `primaryItemKind?`: `string`; `capturedAt`: `number`; } |
| `args.runContext.items?` | `object`\[] |
| `args.runContext.primaryItemId?` | `string` |
| `args.runContext.primaryItemKind?` | `string` |
| `args.runContext.capturedAt?` | `number` |

#### Returns

`string`

***

### getRunContext?

> `optional` **getRunContext?**: (`sessionId`) => {\[`key`: `string`]: `unknown`; `items`: `object`\[]; `primaryItemId?`: `string`; `primaryItemKind?`: `string`; `capturedAt`: `number`; } | `undefined`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `sessionId` | `string` |

#### Returns

{\[`key`: `string`]: `unknown`; `items`: `object`\[]; `primaryItemId?`: `string`; `primaryItemKind?`: `string`; `capturedAt`: `number`; } | `undefined`

***

### formatRunContextInstructions?

> `optional` **formatRunContextInstructions?**: (`args`) => `string`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | { `runContext`: {\[`key`: `string`]: `unknown`; `items`: `object`\[]; `primaryItemId?`: `string`; `primaryItemKind?`: `string`; `capturedAt`: `number`; }; `session?`: { `id`: `string`; `name`: `string`; `modelProvider`: `string`; `model`: `string`; `customModelName?`: `string`; `baseUrl?`: `string`; `createdAt?`: `Date`; `uiMessages`: `object`\[]; `messagesRevision`: `number`; `prompt`: `string`; `draftContextItemIds?`: `string`\[]; `isRunning`: `boolean`; `lastOpenedAt?`: `number`; `runContext?`: {\[`key`: `string`]: `unknown`; `items`: `object`\[]; `primaryItemId?`: `string`; `primaryItemKind?`: `string`; `capturedAt`: `number`; }; `agentProgress?`: `Record`<`string`, `unknown`\[]>; `agentSnapshots?`: `Record`<`string`, {\[`key`: `string`]: `unknown`; `agentName?`: `string`; `parentToolCallId`: `string`; `availableTools`: `object`\[]; `settings?`: { `maxSteps?`: ... | ...; `model?`: ... | ...; `provider?`: ... | ...; }; `startedAt`: `number`; }>; }; } |
| `args.runContext` | {\[`key`: `string`]: `unknown`; `items`: `object`\[]; `primaryItemId?`: `string`; `primaryItemKind?`: `string`; `capturedAt`: `number`; } |
| `args.runContext.items` | `object`\[] |
| `args.runContext.primaryItemId?` | `string` |
| `args.runContext.primaryItemKind?` | `string` |
| `args.runContext.capturedAt` | `number` |
| `args.session?` | { `id`: `string`; `name`: `string`; `modelProvider`: `string`; `model`: `string`; `customModelName?`: `string`; `baseUrl?`: `string`; `createdAt?`: `Date`; `uiMessages`: `object`\[]; `messagesRevision`: `number`; `prompt`: `string`; `draftContextItemIds?`: `string`\[]; `isRunning`: `boolean`; `lastOpenedAt?`: `number`; `runContext?`: {\[`key`: `string`]: `unknown`; `items`: `object`\[]; `primaryItemId?`: `string`; `primaryItemKind?`: `string`; `capturedAt`: `number`; }; `agentProgress?`: `Record`<`string`, `unknown`\[]>; `agentSnapshots?`: `Record`<`string`, {\[`key`: `string`]: `unknown`; `agentName?`: `string`; `parentToolCallId`: `string`; `availableTools`: `object`\[]; `settings?`: { `maxSteps?`: ... | ...; `model?`: ... | ...; `provider?`: ... | ...; }; `startedAt`: `number`; }>; } |
| `args.session.id` | `string` |
| `args.session.name` | `string` |
| `args.session.modelProvider` | `string` |
| `args.session.model` | `string` |
| `args.session.customModelName?` | `string` |
| `args.session.baseUrl?` | `string` |
| `args.session.createdAt?` | `Date` |
| `args.session.uiMessages` | `object`\[] |
| `args.session.messagesRevision` | `number` |
| `args.session.prompt` | `string` |
| `args.session.draftContextItemIds?` | `string`\[] |
| `args.session.isRunning` | `boolean` |
| `args.session.lastOpenedAt?` | `number` |
| `args.session.runContext?` | {\[`key`: `string`]: `unknown`; `items`: `object`\[]; `primaryItemId?`: `string`; `primaryItemKind?`: `string`; `capturedAt`: `number`; } |
| `args.session.runContext.items` | `object`\[] |
| `args.session.runContext.primaryItemId?` | `string` |
| `args.session.runContext.primaryItemKind?` | `string` |
| `args.session.runContext.capturedAt` | `number` |
| `args.session.agentProgress?` | `Record`<`string`, `unknown`\[]> |
| `args.session.agentSnapshots?` | `Record`<`string`, {\[`key`: `string`]: `unknown`; `agentName?`: `string`; `parentToolCallId`: `string`; `availableTools`: `object`\[]; `settings?`: { `maxSteps?`: ... | ...; `model?`: ... | ...; `provider?`: ... | ...; }; `startedAt`: `number`; }> |

#### Returns

`string`

***

### defaultProvider?

> `optional` **defaultProvider?**: `string`

***

### defaultModel?

> `optional` **defaultModel?**: `string`

***

### getAvailableModels?

> `optional` **getAvailableModels?**: () => `object`\[]

#### Returns

`object`\[]

***

### getCustomModel?

> `optional` **getCustomModel?**: () => `LanguageModel` | `undefined`

Provide a pre-configured model client for a provider (e.g., Azure).

#### Returns

`LanguageModel` | `undefined`

***

### getProviderOptions?

> `optional` **getProviderOptions?**: `GetProviderOptions`

***

### maxSteps?

> `optional` **maxSteps?**: `number`

***

### getApiKey?

> `optional` **getApiKey?**: (`modelProvider`) => `string`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `modelProvider` | `string` |

#### Returns

`string`

***

### getBaseUrl?

> `optional` **getBaseUrl?**: () => `string`

#### Returns

`string`

***

### chatEndPoint?

> `optional` **chatEndPoint?**: `string`

Optional remote endpoint to use for chat; if empty, local transport is used

***

### chatHeaders?

> `optional` **chatHeaders?**: `Record`<`string`, `string`>

Optional headers to send with remote endpoint

***

### onChatFinish?

> `optional` **onChatFinish?**: (`args`) => `void`

Called after a non-aborted chat turn has been persisted and fully ended.

Host apps can use this to compose AI turns with app-level behavior such as
creating a follow-up session from a completed assistant message.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | { `sessionId`: `string`; `messages`: `UIMessage`<`unknown`, `UIDataTypes`, `UITools`>\[]; } |
| `args.sessionId` | `string` |
| `args.messages` | `UIMessage`<`unknown`, `UIDataTypes`, `UITools`>\[] |

#### Returns

`void`

***

### devtools?

> `optional` **devtools?**: `object`

Optional devtools-only capture controls. Defaults are all disabled.

| Name | Type |
| ------ | ------ |
| `captureAgentSnapshots?` | `boolean` |
| `persistAgentSnapshots?` | `boolean` |
| `maxAgentSnapshotBytes?` | `number` |
