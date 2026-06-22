---
url: 'https://sqlrooms.org/api/monaco-editor/interfaces/MonacoLoaderOptions.md'
---
[@sqlrooms/monaco-editor](../index.md) / MonacoLoaderOptions

# Interface: MonacoLoaderOptions

## Extends

* [`LoaderConfig`](../type-aliases/LoaderConfig.md)

## Properties

### monaco?

> `optional` **monaco?**: `any`

Pass the Monaco instance to bundle the editor instead of using a CDN

#### Overrides

`LoaderConfig.monaco`

***

### workers?

> `optional` **workers?**: [`LoaderWorkers`](LoaderWorkers.md)

Provide worker constructors mapped by label to automatically set
`self.MonacoEnvironment.getWorker`
