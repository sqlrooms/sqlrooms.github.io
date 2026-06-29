---
url: 'https://sqlrooms.org/api/db-settings/functions/syncConnectionsToDb.md'
---
[@sqlrooms/db-settings](../index.md) / syncConnectionsToDb

# Function: syncConnectionsToDb()

> **syncConnectionsToDb**(`store`): `void`

Sync connections from dbSettings.config into the DbSlice connection registry.

Call after both slices are initialized, and optionally after settings mutations.
Only available connections (not flagged unavailable by diagnostics) are registered.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `store` | { `getState`: () => `DbSliceState` & [`DbSettingsSliceState`](../type-aliases/DbSettingsSliceState.md); } |
| `store.getState` | () => `DbSliceState` & [`DbSettingsSliceState`](../type-aliases/DbSettingsSliceState.md) |

## Returns

`void`
