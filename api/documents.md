---
url: 'https://sqlrooms.org/api/documents.md'
---
# @sqlrooms/documents

Artifact-scoped Markdown documents, structured block documents, and
knowledge-index utilities for SQLRooms.

## Usage

```tsx
import {
  BlockDocumentArtifact,
  BlockDocumentsSliceConfig,
  BlockDocumentChartRendererProvider,
  BlockDocumentStatefulBlockRendererProvider,
  DocumentsSliceConfig,
  buildKnowledgeIndex,
  createBlockDocumentCommands,
  createBlockDocumentsSlice,
  createDocumentCommands,
  createDocumentsSlice,
  createMarkdownDocumentBlockDefinition,
} from '@sqlrooms/documents';
import {createDocumentsCrdtMirror} from '@sqlrooms/documents/crdt';
import {
  createArtifactTypeFromStatefulBlock,
  defineArtifactTypes,
} from '@sqlrooms/artifacts';

const documentBlockDefinition = createMarkdownDocumentBlockDefinition();

const artifactTypes = defineArtifactTypes({
  document: createArtifactTypeFromStatefulBlock(documentBlockDefinition),
  'block-document': {
    label: 'Block Document',
    defaultTitle: 'Block Document',
    component: BlockDocumentArtifact,
    onCreate: ({artifactId, store}) => {
      store.getState().blockDocuments.ensureBlockDocument(artifactId);
    },
    onEnsure: ({artifactId, store}) => {
      store.getState().blockDocuments.ensureBlockDocument(artifactId);
    },
    onDelete: ({artifactId, store}) => {
      store.getState().blockDocuments.removeBlockDocument(artifactId);
    },
  },
});

const roomStore = createRoomStore(
  persistSliceConfigs(
    {
      name: 'my-room',
      sliceConfigSchemas: {
        documents: DocumentsSliceConfig,
        blockDocuments: BlockDocumentsSliceConfig,
      },
    },
    (set, get, store) => ({
      ...createDocumentsSlice()(set, get, store),
      ...createBlockDocumentsSlice({
        onDeleteOwnedStatefulBlock: ({
          blockType,
          blockInstanceId,
          getState,
        }) => {
          if (blockType === 'dashboard') {
            getState().mosaicDashboard.removeDashboard(blockInstanceId);
          }
        },
      })(set, get, store),
    }),
  ),
);
```

`MarkdownDocument` uses the Tiptap-backed `MarkdownDocumentEditor`. It keeps
Markdown as the controlled value, renders a rich document editing surface, and
keeps the existing CodeMirror source panel for direct Markdown edits.

`MarkdownDocumentEditor` is also exported as a reusable controlled editor:

```tsx
<MarkdownDocumentEditor
  value={markdown}
  assets={assets}
  onChange={setMarkdown}
/>
```

The rich editor is the primary surface. The optional Markdown source panel can
be opened alongside it and edits the same canonical Markdown string:

```tsx
<MarkdownDocumentEditor
  value={markdown}
  onChange={setMarkdown}
  sourcePanelOpen={showSource}
  onSourcePanelOpenChange={setShowSource}
/>
```

Document Markdown can reference document-owned assets with `asset://` URLs:

```md
![Revenue by week](asset://chart-revenue-week)
```

Pass the document asset map to `MarkdownDocumentEditor` to render those links as
browser-loadable image data while preserving the canonical `asset://` link in
Markdown source. `MarkdownDocument` handles this automatically for artifacts
stored in the documents slice.

The documents slice exposes `upsertAsset`, `removeAsset`, and `getAsset` for
managing image assets alongside Markdown content. SVG assets may use `utf8` or
`base64` encoding; PNG assets must use `base64` encoding.

## Block Documents

`createBlockDocumentsSlice()` exposes structured state for artifact types
backed by composable blocks: text, lists, images, standalone Mosaic/vgplot
charts, and direct stateful blocks such as dashboards, pivots, or Markdown
documents.

