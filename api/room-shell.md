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
  LayoutTypes,
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
          type: LayoutTypes.enum.mosaic,
          nodes: {
            direction: 'row',
            first: 'data',
            second: 'main',
            splitPercentage: 28,
          },
        },
        panels: {
          data: {
            title: 'Data',
            icon: DatabaseIcon,
            component: DataPanel,
            placement: 'sidebar',
          },
          main: {
            title: 'Main',
            icon: () => null,
            component: MainPanel,
            placement: 'main',
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

## Related packages

* `@sqlrooms/sql-editor`
* `@sqlrooms/ai`
* `@sqlrooms/mosaic`
* `@sqlrooms/vega`

## Enumerations

* [DataSourceStatus](enumerations/DataSourceStatus.md)

## Interfaces

* [StoreApi](interfaces/StoreApi.md)

## Type Aliases

* [DbSliceState](type-aliases/DbSliceState.md)
* [RoomPanelInfo](type-aliases/RoomPanelInfo.md)
* [LayoutTypes](type-aliases/LayoutTypes.md)
* [MosaicLayoutDirection](type-aliases/MosaicLayoutDirection.md)
* [MosaicLayoutParent](type-aliases/MosaicLayoutParent.md)
* [MosaicLayoutNodeKey](type-aliases/MosaicLayoutNodeKey.md)
* [MosaicLayoutNode](type-aliases/MosaicLayoutNode.md)
* [MosaicLayoutConfig](type-aliases/MosaicLayoutConfig.md)
* [LayoutConfig](type-aliases/LayoutConfig.md)
* [BaseRoomConfig](type-aliases/BaseRoomConfig.md)
* [DataSourceTypes](type-aliases/DataSourceTypes.md)
* [BaseDataSource](type-aliases/BaseDataSource.md)
* [FileDataSource](type-aliases/FileDataSource.md)
* [UrlDataSource](type-aliases/UrlDataSource.md)
* [SqlQueryDataSource](type-aliases/SqlQueryDataSource.md)
* [DataSource](type-aliases/DataSource.md)
* [LoadFile](type-aliases/LoadFile.md)
* [StandardLoadOptions](type-aliases/StandardLoadOptions.md)
* [SpatialLoadOptions](type-aliases/SpatialLoadOptions.md)
* [SpatialLoadFileOptions](type-aliases/SpatialLoadFileOptions.md)
* [StandardLoadFileOptions](type-aliases/StandardLoadFileOptions.md)
* [LoadFileOptions](type-aliases/LoadFileOptions.md)
* [RoomShellCommandPaletteProps](type-aliases/RoomShellCommandPaletteProps.md)
* [RoomShellCommandPaletteButtonProps](type-aliases/RoomShellCommandPaletteButtonProps.md)
* [RoomShellSliceState](type-aliases/RoomShellSliceState.md)
* [TableAction](type-aliases/TableAction.md)
* [RoomFileState](type-aliases/RoomFileState.md)
* [RoomFileInfo](type-aliases/RoomFileInfo.md)
* [DataSourceState](type-aliases/DataSourceState.md)
* [BaseRoomStoreState](type-aliases/BaseRoomStoreState.md)
* [BaseRoomStore](type-aliases/BaseRoomStore.md)
* [UseRoomStore](type-aliases/UseRoomStore.md)
* [CreateBaseRoomSliceProps](type-aliases/CreateBaseRoomSliceProps.md)
* [CommandCliAdapterOptions](type-aliases/CommandCliAdapterOptions.md)
* [CommandCliAdapter](type-aliases/CommandCliAdapter.md)
* [CommandMcpToolDescriptor](type-aliases/CommandMcpToolDescriptor.md)
* [CommandMcpAdapterOptions](type-aliases/CommandMcpAdapterOptions.md)
* [CommandMcpAdapter](type-aliases/CommandMcpAdapter.md)
* [RoomCommandSurface](type-aliases/RoomCommandSurface.md)
* [RoomCommandInvocation](type-aliases/RoomCommandInvocation.md)
* [RoomCommandInvocationOptions](type-aliases/RoomCommandInvocationOptions.md)
* [RoomCommandExecutionContext](type-aliases/RoomCommandExecutionContext.md)
* [RoomCommandPredicate](type-aliases/RoomCommandPredicate.md)
* [RoomCommandInputComponentProps](type-aliases/RoomCommandInputComponentProps.md)
* [RoomCommandInputComponent](type-aliases/RoomCommandInputComponent.md)
* [RoomCommandRiskLevel](type-aliases/RoomCommandRiskLevel.md)
* [RoomCommandKeystrokes](type-aliases/RoomCommandKeystrokes.md)
* [RoomCommandPolicyMetadata](type-aliases/RoomCommandPolicyMetadata.md)
* [RoomCommandUiMetadata](type-aliases/RoomCommandUiMetadata.md)
* [RoomCommandResult](type-aliases/RoomCommandResult.md)
* [RoomCommandExecuteOutput](type-aliases/RoomCommandExecuteOutput.md)
* [RoomCommandMiddlewareNext](type-aliases/RoomCommandMiddlewareNext.md)
* [RoomCommandMiddleware](type-aliases/RoomCommandMiddleware.md)
* [RoomCommandInvokeStartEvent](type-aliases/RoomCommandInvokeStartEvent.md)
* [RoomCommandInvokeSuccessEvent](type-aliases/RoomCommandInvokeSuccessEvent.md)
* [RoomCommandInvokeFailureEvent](type-aliases/RoomCommandInvokeFailureEvent.md)
* [RoomCommandInvokeErrorEvent](type-aliases/RoomCommandInvokeErrorEvent.md)
* [CreateCommandSliceProps](type-aliases/CreateCommandSliceProps.md)
* [RoomCommand](type-aliases/RoomCommand.md)
* [RegisteredRoomCommand](type-aliases/RegisteredRoomCommand.md)
* [RoomCommandDescriptor](type-aliases/RoomCommandDescriptor.md)
* [RoomCommandListOptions](type-aliases/RoomCommandListOptions.md)
* [CommandSliceState](type-aliases/CommandSliceState.md)
* [RoomCommandPortableSchema](type-aliases/RoomCommandPortableSchema.md)
* [RoomStateProviderProps](type-aliases/RoomStateProviderProps.md)
* [StateCreator](type-aliases/StateCreator.md)

## Variables

* [MAIN\_VIEW](variables/MAIN_VIEW.md)
* [LayoutTypes](variables/LayoutTypes.md)
* [~~DEFAULT\_MOSAIC\_LAYOUT~~](variables/DEFAULT_MOSAIC_LAYOUT.md)
* [MosaicLayoutDirection](variables/MosaicLayoutDirection.md)
* [MosaicLayoutParent](variables/MosaicLayoutParent.md)
* [MosaicLayoutNodeKey](variables/MosaicLayoutNodeKey.md)
* [MosaicLayoutNode](variables/MosaicLayoutNode.md)
* [MosaicLayoutConfig](variables/MosaicLayoutConfig.md)
* [LayoutConfig](variables/LayoutConfig.md)
* [DEFAULT\_ROOM\_TITLE](variables/DEFAULT_ROOM_TITLE.md)
* [BaseRoomConfig](variables/BaseRoomConfig.md)
* [DataSourceTypes](variables/DataSourceTypes.md)
* [BaseDataSource](variables/BaseDataSource.md)
* [FileDataSource](variables/FileDataSource.md)
* [UrlDataSource](variables/UrlDataSource.md)
* [SqlQueryDataSource](variables/SqlQueryDataSource.md)
* [DataSource](variables/DataSource.md)
* [LoadFile](variables/LoadFile.md)
* [StandardLoadOptions](variables/StandardLoadOptions.md)
* [SpatialLoadOptions](variables/SpatialLoadOptions.md)
* [SpatialLoadFileOptions](variables/SpatialLoadFileOptions.md)
* [isSpatialLoadFileOptions](variables/isSpatialLoadFileOptions.md)
* [StandardLoadFileOptions](variables/StandardLoadFileOptions.md)
* [LoadFileOptions](variables/LoadFileOptions.md)
* [RoomShell](variables/RoomShell.md)
* [RoomShellCommandPalette](variables/RoomShellCommandPalette.md)
* [SidebarButton](variables/SidebarButton.md)
* [RoomShellSidebarButton](variables/RoomShellSidebarButton.md)
* [RoomShellSidebarButtons](variables/RoomShellSidebarButtons.md)
* [FileDataSourceCard](variables/FileDataSourceCard.md)
* [FileDataSourcesPanel](variables/FileDataSourcesPanel.md)
* [TableCard](variables/TableCard.md)
* [TablesListPanel](variables/TablesListPanel.md)
* [PanelHeaderButton](variables/PanelHeaderButton.md)
* [RoomPanel](variables/RoomPanel.md)
* [RoomPanelHeader](variables/RoomPanelHeader.md)
* [~~createRoomSlice~~](variables/createRoomSlice.md)
* [~~createBaseSlice~~](variables/createBaseSlice.md)
* [RoomStateContext](variables/RoomStateContext.md)

## Functions

* [createDbSlice](functions/createDbSlice.md)
* [createDefaultMosaicLayout](functions/createDefaultMosaicLayout.md)
* [isMosaicLayoutParent](functions/isMosaicLayoutParent.md)
* [createDefaultBaseRoomConfig](functions/createDefaultBaseRoomConfig.md)
* [isFileDataSource](functions/isFileDataSource.md)
* [isUrlDataSource](functions/isUrlDataSource.md)
* [isSqlQueryDataSource](functions/isSqlQueryDataSource.md)
* [createRoomShellSlice](functions/createRoomShellSlice.md)
* [useBaseRoomShellStore](functions/useBaseRoomShellStore.md)
* [createBaseRoomSlice](functions/createBaseRoomSlice.md)
* [createSlice](functions/createSlice.md)
* [createRoomStore](functions/createRoomStore.md)
* [createRoomStoreCreator](functions/createRoomStoreCreator.md)
* [isRoomSliceWithInitialize](functions/isRoomSliceWithInitialize.md)
* [isRoomSliceWithDestroy](functions/isRoomSliceWithDestroy.md)
* [createCommandCliAdapter](functions/createCommandCliAdapter.md)
* [createCommandMcpAdapter](functions/createCommandMcpAdapter.md)
* [createCommandSlice](functions/createCommandSlice.md)
* [createRoomCommandExecutionContext](functions/createRoomCommandExecutionContext.md)
* [hasCommandSliceState](functions/hasCommandSliceState.md)
* [registerCommandsForOwner](functions/registerCommandsForOwner.md)
* [unregisterCommandsForOwner](functions/unregisterCommandsForOwner.md)
* [listCommandsFromStore](functions/listCommandsFromStore.md)
* [invokeCommandFromStore](functions/invokeCommandFromStore.md)
* [validateCommandInput](functions/validateCommandInput.md)
* [doesCommandRequireInput](functions/doesCommandRequireInput.md)
* [getCommandShortcut](functions/getCommandShortcut.md)
* [getCommandKeystrokes](functions/getCommandKeystrokes.md)
* [getCommandInputComponent](functions/getCommandInputComponent.md)
* [resolveCommandPolicyMetadata](functions/resolveCommandPolicyMetadata.md)
* [exportCommandInputSchema](functions/exportCommandInputSchema.md)
* [RoomStateProvider](functions/RoomStateProvider.md)
* [useRoomStoreApi](functions/useRoomStoreApi.md)
* [useBaseRoomStore](functions/useBaseRoomStore.md)
* [createPersistHelpers](functions/createPersistHelpers.md)
* [persistSliceConfigs](functions/persistSliceConfigs.md)
* [useShallow](functions/useShallow.md)
