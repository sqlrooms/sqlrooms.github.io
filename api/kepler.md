---
url: 'https://sqlrooms.org/api/kepler.md'
---
# @sqlrooms/kepler

Kepler.gl integration for SQLRooms.

Use this package when you want a **map-first analytics experience** in a SQLRooms app, backed by DuckDB tables and SQL.

## What this package provides

* `createKeplerSlice()` to add Kepler state/actions to your Room store
* `KeplerMapContainer` and `KeplerPlotContainer` for rendering maps/overlays
* `KeplerSidePanels` for layer/filter/interaction UI
* utilities for map config persistence and dataset synchronization

## Installation

```bash
npm install @sqlrooms/kepler @sqlrooms/room-shell @sqlrooms/duckdb @sqlrooms/ui
```

## Quick start

```tsx
import {useEffect} from 'react';
import {
  createKeplerSlice,
  KeplerMapContainer,
  KeplerSliceState,
} from '@sqlrooms/kepler';
import {
  createRoomShellSlice,
  createRoomStore,
  RoomShell,
  RoomShellSliceState,
} from '@sqlrooms/room-shell';

type RoomState = RoomShellSliceState & KeplerSliceState;

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
    ...createKeplerSlice()(set, get, store),
  }),
);

function MapPanel() {
  const mapId = useRoomStore((state) => state.kepler.config.currentMapId);
  const addTableToMap = useRoomStore((state) => state.kepler.addTableToMap);
  const isTableReady = useRoomStore((state) =>
    Boolean(state.db.findTableByName('earthquakes')),
  );

  useEffect(() => {
    if (!isTableReady || !mapId) return;
    void addTableToMap(mapId, 'earthquakes', {
      autoCreateLayers: true,
      centerMap: true,
    });
  }, [isTableReady, mapId, addTableToMap]);

  if (!mapId) return null;

  return <KeplerMapContainer mapId={mapId} />;
}

export function App() {
  return (
    <RoomShell roomStore={roomStore} className="h-screen">
      <MapPanel />
    </RoomShell>
  );
}
```

## Common customization

Pass options to `createKeplerSlice()`:

```ts
createKeplerSlice({
  basicKeplerProps: {
    mapboxApiAccessToken: import.meta.env.VITE_MAPBOX_TOKEN,
  },
  actionLogging: false,
});
```

## Related packages

* `@sqlrooms/kepler-config` for Zod schemas used by persisted Kepler config
* `@sqlrooms/room-shell` for Room store composition and UI shell
* `@sqlrooms/duckdb` for DuckDB-backed table loading/querying

## Examples

* Kepler example app: https://github.com/sqlrooms/examples/tree/main/kepler

## Enumerations

* [AddDataMethods](enumerations/AddDataMethods.md)

## Type Aliases

* [KeplerSliceState](type-aliases/KeplerSliceState.md)
* [KeplerAddDataDialogProps](type-aliases/KeplerAddDataDialogProps.md)
* [LoadTileSet](type-aliases/LoadTileSet.md)
* [KeplerFactoryRecipe](type-aliases/KeplerFactoryRecipe.md)
* [KeplerFactoryRecipeMode](type-aliases/KeplerFactoryRecipeMode.md)
* [KeplerS3BrowserProps](type-aliases/KeplerS3BrowserProps.md)
* [KeplerMapSchema](type-aliases/KeplerMapSchema.md)
* [KeplerSliceConfig](type-aliases/KeplerSliceConfig.md)

## Variables

* [FileDropInput](variables/FileDropInput.md)
* [KeplerImageExport](variables/KeplerImageExport.md)
* [KeplerInjector](variables/KeplerInjector.md)
* [KeplerMapContainer](variables/KeplerMapContainer.md)
* [KeplerPlotContainer](variables/KeplerPlotContainer.md)
* [KeplerProvider](variables/KeplerProvider.md)
* [KeplerSidePanels](variables/KeplerSidePanels.md)
* [KeplerMapSchema](variables/KeplerMapSchema.md)
* [KeplerSliceConfig](variables/KeplerSliceConfig.md)

## Functions

* [createDefaultKeplerConfig](functions/createDefaultKeplerConfig.md)
* [createKeplerSlice](functions/createKeplerSlice.md)
* [useStoreWithKepler](functions/useStoreWithKepler.md)
* [CustomDndContextFactory](functions/CustomDndContextFactory.md)
* [CustomFilterPanelHeaderFactory](functions/CustomFilterPanelHeaderFactory.md)
* [CustomMapControlTooltipFactory](functions/CustomMapControlTooltipFactory.md)
* [CustomMapLegendFactory](functions/CustomMapLegendFactory.md)
* [CustomMapLegendPanelFactory](functions/CustomMapLegendPanelFactory.md)
* [KeplerAddDataDialog](functions/KeplerAddDataDialog.md)
* [KeplerAddTileSetDialog](functions/KeplerAddTileSetDialog.md)
* [CustomAddDataButtonFactory](functions/CustomAddDataButtonFactory.md)
* [CustomPanelTitleFactory](functions/CustomPanelTitleFactory.md)
* [configureKeplerInjector](functions/configureKeplerInjector.md)
* [resetKeplerInjectorRecipes](functions/resetKeplerInjectorRecipes.md)
* [getKeplerInjector](functions/getKeplerInjector.md)
* [getKeplerFactory](functions/getKeplerFactory.md)
* [KeplerS3Browser](functions/KeplerS3Browser.md)
* [useKeplerStateActions](functions/useKeplerStateActions.md)