The shared block vocabulary lives in [`@sqlrooms/blocks`](_media/README.md).
`@sqlrooms/documents` builds on those contracts with the concrete
Tiptap-backed `BlockDocument` editor, persistence slice, commands, and AI
authoring helpers.

Block documents persist Tiptap/ProseMirror JSON as their canonical content
and provide block DTO helpers for command and AI authoring surfaces:

```tsx
import {
  BlockDocumentsSliceConfig,
  createBlockDocumentsSlice,
} from '@sqlrooms/documents';

const roomStore = createRoomStore(
  persistSliceConfigs(
    {
      name: 'my-room',
      sliceConfigSchemas: {
        blockDocuments: BlockDocumentsSliceConfig,
      },
    },
    (set, get, store) => ({
      ...createBlockDocumentsSlice()(set, get, store),
    }),
  ),
);
```

The slice can create block documents, replace the Tiptap JSON body, and
append/insert/update/remove/reorder top-level blocks. Supported block DTOs
include headings, paragraphs, lists, todos, images, chart images,
standalone chart blocks, and direct stateful blocks.

`BlockDocumentArtifact` and `BlockDocumentEditor` provide the first rich
editor surface for this structured state. `BlockDocumentArtifact` injects an
editable, non-movable title node into the Tiptap document and reports title
changes through `onTitleChange`, so hosts can keep artifact metadata and tab
labels in sync. The editor owns Tiptap nodes for SQLRooms custom blocks, but
chart and stateful block rendering are host-provided so `@sqlrooms/documents`
does not import Mosaic, pivot, or other feature packages:

```tsx
<BlockDocumentChartRendererProvider renderer={MosaicBlockDocumentChartRenderer}>
  <BlockDocumentStatefulBlockRendererProvider
    renderers={{
      dashboard: DashboardBlockRenderer,
      pivot: PivotBlockRenderer,
    }}
    blockTypes={[
      {
        blockType: 'dashboard',
        label: 'Dashboard',
        description: 'Interactive dashboard',
        createNode: (blockId) => ({
          type: 'blockDocumentStatefulBlock',
          attrs: {
            id: blockId,
            blockType: 'dashboard',
            blockInstanceId: createDashboardBlockState(blockId),
            ownership: 'owned',
            title: 'Dashboard',
            caption: '',
          },
        }),
      },
    ]}
  >
    <BlockDocumentArtifact
      artifactId={blockDocumentArtifactId}
      title="Worksheet"
      onTitleChange={(title) =>
        renameBlockDocument(blockDocumentArtifactId, title)
      }
    />
  </BlockDocumentStatefulBlockRendererProvider>
</BlockDocumentChartRendererProvider>
```

If no renderer is registered, chart and stateful blocks render a clear
unsupported state while preserving their Tiptap JSON attributes. `blockTypes`
controls the host-specific entries shown in the plus menu.
When a block is converted through the handle menu, custom `createNode`
callbacks receive an optional `{initialText}` value with the source block text;
hosts can use it to seed stateful blocks such as embedded Markdown documents.
Stateful block types can opt into persisted vertical resizing with
`resizableHeight`, `defaultHeight`, `minHeight`, and `maxHeight`; the editor
stores the resulting `height` on the block node and renders a bottom resize
handle just below the block for writable documents. Interactive blocks can also opt into
`requireScrollModifier`; ordinary wheel gestures then keep scrolling the
document and show a short hint, while Cmd+scroll on macOS or Ctrl+scroll
elsewhere scrolls nested overflow regions inside the block. Use
`scrollHintLabel` to customize the hint target text.

### Stateful Blocks

Use a `statefulBlock` block when the document should host a stateful SQLRooms
surface directly, without wrapping it in an artifact shell:

```ts
blockDocuments.appendBlocks(blockDocumentArtifactId, [
  {
    id: 'pivot-block',
    type: 'statefulBlock',
    blockType: 'pivot',
    blockInstanceId: 'pivot-instance-1',
    ownership: 'owned',
    title: 'Embedded Pivot Table',
  },
]);
```

