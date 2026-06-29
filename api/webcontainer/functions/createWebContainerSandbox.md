---
url: 'https://sqlrooms.org/api/webcontainer/functions/createWebContainerSandbox.md'
---
[@sqlrooms/webcontainer](../index.md) / createWebContainerSandbox

# Function: createWebContainerSandbox()

> **createWebContainerSandbox**(`getState`): [`Sandbox`](../interfaces/Sandbox.md)

Adapts the WebContainer slice into the [Sandbox](../interfaces/Sandbox.md) interface.

* `readFile` prefers in-memory editor content (dirty files) so the LLM
  always sees what the user sees.
* `writeFiles` routes through `updateFileContent` + `saveAllOpenFiles` so
  changes flow through the editor state and trigger proper UI updates.
* `executeCommand` delegates to `executeBashCommand` which handles
  `just-bash` lifecycle, terminal output logging, and filesystem sync.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `getState` | () => [`WebContainerSliceState`](../type-aliases/WebContainerSliceState.md) |

## Returns

[`Sandbox`](../interfaces/Sandbox.md)
