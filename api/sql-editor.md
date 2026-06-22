---
url: 'https://sqlrooms.org/api/sql-editor.md'
---
# @sqlrooms/sql-editor

SQL editor UI and state slice for SQLRooms apps.

This package provides:

* `createSqlEditorSlice()` for query tabs, execution, and results state
* `SqlEditor` and `SqlEditorModal` UI
* `SqlQuery` compound components and `SqlQueryBlock` for reusable single-query
  surfaces
* `SqlMonacoEditor` standalone SQL editor
* helpers/components for query results, table structure, and SQL data sources

## Installation

```bash
npm install @sqlrooms/sql-editor @sqlrooms/room-shell @sqlrooms/duckdb @sqlrooms/ui
```

## Store setup

```tsx
import {
  createRoomShellSlice,
  createRoomStore,
  RoomShellSliceState,
} from '@sqlrooms/room-shell';
import {createSqlEditorSlice, SqlEditorSliceState} from '@sqlrooms/sql-editor';

type RoomState = RoomShellSliceState & SqlEditorSliceState;

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
    ...createSqlEditorSlice()(set, get, store),
  }),
);
```

## Render SQL editor modal

```tsx
import {RoomShell} from '@sqlrooms/room-shell';
import {SqlEditorModal} from '@sqlrooms/sql-editor';
import {useDisclosure} from '@sqlrooms/ui';
import {TerminalIcon} from 'lucide-react';
import {roomStore} from './store';

export function App() {
  const sqlEditor = useDisclosure();

  return (
    <RoomShell roomStore={roomStore} className="h-screen">
      <RoomShell.Sidebar>
        <RoomShell.SidebarButton
          title="SQL Editor"
          icon={TerminalIcon}
          isSelected={sqlEditor.isOpen}
          onClick={sqlEditor.onToggle}
        />
      </RoomShell.Sidebar>
      <RoomShell.LayoutComposer />
      <SqlEditorModal isOpen={sqlEditor.isOpen} onClose={sqlEditor.onClose} />
    </RoomShell>
  );
}
```

## Run queries programmatically

```tsx
import {useRoomStore} from './store';
import {Button} from '@sqlrooms/ui';

function RunQueryButton() {
  const parseAndRunQuery = useRoomStore(
    (state) => state.sqlEditor.parseAndRunQuery,
  );
  const createQueryTab = useRoomStore(
    (state) => state.sqlEditor.createQueryTab,
  );

  const run = async () => {
    createQueryTab('SELECT COUNT(*) AS total FROM earthquakes');
    await parseAndRunQuery('SELECT COUNT(*) AS total FROM earthquakes');
  };

  return <Button onClick={() => void run()}>Run query</Button>;
}
```

For reusable single-query surfaces, use id-addressable query actions:

```tsx
const ensureQuery = useRoomStore((state) => state.sqlEditor.ensureQuery);
const runQueryById = useRoomStore((state) => state.sqlEditor.runQueryById);

ensureQuery('query-1', {name: 'Top Airports', query: 'SELECT * FROM airports'});
await runQueryById('query-1');
```

## Single Query UI

`SqlQuery` is a compound component for rearranging and styling a single query
experience without the full tabbed workbench:

```tsx
import {SqlQuery} from '@sqlrooms/sql-editor';

export function QueryBlock() {
  return (
    <SqlQuery.Root queryId="query-1" name="Top Airports">
      <SqlQuery.Header title="Top Airports">
        <SqlQuery.Actions />
      </SqlQuery.Header>
      <SqlQuery.Editor />
      <SqlQuery.Results />
    </SqlQuery.Root>
  );
}
```

`SqlQuery.Results` accepts the same props as `QueryResultPanel`, including
`footerDetails` for small metadata rendered at the end of the result footer and
`dataTableClassName` for styling the inner paginated table.

Use `createSqlQueryBlockDefinition()` when a SQL query should be both embeddable
as a stateful block and openable as an artifact shell.

## Standalone editor (without SQLRooms store)

`SqlMonacoEditor` can be used independently:

```tsx
import {SqlMonacoEditor} from '@sqlrooms/sql-editor';
import {useState} from 'react';

export function StandaloneEditor() {
  const [sql, setSql] = useState('SELECT 1');
  return (
    <SqlMonacoEditor
      value={sql}
      onChange={(v) => setSql(v ?? '')}
      height="320px"
    />
  );
}
```

## Related packages

* `@sqlrooms/sql-editor-config` for persisted SQL editor config schema
* `@sqlrooms/duckdb` for query execution and table state
* `@sqlrooms/schema-tree` for database tree rendering

## Example apps

* https://github.com/sqlrooms/examples/tree/main/query
* https://github.com/sqlrooms/examples/tree/main/query-websocket

## Interfaces

* [SqlCodeMirrorEditorProps](/api/sql-editor/interfaces/SqlCodeMirrorEditorProps.md)
* [~~SqlMonacoEditorProps~~](/api/sql-editor/interfaces/SqlMonacoEditorProps.md)
* [QueryEditorPanelProps](/api/sql-editor/interfaces/QueryEditorPanelProps.md)
* [QueryResultLimitSelectProps](/api/sql-editor/interfaces/QueryResultLimitSelectProps.md)
* [QueryResultPanelProps](/api/sql-editor/interfaces/QueryResultPanelProps.md)
* [QueryResultPanelAskAiProps](/api/sql-editor/interfaces/QueryResultPanelAskAiProps.md)
* [SchemaExplorerRootProps](/api/sql-editor/interfaces/SchemaExplorerRootProps.md)
* [SchemaExplorerHeaderProps](/api/sql-editor/interfaces/SchemaExplorerHeaderProps.md)
* [SchemaExplorerTreeProps](/api/sql-editor/interfaces/SchemaExplorerTreeProps.md)
* [SqlQueryPreviewProps](/api/sql-editor/interfaces/SqlQueryPreviewProps.md)
* [~~TableStructurePanelProps~~](/api/sql-editor/interfaces/TableStructurePanelProps.md)