Hosts provide renderers through `BlockDocumentStatefulBlockRendererProvider`:

```tsx
<BlockDocumentStatefulBlockRendererProvider
  renderers={{
    pivot: PivotBlockRenderer,
    dashboard: DashboardBlockRenderer,
  }}
  blockTypes={[
    {
      blockType: 'pivot',
      label: 'Pivot Table',
      description: 'Embedded pivot table',
    },
  ]}
>
  <BlockDocumentArtifact
    artifactId={blockDocumentArtifactId}
    title="Embedded Report"
    onTitleChange={(title) =>
      renameBlockDocument(blockDocumentArtifactId, title)
    }
  />
</BlockDocumentStatefulBlockRendererProvider>
```

Top-level artifacts should wrap stateful blocks or block containers at the
workspace/tab layer. Block documents host the stateful block directly instead
of embedding an artifact shell.

Owned stateful blocks are lifecycle-managed by the host app. Pass
`onCreateOwnedStatefulBlock` to initialize feature state when a new owned block
reference appears, and `onDeleteOwnedStatefulBlock` to clean it up when an owned
block is removed from a document or when its owning block document is deleted.
Blocks with `ownership: 'shared'` or `ownership: 'external'` are not cleaned up
by the documents slice.
Hosts can also pass `onRenameOwnedStatefulBlock` to synchronize block `title`
changes into the backing feature state. Captions stay local to the blocks
document. Stateful block renderers receive `onTitleChange` and
`onCaptionChange` callbacks when a writable document lets the embedded surface
edit its own block metadata.

The editor normalizes pasted or duplicated owned stateful blocks by assigning
fresh top-level block IDs and fresh `blockInstanceId` values when a duplicate
owned instance would otherwise point at the same backing state.

### Standalone Chart Blocks

Standalone `chart` blocks are meant for focused, in-document charts. They store
the target `tableName`, a Mosaic `ChartConfig`, an optional caption, and an
optional `selectionGroupId`:

```ts
blockDocuments.appendBlocks(blockDocumentArtifactId, [
  {
    id: 'revenue-histogram',
    type: 'chart',
    tableName: 'sales',
    config: {
      chartType: 'histogram',
      settings: {field: 'revenue'},
    },
    selectionGroupId: 'overview',
    caption: 'Revenue distribution',
  },
]);
```

Hosts can render these blocks with the same Mosaic/vgplot chart implementation
and settings UI used inside dashboard panels, without embedding a full
dashboard. Charts with the same `selectionGroupId` in one block document share
a crossfilter selection. Charts without a group get independent
document/block-scoped selections.

### Hosted Dashboards

Use a `statefulBlock` block when the document needs a multi-panel interactive
dashboard. The block instance id should map to dashboard state in the host app's
Mosaic slice, while the top-level artifact shell remains optional for workspace
navigation.

Standalone chart blocks are best for one chart with local context. Dashboard
stateful blocks are best for coordinated multi-panel views, richer dashboard
layout, or when dashboard AI tools are the natural authoring path.

## Commands

`createDocumentCommands()` registers AI- and palette-friendly commands for
document artifacts:

* `document.list`
* `document.get`
* `document.create`
* `document.set-markdown`
* `document.append-markdown`

`createBlockDocumentCommands()` registers commands for structured blocks
document artifacts. By default the command IDs are:

* `block-document.list`
* `block-document.get`
* `block-document.create`
* `block-document.append-blocks`
* `block-document.insert-blocks`
* `block-document.update-block`
* `block-document.remove-block`
* `block-document.move-block`
* `block-document.create-chart-block`
* `block-document.create-stateful-block`

Hosts can pass `artifactType`, `artifactLabel`, and `commandNamespace` options
to expose the same command surface under product-specific names while keeping
the package API generic.

Hosts can pass `statefulBlockTypes` to expose supported feature-backed block
types to `block-document.create-stateful-block`.

