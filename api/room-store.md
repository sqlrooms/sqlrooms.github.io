---
url: /api/room-store.md
---
# @sqlrooms/room-store

This package provides the core state management for SQLRooms using [Zustand](https://github.com/pmndrs/zustand). It is designed to be extensible, allowing you to build custom room experiences by creating and composing state "slices".

## Installation

```bash
npm install @sqlrooms/room-store @sqlrooms/room-config zod zustand
```

## Core Concepts

### RoomStore

The `RoomStore` is a Zustand store that holds the entire state of a room. It is created by calling `createRoomStore` with a function that composes one or more slice creators.

### RoomState

The `RoomState` is the object that defines the shape of the store. It includes state from the base room shell slice and any additional slices you add:

* `room.config`: This holds the configuration of the room that is persisted. This is defined by a `zod` schema, often extending the `BaseRoomConfig` from `@sqlrooms/room-config`.
* `room`: This holds the client-side state of the room, such as task progress, and provides actions for interacting with the room.
* `db`: DuckDB database state and methods
* `layout`: Layout configuration and panel definitions

### Slices

A slice is a piece of the room's state and its associated actions. You can create your own slices to add custom functionality to your room. The framework provides `createRoomShellSlice` to create the base slice with core room functionality. You combine this with your own slices inside the `createRoomStore` composer function.

## Basic Usage

Here's an example of how to create a room store with a custom feature slice.

```typescript
import {
  createRoomStore,
  createRoomShellSlice,
  RoomShellSliceState,
} from '@sqlrooms/room-store';
import {StateCreator} from 'zustand';

// 1. Define the state and actions for your custom feature slice.
export interface MyFeatureSlice {
  activeChartId: string | null;
  setActiveChartId: (id: string | null) => void;
}

// 2. Create your custom slice.
export const createMyFeatureSlice: StateCreator<MyFeatureSlice> = (set) => ({
  activeChartId: null,
  setActiveChartId: (id) => set({activeChartId: id}),
});

// 3. Define the full state of your room, combining the base RoomShellSliceState
// with your custom slice's state.
export type MyRoomState = RoomShellSliceState & MyFeatureSlice;

// 4. Create the room store by composing the base slice and your custom slice.
export const {roomStore, useRoomStore} = createRoomStore<MyRoomState>(
  (set, get, store) => ({
    ...createRoomShellSlice({
      config: {
        // You can provide initial values for your config here
        title: 'My First Room',
        dataSources: [],
      },
      layout: {
        config: {
          // Layout configuration
        },
        panels: {
          // Panel definitions
        },
      },
    })(set, get, store),

    // Add your custom slice to the store
    ...createMyFeatureSlice(set, get, store),
  }),
);

export {roomStore, useRoomStore};
```

## Providing the Store

To make the store available to your React components, you need to use the `RoomStateProvider` component at the root of your application.

```tsx
import {RoomStateProvider} from '@sqlrooms/room-store';
import {roomStore} from './my-room-store';

function App() {
  return (
    <RoomStateProvider value={roomStore}>
      {/* Your room components go here */}
    </RoomStateProvider>
  );
}
```

## Accessing the Store in Components

You can use the `useRoomStore` hook returned by `createRoomStore` to access the room's state and actions from any component.

```tsx
import {useRoomStore} from './my-room-store';

function RoomTitle() {
  const title = useRoomStore((state) => state.room.config.title);
  const activeChartId = useRoomStore((state) => state.activeChartId);
  const setActiveChartId = useRoomStore((state) => state.setActiveChartId);

  return (
    <div>
      <h1>{title}</h1>
      <p>Active Chart: {activeChartId || 'None'}</p>
      <button onClick={() => setActiveChartId('chart-123')}>
        Activate Chart
      </button>
    </div>
  );
}
```

## Interfaces

* [StoreApi](interfaces/StoreApi.md)

## Type Aliases

* [StateCreator](type-aliases/StateCreator.md)
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
* [CreateBaseRoomSliceProps](type-aliases/CreateBaseRoomSliceProps.md)
* [RoomStateProviderProps](type-aliases/RoomStateProviderProps.md)

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
* [StandardLoadFileOptions](variables/StandardLoadFileOptions.md)
* [LoadFileOptions](variables/LoadFileOptions.md)

## Functions

* [createDefaultMosaicLayout](functions/createDefaultMosaicLayout.md)
* [isMosaicLayoutParent](functions/isMosaicLayoutParent.md)
* [createDefaultBaseRoomConfig](functions/createDefaultBaseRoomConfig.md)
* [isFileDataSource](functions/isFileDataSource.md)
* [isUrlDataSource](functions/isUrlDataSource.md)
* [isSqlQueryDataSource](functions/isSqlQueryDataSource.md)
* [isSpatialLoadFileOptions](functions/isSpatialLoadFileOptions.md)
* [createBaseRoomSlice](functions/createBaseRoomSlice.md)
* [~~createRoomSlice~~](functions/createRoomSlice.md)
* [createSlice](functions/createSlice.md)
* [~~createBaseSlice~~](functions/createBaseSlice.md)
* [createRoomStore](functions/createRoomStore.md)
* [createRoomStoreCreator](functions/createRoomStoreCreator.md)
* [isRoomSliceWithInitialize](functions/isRoomSliceWithInitialize.md)
* [isRoomSliceWithDestroy](functions/isRoomSliceWithDestroy.md)
* [RoomStateContext](functions/RoomStateContext.md)
* [RoomStateProvider](functions/RoomStateProvider.md)
* [useBaseRoomStore](functions/useBaseRoomStore.md)
* [createPersistHelpers](functions/createPersistHelpers.md)
