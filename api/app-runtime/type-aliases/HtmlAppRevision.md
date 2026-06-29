---
url: 'https://sqlrooms.org/api/app-runtime/type-aliases/HtmlAppRevision.md'
---
[@sqlrooms/app-runtime](../index.md) / HtmlAppRevision

# Type Alias: HtmlAppRevision

> **HtmlAppRevision** = `object`

Persisted source-bearing snapshot for an HTML app.

Revisions store the source, title, intent, dependencies, and capability
grants needed to replay undo, redo, and restore operations without depending
on the live app state. Diagnostics are intentionally excluded because they
describe runtime observations that can be regenerated for the active source.

## Type Declaration

| Name | Type | Default value |
| ------ | ------ | ------ |
|  `id` | `string` | - |
|  `name` | `string` | - |
|  `description?` | `string` | - |
|  `sourcePrompt?` | `string` | - |
|  `source` | `"assistant"` | `"user"` | `"restore"` | `"system"` | `HtmlAppRevisionSource` |
|  `sessionId?` | `string` | - |
|  `toolCallId?` | `string` | - |
|  `commitGroupId?` | `string` | - |
|  `parentRevisionId?` | `string` | - |
|  `createdAt` | `number` | - |
|  `title` | `string` | - |
|  `intent?` | `string` | - |
|  `files` | `Record`<`string`, `string`> | `HtmlAppSourceFileMap` |
|  `entryHtmlPath` | `string` | - |
|  `requestedCapabilities?` | (`"query"` | `"schema"` | `"initialData"`)\[] | - |
|  `grantedCapabilities?` | (`"query"` | `"schema"` | `"initialData"`)\[] | - |
|  `dependencies` | `object`\[] | - |
