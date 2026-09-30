---
url: https://sqlrooms.org/api/ai.md
---
# @sqlrooms/ai

High-level AI package for SQLRooms.

This package combines:

* AI slice state/logic (`@sqlrooms/ai-core`)
* AI settings UI/state (`@sqlrooms/ai-settings`)
* AI config schemas (`@sqlrooms/ai-config`)
* SQL query and schema discovery tool helpers (`createDefaultAiTools`, `createQueryTool`)

Use this package when you want AI chat + tool execution in a SQLRooms app without wiring low-level pieces manually.

`createDefaultAiInstructions` includes a hybrid DuckDB table context: small
current-database `main` catalogs include full schemas for every table, while
larger catalogs include a few full schemas, additional table names with row
counts, and instructions to call
`read_table_schema` before querying tables whose columns are not shown.
`createDefaultAiTools` registers `list_tables` and `read_table_schema` by
default so apps can expose the same table discovery workflow. These tools
search the current database `main` schema by default, and accept broader
`schema`, `database`, and pattern filters for other visible schemas or attached
databases.

`createDefaultAiTools` also registers command-layer tools when the room store
has a command registry:

* `search_commands` for compact intent-based command discovery;
* `get_command` for full command metadata and input schema after selecting a
  command;
* `execute_command` for invoking the selected command;
* `list_commands` for broad command-registry debugging.

Model-facing flows should prefer
`search_commands -> get_command (when input schema is needed) -> execute_command`
instead of repeatedly listing the full command catalog. Keep schemas out of
search results by default; commands with `requiresInput: false` can run with
default input without a schema lookup. Search covers registered commands only;
other directly available AI tools should be called directly.

Search requires text relevance before applying resource/action hints or
availability bonuses. It ignores common filler words and matches query tokens
as words or command-ID segments. Read requests (`get`, `read`, `list`, `show`,
`inspect`) favor relevant read-only commands; exact command IDs retain priority.
Resource and action parameters remain ranking hints, while `riskLevel` is a
filter. Unmatched queries return zero commands; an empty query can still browse
the catalog. The reported match count is computed before the result limit.

`execute_command` refuses high-risk or
confirmation-required commands until the caller sets `confirmed: true` after an
explicit user confirmation. Skill runtimes can pass `skillId`, `toolCallId`,
`traceId`, and metadata through tool execution options; the command invocation
receives those fields for trace callbacks. When the current AI run has a
primary artifact context item, command tools also propagate it as the
invocation target. They read the mutable tool execution context first and fall
back to the invoking session's stored run context, never the visibly selected
chat. This keeps omitted artifact targets stable for the turn while allowing
`set_primary_context_artifact` to retarget later calls in the same turn.
`DEFAULT_SKILL_RUNTIME_TOOL_POLICY`
documents the default command, artifact-context, table/query, and high-level
agent tool policy for future skill runtimes. Hosts with product-specific agent
tool names can call `createSkillRuntimeToolPolicy()` to substitute names such
as their own block document agent while keeping the package defaults generic.

Hosts can scope a command tool instance with `commandGuard`. Denied descriptors
are omitted from `search_commands`, `list_commands`, and `get_command`, and
`execute_command` refuses them before validation, confirmation, or invocation.
The refusal uses `command-not-available-to-caller` unless the guard supplies a
custom code; a custom message can direct the model to an owning agent tool.
Direct `store.commands.invokeCommand` calls are unaffected.

```tsx
const commandTools = createCommandTools(store, {
  commandGuard: (descriptor) =>
    descriptor.id.startsWith('block-document.') && !descriptor.readOnly
      ? {
          allowed: false,
          code: 'use-document-agent',
          message: 'Use the document agent tool for document edits.',
        }
      : {allowed: true},
});
```

## Installation

```bash
npm install @sqlrooms/ai @sqlrooms/room-shell @sqlrooms/duckdb @sqlrooms/ui
```

## Quick start

```tsx
import {
  AiSettingsSliceState,
  AiSliceState,
  createAiSettingsSlice,
  createAiSlice,
  createDefaultAiInstructions,
  createDefaultAiTools,
} from '@sqlrooms/ai';
import {
  createRoomShellSlice,
  createRoomStore,
  RoomShellSliceState,
} from '@sqlrooms/room-shell';

type RoomState = RoomShellSliceState & AiSliceState & AiSettingsSliceState;

export const {roomStore, useRoomStore} = createRoomStore<RoomState>(
  (set, get, store) => ({
    ...createRoomShellSlice({
      config: {
        dataSources: [
          {
            type: 'url',
            tableName: 'earthquakes',
            url: 'https://huggingface.co/datasets/sqlrooms/earthquakes/resolve/main/earthquakes.parquet',
          },
        ],
      },
    })(set, get, store),

    ...createAiSettingsSlice()(set, get, store),

    ...createAiSlice({
      tools: {
        ...createDefaultAiTools(store),
      },
      getInstructions: () => createDefaultAiInstructions(store),
      // Optional: observe completed, non-aborted turns for app-owned behavior
      // such as audit logging or analytics.
      onChatFinish: ({sessionId, messages}) => {
        void sessionId;
        void messages;
      },
    })(set, get, store),
  }),
);
```

## Render chat UI

```tsx
import {Chat} from '@sqlrooms/ai';
import {useRoomStore} from './store';

function AiPanel() {
  const updateProvider = useRoomStore(
    (state) => state.aiSettings.updateProvider,
  );

  return (
    <Chat>
      <Chat.Sessions />
      <Chat.Messages />
      <Chat.PromptSuggestions>
        <Chat.PromptSuggestions.Item text="Summarize the available tables" />
      </Chat.PromptSuggestions>
      <Chat.Composer placeholder="Ask a question about your data">
        <Chat.InlineApiKeyInput
          onSaveApiKey={(provider, apiKey) => {
            updateProvider(provider, {apiKey});
          }}
        />
        <Chat.Composer.Attachments />
        <Chat.ModelSelector />
      </Chat.Composer>
    </Chat>
  );
}
```

