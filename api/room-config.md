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

* [LayoutNodeKey](type-aliases/LayoutNodeKey.md)
* [PanelIdentity](type-aliases/PanelIdentity.md)
* [LayoutPanelNode](type-aliases/LayoutPanelNode.md)
* [LayoutSplitNode](type-aliases/LayoutSplitNode.md)
* [LayoutTabsNode](type-aliases/LayoutTabsNode.md)
* [LayoutDockNode](type-aliases/LayoutDockNode.md)
* [LayoutNode](type-aliases/LayoutNode.md)
* [LayoutConfig](type-aliases/LayoutConfig.md)
* [LayoutDirection](type-aliases/LayoutDirection.md)
* [LayoutDirection](type-aliases/LayoutDirection-1.md)
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
* [LayoutNodeKey](variables/LayoutNodeKey.md)
* [LayoutPanelNode](variables/LayoutPanelNode.md)
* [LayoutSplitNode](variables/LayoutSplitNode.md)
* [LayoutTabsNode](variables/LayoutTabsNode.md)
* [LayoutDockNode](variables/LayoutDockNode.md)
* [LayoutNode](variables/LayoutNode.md)
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

* [isLayoutPanelNode](functions/isLayoutPanelNode.md)
* [isLayoutSplitNode](functions/isLayoutSplitNode.md)
* [isLayoutTabsNode](functions/isLayoutTabsNode.md)
* [isLayoutDockNode](functions/isLayoutDockNode.md)
* [createDefaultLayout](functions/createDefaultLayout.md)
* [createDefaultBaseRoomConfig](functions/createDefaultBaseRoomConfig.md)
* [isFileDataSource](functions/isFileDataSource.md)
* [isUrlDataSource](functions/isUrlDataSource.md)
* [isSqlQueryDataSource](functions/isSqlQueryDataSource.md)
* [isSpatialLoadFileOptions](functions/isSpatialLoadFileOptions.md)
