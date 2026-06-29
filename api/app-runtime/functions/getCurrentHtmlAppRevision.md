---
url: 'https://sqlrooms.org/api/app-runtime/functions/getCurrentHtmlAppRevision.md'
---
[@sqlrooms/app-runtime](../index.md) / getCurrentHtmlAppRevision

# Function: getCurrentHtmlAppRevision()

> **getCurrentHtmlAppRevision**(`app?`): { `id`: `string`; `name`: `string`; `description?`: `string`; `sourcePrompt?`: `string`; `source`: `"assistant"` | `"user"` | `"restore"` | `"system"`; `sessionId?`: `string`; `toolCallId?`: `string`; `commitGroupId?`: `string`; `parentRevisionId?`: `string`; `createdAt`: `number`; `title`: `string`; `intent?`: `string`; `files`: `Record`<`string`, `string`>; `entryHtmlPath`: `string`; `requestedCapabilities?`: (`"query"` | `"schema"` | `"initialData"`)\[]; `grantedCapabilities?`: (`"query"` | `"schema"` | `"initialData"`)\[]; `dependencies`: `object`\[]; } | `undefined`

Return the active HTML app revision.

If `activeRevisionId` is missing or stale, this falls back to the latest
retained revision so legacy states without an explicit active pointer still
have a current snapshot.

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

{ `id`: `string`; `name`: `string`; `description?`: `string`; `sourcePrompt?`: `string`; `source`: `"assistant"` | `"user"` | `"restore"` | `"system"`; `sessionId?`: `string`; `toolCallId?`: `string`; `commitGroupId?`: `string`; `parentRevisionId?`: `string`; `createdAt`: `number`; `title`: `string`; `intent?`: `string`; `files`: `Record`<`string`, `string`>; `entryHtmlPath`: `string`; `requestedCapabilities?`: (`"query"` | `"schema"` | `"initialData"`)\[]; `grantedCapabilities?`: (`"query"` | `"schema"` | `"initialData"`)\[]; `dependencies`: `object`\[]; } | `undefined`
