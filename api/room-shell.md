---
url: 'https://sqlrooms.org/api/room-shell.md'
---
# @sqlrooms/room-shell

Main SQLRooms application shell and default Room slice composition.

`@sqlrooms/room-shell` bundles:

* base room lifecycle (`room-store`)
* DuckDB slice (`@sqlrooms/duckdb`)
* layout slice (`@sqlrooms/layout`)
* React shell UI (`RoomShell`, sidebar/layout/loading components)

Use this package as the default entry point for most SQLRooms apps.

## Installation

```bash
npm install @sqlrooms/room-shell @sqlrooms/duckdb @sqlrooms/ui
```

## Quick start

```tsx
import {
  createRoomShellSlice,
  createRoomStore,
  RoomShell,
  RoomShellSliceState,
} from '@sqlrooms/room-shell';
import {DatabaseIcon} from 'lucide-react';

function DataPanel() {
  return <div className="p-2">Data panel</div>;
}

function MainPanel() {
  return <div className="p-2">Main panel</div>;
}

type RoomState = RoomShellSliceState;

export const {roomStore, useRoomStore} = createRoomStore<RoomState>(
  (set, get, store) => ({
    ...createRoomShellSlice({
      config: {
        title: 'My SQLRooms App',
        dataSources: [
          {
            type: 'url',
            tableName: 'earthquakes',
            url: 'https://huggingface.co/datasets/sqlrooms/earthquakes/resolve/main/earthquakes.parquet',
          },
        ],
      },
      layout: {
        config: {
          type: 'split',
          direction: 'row',
          children: [{type: 'panel', id: 'data', defaultSize: '28%'}, 'main'],
        },
        panels: {
          data: {
            title: 'Data',
            icon: DatabaseIcon,
            component: DataPanel,
          },
          main: {
            title: 'Main',
            icon: () => null,
            component: MainPanel,
          },
        },
      },
    })(set, get, store),
  }),
);

export function App() {
  return (
    <RoomShell roomStore={roomStore} className="h-screen">
      <RoomShell.Sidebar />
      <RoomShell.LayoutComposer />
      <RoomShell.LoadingProgress />
      <RoomShell.CommandPalette />
    </RoomShell>
  );
}
```

## Common room actions

```tsx
import {useRoomStore} from './store';
import {Button} from '@sqlrooms/ui';

function RoomActions() {
  const setRoomTitle = useRoomStore((state) => state.room.setRoomTitle);
  const addDataSource = useRoomStore((state) => state.room.addDataSource);
  const removeDataSource = useRoomStore((state) => state.room.removeDataSource);
  const addRoomFile = useRoomStore((state) => state.room.addRoomFile);

  return (
    <div className="flex gap-2">
      <Button onClick={() => setRoomTitle('Updated title')}>Rename room</Button>
      <Button
        onClick={() =>
          void addDataSource({
            type: 'sql',
            tableName: 'top_quakes',
            sqlQuery:
              'SELECT * FROM earthquakes ORDER BY Magnitude DESC LIMIT 100',
          })
        }
      >
        Add SQL data source
      </Button>
      <Button onClick={() => void removeDataSource('top_quakes')}>
        Remove SQL data source
      </Button>
      <Button
        onClick={async () => {
          const file = new File(['id,name\n1,Alice'], 'people.csv', {
            type: 'text/csv',
          });
          await addRoomFile(file);
        }}
      >
        Add file
      </Button>
    </div>
  );
}
```

## Persistence

Use `persistSliceConfigs` with schemas:

```tsx
import {
  BaseRoomConfig,
  LayoutConfig,
  createRoomStore,
  persistSliceConfigs,
} from '@sqlrooms/room-shell';

const persistence = {
  name: 'my-room-storage',
  sliceConfigSchemas: {
    room: BaseRoomConfig,
    layout: LayoutConfig,
  },
};

createRoomStore(
  persistSliceConfigs(persistence, (set, get, store) => ({
    // compose slices here
  })),
);
```

