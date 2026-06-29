---
url: 'https://sqlrooms.org/api/app-runtime/functions/undoHtmlAppRevisionState.md'
---
[@sqlrooms/app-runtime](../index.md) / undoHtmlAppRevisionState

# Function: undoHtmlAppRevisionState()

> **undoHtmlAppRevisionState**(`app`): { `app`: { `id`: `string`; `title`: `string`; `intent?`: `string`; `files`: `Record`<`string`, `string`>; `entryHtmlPath`: `string`; `requestedCapabilities`: (`"query"` | `"schema"` | `"initialData"`)\[]; `grantedCapabilities`: (`"query"` | `"schema"` | `"initialData"`)\[]; `dependencies`: `object`\[]; `diagnostics`: `object`\[]; `revisions`: `object`\[]; `activeRevisionId?`: `string`; `redoRevisionIds`: `string`\[]; `createdAt`: `number`; `updatedAt`: `number`; }; `revision`: { `id`: `string`; `name`: `string`; `description?`: `string`; `sourcePrompt?`: `string`; `source`: `"assistant"` | `"user"` | `"restore"` | `"system"`; `sessionId?`: `string`; `toolCallId?`: `string`; `commitGroupId?`: `string`; `parentRevisionId?`: `string`; `createdAt`: `number`; `title`: `string`; `intent?`: `string`; `files`: `Record`<`string`, `string`>; `entryHtmlPath`: `string`; `requestedCapabilities?`: (`"query"` | `"schema"` | `"initialData"`)\[]; `grantedCapabilities?`: (`"query"` | `"schema"` | `"initialData"`)\[]; `dependencies`: `object`\[]; }; } | `undefined`

Move the active HTML app state to the previous retained revision.

Undo replays the previous revision snapshot directly and pushes the formerly
active revision id onto `redoRevisionIds`. It returns `undefined` when there
is no earlier revision to activate.

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

## Returns

{ `app`: { `id`: `string`; `title`: `string`; `intent?`: `string`; `files`: `Record`<`string`, `string`>; `entryHtmlPath`: `string`; `requestedCapabilities`: (`"query"` | `"schema"` | `"initialData"`)\[]; `grantedCapabilities`: (`"query"` | `"schema"` | `"initialData"`)\[]; `dependencies`: `object`\[]; `diagnostics`: `object`\[]; `revisions`: `object`\[]; `activeRevisionId?`: `string`; `redoRevisionIds`: `string`\[]; `createdAt`: `number`; `updatedAt`: `number`; }; `revision`: { `id`: `string`; `name`: `string`; `description?`: `string`; `sourcePrompt?`: `string`; `source`: `"assistant"` | `"user"` | `"restore"` | `"system"`; `sessionId?`: `string`; `toolCallId?`: `string`; `commitGroupId?`: `string`; `parentRevisionId?`: `string`; `createdAt`: `number`; `title`: `string`; `intent?`: `string`; `files`: `Record`<`string`, `string`>; `entryHtmlPath`: `string`; `requestedCapabilities?`: (`"query"` | `"schema"` | `"initialData"`)\[]; `grantedCapabilities?`: (`"query"` | `"schema"` | `"initialData"`)\[]; `dependencies`: `object`\[]; }; } | `undefined`