## Type Aliases

* [SqlEditorProps](/api/sql-editor/type-aliases/SqlEditorProps.md)
* [SqlEditorQuery](/api/sql-editor/type-aliases/SqlEditorQuery.md)
* [EnsureSqlQueryOptions](/api/sql-editor/type-aliases/EnsureSqlQueryOptions.md)
* [QueryResult](/api/sql-editor/type-aliases/QueryResult.md)
* [SqlEditorSliceState](/api/sql-editor/type-aliases/SqlEditorSliceState.md)
* [~~SqlMonacoRunQueryOptions~~](/api/sql-editor/type-aliases/SqlMonacoRunQueryOptions.md)
* [SqlQueryRootProps](/api/sql-editor/type-aliases/SqlQueryRootProps.md)
* [SqlQueryHeaderProps](/api/sql-editor/type-aliases/SqlQueryHeaderProps.md)
* [SqlQueryToolbarProps](/api/sql-editor/type-aliases/SqlQueryToolbarProps.md)
* [SqlQueryActionsProps](/api/sql-editor/type-aliases/SqlQueryActionsProps.md)
* [SqlQueryEditorProps](/api/sql-editor/type-aliases/SqlQueryEditorProps.md)
* [SqlQueryResultsProps](/api/sql-editor/type-aliases/SqlQueryResultsProps.md)
* [SqlQueryBlockProps](/api/sql-editor/type-aliases/SqlQueryBlockProps.md)
* [CreateSqlQueryBlockDefinitionOptions](/api/sql-editor/type-aliases/CreateSqlQueryBlockDefinitionOptions.md)
* [SqlDialect](/api/sql-editor/type-aliases/SqlDialect.md)
* [CreateTableFormInitialValues](/api/sql-editor/type-aliases/CreateTableFormInitialValues.md)
* [CreateTableModalProps](/api/sql-editor/type-aliases/CreateTableModalProps.md)
* [SqlEditorHeaderProps](/api/sql-editor/type-aliases/SqlEditorHeaderProps.md)
* [SqlEditorSliceConfig](/api/sql-editor/type-aliases/SqlEditorSliceConfig.md)

## Variables

* [SqlCodeMirrorEditor](/api/sql-editor/variables/SqlCodeMirrorEditor.md)
* [SqlEditor](/api/sql-editor/variables/SqlEditor.md)
* [SqlEditorModal](/api/sql-editor/variables/SqlEditorModal.md)
* [~~SqlMonacoEditor~~](/api/sql-editor/variables/SqlMonacoEditor.md)
* [SqlQuery](/api/sql-editor/variables/SqlQuery.md)
* [SQL\_QUERY\_BLOCK\_TYPE](/api/sql-editor/variables/SQL_QUERY_BLOCK_TYPE.md)
* [SqlQueryBlock](/api/sql-editor/variables/SqlQueryBlock.md)
* [SqlDialects](/api/sql-editor/variables/SqlDialects.md)
* [CreateTableModal](/api/sql-editor/variables/CreateTableModal.md)
* [QueryEditorPanel](/api/sql-editor/variables/QueryEditorPanel.md)
* [~~QueryEditorPanelActions~~](/api/sql-editor/variables/QueryEditorPanelActions.md)
* [~~QueryEditorPanelEditor~~](/api/sql-editor/variables/QueryEditorPanelEditor.md)
* [QueryEditorPanelTabsList](/api/sql-editor/variables/QueryEditorPanelTabsList.md)
* [QueryResultLimitSelect](/api/sql-editor/variables/QueryResultLimitSelect.md)
* [QueryResultPanel](/api/sql-editor/variables/QueryResultPanel.md)
* [SchemaExplorer](/api/sql-editor/variables/SchemaExplorer.md)
* [SqlEditorHeader](/api/sql-editor/variables/SqlEditorHeader.md)
* [SqlQueryDataSourcesPanel](/api/sql-editor/variables/SqlQueryDataSourcesPanel.md)
* [SqlQueryPreview](/api/sql-editor/variables/SqlQueryPreview.md)
* [SqlReferenceButton](/api/sql-editor/variables/SqlReferenceButton.md)
* [SqlReferenceButtonContent](/api/sql-editor/variables/SqlReferenceButtonContent.md)
* [~~TableStructurePanel~~](/api/sql-editor/variables/TableStructurePanel.md)
* [SqlEditorSliceConfig](/api/sql-editor/variables/SqlEditorSliceConfig.md)

## Functions

* [createSqlEditorSlice](/api/sql-editor/functions/createSqlEditorSlice.md)
* [createSqlQueryBlockDefinition](/api/sql-editor/functions/createSqlQueryBlockDefinition.md)
* [createDefaultSqlEditorConfig](/api/sql-editor/functions/createDefaultSqlEditorConfig.md)
