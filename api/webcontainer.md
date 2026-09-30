---
url: https://sqlrooms.org/api/webcontainer.md
---
# @sqlrooms/webcontainer

> **Experimental:** This package's API and behavior may change between releases.

WebContainer state slice and runtime helpers for SQLRooms stores.

This package provides a ready-to-use Zustand slice for managing:

* WebContainer boot lifecycle
* dependency installation and dev server startup
* file open/edit/save state
* in-memory file tree synchronization for AI/editor tooling
* HMR-safe browser caching of the active WebContainer instance

## What it exports

* `createWebContainerSlice()`
* `createDefaultWebContainerSliceConfig()`
* `WebContainerSliceConfig` (Zod schema)
* `WebContainerPersistConfig` (persistence-safe Zod schema)
* `WebContainerSliceState` (TypeScript type)

## Quick usage

```ts
import {
  createBaseRoomSlice,
  createRoomStore,
  type BaseRoomStoreState,
} from '@sqlrooms/room-store';
import {
  createWebContainerSlice,
  type WebContainerSliceState,
} from '@sqlrooms/webcontainer';

type RoomState = BaseRoomStoreState & WebContainerSliceState;

export const {roomStore, useRoomStore} = createRoomStore<RoomState>(
  (set, get, store) => ({
    ...createBaseRoomSlice()(set, get, store),
    ...createWebContainerSlice({
      config: {
        filesTree: {
          src: {
            directory: {
              'App.jsx': {
                file: {
                  contents: "export default function App() { return 'hello'; }",
                },
              },
            },
          },
          'package.json': {
            file: {
              contents: JSON.stringify(
                {
                  name: 'webcontainer-app',
                  private: true,
                  scripts: {dev: 'vite'},
                },
                null,
                2,
              ),
            },
          },
        },
        activeFilePath: '/src/App.jsx',
      },
    })(set, get, store),
  }),
);
```

## Runtime notes

* The slice state key is `webContainer`.
* Call `room.initialize()` once during app startup; it initializes the
  WebContainer slice through the room lifecycle.
* `updateFileContent()` updates both open-file state and the in-memory `filesTree`.
* `saveAllOpenFiles()` writes dirty files to the WebContainer filesystem.

The quick start intentionally leaves `webContainer` out of
`persistSliceConfigs()`. The live `filesTree` may include an installed
`node_modules` tree and become too large for browser storage. If a host needs to
persist lightweight editor state, use `WebContainerPersistConfig`, never
`WebContainerSliceConfig`, and provide a custom persistence merge that retains
the initial `filesTree` from the current slice configuration.

## Related

* Depends on `@webcontainer/api` for the underlying runtime.
* Designed to compose with other SQLRooms slices inside `createRoomStore()`.

## Classes

* [WebContainerFsAdapter](/api/webcontainer/classes/WebContainerFsAdapter.md)

## Interfaces

* [Sandbox](/api/webcontainer/interfaces/Sandbox.md)

## Type Aliases

* [WebContainerSliceConfig](/api/webcontainer/type-aliases/WebContainerSliceConfig.md)
* [WebContainerSliceState](/api/webcontainer/type-aliases/WebContainerSliceState.md)
* [WebContainerBashToolParameters](/api/webcontainer/type-aliases/WebContainerBashToolParameters.md)
* [WebContainerBashToolParameters](/api/webcontainer/type-aliases/WebContainerBashToolParameters-1.md)
* [WebContainerReadFileToolParameters](/api/webcontainer/type-aliases/WebContainerReadFileToolParameters.md)
* [WebContainerReadFileToolParameters](/api/webcontainer/type-aliases/WebContainerReadFileToolParameters-1.md)
* [WebContainerWriteFileToolParameters](/api/webcontainer/type-aliases/WebContainerWriteFileToolParameters.md)
* [WebContainerWriteFileToolParameters](/api/webcontainer/type-aliases/WebContainerWriteFileToolParameters-1.md)
* [WebContainerBashToolOutput](/api/webcontainer/type-aliases/WebContainerBashToolOutput.md)
* [WebContainerReadFileToolOutput](/api/webcontainer/type-aliases/WebContainerReadFileToolOutput.md)
* [WebContainerWriteFileToolOutput](/api/webcontainer/type-aliases/WebContainerWriteFileToolOutput.md)
* [WebContainerToolkitResult](/api/webcontainer/type-aliases/WebContainerToolkitResult.md)

## Variables

* [WebContainerSliceConfig](/api/webcontainer/variables/WebContainerSliceConfig.md)
* [WebContainerPersistConfig](/api/webcontainer/variables/WebContainerPersistConfig.md)
* [WebContainer](/api/webcontainer/variables/WebContainer.md)
* [webContainerBashToolRenderer](/api/webcontainer/variables/webContainerBashToolRenderer.md)

## Functions

* [createWebContainerSandbox](/api/webcontainer/functions/createWebContainerSandbox.md)
* [createDefaultWebContainerSliceConfig](/api/webcontainer/functions/createDefaultWebContainerSliceConfig.md)
* [createWebContainerSlice](/api/webcontainer/functions/createWebContainerSlice.md)
* [useStoreWithWebContainer](/api/webcontainer/functions/useStoreWithWebContainer.md)
* [createWebContainerToolkit](/api/webcontainer/functions/createWebContainerToolkit.md)
* [~~createWebContainerBashTool~~](/api/webcontainer/functions/createWebContainerBashTool.md)
* [WebContainerBashToolResult](/api/webcontainer/functions/WebContainerBashToolResult.md)
* [WebContainerReadFileToolResult](/api/webcontainer/functions/WebContainerReadFileToolResult.md)
* [WebContainerWriteFileToolResult](/api/webcontainer/functions/WebContainerWriteFileToolResult.md)
