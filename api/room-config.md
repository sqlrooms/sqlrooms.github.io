---
url: /api/room-config.md
---
# @sqlrooms/room-config

A central configuration and type definitions package that maintains base room configuration schemas and Zod schema definitions. It provides TypeScript types and interfaces along with essential constants and utilities used throughout the framework.

## Features

* 📝 **Room Configuration**: Define and manage room configuration schemas
* 🔍 **Type Safety**: Strong TypeScript typing for configuration objects
* ✅ **Validation**: Zod schemas for runtime validation of configuration

## Installation

```bash
npm install @sqlrooms/room-config
# or
yarn add @sqlrooms/room-config
```

## Basic Usage

### Working with Base Room Configuration

```tsx
import {BaseRoomConfig} from '@sqlrooms/room-config';

// Create a new room configuration
const roomConfig: BaseRoomConfig = {
  name: 'My SQL Room',
  description: 'A data analysis room using SQLRooms',
  version: '1.0.0',
  settings: {
    theme: 'dark',
    // Other settings...
  },
};

// Access configuration properties
console.log(roomConfig.name); // 'My SQL Room'
```

### Persisting Room Configuration

Room configuration is designed to be saved and restored between sessions. Here's how to use it with Zustand's persist middleware:

```tsx
import {persist} from 'zustand/middleware';
import {
  createRoomStore,
  createRoomShellSlice,
  RoomShellSliceState,
  StateCreator,
  createPersistHelpers,
  LayoutConfig,
} from '@sqlrooms/room-shell';
import {BaseRoomConfig} from '@sqlrooms/room-config';

type MyRoomState = RoomShellSliceState;

// Create a store with persistence for configuration
const {useRoomStore} = createRoomStore<MyRoomState>(
  persist(
    (set, get, store) => ({
      ...createRoomShellSlice({
        config: {
          title: 'My Room',
          // Other configuration properties
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
    }),
    {
      name: 'room-config-storage',
      // Use helper to persist configuration
      ...createPersistHelpers({
        room: BaseRoomConfig,
        layout: LayoutConfig,
      }),
    },
  ) as StateCreator<MyRoomState>,
);

// Access the config in components
function ConfigComponent() {
  // Config is accessed from state.room.config
  const config = useRoomStore((state) => state.room.config);

  return <div>{config.title}</div>;
}
```

## Advanced Features

* **Schema Extensions**: Extend base schemas for custom room types
* **Configuration Validation**: Validate configurations at runtime
* **Serialization**: Convert configurations to/from JSON for storage

For more information, visit the SQLRooms documentation.

```
```

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