`Chat.Composer.Attachments` is opt-in. It accepts images plus plain-text and
Markdown files through explicit choices in the paperclip menu, shows removable
previews before sending, and renders posted attachments as clickable previews
that open in a larger dialog.

### Customize chat presentation

`Chat.Rendering` accepts a partial set of presentation slots. Unspecified slots
keep the SQLRooms defaults, so an app can replace one region or row without
reimplementing the rest of the chat. `ToolActivity` is used for top-level and
nested tool rows; recursive agent progress and non-hoisted rich tool content
remain pre-wired when that row is customized.

```tsx
import {
  Chat,
  type ChatActivityProps,
  type ChatToolActivityProps,
} from '@sqlrooms/ai';

function AppActivity({children, isRunning}: ChatActivityProps) {
  return <section aria-busy={isRunning}>{children}</section>;
}

function AppToolActivity({toolCall, isAgent}: ChatToolActivityProps) {
  return (
    <div>
      {isAgent ? 'Agent' : 'Tool'}: {toolCall.toolName}
    </div>
  );
}

function AiMessages() {
  return (
    <Chat.Rendering
      components={{
        Activity: AppActivity,
        ToolActivity: AppToolActivity,
      }}
    >
      <Chat.Messages />
    </Chat.Rendering>
  );
}
```

Use the `Turn` slot for a custom overall layout. Its semantic regions expose
pre-wired `Content` components, while activity items and action capabilities
remain available for deeper composition.

## Block-scoped Ask AI actions

`createAskAiBlockHeaderAction(...)` builds a block-header actions renderer for
hosts that expose Ask AI on selected block types. The host controls the
`supportsAiEditing` policy and owns the submit flow; `onSubmit` receives the
block-document target context plus the submitted prompt. Pass the returned
renderer to the block-document chart/stateful renderer providers.

```tsx
import {createAskAiBlockHeaderAction} from '@sqlrooms/ai';

const renderBlockHeaderActions = createAskAiBlockHeaderAction({
  supportsAiEditing: (blockType) => ['chart', 'map'].includes(blockType),
  onSubmit: (target, prompt) => {
    void openBlockScopedChat({target, prompt});
  },
});
```

`BlockAiPromptPopover` is also re-exported for hosts that need a custom trigger
or placement. The public integration types are
`AskAiBlockHeaderActionRenderContext`, `CreateAskAiBlockHeaderActionOptions`,
and `BlockAiPromptPopoverProps`.

## Generate Chat Titles

`generateSessionTitle` turns a session's early user messages into a concise title
via `ai.sendPrompt`, cleans the model output, and renames the session.
`useGenerateSessionTitle` wraps that helper for React surfaces that should watch
the current session and trigger title generation after new user messages. Apps
can keep product-specific policy outside the shared package by passing options
such as `enabled`, `isDefaultSessionName`, and `getPromptOptions`.

```tsx
import {Chat, useGenerateSessionTitle} from '@sqlrooms/ai';

function AiPanel() {
  useGenerateSessionTitle({
    enabled: true,
    getPromptOptions: () => ({useTools: false}),
  });

  return (
    <Chat>
      <Chat.Messages />
      <Chat.Composer />
    </Chat>
  );
}
```

## Chat search

`Chat` renders a `ChatSearchProvider` and exposes `Chat.Search`, an in-conversation
find bar that highlights matches in the current session's messages.

For building search UIs outside the chat (e.g. a session list that searches across
all sessions), the underlying matching primitives are re-exported and can be used
without the provider:

* `normalizeChatSearchQuery(query)` — trims + lower-cases a query (the casing rule
  the search uses).
* `findChatSearchMatches(blocks, query)` — returns positional matches
  (`ChatSearchMatch[]`) for a list of `ChatSearchBlock`s. Useful for highlighting
  matched substrings consistently with `Chat.Search`.
* `markdownToPlainText(markdown)` — extracts plain text from markdown so message
  content can be made searchable.

```tsx
import {findChatSearchMatches, type ChatSearchBlock} from '@sqlrooms/ai';

const blocks: ChatSearchBlock[] = [
  {id: 'title', resultId: 'title', text: title},
];
const matches = findChatSearchMatches(blocks, query);
```

**Keeping highlighting in a replaced slot.** A host that swaps out a chat leaf
slot renders its own text, so it loses the highlighting the default slot got for
free. `HighlightedChatSearchText` restores it. Pass the same `blockId` the turn
model registered for that part; without it there are no matches to highlight and
the component renders the text unchanged.

```tsx
import {HighlightedChatSearchText} from '@sqlrooms/ai';

function AppPrompt({prompt, searchBlockId}: ChatPromptProps) {
  return (
    <MyPromptBubble>
      <HighlightedChatSearchText text={prompt} blockId={searchBlockId} />
    </MyPromptBubble>
  );
}
```

Matches are wrapped in `<mark>`, and the active match carries the match id as its
DOM id, so a host can scroll it into view. `useOptionalChatSearch()` exposes the
same state directly (`activeMatchId`, `getMatchesForBlock`) for slots that need
to do their own anchoring. It returns `null` outside a `ChatSearchProvider`, so a
component rendered away from `Chat.Root` degrades instead of throwing.

Indexing follows what actually rendered, not just what got registered. A slot
that returns `null`, or a region hidden behind a user preference, never mounts
`HighlightedChatSearchText` and so contributes no matches. Nothing is indexed
without something on screen to highlight. The text a slot renders is also the
text that gets indexed: a slot showing a transformed or shortened string is
searchable by what it actually displays, not by whatever text the block was
originally registered with.

Custom Markdown components are opaque rendering boundaries. Text beneath an
overridden Markdown element is excluded from automatic search because the
component may replace or hide its children; other default-rendered text in the
same message stays searchable. Overriding `mark` disables automatic search for
that message because generated highlights may never reach the DOM.

