---
url: 'https://sqlrooms.org/api/documents/type-aliases/BlockDocumentsSliceState.md'
---
[@sqlrooms/documents](../index.md) / BlockDocumentsSliceState

# Type Alias: BlockDocumentsSliceState

> **BlockDocumentsSliceState** = `object`

## Properties

### blockDocuments

> **blockDocuments**: `object`

| Name | Type |
| ------ | ------ |
| `config` | [`BlockDocumentsSliceConfig`](BlockDocumentsSliceConfig.md) |
| `syncMetadata` | `Record`<`string`, [`BlockDocumentSyncMetadata`](BlockDocumentSyncMetadata.md)> |
| `setConfig()` | (`config`) => `void` |
| `ensureBlockDocument()` | (`artifactId`, `content?`) => `void` |
| `removeBlockDocument()` | (`artifactId`) => `void` |
| `setContent()` | (`artifactId`, `content`, `metadata?`) => `void` |
| `appendBlocks()` | (`artifactId`, `blocks`) => `void` |
| `insertBlocks()` | (`artifactId`, `index`, `blocks`) => `void` |
| `updateBlock()` | (`artifactId`, `blockId`, `block`) => `boolean` |
| `removeBlock()` | (`artifactId`, `blockId`) => `boolean` |
| `moveBlock()` | (`artifactId`, `blockId`, `toIndex`) => `boolean` |
| `getBlockDocument()` | (`artifactId`) => [`BlockDocument`](BlockDocument.md) | `undefined` |
| `getSyncMetadata()` | (`artifactId`) => [`BlockDocumentSyncMetadata`](BlockDocumentSyncMetadata.md) | `undefined` |
| `getBlocks()` | (`artifactId`) => [`BlockDocumentBlock`](BlockDocumentBlock.md)\[] |