For host-owned storage such as DuckDB-backed project files, prefer
`createRoomStorePersistence` alongside these schema helpers. It is the default
room-store integration for explicit hydration, dirty tracking, save scheduling,
final flush, and save status without repeating Zustand subscription and
saved-snapshot wiring in every app.

Use `createPersistenceController` directly only for lower-level integrations that
need the same save policy outside a Zustand room store.

## Related packages

* `@sqlrooms/sql-editor`
* `@sqlrooms/ai`
* `@sqlrooms/mosaic`
* `@sqlrooms/vega`

## Enumerations

* [DataSourceStatus](/api/room-shell/enumerations/DataSourceStatus.md)

## Type Aliases

* [DbSliceState](/api/room-shell/type-aliases/DbSliceState.md)
* [LayoutRendererProps](/api/room-shell/type-aliases/LayoutRendererProps.md)
* [LayoutPath](/api/room-shell/type-aliases/LayoutPath.md)
* [RoomPanelComponent](/api/room-shell/type-aliases/RoomPanelComponent.md)
* [RoomPanelInfo](/api/room-shell/type-aliases/RoomPanelInfo.md)
* [LayoutNodeKey](/api/room-shell/type-aliases/LayoutNodeKey.md)
* [LayoutPanelNode](/api/room-shell/type-aliases/LayoutPanelNode.md)
* [LayoutSplitNode](/api/room-shell/type-aliases/LayoutSplitNode.md)
* [LayoutTabsNode](/api/room-shell/type-aliases/LayoutTabsNode.md)
* [LayoutNode](/api/room-shell/type-aliases/LayoutNode.md)
* [LayoutConfig](/api/room-shell/type-aliases/LayoutConfig.md)
* [LayoutDirection](/api/room-shell/type-aliases/LayoutDirection.md)
* [LayoutDirection](/api/room-shell/type-aliases/LayoutDirection-1.md)
* [BaseRoomConfig](/api/room-shell/type-aliases/BaseRoomConfig.md)
* [DataSourceTypes](/api/room-shell/type-aliases/DataSourceTypes.md)
* [BaseDataSource](/api/room-shell/type-aliases/BaseDataSource.md)
* [FileDataSource](/api/room-shell/type-aliases/FileDataSource.md)
* [UrlDataSource](/api/room-shell/type-aliases/UrlDataSource.md)
* [SqlQueryDataSource](/api/room-shell/type-aliases/SqlQueryDataSource.md)
* [DataSource](/api/room-shell/type-aliases/DataSource.md)
* [LoadFile](/api/room-shell/type-aliases/LoadFile.md)
* [StandardLoadOptions](/api/room-shell/type-aliases/StandardLoadOptions.md)
* [SpatialLoadOptions](/api/room-shell/type-aliases/SpatialLoadOptions.md)
* [SpatialLoadFileOptions](/api/room-shell/type-aliases/SpatialLoadFileOptions.md)
* [StandardLoadFileOptions](/api/room-shell/type-aliases/StandardLoadFileOptions.md)
* [LoadFileOptions](/api/room-shell/type-aliases/LoadFileOptions.md)
* [RoomShellCommandPaletteProps](/api/room-shell/type-aliases/RoomShellCommandPaletteProps.md)
* [RoomShellCommandPaletteButtonProps](/api/room-shell/type-aliases/RoomShellCommandPaletteButtonProps.md)
* [RoomShellSliceState](/api/room-shell/type-aliases/RoomShellSliceState.md)
* [TableAction](/api/room-shell/type-aliases/TableAction.md)
* [RoomFileState](/api/room-shell/type-aliases/RoomFileState.md)
* [RoomFileInfo](/api/room-shell/type-aliases/RoomFileInfo.md)
* [DataSourceState](/api/room-shell/type-aliases/DataSourceState.md)
* [BaseRoomStoreState](/api/room-shell/type-aliases/BaseRoomStoreState.md)
* [BaseRoomStore](/api/room-shell/type-aliases/BaseRoomStore.md)
* [UseRoomStore](/api/room-shell/type-aliases/UseRoomStore.md)
* [CreateBaseRoomSliceProps](/api/room-shell/type-aliases/CreateBaseRoomSliceProps.md)
* [CommandCliAdapterOptions](/api/room-shell/type-aliases/CommandCliAdapterOptions.md)
* [CommandCliAdapter](/api/room-shell/type-aliases/CommandCliAdapter.md)
* [CommandMcpToolDescriptor](/api/room-shell/type-aliases/CommandMcpToolDescriptor.md)
* [CommandMcpAdapterOptions](/api/room-shell/type-aliases/CommandMcpAdapterOptions.md)
* [CommandMcpAdapter](/api/room-shell/type-aliases/CommandMcpAdapter.md)
* [RoomCommandSurface](/api/room-shell/type-aliases/RoomCommandSurface.md)
* [RoomCommandInvocation](/api/room-shell/type-aliases/RoomCommandInvocation.md)
* [RoomCommandInvocationOptions](/api/room-shell/type-aliases/RoomCommandInvocationOptions.md)
* [RoomCommandExecutionContext](/api/room-shell/type-aliases/RoomCommandExecutionContext.md)
* [RoomCommandPredicate](/api/room-shell/type-aliases/RoomCommandPredicate.md)
* [RoomCommandInputComponentProps](/api/room-shell/type-aliases/RoomCommandInputComponentProps.md)
* [RoomCommandInputComponent](/api/room-shell/type-aliases/RoomCommandInputComponent.md)
* [RoomCommandRiskLevel](/api/room-shell/type-aliases/RoomCommandRiskLevel.md)
* [RoomCommandKeystrokes](/api/room-shell/type-aliases/RoomCommandKeystrokes.md)
* [RoomCommandPolicyMetadata](/api/room-shell/type-aliases/RoomCommandPolicyMetadata.md)
* [RoomCommandUiMetadata](/api/room-shell/type-aliases/RoomCommandUiMetadata.md)
* [RoomCommandResult](/api/room-shell/type-aliases/RoomCommandResult.md)
* [RoomCommandExecuteOutput](/api/room-shell/type-aliases/RoomCommandExecuteOutput.md)
* [RoomCommandMiddlewareNext](/api/room-shell/type-aliases/RoomCommandMiddlewareNext.md)
* [RoomCommandMiddleware](/api/room-shell/type-aliases/RoomCommandMiddleware.md)
* [RoomCommandInvokeStartEvent](/api/room-shell/type-aliases/RoomCommandInvokeStartEvent.md)
* [RoomCommandInvokeSuccessEvent](/api/room-shell/type-aliases/RoomCommandInvokeSuccessEvent.md)
* [RoomCommandInvokeFailureEvent](/api/room-shell/type-aliases/RoomCommandInvokeFailureEvent.md)
* [RoomCommandInvokeErrorEvent](/api/room-shell/type-aliases/RoomCommandInvokeErrorEvent.md)
* [CreateCommandSliceProps](/api/room-shell/type-aliases/CreateCommandSliceProps.md)
* [RoomCommand](/api/room-shell/type-aliases/RoomCommand.md)
* [RegisteredRoomCommand](/api/room-shell/type-aliases/RegisteredRoomCommand.md)
* [RoomCommandDescriptor](/api/room-shell/type-aliases/RoomCommandDescriptor.md)
* [RoomCommandListOptions](/api/room-shell/type-aliases/RoomCommandListOptions.md)
* [CommandSliceState](/api/room-shell/type-aliases/CommandSliceState.md)
* [PersistenceSaveReason](/api/room-shell/type-aliases/PersistenceSaveReason.md)
* [PersistenceSaveMetadata](/api/room-shell/type-aliases/PersistenceSaveMetadata.md)
* [PersistenceAdapter](/api/room-shell/type-aliases/PersistenceAdapter.md)
* [PersistenceControllerState](/api/room-shell/type-aliases/PersistenceControllerState.md)
* [PersistenceControllerListener](/api/room-shell/type-aliases/PersistenceControllerListener.md)
* [PersistenceController](/api/room-shell/type-aliases/PersistenceController.md)
* [CreatePersistenceControllerOptions](/api/room-shell/type-aliases/CreatePersistenceControllerOptions.md)
* [RoomCommandPortableSchema](/api/room-shell/type-aliases/RoomCommandPortableSchema.md)
* [RoomStateProviderProps](/api/room-shell/type-aliases/RoomStateProviderProps.md)
* [RoomStorePersistenceSnapshotCodec](/api/room-shell/type-aliases/RoomStorePersistenceSnapshotCodec.md)
* [RoomStorePersistenceSnapshotEquivalence](/api/room-shell/type-aliases/RoomStorePersistenceSnapshotEquivalence.md)
* [RoomStorePersistenceChangePredicate](/api/room-shell/type-aliases/RoomStorePersistenceChangePredicate.md)
* [CreateRoomStorePersistenceOptions](/api/room-shell/type-aliases/CreateRoomStorePersistenceOptions.md)
* [RoomStorePersistence](/api/room-shell/type-aliases/RoomStorePersistence.md)