A slot that paints its own matches instead of rendering through
`HighlightedChatSearchText` must call `useReportRenderedChatSearchBlock(blockId)`
itself, or its block never counts as rendered and contributes no matches.

A slot that hides its content behind a disclosure or a toggle can key an effect
on `useActiveChatSearchMatchKey(blockId)` to reveal that content for every
selection attempt, including repeated navigation to the same match. This keeps
scrolling from landing on something still hidden and is what the default
reasoning disclosure uses to open itself.

## Chat Session Types

Use `ChatSessionSchema` for persisted chat session validation and
`isChatSessionEmpty` for session emptiness checks. `AnalysisSessionSchema`,
`AnalysisResultSchema`, `isAnalysisSessionEmpty`, `AnalysisResultsContainer`,
and `AnalysisResult` remain compatibility exports for existing apps, but new
code should prefer `Chat.Messages`, `uiMessages`, and derived `ChatTurn` helpers
such as `getChatTurnsFromUiMessages`.

Old persisted sessions that contain `analysisResults` still load, but parsed and
new `ChatSessionSchema` state no longer includes that field.

## Devtools

`@sqlrooms/ai/devtools` exposes development-oriented inspection components and
helpers without adding CodeMirror-heavy debug UI to the main `@sqlrooms/ai`
barrel.

```tsx
import {ChatSessionDebugView} from '@sqlrooms/ai/devtools';

function DebugPanel({
  sessionId,
  onClose,
}: {
  sessionId: string;
  onClose?: () => void;
}) {
  return <ChatSessionDebugView sessionId={sessionId} onClose={onClose} />;
}
```

`ChatSessionDebugView` reads the existing AI store context and shows session
metadata, model selection, registered tools, run context, raw `uiMessages`, and
a tabbed chronological timeline that keeps message parts, tool calls, nested
`agentProgress`, optional agent snapshots, and copyable JSON blocks together.

Agent snapshot capture is opt-in on the AI slice:

```ts
createAiSlice({
  tools,
  getInstructions,
  devtools: {
    captureAgentSnapshots: true,
    persistAgentSnapshots: true,
    maxAgentSnapshotBytes: 64_000,
  },
});
```

Enable persistence when you need post-mortem or cross-tab debugging in saved
workspace state. Snapshots are serializable metadata only; tool names,
descriptions, capability flags, and approval hints may be stored, but
implementations, closures, secrets, and unbounded prompt/output content should
not be stored.

## Add custom tools

```tsx
import {tool} from 'ai';
import {z} from 'zod';
import {
  createAiSlice,
  createDefaultAiInstructions,
  createDefaultAiTools,
} from '@sqlrooms/ai';

// inside createRoomStore(...):
createAiSlice({
  tools: {
    ...createDefaultAiTools(store),
    echo: tool({
      description: 'Return user text back to the chat',
      inputSchema: z.object({
        text: z.string(),
      }),
      execute: async ({text}) => ({
        success: true,
        details: `Echo: ${text}`,
      }),
    }),
  },
  getInstructions: () => createDefaultAiInstructions(store),
})(set, get, store);
```

Tool `execute` callbacks receive hidden run-context helpers in their second
argument. Apps can use `getRunContext` to capture selected artifacts at the
start of a run, expose them in `formatRunContextInstructions`, and then let
tools update the effective primary context with `setPrimaryRunContextItem`.
Old contexts without `primaryItemId` remain valid; the first item is treated as
primary. Artifact-specific context tools live in `@sqlrooms/artifacts/ai`.

## Use remote endpoint mode

If you want server-side model calls, set `chatEndPoint` and optional `chatHeaders`:

```tsx
// inside createRoomStore(...):
...createAiSlice({
  tools: {
    ...createDefaultAiTools(store),
  },
  getInstructions: () => createDefaultAiInstructions(store),
  chatEndPoint: '/api/chat',
  chatHeaders: {
    'x-app-name': 'my-sqlrooms-app',
  },
})(set, get, store),
```

## Skills

The skills subsystem lets you define, store, and author reusable AI "skills" — named instruction sets that can be loaded into an agent at runtime.

### Storage and types

`SkillStorage` is the interface that abstracts where skills live (filesystem, database, cloud, etc.). Implement it to plug in your own backend:

* `listRoots()` — enumerate available skill root locations
* `listSkills(rootId)` — list all skills under a root
* `readSkill(ref)` / `writeSkill(ref, content)` / `deleteSkill(ref)` — CRUD on individual skills
* `resolveSkillId(id)` — resolve a bare id to its highest-priority `SkillRef`
* `subscribe?(listener)` — *optional*; subscribe to change notifications. Returns an unsubscribe function. Implementations that don't mutate (read-only/static) may omit this method.

Supporting types: `SkillRoot`, `SkillManifest`, `SkillRef`, `SkillRecord`, `SkillListing`, `SkillWriteContent`, `SkillFile`.

### Composite storage

`CompositeSkillStorage` priority-merges multiple `SkillStorage` instances behind a single `SkillStorage` interface. Children are passed in priority order (highest first); they win conflicts in `resolveSkillId` and appear first in `listRoots`. Each child must own a unique set of `rootId`s.

`subscribe` fans out to every child that exposes the optional `subscribe?` method and aggregates the unsubscribes. If no child supports subscribe, `composite.subscribe(...)` is a noop returning a noop unsubscribe — consumers can call it unconditionally.

```tsx
import {CompositeSkillStorage} from '@sqlrooms/ai';

// Higher-priority `userStorage` wins on id collisions; both contribute roots
// and listings to the merged view.
const storage = new CompositeSkillStorage([userStorage, builtInStorage]);

const roots = await storage.listRoots(); // [user roots..., built-in roots...]
const all = await storage.listSkills(); // union, with duplicates

// Optional change notification: composite forwards from any subscribe-capable
// child.
const unsubscribe = storage.subscribe(() => {
  void refreshUi();
});
// later: unsubscribe();
```

