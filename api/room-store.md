---
url: 'https://sqlrooms.org/api/room-store.md'
---
# @sqlrooms/room-store

Low-level state management primitives for SQLRooms, built on Zustand.

Use this package when you want to build custom room state from scratch.\
If you want DuckDB + layout + room shell out of the box, use `@sqlrooms/room-shell`.

## Installation

```bash
npm install @sqlrooms/room-store
```

## What this package provides

* `createRoomStore()` and `createRoomStoreCreator()`
* base lifecycle slice: `createBaseRoomSlice()`
* generic slice helper: `createSlice()`
* React context/hooks: `RoomStateProvider`, `useBaseRoomStore`, `useRoomStoreApi`
* persistence helpers: `persistSliceConfigs()`, `createPersistHelpers()`
* room-store persistence glue: `createRoomStorePersistence()`
* persistence controller: `createPersistenceController()`

## Quick start

```tsx
import {
  BaseRoomStoreState,
  createBaseRoomSlice,
  createRoomStore,
  createSlice,
  type StateCreator,
} from '@sqlrooms/room-store';

type CounterSliceState = {
  counter: {
    value: number;
    increment: () => void;
  };
};

function createCounterSlice(): StateCreator<CounterSliceState> {
  return createSlice<CounterSliceState>((set, get) => ({
    counter: {
      value: 0,
      increment: () =>
        set((state) => ({
          counter: {
            ...state.counter,
            value: get().counter.value + 1,
          },
        })),
    },
  }));
}

type RoomState = BaseRoomStoreState & CounterSliceState;

export const {roomStore, useRoomStore} = createRoomStore<RoomState>(
  (set, get, store) => ({
    ...createBaseRoomSlice()(set, get, store),
    ...createCounterSlice()(set, get, store),
  }),
);
```

## React integration

```tsx
import {RoomStateProvider} from '@sqlrooms/room-store';
import {roomStore} from './store';

export function App() {
  return (
    <RoomStateProvider roomStore={roomStore}>
      <Dashboard />
    </RoomStateProvider>
  );
}
```

```tsx
import {useRoomStore} from './store';
import {Button} from '@sqlrooms/ui';

function Dashboard() {
  const value = useRoomStore((state) => state.counter.value);
  const increment = useRoomStore((state) => state.counter.increment);

  return <Button onClick={increment}>Count: {value}</Button>;
}
```

## Imperative access

Use `roomStore.getState()` for non-reactive code (events, timers, async jobs).

```ts
import {roomStore} from './store';

export function incrementLater() {
  setTimeout(() => {
    roomStore.getState().counter.increment();
  }, 500);
}
```

## Persistence