Structured block payloads may include an optional `intent` string. Use it for
the durable natural-language purpose of an agent- or command-created block,
such as the question a chart should answer or the job an embedded dashboard
should serve. It is persisted with the block, unlike transient mutation
metadata.

## CRDT

`@sqlrooms/documents/crdt` exposes Loro Mirror bindings for document state:

```ts
createCrdtSlice({
  mirrors: {
    documentState: createDocumentsCrdtMirror(),
  },
});
```

`createDocumentsCrdtMirror()` syncs Markdown document bodies, block document
Tiptap JSON content, document-owned assets, standalone chart block configs,
block document/document artifact metadata, and document artifact tab order.
The current artifact selection is kept local.

By default, the mirror treats `block-document` artifacts as block documents.
Hosts with their own artifact type names can pass
`blockDocumentArtifactTypes`, for example:

```ts
createDocumentsCrdtMirror({
  blockDocumentArtifactTypes: ['report'],
});
```

Hosted dashboard state should continue to use the host app's Mosaic persistence,
or a future Mosaic-specific CRDT mirror.

## Knowledge Index

`buildKnowledgeIndex` is a pure derived index. It does not persist data.

```ts
const index = buildKnowledgeIndex({
  documents: roomStore.getState().documents.config,
  artifacts: roomStore.getState().artifacts.config,
});
```

It extracts `[[Document Title]]` wikilinks, body hashtags such as `#metrics`,
and optional frontmatter tags. Links are resolved against document artifact
titles. Missing or ambiguous titles are reported as unresolved links.

## Type Aliases