### Manifest utilities

* `parseSkillManifest(raw)` — parse and validate a skill manifest (Zod-backed, throws `SkillManifestError` on failure)
* `serializeSkillManifest(manifest)` — serialize a manifest back to its raw form
* `loadSkillFromFiles(files)` — assemble a `SkillRecord` from a set of `SkillFile` objects (manifest + instruction body)

### Error types

All skill errors extend `SkillError` and carry a typed `SkillErrorCode`:

| Class                    | When thrown                         |
| ------------------------ | ----------------------------------- |
| `SkillManifestError`     | Manifest parse/validation failure   |
| `SkillNotFoundError`     | Skill ref does not exist in storage |
| `SkillRootReadOnlyError` | Write attempted on a read-only root |
| `SkillConflictError`     | Skill ID collision on write         |

### Skill authoring

A built-in agent-driven authoring flow that generates skill content through a conversational UI:

* `createSkillAuthoringAgent(options)` — construct a `ToolLoopAgent` scoped to skill creation; accepts `CreateSkillAuthoringAgentOptions`
* `createSkillDraftStore()` — Zustand store for tracking the in-progress draft (`SkillDraftStore`, `SkillDraftState`)
* `SkillAuthoringPanel` — drop-in panel component that wires `Chat.LocalAgentRoot` to the authoring agent; accepts `SkillAuthoringPanelProps`
* `SkillDraftPreview` — read-only preview of the current draft manifest and instructions; accepts `SkillDraftPreviewProps`
* `DefaultSkillAuthoringPanelHeader` — default header for `SkillAuthoringPanel`

Types: `SkillAuthoringContext`, `SkillDraft`, `SkillDraftStatus`, `SaveSkillCallback`, `CreateSkillAuthoringAgentOptions`.

Lower-level authoring tools (exported for advanced use): `createWriteManifestTool`, `createWriteInstructionsTool`, `createSaveSkillTool`, `buildSkillAuthoringSystemPrompt`, `containsForbidden`, `DEFAULT_SKILL_AUTHORING_STOP_STEPS`.

```tsx
import {
  createSkillAuthoringAgent,
  createSkillDraftStore,
  SkillAuthoringPanel,
} from '@sqlrooms/ai';

const draftStore = createSkillDraftStore();

const agent = createSkillAuthoringAgent({
  model: myLanguageModel,
  draftStore,
  onSave: async (skill) => {
    await mySkillStorage.writeSkill(
      {rootId: 'default', skillId: skill.id},
      skill,
    );
  },
});

function SkillCreator() {
  return <SkillAuthoringPanel agent={agent} draftStore={draftStore} />;
}
```

## Related packages

* `@sqlrooms/ai-core` for lower-level AI slice and chat primitives
* `@sqlrooms/ai-settings` for settings slice/components only
* `@sqlrooms/ai-config` for Zod schemas and migrations

## Classes

* [CompositeSkillStorage](/api/ai/classes/CompositeSkillStorage.md)
* [SkillError](/api/ai/classes/SkillError.md)
* [SkillManifestError](/api/ai/classes/SkillManifestError.md)
* [SkillNotFoundError](/api/ai/classes/SkillNotFoundError.md)
* [SkillRootReadOnlyError](/api/ai/classes/SkillRootReadOnlyError.md)
* [SkillConflictError](/api/ai/classes/SkillConflictError.md)
* [ToolAbortError](/api/ai/classes/ToolAbortError.md)

## Interfaces

* [CreateSkillAuthoringAgentOptions](/api/ai/interfaces/CreateSkillAuthoringAgentOptions.md)
* [SkillAuthoringContext](/api/ai/interfaces/SkillAuthoringContext.md)
* [SkillDraft](/api/ai/interfaces/SkillDraft.md)
* [SkillDraftState](/api/ai/interfaces/SkillDraftState.md)
* [SkillErrorContext](/api/ai/interfaces/SkillErrorContext.md)
* [SkillFile](/api/ai/interfaces/SkillFile.md)
* [SkillRoot](/api/ai/interfaces/SkillRoot.md)
* [SkillRef](/api/ai/interfaces/SkillRef.md)
* [SkillRecord](/api/ai/interfaces/SkillRecord.md)
* [SkillListing](/api/ai/interfaces/SkillListing.md)
* [SkillWriteContent](/api/ai/interfaces/SkillWriteContent.md)
* [SkillStorage](/api/ai/interfaces/SkillStorage.md)
* [AiSliceOptions](/api/ai/interfaces/AiSliceOptions.md)
* [StoredTool](/api/ai/interfaces/StoredTool.md)
* [ModelUsageData](/api/ai/interfaces/ModelUsageData.md)

## Type Aliases

