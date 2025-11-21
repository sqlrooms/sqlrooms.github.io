---
url: /api/kepler/type-aliases/KeplerSliceState.md
---
[@sqlrooms/kepler](../index.md) / KeplerSliceState

# Type Alias: KeplerSliceState

> **KeplerSliceState**: `object`

## Type declaration

| Name | Type |
| ------ | ------ |
|  `kepler` | { `config`: [`KeplerSliceConfig`](KeplerSliceConfig.md); `map`: `KeplerGlReduxState`; `basicKeplerProps`: `Partial`<`KeplerGLBasicProps`>; `forwardDispatch`: {}; `initialize`: () => `Promise`<`void`>; `setConfig`: (`config`) => `void`; `syncKeplerDatasets`: () => `Promise`<`void`>; `addTableToMap`: (`mapId`, `tableName`, `options`?) => `Promise`<`void`>; `addTileSetToMap`: (`mapId`, `tableName`, `tileset`, `tileMetadata`) => `void`; `addConfigToMap`: (`mapId`, `config`) => `void`; `removeDatasetFromMaps`: (`datasetId`) => `void`; `dispatchAction`: (`mapId`, `action`) => `void`; `setCurrentMapId`: (`mapId`) => `void`; `createMap`: (`name`?) => `string`; `deleteMap`: (`mapId`) => `void`; `renameMap`: (`mapId`, `name`) => `void`; `getCurrentMap`: () => [`KeplerMapSchema`](KeplerMapSchema.md) | `undefined`; `registerKeplerMapIfNotExists`: (`mapId`) => `void`; `__reduxProviderStore`: `ReduxStore`<`KeplerGlReduxState`, `AnyAction`> | `undefined`; } |
