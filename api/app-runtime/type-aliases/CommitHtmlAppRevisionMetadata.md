---
url: >-
  https://sqlrooms.org/api/app-runtime/type-aliases/CommitHtmlAppRevisionMetadata.md
---
[@sqlrooms/app-runtime](../index.md) / CommitHtmlAppRevisionMetadata

# Type Alias: CommitHtmlAppRevisionMetadata

> **CommitHtmlAppRevisionMetadata** = `object`

Metadata recorded alongside a committed HTML app revision.

By default commits are treated as user-authored, parented to the currently
active revision, and prune any redo branch. Use `clearRedo: false` only when
preserving redo history is part of a navigation operation.

## Properties

### name?

> `optional` **name?**: `string`

***

### description?

> `optional` **description?**: `string`

***

### source?

> `optional` **source?**: [`HtmlAppRevisionSource`](HtmlAppRevisionSource.md)

***

### sourcePrompt?

> `optional` **sourcePrompt?**: `string`

***

### sessionId?

> `optional` **sessionId?**: `string`

***

### toolCallId?

> `optional` **toolCallId?**: `string`

***

### commitGroupId?

> `optional` **commitGroupId?**: `string`

***

### parentRevisionId?

> `optional` **parentRevisionId?**: `string`

***

### createdAt?

> `optional` **createdAt?**: `number`

***

### revisionId?

> `optional` **revisionId?**: `string`

***

### clearRedo?

> `optional` **clearRedo?**: `boolean`
