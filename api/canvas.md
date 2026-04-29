---
url: 'https://sqlrooms.org/api/canvas.md'
---
# @sqlrooms/canvas

React Flow-based artifact-scoped canvas for building SQL + Vega node DAGs in SQLRooms apps.

This package includes:

* `createCanvasSlice` for artifact-scoped canvas runtime state
* `createDefaultCanvasConfig` for persisted config defaults
* `Canvas` React component, which requires an explicit `artifactId`
* `CanvasSliceConfig`, `CanvasNodeMeta`, and `CanvasArtifactMeta` schemas/types

Refer to the [Canvas example](https://github.com/sqlrooms/examples/tree/main/canvas).

## Stable vs internal imports

Use root imports from `@sqlrooms/canvas` as the stable API surface.

* stable: `createCanvasSlice`, `createDefaultCanvasConfig`, `Canvas`, `CanvasSliceConfig`, `CanvasNodeMeta`, `CanvasArtifactMeta`
* internal: direct imports from implementation files under `src/` are not semver-stable and may change without notice

## Type Aliases

* [CanvasNodeMeta](type-aliases/CanvasNodeMeta.md)
* [CanvasArtifactMeta](type-aliases/CanvasArtifactMeta.md)
* [CanvasSliceConfig](type-aliases/CanvasSliceConfig.md)
* [CanvasSliceState](type-aliases/CanvasSliceState.md)

## Variables

* [Canvas](variables/Canvas.md)
* [CanvasNodeMeta](variables/CanvasNodeMeta.md)
* [CanvasArtifactMeta](variables/CanvasArtifactMeta.md)
* [CanvasSliceConfig](variables/CanvasSliceConfig.md)

## Functions

* [createDefaultCanvasConfig](functions/createDefaultCanvasConfig.md)
* [createCanvasSlice](functions/createCanvasSlice.md)
