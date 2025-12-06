---
url: /api/canvas.md
---
# @sqlrooms/canvas

ReactFlow-based canvas for building and editing DAGs of SQL and Vega nodes, with a Zustand slice for persistence in SQLRooms apps.

* CanvasSlice stores nodes and edges under `canvas.config`
* Canvas component renders and edits the graph

Refer to the [Canvas example](https://github.com/sqlrooms/examples/tree/main/canvas).

## Type Aliases

* [CanvasSliceConfig](type-aliases/CanvasSliceConfig.md)
* [CanvasSliceState](type-aliases/CanvasSliceState.md)

## Variables

* [CanvasSliceConfig](variables/CanvasSliceConfig.md)

## Functions

* [Canvas](functions/Canvas.md)
* [createDefaultCanvasConfig](functions/createDefaultCanvasConfig.md)
* [createCanvasSlice](functions/createCanvasSlice.md)
