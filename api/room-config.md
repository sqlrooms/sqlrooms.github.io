---
url: 'https://sqlrooms.org/api/room-config.md'
---
# @sqlrooms/room-config

Core Zod schemas and types for persisted Room configuration.

Use this package when you need to validate, type, or serialize the persisted configuration portion of a SQLRooms app.

## Installation

```bash
npm install @sqlrooms/room-config
```

## Main exports

* `BaseRoomConfig`, `createDefaultBaseRoomConfig()`, `DEFAULT_ROOM_TITLE`
* data source schemas: `DataSource`, `FileDataSource`, `UrlDataSource`, `SqlQueryDataSource`
* data source type guards: `isFileDataSource`, `isUrlDataSource`, `isSqlQueryDataSource`
* file load option schemas/types (`LoadFileOptions`, `StandardLoadFileOptions`, etc.)
* layout schema re-exports from `@sqlrooms/layout-config`

## Basic usage

### Validate room config

```ts
import {BaseRoomConfig} from '@sqlrooms/room-config';

const roomConfig = BaseRoomConfig.parse({
  title: 'Earthquakes Explorer',
  description: 'Browser-based analytics app',
  dataSources: [
    {
      type: 'url',
      tableName: 'earthquakes',
      url: 'https://huggingface.co/datasets/sqlrooms/earthquakes/resolve/main/earthquakes.parquet',
    },
    {
      type: 'sql',
      tableName: 'top_quakes',
      sqlQuery: 'SELECT * FROM earthquakes ORDER BY Magnitude DESC LIMIT 100',
    },
  ],
});
```

### Create defaults

```ts
import {createDefaultBaseRoomConfig} from '@sqlrooms/room-config';

const defaultConfig = createDefaultBaseRoomConfig();
```

## Use with persistence

```ts
import {BaseRoomConfig, LayoutConfig} from '@sqlrooms/room-config';
import {
  createRoomShellSlice,
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

const {roomStore} = createRoomStore(
  persistSliceConfigs(persistence, (set, get, store) => ({
    ...createRoomShellSlice({
      config: {
        title: 'My Room',
        dataSources: [],
      },
    })(set, get, store),
  })),
);
```

## Type Aliases

* [LayoutNodeKey](/api/room-config/type-aliases/LayoutNodeKey.md)
* [PanelIdentity](/api/room-config/type-aliases/PanelIdentity.md)
* [LayoutPanelNode](/api/room-config/type-aliases/LayoutPanelNode.md)
* [LayoutSplitNode](/api/room-config/type-aliases/LayoutSplitNode.md)
* [LayoutTabsNode](/api/room-config/type-aliases/LayoutTabsNode.md)
* [LayoutDockNode](/api/room-config/type-aliases/LayoutDockNode.md)
* [LayoutNode](/api/room-config/type-aliases/LayoutNode.md)
* [LayoutConfig](/api/room-config/type-aliases/LayoutConfig.md)
* [LayoutDirection](/api/room-config/type-aliases/LayoutDirection.md)
* [LayoutDirection](/api/room-config/type-aliases/LayoutDirection-1.md)
* [BaseRoomConfig](/api/room-config/type-aliases/BaseRoomConfig.md)
* [DataSourceTypes](/api/room-config/type-aliases/DataSourceTypes.md)
* [BaseDataSource](/api/room-config/type-aliases/BaseDataSource.md)
* [FileDataSource](/api/room-config/type-aliases/FileDataSource.md)
* [UrlDataSource](/api/room-config/type-aliases/UrlDataSource.md)
* [SqlQueryDataSource](/api/room-config/type-aliases/SqlQueryDataSource.md)
* [DataSource](/api/room-config/type-aliases/DataSource.md)
* [LoadFile](/api/room-config/type-aliases/LoadFile.md)
* [StandardLoadOptions](/api/room-config/type-aliases/StandardLoadOptions.md)
* [SpatialLoadOptions](/api/room-config/type-aliases/SpatialLoadOptions.md)
* [SpatialLoadFileOptions](/api/room-config/type-aliases/SpatialLoadFileOptions.md)
* [StandardLoadFileOptions](/api/room-config/type-aliases/StandardLoadFileOptions.md)
* [LoadFileOptions](/api/room-config/type-aliases/LoadFileOptions.md)

## Variables

* [MAIN\_VIEW](/api/room-config/variables/MAIN_VIEW.md)
* [LayoutNodeKey](/api/room-config/variables/LayoutNodeKey.md)
* [LayoutPanelNode](/api/room-config/variables/LayoutPanelNode.md)
* [LayoutSplitNode](/api/room-config/variables/LayoutSplitNode.md)
* [LayoutTabsNode](/api/room-config/variables/LayoutTabsNode.md)
* [LayoutDockNode](/api/room-config/variables/LayoutDockNode.md)
* [LayoutNode](/api/room-config/variables/LayoutNode.md)
* [LayoutConfig](/api/room-config/variables/LayoutConfig.md)
* [DEFAULT\_ROOM\_TITLE](/api/room-config/variables/DEFAULT_ROOM_TITLE.md)
* [BaseRoomConfig](/api/room-config/variables/BaseRoomConfig.md)
* [DataSourceTypes](/api/room-config/variables/DataSourceTypes.md)
* [BaseDataSource](/api/room-config/variables/BaseDataSource.md)
* [FileDataSource](/api/room-config/variables/FileDataSource.md)
* [UrlDataSource](/api/room-config/variables/UrlDataSource.md)
* [SqlQueryDataSource](/api/room-config/variables/SqlQueryDataSource.md)
* [DataSource](/api/room-config/variables/DataSource.md)
* [LoadFile](/api/room-config/variables/LoadFile.md)
* [StandardLoadOptions](/api/room-config/variables/StandardLoadOptions.md)
* [SpatialLoadOptions](/api/room-config/variables/SpatialLoadOptions.md)
* [SpatialLoadFileOptions](/api/room-config/variables/SpatialLoadFileOptions.md)
* [StandardLoadFileOptions](/api/room-config/variables/StandardLoadFileOptions.md)
* [LoadFileOptions](/api/room-config/variables/LoadFileOptions.md)

## Functions

* [isLayoutPanelNode](/api/room-config/functions/isLayoutPanelNode.md)
* [isLayoutSplitNode](/api/room-config/functions/isLayoutSplitNode.md)
* [isLayoutTabsNode](/api/room-config/functions/isLayoutTabsNode.md)
* [isLayoutDockNode](/api/room-config/functions/isLayoutDockNode.md)
* [createDefaultLayout](/api/room-config/functions/createDefaultLayout.md)
* [createDefaultBaseRoomConfig](/api/room-config/functions/createDefaultBaseRoomConfig.md)
* [isFileDataSource](/api/room-config/functions/isFileDataSource.md)
* [isUrlDataSource](/api/room-config/functions/isUrlDataSource.md)
* [isSqlQueryDataSource](/api/room-config/functions/isSqlQueryDataSource.md)
* [isSpatialLoadFileOptions](/api/room-config/functions/isSpatialLoadFileOptions.md)
