---
url: 'https://sqlrooms.org/api/documents/type-aliases/DocumentsSliceState.md'
---
[@sqlrooms/documents](../index.md) / DocumentsSliceState

# Type Alias: DocumentsSliceState

> **DocumentsSliceState** = `object`

## Properties

### documents

> **documents**: `object`

| Name | Type |
| ------ | ------ |
| `config` | [`DocumentsSliceConfig`](DocumentsSliceConfig.md) |
| `setConfig()` | (`config`) => `void` |
| `ensureDocument()` | (`artifactId`, `markdown?`) => `void` |
| `removeDocument()` | (`artifactId`) => `void` |
| `setMarkdown()` | (`artifactId`, `markdown`) => `void` |
| `upsertAsset()` | (`artifactId`, `asset`) => `void` |
| `removeAsset()` | (`artifactId`, `assetId`) => `void` |
| `getAsset()` | (`artifactId`, `assetId`) => [`DocumentAsset`](DocumentAsset.md) | `undefined` |
| `getDocument()` | (`artifactId`) => [`MarkdownDocumentState`](MarkdownDocumentState.md) | `undefined` |
