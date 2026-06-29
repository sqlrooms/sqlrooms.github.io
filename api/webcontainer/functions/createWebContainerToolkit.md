---
url: 'https://sqlrooms.org/api/webcontainer/functions/createWebContainerToolkit.md'
---
[@sqlrooms/webcontainer](../index.md) / createWebContainerToolkit

# Function: createWebContainerToolkit()

> **createWebContainerToolkit**(`store`): [`WebContainerToolkitResult`](../type-aliases/WebContainerToolkitResult.md)

Creates a complete set of WebContainer AI tools (bash, readFile, writeFile).

Returns synchronous tool objects that can be passed directly to
`createAiSlice({ tools })`.  Uses a WebContainerSandbox adapter
so that reads prefer in-memory editor content and writes flow through the
editor state for proper UI updates.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `store` | `WebContainerStoreLike` |

## Returns

[`WebContainerToolkitResult`](../type-aliases/WebContainerToolkitResult.md)
