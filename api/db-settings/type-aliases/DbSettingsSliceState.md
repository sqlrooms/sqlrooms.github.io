---
url: 'https://sqlrooms.org/api/db-settings/type-aliases/DbSettingsSliceState.md'
---
[@sqlrooms/db-settings](../index.md) / DbSettingsSliceState

# Type Alias: DbSettingsSliceState

> **DbSettingsSliceState** = `object`

## Properties

### dbSettings

> **dbSettings**: `object`

| Name | Type |
| ------ | ------ |
| `config` | [`DbSettingsSliceConfig`](DbSettingsSliceConfig.md) |
| `isSaving` | `boolean` |
| `hasUnsavedChanges` | `boolean` |
| `lastSaveError` | `string` | `null` |
| `setConfig()` | (`config`) => `void` |
| `upsertConnection()` | (`connection`) => `void` |
| `removeConnection()` | (`id`) => `void` |
| `setDiagnostics()` | (`diagnostics`) => `void` |
| `saveToServer()` | (`apiBaseUrl?`) => `Promise`<`boolean`> |
| `testConnection()` | (`engine`, `config`, `apiBaseUrl?`) => `Promise`<{ `ok`: `boolean`; `error?`: `string`; }> |