* [BlockDocumentAgentPlanStep](/api/documents/type-aliases/BlockDocumentAgentPlanStep.md)
* [BlockDocumentAgentResult](/api/documents/type-aliases/BlockDocumentAgentResult.md)
* [BlockDocumentArtifactProps](/api/documents/type-aliases/BlockDocumentArtifactProps.md)
* [BlockDocumentChartRendererProps](/api/documents/type-aliases/BlockDocumentChartRendererProps.md)
* [BlockDocumentChartRenderer](/api/documents/type-aliases/BlockDocumentChartRenderer.md)
* [BlockDocumentChartRendererProviderProps](/api/documents/type-aliases/BlockDocumentChartRendererProviderProps.md)
* [BlockDocumentCommandSuffix](/api/documents/type-aliases/BlockDocumentCommandSuffix.md)
* [BlockDocumentStatefulBlockCommandContext](/api/documents/type-aliases/BlockDocumentStatefulBlockCommandContext.md)
* [BlockDocumentStatefulBlockCommandType](/api/documents/type-aliases/BlockDocumentStatefulBlockCommandType.md)
* [CreateBlockDocumentCommandsOptions](/api/documents/type-aliases/CreateBlockDocumentCommandsOptions.md)
* [BlockDocumentEditorContentProps](/api/documents/type-aliases/BlockDocumentEditorContentProps.md)
* [BlockDocumentEditorContextValue](/api/documents/type-aliases/BlockDocumentEditorContextValue.md)
* [BlockDocumentEditorRootProps](/api/documents/type-aliases/BlockDocumentEditorRootProps.md)
* [BlockDocumentToolbarProps](/api/documents/type-aliases/BlockDocumentToolbarProps.md)
* [BlockDocumentMark](/api/documents/type-aliases/BlockDocumentMark.md)
* [BlockDocumentNode](/api/documents/type-aliases/BlockDocumentNode.md)
* [BlockDocumentContent](/api/documents/type-aliases/BlockDocumentContent.md)
* [BlockDocument](/api/documents/type-aliases/BlockDocument.md)
* [BlockDocumentsSliceConfig](/api/documents/type-aliases/BlockDocumentsSliceConfig.md)
* [BlockDocumentHeadingBlock](/api/documents/type-aliases/BlockDocumentHeadingBlock.md)
* [BlockDocumentParagraphBlock](/api/documents/type-aliases/BlockDocumentParagraphBlock.md)
* [BlockDocumentListBlock](/api/documents/type-aliases/BlockDocumentListBlock.md)
* [BlockDocumentTodoBlock](/api/documents/type-aliases/BlockDocumentTodoBlock.md)
* [BlockDocumentImageBlock](/api/documents/type-aliases/BlockDocumentImageBlock.md)
* [BlockDocumentChartImageBlock](/api/documents/type-aliases/BlockDocumentChartImageBlock.md)
* [BlockDocumentChartBlock](/api/documents/type-aliases/BlockDocumentChartBlock.md)
* [BlockDocumentStatefulBlockBlock](/api/documents/type-aliases/BlockDocumentStatefulBlockBlock.md)
* [BlockDocumentBlock](/api/documents/type-aliases/BlockDocumentBlock.md)
* [BlockDocumentStatefulBlockRendererProps](/api/documents/type-aliases/BlockDocumentStatefulBlockRendererProps.md)
* [BlockDocumentStatefulBlockRenderer](/api/documents/type-aliases/BlockDocumentStatefulBlockRenderer.md)
* [BlockDocumentStatefulBlockRenderers](/api/documents/type-aliases/BlockDocumentStatefulBlockRenderers.md)
* [BlockDocumentStatefulBlockCreateNodeOptions](/api/documents/type-aliases/BlockDocumentStatefulBlockCreateNodeOptions.md)
* [BlockDocumentStatefulBlockType](/api/documents/type-aliases/BlockDocumentStatefulBlockType.md)
* [BlockDocumentStatefulBlockRendererProviderProps](/api/documents/type-aliases/BlockDocumentStatefulBlockRendererProviderProps.md)
* [BlockDocumentMutationOrigin](/api/documents/type-aliases/BlockDocumentMutationOrigin.md)
* [BlockDocumentMutationMetadata](/api/documents/type-aliases/BlockDocumentMutationMetadata.md)
* [BlockDocumentSyncMetadata](/api/documents/type-aliases/BlockDocumentSyncMetadata.md)
* [BlockDocumentStatefulBlockReference](/api/documents/type-aliases/BlockDocumentStatefulBlockReference.md)
* [BlockDocumentOwnedStatefulBlockReference](/api/documents/type-aliases/BlockDocumentOwnedStatefulBlockReference.md)
* [BlockDocumentOwnedStatefulBlockDeleteContext](/api/documents/type-aliases/BlockDocumentOwnedStatefulBlockDeleteContext.md)
* [BlockDocumentOwnedStatefulBlockCreateContext](/api/documents/type-aliases/BlockDocumentOwnedStatefulBlockCreateContext.md)
* [BlockDocumentOwnedStatefulBlockRenameContext](/api/documents/type-aliases/BlockDocumentOwnedStatefulBlockRenameContext.md)
* [BlockDocumentsSliceState](/api/documents/type-aliases/BlockDocumentsSliceState.md)
* [CreateBlockDocumentsSliceProps](/api/documents/type-aliases/CreateBlockDocumentsSliceProps.md)
* [DocumentAssetInput](/api/documents/type-aliases/DocumentAssetInput.md)
* [DocumentsSliceState](/api/documents/type-aliases/DocumentsSliceState.md)
* [CreateDocumentsSliceProps](/api/documents/type-aliases/CreateDocumentsSliceProps.md)
* [DocumentAsset](/api/documents/type-aliases/DocumentAsset.md)
* [MarkdownDocumentState](/api/documents/type-aliases/MarkdownDocumentState.md)
* [DocumentsSliceConfig](/api/documents/type-aliases/DocumentsSliceConfig.md)
* [MarkdownDocumentBlockRenderProps](/api/documents/type-aliases/MarkdownDocumentBlockRenderProps.md)
* [CreateMarkdownDocumentBlockDefinitionOptions](/api/documents/type-aliases/CreateMarkdownDocumentBlockDefinitionOptions.md)
* [MarkdownDocumentEditorContentProps](/api/documents/type-aliases/MarkdownDocumentEditorContentProps.md)
* [MarkdownDocumentEditorMode](/api/documents/type-aliases/MarkdownDocumentEditorMode.md)
* [MarkdownDocumentEditorRootProps](/api/documents/type-aliases/MarkdownDocumentEditorRootProps.md)
* [MarkdownDocumentEditorToolbarProps](/api/documents/type-aliases/MarkdownDocumentEditorToolbarProps.md)
* [DocumentLink](/api/documents/type-aliases/DocumentLink.md)
* [UnresolvedDocumentLink](/api/documents/type-aliases/UnresolvedDocumentLink.md)
* [DocumentTag](/api/documents/type-aliases/DocumentTag.md)
* [KnowledgeIndex](/api/documents/type-aliases/KnowledgeIndex.md)
* [BuildKnowledgeIndexProps](/api/documents/type-aliases/BuildKnowledgeIndexProps.md)

