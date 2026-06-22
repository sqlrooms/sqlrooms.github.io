---
url: 'https://sqlrooms.org/api/app-runtime/functions/commitHtmlAppRevisionState.md'
---
[@sqlrooms/app-runtime](../index.md) / commitHtmlAppRevisionState

# Function: commitHtmlAppRevisionState()

> **commitHtmlAppRevisionState**(`app`, `patch`, `metadata?`): `object`

Apply a patch to an HTML app and append the result as a new revision.

The returned app has the new revision active. When committing while an older
revision is active, newer linear revisions are discarded by default so the new
commit becomes the branch tip and redo history is cleared. Pass
`clearRedo: false` for internal navigation flows that need to preserve the
redo queue.

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
| `patch` | [`HtmlAppRevisionPatch`](../type-aliases/HtmlAppRevisionPatch.md) |
| `metadata` | [`CommitHtmlAppRevisionMetadata`](../type-aliases/CommitHtmlAppRevisionMetadata.md) |

## Returns

`object`

| Name | Type |
| ------ | ------ |
| `app` | { `id`: `string`; `title`: `string`; `intent?`: `string`; `files`: `Record`<`string`, `string`>; `entryHtmlPath`: `string`; `requestedCapabilities`: (`"query"` | `"schema"` | `"initialData"`)\[]; `grantedCapabilities`: (`"query"` | `"schema"` | `"initialData"`)\[]; `dependencies`: `object`\[]; `diagnostics`: `object`\[]; `revisions`: `object`\[]; `activeRevisionId?`: `string`; `redoRevisionIds`: `string`\[]; `createdAt`: `number`; `updatedAt`: `number`; } |
| `revision` | { `id`: `string`; `name`: `string`; `description?`: `string`; `sourcePrompt?`: `string`; `source`: `"assistant"` | `"user"` | `"restore"` | `"system"`; `sessionId?`: `string`; `toolCallId?`: `string`; `commitGroupId?`: `string`; `parentRevisionId?`: `string`; `createdAt`: `number`; `title`: `string`; `intent?`: `string`; `files`: `Record`<`string`, `string`>; `entryHtmlPath`: `string`; `requestedCapabilities?`: (`"query"` | `"schema"` | `"initialData"`)\[]; `grantedCapabilities?`: (`"query"` | `"schema"` | `"initialData"`)\[]; `dependencies`: `object`\[]; } |
