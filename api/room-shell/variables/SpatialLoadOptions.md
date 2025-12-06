---
url: /api/room-shell/variables/SpatialLoadOptions.md
---
[@sqlrooms/room-shell](../index.md) / SpatialLoadOptions

# Variable: SpatialLoadOptions

> `const` **SpatialLoadOptions**: `z.ZodObject`<{ `schema`: `z.ZodOptional`<`z.ZodString`>; `select`: `z.ZodOptional`<`z.ZodArray`<`z.ZodString`>>; `where`: `z.ZodOptional`<`z.ZodString`>; `view`: `z.ZodOptional`<`z.ZodBoolean`>; `temp`: `z.ZodOptional`<`z.ZodBoolean`>; `replace`: `z.ZodOptional`<`z.ZodBoolean`>; `options`: `z.ZodOptional`<`z.ZodUnion`\<readonly \[`z.ZodArray`<`z.ZodString`>, `z.ZodString`, `z.ZodRecord`<`z.ZodString`, `z.ZodUnknown`>]>>; }, `z.core.$catchall`<`z.ZodUnknown`>>

**`Interface`**

Extended options specifically for spatial data loading
Includes all standard options plus spatial-specific parameters
SpatialLoadOptions
