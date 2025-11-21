---
url: /api/room-config/variables/SpatialLoadOptions.md
---
[@sqlrooms/room-config](../index.md) / SpatialLoadOptions

# Variable: SpatialLoadOptions

> `const` **SpatialLoadOptions**: `ZodObject`<{ `schema`: `ZodOptional`<`ZodString`>; `select`: `ZodOptional`<`ZodArray`<`ZodString`>>; `where`: `ZodOptional`<`ZodString`>; `view`: `ZodOptional`<`ZodBoolean`>; `temp`: `ZodOptional`<`ZodBoolean`>; `replace`: `ZodOptional`<`ZodBoolean`>; `options`: `ZodOptional`<`ZodUnion`\<readonly \[`ZodArray`<`ZodString`>, `ZodString`, `ZodRecord`<`ZodString`, `ZodUnknown`>]>>; }, `$catchall`<`ZodUnknown`>>

**`Interface`**

Extended options specifically for spatial data loading
Includes all standard options plus spatial-specific parameters
SpatialLoadOptions
