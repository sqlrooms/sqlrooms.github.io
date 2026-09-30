---
url: https://sqlrooms.org/api/ai/type-aliases/AiSliceState.md
---
[@sqlrooms/ai](../index.md) / AiSliceState

# Type Alias: AiSliceState

> **AiSliceState** = `object`

## Properties

### ai

> **ai**: `object`

| Name | Type | Description |
| ------ | ------ | ------ |
| `initialize()?` | () => `Promise`<`void`> | - |
| `destroy()?` | () => `Promise`<`void`> | - |
| `config` | [`AiSliceConfig`](AiSliceConfig.md) | - |
| `promptSuggestionsVisible` | `boolean` | - |
| `draftPrompt` | `string` | Transient composer prompt used before the first session is created. |
| `apiKeyErrors` | `Record`<`string`, `boolean`> | Tracks API key errors per provider (e.g., 401/403 responses) |
| `tools` | [`StoredToolSet`](StoredToolSet.md) | - |
| `toolRenderers` | [`ToolRendererRegistry`](ToolRendererRegistry.md) | - |
| `remoteClientToolNames` | `string`\[] | Executable local tools that await browser output with remote chat. |
| `timeouts` | `AiTimeoutOptions` | Opt-in timeout policy for chat runs and tool execution. |
| `getProviderOptions?` | `GetProviderOptions` | - |
| `setConfig()` | (`config`) => `void` | - |
| `setPromptSuggestionsVisible()` | (`visible`) => `void` | - |
| `setDraftPrompt()` | (`prompt`) => `void` | Update the transient composer prompt used when no session is active. |
| `setApiKeyError()` | (`provider`, `hasError`) => `void` | Set API key error flag for a provider |
| `hasApiKeyError()` | () => `boolean` | Check if there's an API key error for the current provider |
| `getAbortController()` | (`sessionId`) => `AbortController` | `undefined` | - |
| `setAbortController()` | (`sessionId`, `controller`) => `void` | - |
| `getSessionChat()` | (`sessionId`) => `Chat`<`UIMessage`> | `undefined` | Return the ephemeral AI SDK chat for a session. |
| `setToolCallSession()` | (`toolCallId`, `sessionId`) => `void` | Map toolCallId -> sessionId for long-running tool streams (e.g. agent tools) |
| `getToolCallSession()` | (`toolCallId`) => `string` | `undefined` | - |
| `agentProgress` | `Record`<`string`, [`AgentToolCall`](AgentToolCall.md)\[]> | Live progress for sub-agent tool calls, keyed by parent toolCallId |
| `updateAgentProgress()` | (`parentToolCallId`, `toolCalls`) => `void` | - |
| `clearAgentProgress()` | (`parentToolCallId`) => `void` | - |
| `devtools` | `AiDevtoolsState` | Devtools-only agent snapshot state and controls. |
| `pendingSubAgentApprovals` | `Record`<`string`, `PendingSubAgentApproval`> | Pending approval requests from sub-agent tools with needsApproval |
| `requestSubAgentApproval()` | (`approval`) => `void` | - |
| `resolveSubAgentApproval()` | (`approvalId`, `approved`) => `void` | - |
| `clearSubAgentApproval()` | (`approvalId`) => `void` | - |
| `writeAbortSnapshot()` | (`toolCallId`, `snapshot`) => `void` | Transient abort snapshots for nested agent progress propagation |
| `readAbortSnapshot()` | (`toolCallId`) => `AgentProgressSnapshot` | `undefined` | - |
| `clearAbortSnapshots()` | () => `void` | - |
| `isSummarizing` | `boolean` | True while "summarize and continue" is in progress |
| `setIsSummarizing()` | (`value`) => `void` | - |
| `toolTimings` | `Record`<`string`, `ToolTimingEntry`> | Per-tool-call timing entries, keyed by toolCallId |
| `setToolTiming()` | (`toolCallId`, `entry`) => `void` | - |
| `getToolTimings()` | () => `Record`<`string`, `ToolTimingEntry`> | - |
| `setPrompt()` | (`sessionId`, `prompt`) => `void` | - |
| `getPrompt()` | (`sessionId`) => `string` | - |
| `setIsRunning()` | (`sessionId`, `isRunning`) => `void` | - |
| `getIsRunning()` | (`sessionId`) => `boolean` | - |
| `addAnalysisResult()` | (`message`) => `void` | - |
| `sendPrompt()` | (`prompt`, `options?`) => `Promise`<`string`> | - |
| `startAnalysis()` | (`sessionId`, `attachments?`) => `Promise`<`void`> | - |
| `startAnalysisWhenReady()` | (`sessionId`, `attachments?`) => `Promise`<`boolean`> | Compatibility entry point; session controllers are ready synchronously. |
| `startNewSession()` | (`name`, `prompt`) => `Promise`<`void`> | - |
| `cancelAnalysis()` | (`sessionId`) => `void` | - |
| `setAiModel()` | (`modelProvider`, `model`) => `void` | - |
| `getSelectedModel()` | () => `ModelSelection` | Resolve the model/provider that would be used right now: the current session's selection when a session exists, otherwise the default that a lazily created session would receive. Useful before any session exists, e.g. to know which provider a first-time API key belongs to. |
| `hasResolvableModel()` | () => `boolean` | Whether a model is resolvable by *any* configured path: a custom-model factory supplied to [AiSliceOptions.getCustomModel](../interfaces/AiSliceOptions.md#getcustommodel), or — once a session exists — its provider/model pair being present in the `@sqlrooms/ai-settings` model list. With no session yet, the resolved default is assumed available. Only checks that a factory **was configured**; never calls it, since invoking it may have side effects and a factory returning `undefined` means "configured but not currently ready". Prefer this over re-deriving readiness from `aiSettings.config`, so UI and runtime agree on one source of truth. |
| `requiresApiKey()` | () => `boolean` | Whether the model resolution path in effect needs a browser-held API key. `false` only when a `chatEndPoint` is configured (the request is sent server-side), or when [AiSliceOptions.getCustomModel](../interfaces/AiSliceOptions.md#getcustommodel) is configured *and currently returns a model*, which carries its own credentials. A factory returning `undefined` still needs one: the transport then falls back to the built-in OpenAI-compatible client. Unlike [AiSliceState.ai.hasResolvableModel](#ai) this **invokes the factory**, so keep it cheap — it is called during render. The result is cached per selection and retired when the AI settings change. |
| `createSession()` | (`name?`, `modelProvider?`, `model?`) => `string` | Create a new chat session, make it the current session, and open it in a tab. When `modelProvider`/`model` are omitted the current selection (or configured defaults) are used. |
| `forkSessionFromMessage()` | (`args`) => `string` | `undefined` | - |
| `getSessionForkOrigin()` | (`sessionId`) => [`AiSessionForkOrigin`](AiSessionForkOrigin.md) | `undefined` | - |
| `switchSession()` | (`sessionId`) => `void` | - |
| `resetCurrentSession()` | () => `void` | Clear the current session selection (sets `currentSessionId` to `undefined`) without deleting any session, returning the UI to the start/new-chat state. A fresh session is created lazily on the next message. |
| `renameSession()` | (`sessionId`, `name`) => `void` | - |
| `deleteSession()` | (`sessionId`) => `void` | - |
| `setOpenSessionTabs()` | (`tabs`) => `void` | - |
| `togglePinSession()` | (`sessionId`) => `void` | Toggle the pinned state of a session. Pinning an unknown session id is a no-op; unpinning is always allowed (also used to drop stale ids). |
| `isPinnedSession()` | (`sessionId`) => `boolean` |  |
| `getCurrentSession()` | () => [`ChatSessionSchema`](ChatSessionSchema.md) | `undefined` | - |
| `getSessionRunContext()` | (`sessionId`) => [`AiRunContext`](AiRunContext.md) | `undefined` | - |
| `setSessionRunContext()` | (`sessionId`, `runContext`) => `void` | - |
| `getSessionDraftContextItemIds()` | (`sessionId`) => `string`\[] | `undefined` | - |
| `setSessionDraftContextItemIds()` | (`sessionId`, `itemIds`) => `void` | - |
| `setSessionUiMessages()` | (`sessionId`, `uiMessages`) => `boolean` | - |
| `persistTimedOutSession()` | (`sessionId`, `uiMessages`, `timeoutMessage`) => `void` | Persist a terminal timeout result and force the chat runtime to reload. |
| `getAnalysisResults()` | () => [`AnalysisResultSchema`](AnalysisResultSchema.md)\[] | `undefined` | - |
| `deleteAnalysisResult()` | (`sessionId`, `resultId`) => `void` | - |
| `getAssistantMessageParts()` | (`analysisResultId`) => `UIMessage`\[`"parts"`] | - |
| `findToolRenderer()` | (`toolName`) => [`ToolRenderer`](ToolRenderer.md) | `undefined` | - |
| `getApiKeyFromSettings()` | (`provider?`, `model?`) => `string` | Resolve the API key for the outbound provider. When `provider`/`model` are omitted the current session's provider (or the default) is used; callers targeting a specific provider (e.g. one-shot `sendPrompt`) must pass it so the key matches the endpoint the request is sent to. |
| `getBaseUrlFromSettings()` | (`provider?`, `model?`) => `string` | `undefined` | Resolve the base URL for the outbound provider. See [AiSliceState.ai.getApiKeyFromSettings](#ai) for the `provider`/`model` override semantics. |
| `getMaxStepsFromSettings()` | () => `number` | - |
| `getFullInstructions()` | (`sessionId?`) => `string` | - |
| `getLocalChatTransport()` | (`sessionId`) => `DefaultChatTransport`<`UIMessage`> | - |
| `chatEndPoint` | `string` | Optional remote endpoint to use for chat; if empty, local transport is used |
| `chatHeaders` | `Record`<`string`, `string`> | - |
| `getRemoteChatTransport()` | (`sessionId`, `endpoint`, `headers?`) => `DefaultChatTransport`<`UIMessage`> | - |
| `onChatFinish()` | (`args`) => `void` | - |
| `onChatError()` | (`sessionId`, `error`, `messages?`) => `void` | - |
