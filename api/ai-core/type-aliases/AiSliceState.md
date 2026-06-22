---
url: 'https://sqlrooms.org/api/ai-core/type-aliases/AiSliceState.md'
---
[@sqlrooms/ai-core](../index.md) / AiSliceState

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
| `apiKeyErrors` | `Record`<`string`, `boolean`> | Tracks API key errors per provider (e.g., 401/403 responses) |
| `tools` | [`StoredToolSet`](StoredToolSet.md) | - |
| `toolRenderers` | [`ToolRendererRegistry`](ToolRendererRegistry.md) | - |
| `getProviderOptions?` | `GetProviderOptions` | - |
| `setConfig()` | (`config`) => `void` | - |
| `setPromptSuggestionsVisible()` | (`visible`) => `void` | - |
| `setApiKeyError()` | (`provider`, `hasError`) => `void` | Set API key error flag for a provider |
| `hasApiKeyError()` | () => `boolean` | Check if there's an API key error for the current provider |
| `getAbortController()` | (`sessionId`) => `AbortController` | `undefined` | - |
| `setAbortController()` | (`sessionId`, `controller`) => `void` | - |
| `setChatStop()` | (`sessionId`, `stop`) => `void` | - |
| `getChatStop()` | (`sessionId`) => (() => `void`) | `undefined` | - |
| `setChatSendMessage()` | (`sessionId`, `sendMessage`) => `void` | - |
| `getChatSendMessage()` | (`sessionId`) => `AiChatSendMessage` | `undefined` | - |
| `setAddToolOutput()` | (`sessionId`, `addToolOutput`) => `void` | - |
| `getAddToolOutput()` | (`sessionId`) => [`AddToolOutput`](AddToolOutput.md) | `undefined` | - |
| `setAddToolApprovalResponse()` | (`sessionId`, `fn`) => `void` | - |
| `getAddToolApprovalResponse()` | (`sessionId`) => [`AddToolApprovalResponse`](AddToolApprovalResponse.md) | `undefined` | - |
| `setToolCallSession()` | (`toolCallId`, `sessionId`) => `void` | Map toolCallId -> sessionId for long-running tool streams (e.g. agent tools) |
| `getToolCallSession()` | (`toolCallId`) => `string` | `undefined` | - |
| `agentProgress` | `Record`<`string`, [`AgentToolCall`](AgentToolCall.md)\[]> | Live progress for sub-agent tool calls, keyed by parent toolCallId |
| `updateAgentProgress()` | (`parentToolCallId`, `toolCalls`) => `void` | - |
| `clearAgentProgress()` | (`parentToolCallId`) => `void` | - |
| `devtools` | `AiDevtoolsState` | Devtools-only agent snapshot state and controls. |
| `pendingSubAgentApprovals` | `Record`<`string`, [`PendingSubAgentApproval`](PendingSubAgentApproval.md)> | Pending approval requests from sub-agent tools with needsApproval |
| `requestSubAgentApproval()` | (`approval`) => `void` | - |
| `resolveSubAgentApproval()` | (`approvalId`, `approved`) => `void` | - |
| `clearSubAgentApproval()` | (`approvalId`) => `void` | - |
| `writeAbortSnapshot()` | (`toolCallId`, `snapshot`) => `void` | Transient abort snapshots for nested agent progress propagation |
| `readAbortSnapshot()` | (`toolCallId`) => [`AgentProgressSnapshot`](AgentProgressSnapshot.md) | `undefined` | - |
| `clearAbortSnapshots()` | () => `void` | - |
| `isSummarizing` | `boolean` | True while "summarize and continue" is in progress |
| `setIsSummarizing()` | (`value`) => `void` | - |
| `toolTimings` | `Record`<`string`, [`ToolTimingEntry`](ToolTimingEntry.md)> | Per-tool-call timing entries, keyed by toolCallId |
| `setToolTiming()` | (`toolCallId`, `entry`) => `void` | - |
| `getToolTimings()` | () => `Record`<`string`, [`ToolTimingEntry`](ToolTimingEntry.md)> | - |
| `setPrompt()` | (`sessionId`, `prompt`) => `void` | - |
| `getPrompt()` | (`sessionId`) => `string` | - |
| `setIsRunning()` | (`sessionId`, `isRunning`) => `void` | - |
| `getIsRunning()` | (`sessionId`) => `boolean` | - |
| `addAnalysisResult()` | (`message`) => `void` | - |
| `sendPrompt()` | (`prompt`, `options?`) => `Promise`<`string`> | - |
| `startAnalysis()` | (`sessionId`) => `Promise`<`void`> | - |
| `startNewSession()` | (`name`, `prompt`) => `Promise`<`void`> | - |
| `cancelAnalysis()` | (`sessionId`) => `void` | - |
| `setAiModel()` | (`modelProvider`, `model`) => `void` | - |
| `createSession()` | (`name?`, `modelProvider?`, `model?`) => `void` | - |
| `forkSessionFromMessage()` | (`args`) => `string` | `undefined` | - |
| `getSessionForkOrigin()` | (`sessionId`) => [`AiSessionForkOrigin`](AiSessionForkOrigin.md) | `undefined` | - |
| `switchSession()` | (`sessionId`) => `void` | - |
| `renameSession()` | (`sessionId`, `name`) => `void` | - |
| `deleteSession()` | (`sessionId`) => `void` | - |
| `setOpenSessionTabs()` | (`tabs`) => `void` | - |
| `getCurrentSession()` | () => [`ChatSessionSchema`](ChatSessionSchema.md) | `undefined` | - |
| `getSessionRunContext()` | (`sessionId`) => [`AiRunContext`](AiRunContext.md) | `undefined` | - |
| `setSessionRunContext()` | (`sessionId`, `runContext`) => `void` | - |
| `getSessionDraftContextItemIds()` | (`sessionId`) => `string`\[] | `undefined` | - |
| `setSessionDraftContextItemIds()` | (`sessionId`, `itemIds`) => `void` | - |
| `setSessionUiMessages()` | (`sessionId`, `uiMessages`) => `boolean` | - |
| `getAnalysisResults()` | () => `AnalysisResultSchema`\[] | `undefined` | - |
| `deleteAnalysisResult()` | (`sessionId`, `resultId`) => `void` | - |
| `getAssistantMessageParts()` | (`analysisResultId`) => `UIMessage`\[`"parts"`] | - |
| `findToolRenderer()` | (`toolName`) => [`ToolRenderer`](ToolRenderer.md) | `undefined` | - |
| `getApiKeyFromSettings()` | () => `string` | - |
| `getBaseUrlFromSettings()` | () => `string` | `undefined` | - |
| `getMaxStepsFromSettings()` | () => `number` | - |
| `getFullInstructions()` | (`sessionId?`) => `string` | - |
| `getLocalChatTransport()` | (`sessionId`) => `DefaultChatTransport`<`UIMessage`> | - |
| `chatEndPoint` | `string` | Optional remote endpoint to use for chat; if empty, local transport is used |
| `chatHeaders` | `Record`<`string`, `string`> | - |
| `getRemoteChatTransport()` | (`sessionId`, `endpoint`, `headers?`) => `DefaultChatTransport`<`UIMessage`> | - |
| `onChatFinish()` | (`args`) => `void` | - |
| `onChatError()` | (`sessionId`, `error`, `messages?`) => `void` | - |