For a Zustand room store with host-owned storage, prefer
`createRoomStorePersistence()`. It composes `createPersistHelpers()` with a
controller-backed `PersistStorage`, rehydrate saved-snapshot marking, optional
room-store subscription, autosave, and final flush helpers. This is the default
entry point for SQLRooms apps that persist room state to DuckDB, files, or another
project-owned store. See the
[Persistence developer guide](https://sqlrooms.org/persistence.html) for the
full integration model, data flow, and examples.

Use the lower-level `createPersistenceController()` only when you need the same
persistence policy outside a room store or Zustand persist. The controller is
storage-agnostic: hosts provide `load()` and `save()` adapter functions, while
SQLRooms handles hydration state, dirty tracking, scheduled saves, final flush,
in-flight save coalescing, and observable save status.

`createPersistHelpers()` still only handles schema-based partialization and
rehydrate merging. Let `createRoomStorePersistence()` combine those helpers with
save policy unless you have a custom integration that does not fit the room-store
helper.

```ts
import {createRoomStorePersistence} from '@sqlrooms/room-store';

const persistence = createRoomStorePersistence({
  partialize: (state) => ({room: state.room.config}),
  autosaveDelayMs: 300,
  load: async () => loadProjectSnapshot(),
  save: async (snapshot, metadata) => {
    await saveProjectSnapshot(snapshot, metadata?.reason);
  },
});

await persistence.hydrate();
await persistence.flush('final-flush');
```

Inside components, `useRoomStoreApi()` gives you the raw store API:

```tsx
import {useRoomStoreApi} from '@sqlrooms/room-store';
import {Button} from '@sqlrooms/ui';

function ResetButton() {
  const store = useRoomStoreApi();
  return (
    <Button
      onClick={() => {
        // Example: imperative read from store
        const current = store.getState().room.initialized;
        console.log('initialized', current);
      }}
    >
      Inspect store
    </Button>
  );
}
```

## Interfaces

* [SliceFunctions](/api/room-store/interfaces/SliceFunctions.md)

## Type Aliases

* [LayoutNodeKey](/api/room-store/type-aliases/LayoutNodeKey.md)
* [LayoutPanelNode](/api/room-store/type-aliases/LayoutPanelNode.md)
* [LayoutSplitNode](/api/room-store/type-aliases/LayoutSplitNode.md)
* [LayoutTabsNode](/api/room-store/type-aliases/LayoutTabsNode.md)
* [LayoutNode](/api/room-store/type-aliases/LayoutNode.md)
* [LayoutConfig](/api/room-store/type-aliases/LayoutConfig.md)
* [LayoutDirection](/api/room-store/type-aliases/LayoutDirection.md)
* [LayoutDirection](/api/room-store/type-aliases/LayoutDirection-1.md)
* [BaseRoomConfig](/api/room-store/type-aliases/BaseRoomConfig.md)
* [DataSourceTypes](/api/room-store/type-aliases/DataSourceTypes.md)
* [BaseDataSource](/api/room-store/type-aliases/BaseDataSource.md)
* [FileDataSource](/api/room-store/type-aliases/FileDataSource.md)
* [UrlDataSource](/api/room-store/type-aliases/UrlDataSource.md)
* [SqlQueryDataSource](/api/room-store/type-aliases/SqlQueryDataSource.md)
* [DataSource](/api/room-store/type-aliases/DataSource.md)
* [LoadFile](/api/room-store/type-aliases/LoadFile.md)
* [StandardLoadOptions](/api/room-store/type-aliases/StandardLoadOptions.md)
* [SpatialLoadOptions](/api/room-store/type-aliases/SpatialLoadOptions.md)
* [SpatialLoadFileOptions](/api/room-store/type-aliases/SpatialLoadFileOptions.md)
* [StandardLoadFileOptions](/api/room-store/type-aliases/StandardLoadFileOptions.md)
* [LoadFileOptions](/api/room-store/type-aliases/LoadFileOptions.md)
* [BaseRoomStoreState](/api/room-store/type-aliases/BaseRoomStoreState.md)
* [BaseRoomStore](/api/room-store/type-aliases/BaseRoomStore.md)
* [UseRoomStore](/api/room-store/type-aliases/UseRoomStore.md)
* [CreateBaseRoomSliceProps](/api/room-store/type-aliases/CreateBaseRoomSliceProps.md)
* [CommandCliAdapterOptions](/api/room-store/type-aliases/CommandCliAdapterOptions.md)
* [CommandCliAdapter](/api/room-store/type-aliases/CommandCliAdapter.md)
* [CommandMcpToolDescriptor](/api/room-store/type-aliases/CommandMcpToolDescriptor.md)
* [CommandMcpAdapterOptions](/api/room-store/type-aliases/CommandMcpAdapterOptions.md)
* [CommandMcpAdapter](/api/room-store/type-aliases/CommandMcpAdapter.md)
* [RoomCommandSurface](/api/room-store/type-aliases/RoomCommandSurface.md)
* [RoomCommandInvocation](/api/room-store/type-aliases/RoomCommandInvocation.md)
* [RoomCommandInvocationOptions](/api/room-store/type-aliases/RoomCommandInvocationOptions.md)
* [RoomCommandExecutionContext](/api/room-store/type-aliases/RoomCommandExecutionContext.md)
* [RoomCommandPredicate](/api/room-store/type-aliases/RoomCommandPredicate.md)
* [RoomCommandInputComponentProps](/api/room-store/type-aliases/RoomCommandInputComponentProps.md)
* [RoomCommandInputComponent](/api/room-store/type-aliases/RoomCommandInputComponent.md)
* [RoomCommandRiskLevel](/api/room-store/type-aliases/RoomCommandRiskLevel.md)
* [RoomCommandKeystrokes](/api/room-store/type-aliases/RoomCommandKeystrokes.md)
* [RoomCommandPolicyMetadata](/api/room-store/type-aliases/RoomCommandPolicyMetadata.md)
* [RoomCommandUiMetadata](/api/room-store/type-aliases/RoomCommandUiMetadata.md)
* [RoomCommandResult](/api/room-store/type-aliases/RoomCommandResult.md)
* [RoomCommandExecuteOutput](/api/room-store/type-aliases/RoomCommandExecuteOutput.md)
* [RoomCommandMiddlewareNext](/api/room-store/type-aliases/RoomCommandMiddlewareNext.md)
* [RoomCommandMiddleware](/api/room-store/type-aliases/RoomCommandMiddleware.md)
* [RoomCommandInvokeStartEvent](/api/room-store/type-aliases/RoomCommandInvokeStartEvent.md)
* [RoomCommandInvokeSuccessEvent](/api/room-store/type-aliases/RoomCommandInvokeSuccessEvent.md)
* [RoomCommandInvokeFailureEvent](/api/room-store/type-aliases/RoomCommandInvokeFailureEvent.md)
* [RoomCommandInvokeErrorEvent](/api/room-store/type-aliases/RoomCommandInvokeErrorEvent.md)
* [CreateCommandSliceProps](/api/room-store/type-aliases/CreateCommandSliceProps.md)
* [RoomCommand](/api/room-store/type-aliases/RoomCommand.md)
* [RegisteredRoomCommand](/api/room-store/type-aliases/RegisteredRoomCommand.md)
* [RoomCommandDescriptor](/api/room-store/type-aliases/RoomCommandDescriptor.md)
* [RoomCommandListOptions](/api/room-store/type-aliases/RoomCommandListOptions.md)
* [CommandSliceState](/api/room-store/type-aliases/CommandSliceState.md)
* [PersistenceSaveReason](/api/room-store/type-aliases/PersistenceSaveReason.md)
* [PersistenceSaveMetadata](/api/room-store/type-aliases/PersistenceSaveMetadata.md)
* [PersistenceAdapter](/api/room-store/type-aliases/PersistenceAdapter.md)
* [PersistenceControllerState](/api/room-store/type-aliases/PersistenceControllerState.md)
* [PersistenceControllerListener](/api/room-store/type-aliases/PersistenceControllerListener.md)
* [PersistenceController](/api/room-store/type-aliases/PersistenceController.md)
* [CreatePersistenceControllerOptions](/api/room-store/type-aliases/CreatePersistenceControllerOptions.md)
* [RoomCommandPortableSchema](/api/room-store/type-aliases/RoomCommandPortableSchema.md)
* [RoomStateProviderProps](/api/room-store/type-aliases/RoomStateProviderProps.md)
* [RoomStorePersistenceSnapshotCodec](/api/room-store/type-aliases/RoomStorePersistenceSnapshotCodec.md)
* [RoomStorePersistenceSnapshotEquivalence](/api/room-store/type-aliases/RoomStorePersistenceSnapshotEquivalence.md)
* [RoomStorePersistenceChangePredicate](/api/room-store/type-aliases/RoomStorePersistenceChangePredicate.md)
* [CreateRoomStorePersistenceOptions](/api/room-store/type-aliases/CreateRoomStorePersistenceOptions.md)
* [RoomStorePersistence](/api/room-store/type-aliases/RoomStorePersistence.md)

## Variables

* [MAIN\_VIEW](/api/room-store/variables/MAIN_VIEW.md)
* [LayoutNodeKey](/api/room-store/variables/LayoutNodeKey.md)
* [LayoutPanelNode](/api/room-store/variables/LayoutPanelNode.md)
* [LayoutSplitNode](/api/room-store/variables/LayoutSplitNode.md)
* [LayoutTabsNode](/api/room-store/variables/LayoutTabsNode.md)
* [LayoutNode](/api/room-store/variables/LayoutNode.md)
* [LayoutConfig](/api/room-store/variables/LayoutConfig.md)
* [DEFAULT\_ROOM\_TITLE](/api/room-store/variables/DEFAULT_ROOM_TITLE.md)
* [BaseRoomConfig](/api/room-store/variables/BaseRoomConfig.md)
* [DataSourceTypes](/api/room-store/variables/DataSourceTypes.md)
* [BaseDataSource](/api/room-store/variables/BaseDataSource.md)
* [FileDataSource](/api/room-store/variables/FileDataSource.md)
* [UrlDataSource](/api/room-store/variables/UrlDataSource.md)
* [SqlQueryDataSource](/api/room-store/variables/SqlQueryDataSource.md)
* [DataSource](/api/room-store/variables/DataSource.md)
* [LoadFile](/api/room-store/variables/LoadFile.md)
* [StandardLoadOptions](/api/room-store/variables/StandardLoadOptions.md)
* [SpatialLoadOptions](/api/room-store/variables/SpatialLoadOptions.md)
* [SpatialLoadFileOptions](/api/room-store/variables/SpatialLoadFileOptions.md)
* [isSpatialLoadFileOptions](/api/room-store/variables/isSpatialLoadFileOptions.md)
* [StandardLoadFileOptions](/api/room-store/variables/StandardLoadFileOptions.md)
* [LoadFileOptions](/api/room-store/variables/LoadFileOptions.md)
* [~~createRoomSlice~~](/api/room-store/variables/createRoomSlice.md)
* [~~createBaseSlice~~](/api/room-store/variables/createBaseSlice.md)
* [RoomStateContext](/api/room-store/variables/RoomStateContext.md)

## Functions

* [isLayoutPanelNode](/api/room-store/functions/isLayoutPanelNode.md)
* [isLayoutSplitNode](/api/room-store/functions/isLayoutSplitNode.md)
* [isLayoutTabsNode](/api/room-store/functions/isLayoutTabsNode.md)
* [createDefaultLayout](/api/room-store/functions/createDefaultLayout.md)
* [createDefaultBaseRoomConfig](/api/room-store/functions/createDefaultBaseRoomConfig.md)
* [isFileDataSource](/api/room-store/functions/isFileDataSource.md)
* [isUrlDataSource](/api/room-store/functions/isUrlDataSource.md)
* [isSqlQueryDataSource](/api/room-store/functions/isSqlQueryDataSource.md)
* [createBaseRoomSlice](/api/room-store/functions/createBaseRoomSlice.md)
* [createSlice](/api/room-store/functions/createSlice.md)
* [createRoomStore](/api/room-store/functions/createRoomStore.md)
* [createRoomStoreCreator](/api/room-store/functions/createRoomStoreCreator.md)
* [isRoomSliceWithInitialize](/api/room-store/functions/isRoomSliceWithInitialize.md)
* [isRoomSliceWithDestroy](/api/room-store/functions/isRoomSliceWithDestroy.md)
* [createCommandCliAdapter](/api/room-store/functions/createCommandCliAdapter.md)
* [createCommandMcpAdapter](/api/room-store/functions/createCommandMcpAdapter.md)
* [createCommandSlice](/api/room-store/functions/createCommandSlice.md)
* [createRoomCommandExecutionContext](/api/room-store/functions/createRoomCommandExecutionContext.md)
* [hasCommandSliceState](/api/room-store/functions/hasCommandSliceState.md)
* [registerCommandsForOwner](/api/room-store/functions/registerCommandsForOwner.md)
* [unregisterCommandsForOwner](/api/room-store/functions/unregisterCommandsForOwner.md)
* [listCommandsFromStore](/api/room-store/functions/listCommandsFromStore.md)
* [invokeCommandFromStore](/api/room-store/functions/invokeCommandFromStore.md)
* [validateCommandInput](/api/room-store/functions/validateCommandInput.md)
* [doesCommandRequireInput](/api/room-store/functions/doesCommandRequireInput.md)
* [getCommandShortcut](/api/room-store/functions/getCommandShortcut.md)
* [getCommandKeystrokes](/api/room-store/functions/getCommandKeystrokes.md)
* [getCommandInputComponent](/api/room-store/functions/getCommandInputComponent.md)
* [resolveCommandPolicyMetadata](/api/room-store/functions/resolveCommandPolicyMetadata.md)
* [exportCommandInputSchema](/api/room-store/functions/exportCommandInputSchema.md)
* [createPersistenceController](/api/room-store/functions/createPersistenceController.md)
* [RoomStateProvider](/api/room-store/functions/RoomStateProvider.md)
* [useRoomStoreApi](/api/room-store/functions/useRoomStoreApi.md)
* [useBaseRoomStore](/api/room-store/functions/useBaseRoomStore.md)
* [createPersistHelpers](/api/room-store/functions/createPersistHelpers.md)
* [persistSliceConfigs](/api/room-store/functions/persistSliceConfigs.md)
* [createRoomStorePersistence](/api/room-store/functions/createRoomStorePersistence.md)
