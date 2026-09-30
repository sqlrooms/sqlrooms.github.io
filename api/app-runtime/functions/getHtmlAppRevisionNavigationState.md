---
url: >-
  https://sqlrooms.org/api/app-runtime/functions/getHtmlAppRevisionNavigationState.md
---
[@sqlrooms/app-runtime](../index.md) / getHtmlAppRevisionNavigationState

# Function: getHtmlAppRevisionNavigationState()

> **getHtmlAppRevisionNavigationState**(`app?`): [`HtmlAppRevisionNavigationState`](../type-aliases/HtmlAppRevisionNavigationState.md)

Compute revision navigation affordances for an HTML app.

The result is safe to use for history panels and toolbar buttons: missing apps
report no active revision and disabled undo/redo actions.

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

[`HtmlAppRevisionNavigationState`](../type-aliases/HtmlAppRevisionNavigationState.md)
