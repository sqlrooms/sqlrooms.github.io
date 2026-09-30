---
url: https://sqlrooms.org/api/documents/type-aliases/MarkdownDocumentsSliceState.md
---
[@sqlrooms/documents](../index.md) / MarkdownDocumentsSliceState

# Type Alias: MarkdownDocumentsSliceState

> **MarkdownDocumentsSliceState** = `object`

State and operations for artifact-scoped Markdown documents.

## Properties

### markdownDocuments

> **markdownDocuments**: `object`

| Name | Type |
| ------ | ------ |
| `config` | [`MarkdownDocumentsSliceConfig`](MarkdownDocumentsSliceConfig.md) |
| `setConfig()` | (`config`) => `void` |
| `ensureDocument()` | (`artifactId`, `markdown?`) => `void` |
| `removeDocument()` | (`artifactId`) => `void` |
| `setMarkdown()` | (`artifactId`, `markdown`) => `void` |
| `upsertAsset()` | (`artifactId`, `asset`) => `void` |
| `removeAsset()` | (`artifactId`, `assetId`) => `void` |
| `getAsset()` | (`artifactId`, `assetId`) => [`DocumentAsset`](DocumentAsset.md) | `undefined` |
| `getDocument()` | (`artifactId`) => [`MarkdownDocumentState`](MarkdownDocumentState.md) | `undefined` |
