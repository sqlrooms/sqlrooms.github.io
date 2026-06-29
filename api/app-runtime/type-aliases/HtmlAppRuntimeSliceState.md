---
url: 'https://sqlrooms.org/api/app-runtime/type-aliases/HtmlAppRuntimeSliceState.md'
---
[@sqlrooms/app-runtime](../index.md) / HtmlAppRuntimeSliceState

# Type Alias: HtmlAppRuntimeSliceState

> **HtmlAppRuntimeSliceState** = `object`

## Properties

### htmlApps

> **htmlApps**: `object`

| Name | Type |
| ------ | ------ |
| `config` | [`HtmlAppRuntimeConfig`](HtmlAppRuntimeConfig.md) |
| `ensureApp()` | (`appId`, `app?`) => `void` |
| `updateApp()` | (`appId`, `patch`) => `void` |
| `updateAppFiles()` | (`appId`, `files`) => `void` |
| `renameApp()` | (`appId`, `title`) => `void` |
| `commitAppRevision()` | (`appId`, `patch`, `metadata?`) => [`HtmlAppRevision`](HtmlAppRevision.md) | `undefined` |
| `restoreAppRevision()` | (`appId`, `revisionId`, `metadata?`) => [`HtmlAppRevision`](HtmlAppRevision.md) | `undefined` |
| `undoAppRevision()` | (`appId`) => [`HtmlAppRevision`](HtmlAppRevision.md) | `undefined` |
| `redoAppRevision()` | (`appId`) => [`HtmlAppRevision`](HtmlAppRevision.md) | `undefined` |
| `getCurrentRevision()` | (`appId`) => [`HtmlAppRevision`](HtmlAppRevision.md) | `undefined` |
| `getRevisionList()` | (`appId`) => [`HtmlAppRevision`](HtmlAppRevision.md)\[] |
| `getRevisionNavigationState()` | (`appId`) => [`HtmlAppRevisionNavigationState`](HtmlAppRevisionNavigationState.md) |
| `removeApp()` | (`appId`) => `void` |
| `addDiagnostic()` | (`appId`, `diagnostic`) => `void` |
| `setDiagnostics()` | (`appId`, `diagnostics`) => `void` |
| `getApp()` | (`appId`) => [`HtmlAppState`](HtmlAppState.md) | `undefined` |
