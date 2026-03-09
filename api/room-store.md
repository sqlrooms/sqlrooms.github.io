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

* [SliceFunctions](interfaces/SliceFunctions.md)
* [StoreApi](interfaces/StoreApi.md)

## Type Aliases

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
* [~~createRoomSlice~~](variables/createRoomSlice.md)
* [~~createBaseSlice~~](variables/createBaseSlice.md)
* [RoomStateContext](variables/RoomStateContext.md)

## Functions

* [createDefaultMosaicLayout](functions/createDefaultMosaicLayout.md)
* [isMosaicLayoutParent](functions/isMosaicLayoutParent.md)
* [createDefaultBaseRoomConfig](functions/createDefaultBaseRoomConfig.md)
* [isFileDataSource](functions/isFileDataSource.md)
* [isUrlDataSource](functions/isUrlDataSource.md)
* [isSqlQueryDataSource](functions/isSqlQueryDataSource.md)
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