* [SkillAuthoringPanelProps](/api/ai/type-aliases/SkillAuthoringPanelProps.md)
* [SkillDraftPreviewProps](/api/ai/type-aliases/SkillDraftPreviewProps.md)
* [SkillDraftStatus](/api/ai/type-aliases/SkillDraftStatus.md)
* [SkillDraftStore](/api/ai/type-aliases/SkillDraftStore.md)
* [SaveSkillCallback](/api/ai/type-aliases/SaveSkillCallback.md)
* [SkillErrorCode](/api/ai/type-aliases/SkillErrorCode.md)
* [SkillManifest](/api/ai/type-aliases/SkillManifest.md)
* [SearchCommandsToolParameters](/api/ai/type-aliases/SearchCommandsToolParameters.md)
* [ListCommandsToolParameters](/api/ai/type-aliases/ListCommandsToolParameters.md)
* [CommandToolDescriptor](/api/ai/type-aliases/CommandToolDescriptor.md)
* [CommandToolSearchDescriptor](/api/ai/type-aliases/CommandToolSearchDescriptor.md)
* [SearchCommandsToolLlmResult](/api/ai/type-aliases/SearchCommandsToolLlmResult.md)
* [ListCommandsToolLlmResult](/api/ai/type-aliases/ListCommandsToolLlmResult.md)
* [GetCommandToolParameters](/api/ai/type-aliases/GetCommandToolParameters.md)
* [GetCommandToolLlmResult](/api/ai/type-aliases/GetCommandToolLlmResult.md)
* [ExecuteCommandToolParameters](/api/ai/type-aliases/ExecuteCommandToolParameters.md)
* [ExecuteCommandToolLlmResult](/api/ai/type-aliases/ExecuteCommandToolLlmResult.md)
* [CommandGuardResult](/api/ai/type-aliases/CommandGuardResult.md)
* [CommandToolsOptions](/api/ai/type-aliases/CommandToolsOptions.md)
* [DefaultCommandTools](/api/ai/type-aliases/DefaultCommandTools.md)
* [DefaultToolsOptions](/api/ai/type-aliases/DefaultToolsOptions.md)
* [DefaultAiToolRenderers](/api/ai/type-aliases/DefaultAiToolRenderers.md)
* [QueryToolRendererOptions](/api/ai/type-aliases/QueryToolRendererOptions.md)
* [QueryToolParameters](/api/ai/type-aliases/QueryToolParameters.md)
* [QueryToolOutput](/api/ai/type-aliases/QueryToolOutput.md)
* [QueryToolOptions](/api/ai/type-aliases/QueryToolOptions.md)
* [SkillRuntimeCommandToolPolicy](/api/ai/type-aliases/SkillRuntimeCommandToolPolicy.md)
* [SkillRuntimeToolPolicy](/api/ai/type-aliases/SkillRuntimeToolPolicy.md)
* [CreateSkillRuntimeToolPolicyOptions](/api/ai/type-aliases/CreateSkillRuntimeToolPolicyOptions.md)
* [TableSchemaContextLimits](/api/ai/type-aliases/TableSchemaContextLimits.md)
* [AiTableScope](/api/ai/type-aliases/AiTableScope.md)
* [AiTableScopeOptions](/api/ai/type-aliases/AiTableScopeOptions.md)
* [AiSettingsSliceConfig](/api/ai/type-aliases/AiSettingsSliceConfig.md)
* [AiSessionForkOrigin](/api/ai/type-aliases/AiSessionForkOrigin.md)
* [AiSliceConfig](/api/ai/type-aliases/AiSliceConfig.md)
* [BlockAiRunContextItem](/api/ai/type-aliases/BlockAiRunContextItem.md)
* [ErrorMessageSchema](/api/ai/type-aliases/ErrorMessageSchema.md)
* [~~AnalysisResultSchema~~](/api/ai/type-aliases/AnalysisResultSchema.md)
* [AiRunContextItem](/api/ai/type-aliases/AiRunContextItem.md)
* [AiRunContext](/api/ai/type-aliases/AiRunContext.md)
* [ChatSessionSchema](/api/ai/type-aliases/ChatSessionSchema.md)
* [~~AnalysisSessionSchema~~](/api/ai/type-aliases/AnalysisSessionSchema.md)
* [ToolUIPart](/api/ai/type-aliases/ToolUIPart.md)
* [UIMessagePart](/api/ai/type-aliases/UIMessagePart.md)
* [AiSliceState](/api/ai/type-aliases/AiSliceState.md)
* [ChatAttachmentPart](/api/ai/type-aliases/ChatAttachmentPart.md)
* [ForkSessionFromMessageArgs](/api/ai/type-aliases/ForkSessionFromMessageArgs.md)
* [ChatRequestErrorMessage](/api/ai/type-aliases/ChatRequestErrorMessage.md)
* [ChatMessageMetadata](/api/ai/type-aliases/ChatMessageMetadata.md)
* [ChatTurn](/api/ai/type-aliases/ChatTurn.md)
* [BlockAiPromptPopoverProps](/api/ai/type-aliases/BlockAiPromptPopoverProps.md)
* [ChatComponentType](/api/ai/type-aliases/ChatComponentType.md)
* [ChatNestedActivityMode](/api/ai/type-aliases/ChatNestedActivityMode.md)
* [ChatPromptProps](/api/ai/type-aliases/ChatPromptProps.md)
* [ChatActivityProps](/api/ai/type-aliases/ChatActivityProps.md)
* [ChatReasoningProps](/api/ai/type-aliases/ChatReasoningProps.md)
* [ChatTextOutputProps](/api/ai/type-aliases/ChatTextOutputProps.md)
* [ChatToolActivityProps](/api/ai/type-aliases/ChatToolActivityProps.md)
* [ChatHoistedOutputProps](/api/ai/type-aliases/ChatHoistedOutputProps.md)
* [ChatErrorProps](/api/ai/type-aliases/ChatErrorProps.md)
* [ChatCopyAction](/api/ai/type-aliases/ChatCopyAction.md)
* [ChatForkAction](/api/ai/type-aliases/ChatForkAction.md)
* [ChatActionsProps](/api/ai/type-aliases/ChatActionsProps.md)
* [ChatToolState](/api/ai/type-aliases/ChatToolState.md)
* [ChatPromptRegion](/api/ai/type-aliases/ChatPromptRegion.md)
* [ChatActivityItem](/api/ai/type-aliases/ChatActivityItem.md)
* [ChatActivityRegion](/api/ai/type-aliases/ChatActivityRegion.md)
* [ChatTextItem](/api/ai/type-aliases/ChatTextItem.md)
* [ChatTextRegion](/api/ai/type-aliases/ChatTextRegion.md)
* [ChatOutputItem](/api/ai/type-aliases/ChatOutputItem.md)
* [ChatOutputRegion](/api/ai/type-aliases/ChatOutputRegion.md)
* [ChatActionsRegion](/api/ai/type-aliases/ChatActionsRegion.md)
* [ChatErrorRegion](/api/ai/type-aliases/ChatErrorRegion.md)
* [ChatTimelineRegion](/api/ai/type-aliases/ChatTimelineRegion.md)
* [ChatTurnPresentation](/api/ai/type-aliases/ChatTurnPresentation.md)
* [ChatTurnSlotProps](/api/ai/type-aliases/ChatTurnSlotProps.md)
* [ChatRenderingComponents](/api/ai/type-aliases/ChatRenderingComponents.md)
* [ChatRenderingProps](/api/ai/type-aliases/ChatRenderingProps.md)
* [LocalAgentChatRootProps](/api/ai/type-aliases/LocalAgentChatRootProps.md)
* [ChatSearchBlock](/api/ai/type-aliases/ChatSearchBlock.md)
* [ChatSearchMatch](/api/ai/type-aliases/ChatSearchMatch.md)
* [ChatSearchContextValue](/api/ai/type-aliases/ChatSearchContextValue.md)
* [ChatTurnViewProps](/api/ai/type-aliases/ChatTurnViewProps.md)
* [ErrorMessageComponentProps](/api/ai/type-aliases/ErrorMessageComponentProps.md)
* [ToolStructureBehavior](/api/ai/type-aliases/ToolStructureBehavior.md)
* [ToolDisplayBehavior](/api/ai/type-aliases/ToolDisplayBehavior.md)
* [ToolRenderBehavior](/api/ai/type-aliases/ToolRenderBehavior.md)
* [MessageContentProps](/api/ai/type-aliases/MessageContentProps.md)
* [ChatTurnActivityItem](/api/ai/type-aliases/ChatTurnActivityItem.md)
* [ChatTurnTextItem](/api/ai/type-aliases/ChatTurnTextItem.md)
* [ChatTurnModel](/api/ai/type-aliases/ChatTurnModel.md)
* [ChatTurnRenderPlan](/api/ai/type-aliases/ChatTurnRenderPlan.md)
* [ChatAttachmentsState](/api/ai/type-aliases/ChatAttachmentsState.md)
* [ChatComposerAttachmentsProps](/api/ai/type-aliases/ChatComposerAttachmentsProps.md)
* [ContextSelectorItem](/api/ai/type-aliases/ContextSelectorItem.md)
* [ContextSelectorRootProps](/api/ai/type-aliases/ContextSelectorRootProps.md)
* [AskAiBlockHeaderActionRenderContext](/api/ai/type-aliases/AskAiBlockHeaderActionRenderContext.md)
* [CreateAskAiBlockHeaderActionOptions](/api/ai/type-aliases/CreateAskAiBlockHeaderActionOptions.md)
* [SessionType](/api/ai/type-aliases/SessionType.md)
* [GenerateSessionTitlePromptOptions](/api/ai/type-aliases/GenerateSessionTitlePromptOptions.md)
* [GenerateSessionTitleOptions](/api/ai/type-aliases/GenerateSessionTitleOptions.md)
* [GenerateSessionTitleArgs](/api/ai/type-aliases/GenerateSessionTitleArgs.md)
* [GenerateSessionTitleResult](/api/ai/type-aliases/GenerateSessionTitleResult.md)
* [UseGenerateSessionTitleOptions](/api/ai/type-aliases/UseGenerateSessionTitleOptions.md)
* [AgentToolCall](/api/ai/type-aliases/AgentToolCall.md)
* [AgentToolCallAdditionalData](/api/ai/type-aliases/AgentToolCallAdditionalData.md)
* [AgentStreamOutput](/api/ai/type-aliases/AgentStreamOutput.md)
* [AgentSnapshot](/api/ai/type-aliases/AgentSnapshot.md)
* [StoredToolSet](/api/ai/type-aliases/StoredToolSet.md)
* [AddToolOutput](/api/ai/type-aliases/AddToolOutput.md)
* [AiToolExecutionContext](/api/ai/type-aliases/AiToolExecutionContext.md)
* [ToolRendererProps](/api/ai/type-aliases/ToolRendererProps.md)
* [ToolRenderer](/api/ai/type-aliases/ToolRenderer.md)
* [ToolRendererShouldHoist](/api/ai/type-aliases/ToolRendererShouldHoist.md)
* [ToolRendererRegistry](/api/ai/type-aliases/ToolRendererRegistry.md)
* [ToolRenderers](/api/ai/type-aliases/ToolRenderers.md)
* [AiSettingsSliceState](/api/ai/type-aliases/AiSettingsSliceState.md)

