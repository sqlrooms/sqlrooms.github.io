---
url: 'https://sqlrooms.org/api/app-runtime/type-aliases/HtmlAppState.md'
---
[@sqlrooms/app-runtime](../index.md) / HtmlAppState

# Type Alias: HtmlAppState

> **HtmlAppState** = `object`

## Type Declaration

| Name | Type | Default value |
| ------ | ------ | ------ |
|  `id` | `string` | - |
|  `title` | `string` | - |
|  `intent?` | `string` | - |
|  `files` | `Record`<`string`, `string`> | `HtmlAppSourceFileMap` |
|  `entryHtmlPath` | `string` | - |
|  `requestedCapabilities` | (`"query"` | `"schema"` | `"initialData"`)\[] | - |
|  `grantedCapabilities` | (`"query"` | `"schema"` | `"initialData"`)\[] | - |
|  `dependencies` | `object`\[] | - |
|  `diagnostics` | `object`\[] | - |
|  `revisions` | `object`\[] | - |
|  `activeRevisionId?` | `string` | - |
|  `redoRevisionIds` | `string`\[] | - |
|  `createdAt` | `number` | - |
|  `updatedAt` | `number` | - |