## Variables

* [LayoutRenderer](/api/room-shell/variables/LayoutRenderer.md)
* [RoomDndProvider](/api/room-shell/variables/RoomDndProvider.md)
* [MAIN\_VIEW](/api/room-shell/variables/MAIN_VIEW.md)
* [LayoutNodeKey](/api/room-shell/variables/LayoutNodeKey.md)
* [LayoutPanelNode](/api/room-shell/variables/LayoutPanelNode.md)
* [LayoutSplitNode](/api/room-shell/variables/LayoutSplitNode.md)
* [LayoutTabsNode](/api/room-shell/variables/LayoutTabsNode.md)
* [LayoutNode](/api/room-shell/variables/LayoutNode.md)
* [LayoutConfig](/api/room-shell/variables/LayoutConfig.md)
* [DEFAULT\_ROOM\_TITLE](/api/room-shell/variables/DEFAULT_ROOM_TITLE.md)
* [BaseRoomConfig](/api/room-shell/variables/BaseRoomConfig.md)
* [DataSourceTypes](/api/room-shell/variables/DataSourceTypes.md)
* [BaseDataSource](/api/room-shell/variables/BaseDataSource.md)
* [FileDataSource](/api/room-shell/variables/FileDataSource.md)
* [UrlDataSource](/api/room-shell/variables/UrlDataSource.md)
* [SqlQueryDataSource](/api/room-shell/variables/SqlQueryDataSource.md)
* [DataSource](/api/room-shell/variables/DataSource.md)
* [LoadFile](/api/room-shell/variables/LoadFile.md)
* [StandardLoadOptions](/api/room-shell/variables/StandardLoadOptions.md)
* [SpatialLoadOptions](/api/room-shell/variables/SpatialLoadOptions.md)
* [SpatialLoadFileOptions](/api/room-shell/variables/SpatialLoadFileOptions.md)
* [isSpatialLoadFileOptions](/api/room-shell/variables/isSpatialLoadFileOptions.md)
* [StandardLoadFileOptions](/api/room-shell/variables/StandardLoadFileOptions.md)
* [LoadFileOptions](/api/room-shell/variables/LoadFileOptions.md)
* [RoomShell](/api/room-shell/variables/RoomShell.md)
* [RoomShellCommandPalette](/api/room-shell/variables/RoomShellCommandPalette.md)
* [SidebarButton](/api/room-shell/variables/SidebarButton.md)
* [RoomShellSidebarButton](/api/room-shell/variables/RoomShellSidebarButton.md)
* [RoomShellSidebarButtons](/api/room-shell/variables/RoomShellSidebarButtons.md)
* [TabButtons](/api/room-shell/variables/TabButtons.md)
* [~~AreaPanelButtons~~](/api/room-shell/variables/AreaPanelButtons.md)
* [FileDataSourceCard](/api/room-shell/variables/FileDataSourceCard.md)
* [FileDataSourcesPanel](/api/room-shell/variables/FileDataSourcesPanel.md)
* [TableCard](/api/room-shell/variables/TableCard.md)
* [TablesListPanel](/api/room-shell/variables/TablesListPanel.md)
* [PanelHeaderButton](/api/room-shell/variables/PanelHeaderButton.md)
* [RoomPanel](/api/room-shell/variables/RoomPanel.md)
* [RoomPanelHeader](/api/room-shell/variables/RoomPanelHeader.md)
* [~~createRoomSlice~~](/api/room-shell/variables/createRoomSlice.md)
* [~~createBaseSlice~~](/api/room-shell/variables/createBaseSlice.md)
* [RoomStateContext](/api/room-shell/variables/RoomStateContext.md)

