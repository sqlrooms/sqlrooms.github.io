---
url: 'https://sqlrooms.org/api/kepler/type-aliases/KeplerSliceState.md'
---
[@sqlrooms/kepler](../index.md) / KeplerSliceState

# Type Alias: KeplerSliceState

> **KeplerSliceState** = `object`

## Properties

### kepler

> **kepler**: `object`

| Name | Type | Description |
| ------ | ------ | ------ |
| `config` | [`KeplerSliceConfig`](KeplerSliceConfig.md) | - |
| `map` | `KeplerGlReduxState` | - |
| `basicKeplerProps?` | `Partial`<[`KeplerGLBasicProps`](KeplerGLBasicProps.md)> | - |
| `keplerTheme?` | `DefaultTheme` | - |
| `modalPortalTarget` | [`KeplerModalPortalTarget`](KeplerModalPortalTarget.md) | - |
| `tableSelection` | [`KeplerTableSelectionOptions`](KeplerTableSelectionOptions.md) | - |
| `forwardDispatch` | {\[`mapId`: `string`]: `Dispatch`<`AnyAction`>; } | - |
| `initialize()` | () => `Promise`<`void`> | - |
| `destroy()` | () => `Promise`<`void`> | - |
| `setConfig()` | (`config`) => `void` | - |
| `syncKeplerDatasets()` | () => `Promise`<`void`> | Update the datasets in all the kepler map so that they correspond to the latest table schemas in the database |
| `addLayer()` | (`mapId`, `layer`, `datasetId`) => `void` | - |
| `addFilter()` | (`mapId`, `datasetId`) => `void` | - |
| `setFilter()` | (`mapId`, `filterIdx`, `prop`, `value`, `valueIndex?`) => `void` | - |
| `setFilterAnimationTime()` | (`mapId`, `filterIdx`, `prop`, `value`) => `void` | - |
| `setFilterAnimationWindow()` | (`mapId`, `filterId`, `animationWindow`) => `void` | - |
| `setFilterView()` | (`mapId`, `filterIdx`, `view`) => `void` | - |
| `updateTooltipFields()` | (`mapId`, `datasetId`, `fieldNames`) => `void` | - |
| `toggleSplitMap()` | (`mapId`, `index?`) => `void` | - |
| `toggleLayerForMap()` | (`mapId`, `mapIndex`, `layerId`) => `void` | - |
| `addTableToMap` | [`AddTableToMapFn`](AddTableToMapFn.md) | - |
| `addTileSetToMap()` | (`mapId`, `tableName`, `tileset`, `tileMetadata`, `autoCreateLayers`) => `void` | - |
| `addConfigToMap()` | (`mapId`, `config`) => `void` | - |
| `isRestoringConfig` | `boolean` | - |
| `withConfigPersistencePaused()` | <`TResult`>(`fn`) => `Promise`<`TResult`> | - |
| `waitForConfigRestore()` | () => `Promise`<`void`> | - |
| `removeDatasetFromMaps()` | (`datasetId`) => `void` | - |
| `dispatchAction()` | (`mapId`, `action`) => `void` | - |
| `ensureMap()` | (`mapId`, `name?`) => `void` | - |
| `createMap()` | (`name?`, `options?`) => `string` | Create a new map and return the map id |
| `deleteMap()` | (`mapId`) => `void` | - |
| `duplicateMap()` | (`mapId`) => `Promise`<{ `success`: `boolean`; `message?`: `string`; `code?`: `string`; }> | - |
| `renameMap()` | (`mapId`, `name`) => `void` | - |
| `registerKeplerMapIfNotExists()` | (`mapId`) => `void` | - |
| `__reduxProviderStore` | `ReduxStore`<`KeplerGlReduxState`, `AnyAction`> | `undefined` | - |