## Variables

* [DEFAULT\_SKILL\_AUTHORING\_STOP\_STEPS](/api/ai/variables/DEFAULT_SKILL_AUTHORING_STOP_STEPS.md)
* [SKILL\_AUTHORING\_TOOL\_NAMES](/api/ai/variables/SKILL_AUTHORING_TOOL_NAMES.md)
* [SkillAuthoringPanel](/api/ai/variables/SkillAuthoringPanel.md)
* [DefaultSkillAuthoringPanelHeader](/api/ai/variables/DefaultSkillAuthoringPanelHeader.md)
* [SkillDraftPreview](/api/ai/variables/SkillDraftPreview.md)
* [SkillManifestSchema](/api/ai/variables/SkillManifestSchema.md)
* [SearchCommandsToolParameters](/api/ai/variables/SearchCommandsToolParameters.md)
* [ListCommandsToolParameters](/api/ai/variables/ListCommandsToolParameters.md)
* [GetCommandToolParameters](/api/ai/variables/GetCommandToolParameters.md)
* [ExecuteCommandToolParameters](/api/ai/variables/ExecuteCommandToolParameters.md)
* [QueryToolResult](/api/ai/variables/QueryToolResult.md)
* [QueryToolParameters](/api/ai/variables/QueryToolParameters.md)
* [DEFAULT\_SKILL\_RUNTIME\_TOOL\_POLICY](/api/ai/variables/DEFAULT_SKILL_RUNTIME_TOOL_POLICY.md)
* [DEFAULT\_TABLE\_SCHEMA\_CONTEXT\_LIMITS](/api/ai/variables/DEFAULT_TABLE_SCHEMA_CONTEXT_LIMITS.md)
* [AiSettingsSliceConfig](/api/ai/variables/AiSettingsSliceConfig.md)
* [AiSessionForkOrigin](/api/ai/variables/AiSessionForkOrigin.md)
* [AiSliceConfig](/api/ai/variables/AiSliceConfig.md)
* [BlockAiRunContextItemSchema](/api/ai/variables/BlockAiRunContextItemSchema.md)
* [ErrorMessageSchema](/api/ai/variables/ErrorMessageSchema.md)
* [~~AnalysisResultSchema~~](/api/ai/variables/AnalysisResultSchema.md)
* [AiRunContextItemSchema](/api/ai/variables/AiRunContextItemSchema.md)
* [AiRunContextSchema](/api/ai/variables/AiRunContextSchema.md)
* [ChatSessionSchema](/api/ai/variables/ChatSessionSchema.md)
* [~~AnalysisSessionSchema~~](/api/ai/variables/AnalysisSessionSchema.md)
* [ActivityBox](/api/ai/variables/ActivityBox.md)
* [AiThinkingDots](/api/ai/variables/AiThinkingDots.md)
* [Chat](/api/ai/variables/Chat.md)
* [ChatMessagesContainer](/api/ai/variables/ChatMessagesContainer.md)
* [ChatRendering](/api/ai/variables/ChatRendering.md)
* [ChatTurnView](/api/ai/variables/ChatTurnView.md)
* [ShowToolCallDetailsProvider](/api/ai/variables/ShowToolCallDetailsProvider.md)
* [HoistedToolCallRenderer](/api/ai/variables/HoistedToolCallRenderer.md)
* [processMessageContent](/api/ai/variables/processMessageContent.md)
* [MessageContent](/api/ai/variables/MessageContent.md)
* [ModelSelector](/api/ai/variables/ModelSelector.md)
* [PromptSuggestions](/api/ai/variables/PromptSuggestions.md)
* [QueryControls](/api/ai/variables/QueryControls.md)
* [SessionControls](/api/ai/variables/SessionControls.md)
* [ToolCallInfo](/api/ai/variables/ToolCallInfo.md)
* [ContextSelector](/api/ai/variables/ContextSelector.md)
* [CHAT\_CONTEXT\_SELECTOR\_SLOT](/api/ai/variables/CHAT_CONTEXT_SELECTOR_SLOT.md)
* [DefaultChatActivity](/api/ai/variables/DefaultChatActivity.md)
* [DefaultChatTurn](/api/ai/variables/DefaultChatTurn.md)
* [defaultChatRenderingComponents](/api/ai/variables/defaultChatRenderingComponents.md)
* [DeleteSessionDialog](/api/ai/variables/DeleteSessionDialog.md)
* [SessionActions](/api/ai/variables/SessionActions.md)
* [SessionDropdown](/api/ai/variables/SessionDropdown.md)
* [SessionTitle](/api/ai/variables/SessionTitle.md)
* [~~isAnalysisSessionEmpty~~](/api/ai/variables/isAnalysisSessionEmpty.md)
* [~~cleanupPendingAnalysisResults~~](/api/ai/variables/cleanupPendingAnalysisResults.md)
* [AiModelParameters](/api/ai/variables/AiModelParameters.md)
* [AiModelUsage](/api/ai/variables/AiModelUsage.md)
* [AiModelsSettings](/api/ai/variables/AiModelsSettings.md)
* [AiProvidersSettings](/api/ai/variables/AiProvidersSettings.md)
* [AiSettingsPanel](/api/ai/variables/AiSettingsPanel.md)