## Functions

* [createDbSlice](/api/room-shell/functions/createDbSlice.md)
* [isLayoutPanelNode](/api/room-shell/functions/isLayoutPanelNode.md)
* [isLayoutSplitNode](/api/room-shell/functions/isLayoutSplitNode.md)
* [isLayoutTabsNode](/api/room-shell/functions/isLayoutTabsNode.md)
* [createDefaultLayout](/api/room-shell/functions/createDefaultLayout.md)
* [createDefaultBaseRoomConfig](/api/room-shell/functions/createDefaultBaseRoomConfig.md)
* [isFileDataSource](/api/room-shell/functions/isFileDataSource.md)
* [isUrlDataSource](/api/room-shell/functions/isUrlDataSource.md)
* [isSqlQueryDataSource](/api/room-shell/functions/isSqlQueryDataSource.md)
* [createRoomShellSlice](/api/room-shell/functions/createRoomShellSlice.md)
* [useBaseRoomShellStore](/api/room-shell/functions/useBaseRoomShellStore.md)
* [createBaseRoomSlice](/api/room-shell/functions/createBaseRoomSlice.md)
* [createSlice](/api/room-shell/functions/createSlice.md)
* [createRoomStore](/api/room-shell/functions/createRoomStore.md)
* [createRoomStoreCreator](/api/room-shell/functions/createRoomStoreCreator.md)
* [isRoomSliceWithInitialize](/api/room-shell/functions/isRoomSliceWithInitialize.md)
* [isRoomSliceWithDestroy](/api/room-shell/functions/isRoomSliceWithDestroy.md)
* [createCommandCliAdapter](/api/room-shell/functions/createCommandCliAdapter.md)
* [createCommandMcpAdapter](/api/room-shell/functions/createCommandMcpAdapter.md)
* [createCommandSlice](/api/room-shell/functions/createCommandSlice.md)
* [createRoomCommandExecutionContext](/api/room-shell/functions/createRoomCommandExecutionContext.md)
* [hasCommandSliceState](/api/room-shell/functions/hasCommandSliceState.md)
* [registerCommandsForOwner](/api/room-shell/functions/registerCommandsForOwner.md)
* [unregisterCommandsForOwner](/api/room-shell/functions/unregisterCommandsForOwner.md)
* [listCommandsFromStore](/api/room-shell/functions/listCommandsFromStore.md)
* [invokeCommandFromStore](/api/room-shell/functions/invokeCommandFromStore.md)
* [validateCommandInput](/api/room-shell/functions/validateCommandInput.md)
* [doesCommandRequireInput](/api/room-shell/functions/doesCommandRequireInput.md)
* [getCommandShortcut](/api/room-shell/functions/getCommandShortcut.md)
* [getCommandKeystrokes](/api/room-shell/functions/getCommandKeystrokes.md)
* [getCommandInputComponent](/api/room-shell/functions/getCommandInputComponent.md)
* [resolveCommandPolicyMetadata](/api/room-shell/functions/resolveCommandPolicyMetadata.md)
* [exportCommandInputSchema](/api/room-shell/functions/exportCommandInputSchema.md)
* [createPersistenceController](/api/room-shell/functions/createPersistenceController.md)
* [RoomStateProvider](/api/room-shell/functions/RoomStateProvider.md)
* [useRoomStoreApi](/api/room-shell/functions/useRoomStoreApi.md)
* [useBaseRoomStore](/api/room-shell/functions/useBaseRoomStore.md)
* [createPersistHelpers](/api/room-shell/functions/createPersistHelpers.md)
* [persistSliceConfigs](/api/room-shell/functions/persistSliceConfigs.md)
* [createRoomStorePersistence](/api/room-shell/functions/createRoomStorePersistence.md)
