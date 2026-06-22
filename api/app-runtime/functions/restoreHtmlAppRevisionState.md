---
url: 'https://sqlrooms.org/api/app-runtime/functions/restoreHtmlAppRevisionState.md'
---
[@sqlrooms/app-runtime](../index.md) / restoreHtmlAppRevisionState

# Function: restoreHtmlAppRevisionState()

> **restoreHtmlAppRevisionState**(`app`, `revisionId`, `metadata?`): { `app`: { `id`: `string`; `title`: `string`; `intent?`: `string`; `files`: `Record`<`string`, `string`>; `entryHtmlPath`: `string`; `requestedCapabilities`: (`"query"` | `"schema"` | `"initialData"`)\[]; `grantedCapabilities`: (`"query"` | `"schema"` | `"initialData"`)\[]; `dependencies`: `object`\[]; `diagnostics`: `object`\[]; `revisions`: `object`\[]; `activeRevisionId?`: `string`; `redoRevisionIds`: `string`\[]; `createdAt`: `number`; `updatedAt`: `number`; }; `revision`: { `id`: `string`; `name`: `string`; `description?`: `string`; `sourcePrompt?`: `string`; `source`: `"assistant"` | `"user"` | `"restore"` | `"system"`; `sessionId?`: `string`; `toolCallId?`: `string`; `commitGroupId?`: `string`; `parentRevisionId?`: `string`; `createdAt`: `number`; `title`: `string`; `intent?`: `string`; `files`: `Record`<`string`, `string`>; `entryHtmlPath`: `string`; `requestedCapabilities?`: (`"query"` | `"schema"` | `"initialData"`)\[]; `grantedCapabilities?`: (`"query"` | `"schema"` | `"initialData"`)\[]; `dependencies`: `object`\[]; }; } | `undefined`

Restore a historical revision by committing its snapshot as a new revision.

Restores do not move the active pointer back to the original revision.
Instead, they append a restore revision whose parent is the revision that was
active when restore was requested, then clear redo history.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `app` | { `id`: `string`; `title`: `string`; `intent?`: `string`; `files`: `Record`<`string`, `string`>; `entryHtmlPath`: `string`; `requestedCapabilities`: (`"query"` | `"schema"` | `"initialData"`)\[]; `grantedCapabilities`: (`"query"` | `"schema"` | `"initialData"`)\[]; `dependencies`: `object`\[]; `diagnostics`: `object`\[]; `revisions`: `object`\[]; `activeRevisionId?`: `string`; `redoRevisionIds`: `string`\[]; `createdAt`: `number`; `updatedAt`: `number`; } |
| `app.id` | `string` |
| `app.title` | `string` |
| `app.intent?` | `string` |
| `app.files` | `Record`<`string`, `string`> |
| `app.entryHtmlPath` | `string` |
| `app.requestedCapabilities` | (`"query"` | `"schema"` | `"initialData"`)\[] |
| `app.grantedCapabilities` | (`"query"` | `"schema"` | `"initialData"`)\[] |
| `app.dependencies` | `object`\[] |
| `app.diagnostics` | `object`\[] |
| `app.revisions` | `object`\[] |
| `app.activeRevisionId?` | `string` |
| `app.redoRevisionIds` | `string`\[] |
| `app.createdAt` | `number` |
| `app.updatedAt` | `number` |
| `revisionId` | `string` |
| `metadata` | [`RestoreHtmlAppRevisionMetadata`](../type-aliases/RestoreHtmlAppRevisionMetadata.md) |

## Returns

{ `app`: { `id`: `string`; `title`: `string`; `intent?`: `string`; `files`: `Record`<`string`, `string`>; `entryHtmlPath`: `string`; `requestedCapabilities`: (`"query"` | `"schema"` | `"initialData"`)\[]; `grantedCapabilities`: (`"query"` | `"schema"` | `"initialData"`)\[]; `dependencies`: `object`\[]; `diagnostics`: `object`\[]; `revisions`: `object`\[]; `activeRevisionId?`: `string`; `redoRevisionIds`: `string`\[]; `createdAt`: `number`; `updatedAt`: `number`; }; `revision`: { `id`: `string`; `name`: `string`; `description?`: `string`; `sourcePrompt?`: `string`; `source`: `"assistant"` | `"user"` | `"restore"` | `"system"`; `sessionId?`: `string`; `toolCallId?`: `string`; `commitGroupId?`: `string`; `parentRevisionId?`: `string`; `createdAt`: `number`; `title`: `string`; `intent?`: `string`; `files`: `Record`<`string`, `string`>; `entryHtmlPath`: `string`; `requestedCapabilities?`: (`"query"` | `"schema"` | `"initialData"`)\[]; `grantedCapabilities?`: (`"query"` | `"schema"` | `"initialData"`)\[]; `dependencies`: `object`\[]; }; } | `undefined`
