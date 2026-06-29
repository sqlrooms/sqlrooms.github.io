---
url: 'https://sqlrooms.org/api/app-runtime/type-aliases/HtmlAppRuntimeConfig.md'
---
[@sqlrooms/app-runtime](../index.md) / HtmlAppRuntimeConfig

# Type Alias: HtmlAppRuntimeConfig

> **HtmlAppRuntimeConfig** = `object`

## Type Declaration

| Name | Type |
| ------ | ------ |
|  `appsById` | `Record`<`string`, { `id`: `string`; `title`: `string`; `intent?`: `string`; `files`: `Record`<`string`, `string`>; `entryHtmlPath`: `string`; `requestedCapabilities`: (`"query"` | `"schema"` | `"initialData"`)\[]; `grantedCapabilities`: (`"query"` | `"schema"` | `"initialData"`)\[]; `dependencies`: `object`\[]; `diagnostics`: `object`\[]; `revisions`: `object`\[]; `activeRevisionId?`: `string`; `redoRevisionIds`: `string`\[]; `createdAt`: `number`; `updatedAt`: `number`; }> |
