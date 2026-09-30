---
url: https://sqlrooms.org/api/canvas.md
---
# @sqlrooms/canvas

> **Experimental:** This package's API and behavior may change between releases.

React Flow-based, artifact-scoped canvas for building SQL and Vega node DAGs in
SQLRooms apps.

This package includes:

* `createCanvasSlice` for artifact-scoped canvas runtime state
* `createDefaultCanvasConfig` for persisted config defaults
* `Canvas` React component, which requires an explicit `artifactId`
* `CanvasSliceConfig`, `CanvasNodeMeta`, and `CanvasArtifactMeta` schemas/types

## Setup

Canvas uses the canonical cell state from `@sqlrooms/cells`. Compose both
slices, persist both configs, and initialize backing state for each canvas
artifact:

```tsx
import {Canvas, CanvasSliceConfig, createCanvasSlice} from '@sqlrooms/canvas';
import {
  CellsSliceConfig,
  createCellsSlice,
  createDefaultCellRegistry,
} from '@sqlrooms/cells';
import {
  RoomStateProvider,
  createRoomShellSlice,
  createRoomStore,
  persistSliceConfigs,
} from '@sqlrooms/room-shell';

const {roomStore} = createRoomStore(
  persistSliceConfigs(
    {
      name: 'canvas-workspace',
      sliceConfigSchemas: {
        canvas: CanvasSliceConfig,
        cells: CellsSliceConfig,
      },
    },
    (set, get, store) => ({
      ...createRoomShellSlice({})(set, get, store),
      ...createCellsSlice({
        cellRegistry: createDefaultCellRegistry(),
      })(set, get, store),
      ...createCanvasSlice()(set, get, store),
    }),
  ),
);

roomStore.getState().canvas.ensureArtifact('analysis-canvas');
```

Render the canvas inside a `RoomShell` (or another host that provides the room
store context):

```tsx
<RoomStateProvider roomStore={roomStore}>
  <Canvas artifactId="analysis-canvas" />
</RoomStateProvider>
```

When canvases are top-level workspace entries, connect `ensureArtifact()` and
`removeArtifact()` to an `@sqlrooms/artifacts` type lifecycle. See the
[Artifacts guide](https://sqlrooms.org/artifacts) and the
[Canvas example](https://github.com/sqlrooms/examples/tree/main/canvas).

## Stable vs internal imports

Use root imports from `@sqlrooms/canvas` as the stable API surface.

* stable: `createCanvasSlice`, `createDefaultCanvasConfig`, `Canvas`, `CanvasSliceConfig`, `CanvasNodeMeta`, `CanvasArtifactMeta`
* internal: direct imports from implementation files under `src/` are not semver-stable and may change without notice

## Type Aliases

* [CanvasNodeMeta](/api/canvas/type-aliases/CanvasNodeMeta.md)
* [CanvasArtifactMeta](/api/canvas/type-aliases/CanvasArtifactMeta.md)
* [CanvasSliceConfig](/api/canvas/type-aliases/CanvasSliceConfig.md)
* [CanvasSliceState](/api/canvas/type-aliases/CanvasSliceState.md)

## Variables

* [Canvas](/api/canvas/variables/Canvas.md)
* [CanvasNodeMeta](/api/canvas/variables/CanvasNodeMeta.md)
* [CanvasArtifactMeta](/api/canvas/variables/CanvasArtifactMeta.md)
* [CanvasSliceConfig](/api/canvas/variables/CanvasSliceConfig.md)

## Functions

* [createDefaultCanvasConfig](/api/canvas/functions/createDefaultCanvasConfig.md)
* [createCanvasSlice](/api/canvas/functions/createCanvasSlice.md)