## Variables

* [BLOCK\_DOCUMENT\_AGENT\_TOOL\_NAME](/api/documents/variables/BLOCK_DOCUMENT_AGENT_TOOL_NAME.md)
* [BlockDocumentArtifact](/api/documents/variables/BlockDocumentArtifact.md)
* [BlockDocumentChartRendererProvider](/api/documents/variables/BlockDocumentChartRendererProvider.md)
* [BLOCK\_DOCUMENT\_COMMAND\_SUFFIXES](/api/documents/variables/BLOCK_DOCUMENT_COMMAND_SUFFIXES.md)
* [BlockDocumentEditor](/api/documents/variables/BlockDocumentEditor.md)
* [BlockDocumentEditorContent](/api/documents/variables/BlockDocumentEditorContent.md)
* [BlockDocumentEditorRoot](/api/documents/variables/BlockDocumentEditorRoot.md)
* [BlockDocumentToolbar](/api/documents/variables/BlockDocumentToolbar.md)
* [BlockDocumentMark](/api/documents/variables/BlockDocumentMark.md)
* [BlockDocumentNode](/api/documents/variables/BlockDocumentNode.md)
* [BlockDocumentContent](/api/documents/variables/BlockDocumentContent.md)
* [BlockDocument](/api/documents/variables/BlockDocument.md)
* [BlockDocumentsSliceConfig](/api/documents/variables/BlockDocumentsSliceConfig.md)
* [BlockDocumentHeadingBlock](/api/documents/variables/BlockDocumentHeadingBlock.md)
* [BlockDocumentParagraphBlock](/api/documents/variables/BlockDocumentParagraphBlock.md)
* [BlockDocumentListBlock](/api/documents/variables/BlockDocumentListBlock.md)
* [BlockDocumentTodoBlock](/api/documents/variables/BlockDocumentTodoBlock.md)
* [BlockDocumentImageBlock](/api/documents/variables/BlockDocumentImageBlock.md)
* [BlockDocumentChartImageBlock](/api/documents/variables/BlockDocumentChartImageBlock.md)
* [BlockDocumentChartBlock](/api/documents/variables/BlockDocumentChartBlock.md)
* [BlockDocumentStatefulBlockBlock](/api/documents/variables/BlockDocumentStatefulBlockBlock.md)
* [BlockDocumentBlock](/api/documents/variables/BlockDocumentBlock.md)
* [BlockDocumentStatefulBlockRendererProvider](/api/documents/variables/BlockDocumentStatefulBlockRendererProvider.md)
* [DocumentAsset](/api/documents/variables/DocumentAsset.md)
* [MarkdownDocumentState](/api/documents/variables/MarkdownDocumentState.md)
* [DocumentsSliceConfig](/api/documents/variables/DocumentsSliceConfig.md)
* [MarkdownDocument](/api/documents/variables/MarkdownDocument.md)
* [MarkdownDocumentEditor](/api/documents/variables/MarkdownDocumentEditor.md)
* [MarkdownDocumentEditorContent](/api/documents/variables/MarkdownDocumentEditorContent.md)
* [MarkdownDocumentEditorRoot](/api/documents/variables/MarkdownDocumentEditorRoot.md)
* [MarkdownDocumentEditorToolbar](/api/documents/variables/MarkdownDocumentEditorToolbar.md)

