---
url: https://sqlrooms.org/api/deck/type-aliases/DeckMapsSliceState.md
---
[@sqlrooms/deck](../index.md) / DeckMapsSliceState

# Type Alias: DeckMapsSliceState

> **DeckMapsSliceState** = `object`

Room-store state and actions for durable maps and ephemeral runtime issues.

## Properties

### deckMaps

> **deckMaps**: `object`

| Name | Type | Description |
| ------ | ------ | ------ |
| `config` | [`DeckMapsSliceConfig`](DeckMapsSliceConfig.md) | - |
| `basemapProvider?` | [`DeckMapBasemapProvider`](DeckMapBasemapProvider.md) | Optional runtime basemap provider shared by maps in this room. |
| `runtime` | { `issuesByMapId`: `Record`<`string`, [`DeckMapRuntimeIssue`](DeckMapRuntimeIssue.md)>; } | - |
| `setConfig()` | (`config`) => `void` | - |
| `ensureMap()` | (`id`, `options?`) => `void` | - |
| `removeMap()` | (`id`) => `void` | - |
| `getMap()` | (`id`) => [`DeckMapResource`](DeckMapResource.md) | `undefined` | - |
| `updateMap()` | (`id`, `patch`) => `void` | - |
| `setSelectedTable()` | (`id`, `tableName?`) => `void` | - |
| `reportMapIssue()` | (`id`, `issue`) => `void` | - |
| `clearMapIssue()` | (`id`, `kind?`) => `void` | Clears the current issue when its kind matches, or unconditionally when omitted. |
