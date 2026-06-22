---
url: 'https://sqlrooms.org/api/webcontainer/functions/createWebContainerSlice.md'
---
[@sqlrooms/webcontainer](../index.md) / createWebContainerSlice

# Function: createWebContainerSlice()

> **createWebContainerSlice**(`props?`): `StateCreator`<[`WebContainerSliceState`](../type-aliases/WebContainerSliceState.md)>

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props?` | { `config?`: `Partial`<{ `filesTree`: `FileSystemTree`; `openedFiles`: `object`\[]; `activeFilePath`: `string` | `null`; }>; `autoInitialize?`: `boolean`; } | - |
| `props.config?` | `Partial`<{ `filesTree`: `FileSystemTree`; `openedFiles`: `object`\[]; `activeFilePath`: `string` | `null`; }> | - |
| `props.autoInitialize?` | `boolean` | Whether room-level slice initialization should eagerly boot WebContainer. Disable this when runtime startup should happen only on explicit user action. |

## Returns

`StateCreator`<[`WebContainerSliceState`](../type-aliases/WebContainerSliceState.md)>
