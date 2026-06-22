---
url: 'https://sqlrooms.org/api/app-runtime/functions/getHtmlAppRevisionList.md'
---
[@sqlrooms/app-runtime](../index.md) / getHtmlAppRevisionList

# Function: getHtmlAppRevisionList()

> **getHtmlAppRevisionList**(`app?`): `object`\[]

Return the retained revisions for an HTML app, or an empty list when no app is
available.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `app?` | { `id`: `string`; `title`: `string`; `intent?`: `string`; `files`: `Record`<`string`, `string`>; `entryHtmlPath`: `string`; `requestedCapabilities`: (`"query"` | `"schema"` | `"initialData"`)\[]; `grantedCapabilities`: (`"query"` | `"schema"` | `"initialData"`)\[]; `dependencies`: `object`\[]; `diagnostics`: `object`\[]; `revisions`: `object`\[]; `activeRevisionId?`: `string`; `redoRevisionIds`: `string`\[]; `createdAt`: `number`; `updatedAt`: `number`; } |
| `app.id?` | `string` |
| `app.title?` | `string` |
| `app.intent?` | `string` |
| `app.files?` | `Record`<`string`, `string`> |
| `app.entryHtmlPath?` | `string` |
| `app.requestedCapabilities?` | (`"query"` | `"schema"` | `"initialData"`)\[] |
| `app.grantedCapabilities?` | (`"query"` | `"schema"` | `"initialData"`)\[] |
| `app.dependencies?` | `object`\[] |
| `app.diagnostics?` | `object`\[] |
| `app.revisions?` | `object`\[] |
| `app.activeRevisionId?` | `string` |
| `app.redoRevisionIds?` | `string`\[] |
| `app.createdAt?` | `number` |
| `app.updatedAt?` | `number` |

## Returns

`object`\[]