## Functions

* [useBlockDocumentChartRenderer](/api/documents/functions/useBlockDocumentChartRenderer.md)
* [createBlockDocumentCommandIds](/api/documents/functions/createBlockDocumentCommandIds.md)
* [createBlockDocumentCommands](/api/documents/functions/createBlockDocumentCommands.md)
* [useBlockDocumentEditorContext](/api/documents/functions/useBlockDocumentEditorContext.md)
* [normalizeBlockDocumentContent](/api/documents/functions/normalizeBlockDocumentContent.md)
* [createDefaultBlockDocumentBlockId](/api/documents/functions/createDefaultBlockDocumentBlockId.md)
* [createEmptyBlockDocumentContent](/api/documents/functions/createEmptyBlockDocumentContent.md)
* [blockDocumentBlockToNode](/api/documents/functions/blockDocumentBlockToNode.md)
* [blockDocumentNodeToBlock](/api/documents/functions/blockDocumentNodeToBlock.md)
* [blockDocumentContentToBlocks](/api/documents/functions/blockDocumentContentToBlocks.md)
* [useBlockDocumentStatefulBlockRenderer](/api/documents/functions/useBlockDocumentStatefulBlockRenderer.md)
* [useBlockDocumentStatefulBlockTypes](/api/documents/functions/useBlockDocumentStatefulBlockTypes.md)
* [createDefaultBlockDocumentsConfig](/api/documents/functions/createDefaultBlockDocumentsConfig.md)
* [createBlockDocumentsSlice](/api/documents/functions/createBlockDocumentsSlice.md)
* [createDefaultDocumentsConfig](/api/documents/functions/createDefaultDocumentsConfig.md)
* [createDocumentsSlice](/api/documents/functions/createDocumentsSlice.md)
* [createMarkdownDocumentBlockDefinition](/api/documents/functions/createMarkdownDocumentBlockDefinition.md)
* [createDocumentCommands](/api/documents/functions/createDocumentCommands.md)
* [buildKnowledgeIndex](/api/documents/functions/buildKnowledgeIndex.md)
* [useStoreWithBlockDocuments](/api/documents/functions/useStoreWithBlockDocuments.md)
* [useStoreWithDocuments](/api/documents/functions/useStoreWithDocuments.md)

## References

### DocumentAssetType

Renames and re-exports [DocumentAsset](/api/documents/variables/DocumentAsset.md)

***

### DocumentsSliceConfigType

Renames and re-exports [DocumentsSliceConfig](/api/documents/variables/DocumentsSliceConfig.md)

***

### MarkdownDocumentStateType

Renames and re-exports [MarkdownDocumentState](/api/documents/variables/MarkdownDocumentState.md)

***

### BlockDocumentBlockType

Renames and re-exports [BlockDocumentBlock](/api/documents/variables/BlockDocumentBlock.md)

***

### BlockDocumentType

Renames and re-exports [BlockDocument](/api/documents/variables/BlockDocument.md)

***

### BlockDocumentContentType

Renames and re-exports [BlockDocumentContent](/api/documents/variables/BlockDocumentContent.md)

***

### BlockDocumentMarkType

Renames and re-exports [BlockDocumentMark](/api/documents/variables/BlockDocumentMark.md)

***

### BlockDocumentNodeType

Renames and re-exports [BlockDocumentNode](/api/documents/variables/BlockDocumentNode.md)

***

### BlockDocumentsSliceConfigType

Renames and re-exports [BlockDocumentsSliceConfig](/api/documents/variables/BlockDocumentsSliceConfig.md)
