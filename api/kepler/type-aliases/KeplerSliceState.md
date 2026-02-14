---
url: /api/kepler/type-aliases/KeplerSliceState.md
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
| `basicKeplerProps?` | `Partial`<`KeplerGLBasicProps`> | - |
| `forwardDispatch` | {\[`mapId`: `string`]: `Dispatch`<`AnyAction`>; } | - |
| `initialize()` | () => `Promise`<`void`> | - |
| `setConfig()` | (`config`) => `void` | - |
| `syncKeplerDatasets()` | () => `Promise`<`void`> | Update the datasets in all the kepler map so that they correspond to the latest table schemas in the database |
| `addLayer()` | (`mapId`, `layer`, `datasetId`) => `void` | - |
| `addTableToMap()` | (`mapId`, `tableName`, `options?`) => `Promise`<`void`> | - |
| `addTileSetToMap()` | (`mapId`, `tableName`, `tileset`, `tileMetadata`, `autoCreateLayers`) => `void` | - |
| `addConfigToMap()` | (`mapId`, `config`) => `void` | - |
| `removeDatasetFromMaps()` | (`datasetId`) => `void` | - |
| `dispatchAction()` | (`mapId`, `action`) => `void` | - |
| `setCurrentMapId()` | (`mapId`) => `void` | - |
| `createMap()` | (`name?`) => `string` | Create a new map and return the map id |
| `deleteMap()` | (`mapId`) => `void` | - |
| `renameMap()` | (`mapId`, `name`) => `void` | - |
| `closeMap()` | (`mapId`) => `void` | - |
| `setOpenTabs()` | (`tabIds`) => `void` | - |
| `getCurrentMap()` | () => [`KeplerMapSchema`](KeplerMapSchema.md) | `undefined` | - |
| `registerKeplerMapIfNotExists()` | (`mapId`) => `void` | - |
| `__reduxProviderStore` | `ReduxStore`<`KeplerGlReduxState`, `AnyAction`> | `undefined` | - |
