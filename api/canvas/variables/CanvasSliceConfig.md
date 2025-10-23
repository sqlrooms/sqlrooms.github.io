---
url: /api/canvas/variables/CanvasSliceConfig.md
---
[@sqlrooms/canvas](../index.md) / CanvasSliceConfig

# Variable: CanvasSliceConfig

> `const` **CanvasSliceConfig**: `ZodObject`<{ `viewport`: `ZodObject`<{ `x`: `ZodNumber`; `y`: `ZodNumber`; `zoom`: `ZodNumber`; }, `$strip`>; `nodes`: `ZodDefault`<`ZodArray`<`ZodObject`<{ `id`: `ZodString`; `position`: `ZodObject`<{ `x`: `ZodNumber`; `y`: `ZodNumber`; }, `$strip`>; `type`: `ZodEnum`<{ `sql`: `"sql"`; `vega`: `"vega"`; }>; `data`: `ZodDiscriminatedUnion`<\[`ZodObject`<{ `title`: `ZodDefault`<...>; `type`: `ZodLiteral`<...>; `sql`: `ZodOptional`<...>; }, `$strip`>, `ZodObject`<{ `title`: `ZodDefault`<...>; `type`: `ZodLiteral`<...>; `sql`: `ZodOptional`<...>; `vegaSpec`: `ZodOptional`<...>; }, `$strip`>], `"type"`>; `width`: `ZodNumber`; `height`: `ZodNumber`; }, `$strip`>>>; `edges`: `ZodDefault`<`ZodArray`<`ZodObject`<{ `id`: `ZodString`; `source`: `ZodString`; `target`: `ZodString`; }, `$strip`>>>; }, `$strip`>
