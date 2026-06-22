---
url: 'https://sqlrooms.org/api/kepler/type-aliases/CreateKeplerSliceOptions.md'
---
[@sqlrooms/kepler](../index.md) / CreateKeplerSliceOptions

# Type Alias: CreateKeplerSliceOptions

> **CreateKeplerSliceOptions** = `object`

## Properties

### config?

> `optional` **config?**: `Partial`<[`KeplerSliceConfig`](KeplerSliceConfig.md)>

***

### createInitialMapKeplerState?

> `optional` **createInitialMapKeplerState?**: (`context`) => `Partial`<`KeplerGlState`>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `context` | [`CreateInitialMapKeplerStateContext`](CreateInitialMapKeplerStateContext.md) |

#### Returns

`Partial`<`KeplerGlState`>

***

### basicKeplerProps?

> `optional` **basicKeplerProps?**: `Partial`<[`KeplerGLBasicProps`](KeplerGLBasicProps.md)>

***

### keplerTheme?

> `optional` **keplerTheme?**: `DefaultTheme`

Theme passed to Kepler's ThemeProvider.
Use createKeplerTheme() to merge app-level overrides into the default theme.

***

### modalPortalTarget?

> `optional` **modalPortalTarget?**: [`KeplerModalPortalTarget`](KeplerModalPortalTarget.md)

Where the Kepler modal (Add Map Style, Export, etc.) should be portaled.

* 'body': portals to document.body (escapes stacking contexts)
* 'container': portals inside the kepler map container element

#### Default

```ts
'container'
```

***

### actionLogging?

> `optional` **actionLogging?**: `boolean` | `ReduxLoggerOptions`

***

### middlewares?

> `optional` **middlewares?**: `Middleware`\[]

***

### applicationConfig?

> `optional` **applicationConfig?**: `KeplerApplicationConfig`

***

### tableSelection?

> `optional` **tableSelection?**: [`KeplerTableSelectionOptions`](KeplerTableSelectionOptions.md)

Controls which DuckDB tables appear in Kepler's Add Layer menu and how
those tables are represented in saved Kepler dataset ids.

***

### onAction?

> `optional` **onAction?**: (`mapId`, `action`) => `void`

Called when a kepler action is dispatched

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `mapId` | `string` | The map id |
| `action` | `KeplerAction` | The action |

#### Returns

`void`
