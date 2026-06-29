---
url: 'https://sqlrooms.org/api/db/functions/createCoreDuckDbConnection.md'
---
[@sqlrooms/db](../index.md) / createCoreDuckDbConnection

# Function: createCoreDuckDbConnection()

> **createCoreDuckDbConnection**(`overrides?`): `object`

## Parameters

| Parameter | Type |
| ------ | ------ |
| `overrides?` | `Partial`<{ `id`: `string`; `engineId`: `string`; `title`: `string`; `runtimeSupport`: `"browser"` | `"server"` | `"both"`; `requiresBridge`: `boolean`; `bridgeId?`: `string`; `isCore`: `boolean`; `config?`: `Record`<`string`, `string`>; }> |

## Returns

| Name | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | - |
| `engineId` | `string` | - |
| `title` | `string` | - |
| `runtimeSupport` | `"browser"` | `"server"` | `"both"` | - |
| `requiresBridge` | `boolean` | - |
| `bridgeId?` | `string` | - |
| `isCore` | `boolean` | - |
| `config?` | `Record`<`string`, `string`> | Engine-specific configuration (e.g. dsn, account, warehouse). |
