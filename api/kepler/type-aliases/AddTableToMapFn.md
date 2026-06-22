---
url: 'https://sqlrooms.org/api/kepler/type-aliases/AddTableToMapFn.md'
---
[@sqlrooms/kepler](../index.md) / AddTableToMapFn

# Type Alias: AddTableToMapFn

> **AddTableToMapFn** = {(`params`): `Promise`<`void`>; (`mapId`, `tableName`, `options?`, `config?`, `loadOptions?`): `Promise`<`void`>; }

## Call Signature

> (`params`): `Promise`<`void`>

### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`AddTableToMapParams`](AddTableToMapParams.md) |

### Returns

`Promise`<`void`>

## Call Signature

> (`mapId`, `tableName`, `options?`, `config?`, `loadOptions?`): `Promise`<`void`>

### Parameters

| Parameter | Type |
| ------ | ------ |
| `mapId` | `string` |
| `tableName` | `string` |
| `options?` | `AddDataToMapOptions` |
| `config?` | `ParsedConfig` | `SavedConfigV1` | `MinSavedConfigV1` |
| `loadOptions?` | [`AddTableToMapLoadOptions`](AddTableToMapLoadOptions.md) |

### Returns

`Promise`<`void`>