## Functions

* [createSkillAuthoringAgent](/api/ai/functions/createSkillAuthoringAgent.md)
* [createSkillDraftStore](/api/ai/functions/createSkillDraftStore.md)
* [buildSkillAuthoringSystemPrompt](/api/ai/functions/buildSkillAuthoringSystemPrompt.md)
* [containsForbidden](/api/ai/functions/containsForbidden.md)
* [createWriteManifestTool](/api/ai/functions/createWriteManifestTool.md)
* [createWriteInstructionsTool](/api/ai/functions/createWriteInstructionsTool.md)
* [createSaveSkillTool](/api/ai/functions/createSaveSkillTool.md)
* [parseSkillManifest](/api/ai/functions/parseSkillManifest.md)
* [serializeSkillManifest](/api/ai/functions/serializeSkillManifest.md)
* [loadSkillFromFiles](/api/ai/functions/loadSkillFromFiles.md)
* [createCommandTools](/api/ai/functions/createCommandTools.md)
* [createDefaultAiInstructions](/api/ai/functions/createDefaultAiInstructions.md)
* [createDefaultAiTools](/api/ai/functions/createDefaultAiTools.md)
* [createDefaultAiToolRenderers](/api/ai/functions/createDefaultAiToolRenderers.md)
* [createQueryToolRenderer](/api/ai/functions/createQueryToolRenderer.md)
* [createQueryTool](/api/ai/functions/createQueryTool.md)
* [getQuerySummary](/api/ai/functions/getQuerySummary.md)
* [createSkillRuntimeToolPolicy](/api/ai/functions/createSkillRuntimeToolPolicy.md)
* [getAiTableSchemaContextLimits](/api/ai/functions/getAiTableSchemaContextLimits.md)
* [getTablesForAiScope](/api/ai/functions/getTablesForAiScope.md)
* [getAiTableScopeSummary](/api/ai/functions/getAiTableScopeSummary.md)
* [formatOtherTableScopesForAi](/api/ai/functions/formatOtherTableScopesForAi.md)
* [formatTableSchemaForAi](/api/ai/functions/formatTableSchemaForAi.md)
* [formatTableSummaryForAi](/api/ai/functions/formatTableSummaryForAi.md)
* [formatTablesForLLM](/api/ai/functions/formatTablesForLLM.md)
* [createDefaultAiConfig](/api/ai/functions/createDefaultAiConfig.md)
* [createBlockContextItem](/api/ai/functions/createBlockContextItem.md)
* [getAiRunContextItems](/api/ai/functions/getAiRunContextItems.md)
* [getAiRunContextPrimaryItem](/api/ai/functions/getAiRunContextPrimaryItem.md)
* [setAiRunContextPrimaryItem](/api/ai/functions/setAiRunContextPrimaryItem.md)
* [createAiSlice](/api/ai/functions/createAiSlice.md)
* [useStoreWithAi](/api/ai/functions/useStoreWithAi.md)
* [updateAgentToolCallData](/api/ai/functions/updateAgentToolCallData.md)
* [streamSubAgent](/api/ai/functions/streamSubAgent.md)
* [isTextAttachmentMediaType](/api/ai/functions/isTextAttachmentMediaType.md)
* [isTextAttachmentFilename](/api/ai/functions/isTextAttachmentFilename.md)
* [isMarkdownAttachment](/api/ai/functions/isMarkdownAttachment.md)
* [isSupportedChatAttachment](/api/ai/functions/isSupportedChatAttachment.md)
* [getChatAttachmentMediaType](/api/ai/functions/getChatAttachmentMediaType.md)
* [fileToChatAttachmentPart](/api/ai/functions/fileToChatAttachmentPart.md)
* [getChatAttachmentText](/api/ai/functions/getChatAttachmentText.md)
* [getChatMessageAttachments](/api/ai/functions/getChatMessageAttachments.md)
* [withRunContextTools](/api/ai/functions/withRunContextTools.md)
* [getChatRequestErrorMessage](/api/ai/functions/getChatRequestErrorMessage.md)
* [getChatTurnsFromUiMessages](/api/ai/functions/getChatTurnsFromUiMessages.md)
* [getAnalysisResultsFromUiMessages](/api/ai/functions/getAnalysisResultsFromUiMessages.md)
* [BlockAiPromptPopover](/api/ai/functions/BlockAiPromptPopover.md)
* [markdownToPlainText](/api/ai/functions/markdownToPlainText.md)
* [normalizeChatSearchQuery](/api/ai/functions/normalizeChatSearchQuery.md)
* [findChatSearchMatches](/api/ai/functions/findChatSearchMatches.md)
* [useOptionalChatSearch](/api/ai/functions/useOptionalChatSearch.md)
* [useReportRenderedChatSearchBlock](/api/ai/functions/useReportRenderedChatSearchBlock.md)
* [useActiveChatSearchMatchKey](/api/ai/functions/useActiveChatSearchMatchKey.md)
* [HighlightedChatSearchText](/api/ai/functions/HighlightedChatSearchText.md)
* [ErrorMessage](/api/ai/functions/ErrorMessage.md)
* [buildChatTurnModel](/api/ai/functions/buildChatTurnModel.md)
* [buildChatTurnRenderPlan](/api/ai/functions/buildChatTurnRenderPlan.md)
* [useChatAttachments](/api/ai/functions/useChatAttachments.md)
* [createAskAiBlockHeaderAction](/api/ai/functions/createAskAiBlockHeaderAction.md)
* [ToolErrorMessage](/api/ai/functions/ToolErrorMessage.md)
* [isChatSessionEmpty](/api/ai/functions/isChatSessionEmpty.md)
* [getRunContextItemIds](/api/ai/functions/getRunContextItemIds.md)
* [getVisibleSessionContextItemIds](/api/ai/functions/getVisibleSessionContextItemIds.md)
* [getEffectiveSessionContextItemIds](/api/ai/functions/getEffectiveSessionContextItemIds.md)
* [isDefaultGeneratedSessionName](/api/ai/functions/isDefaultGeneratedSessionName.md)
* [getSessionUserMessageText](/api/ai/functions/getSessionUserMessageText.md)
* [cleanGeneratedSessionTitle](/api/ai/functions/cleanGeneratedSessionTitle.md)
* [generateSessionTitle](/api/ai/functions/generateSessionTitle.md)
* [useGenerateSessionTitle](/api/ai/functions/useGenerateSessionTitle.md)
* [useScrollToBottom](/api/ai/functions/useScrollToBottom.md)
* [fixIncompleteToolCalls](/api/ai/functions/fixIncompleteToolCalls.md)
* [createAiSettingsSlice](/api/ai/functions/createAiSettingsSlice.md)
* [useStoreWithAiSettings](/api/ai/functions/useStoreWithAiSettings.md)
* [createDefaultAiSettingsConfig](/api/ai/functions/createDefaultAiSettingsConfig.md)

## References

### ExecuteCommandToolParametersType

Renames and re-exports [ExecuteCommandToolParameters](/api/ai/variables/ExecuteCommandToolParameters.md)

***

### GetCommandToolParametersType

Renames and re-exports [GetCommandToolParameters](/api/ai/variables/GetCommandToolParameters.md)

***

### ListCommandsToolParametersType

Renames and re-exports [ListCommandsToolParameters](/api/ai/variables/ListCommandsToolParameters.md)

***

### SearchCommandsToolParametersType

Renames and re-exports [SearchCommandsToolParameters](/api/ai/variables/SearchCommandsToolParameters.md)

***

### AnalysisResultsContainer

Renames and re-exports [ChatMessagesContainer](/api/ai/variables/ChatMessagesContainer.md)

***

### ~~AnalysisResult~~

Renames and re-exports [ChatTurnView](/api/ai/variables/ChatTurnView.md)

***

### ~~AnalysisAnswer~~

Renames and re-exports [MessageContent](/api/ai/variables/MessageContent.md)

***

### ~~processAnalysisAnswerContent~~

Renames and re-exports [processMessageContent](/api/ai/variables/processMessageContent.md)
