---
url: /api/room-config/variables/SpatialLoadFileOptions.md
---
[@sqlrooms/room-config](../index.md) / SpatialLoadFileOptions

# Variable: SpatialLoadFileOptions

> `const` **SpatialLoadFileOptions**: `ZodObject`<{ `schema`: `ZodOptional`<`ZodString`>; `select`: `ZodOptional`<`ZodArray`<`ZodString`>>; `where`: `ZodOptional`<`ZodString`>; `view`: `ZodOptional`<`ZodBoolean`>; `temp`: `ZodOptional`<`ZodBoolean`>; `replace`: `ZodOptional`<`ZodBoolean`>; `options`: `ZodOptional`<`ZodUnion`\<readonly \[`ZodArray`<`ZodString`>, `ZodString`, `ZodRecord`<`ZodString`, `ZodUnknown`>]>>; `method`: `ZodLiteral`<`"st_read"`>; }, `$catchall`<`ZodUnknown`>>

**`Interface`**

Options specific to spatial file loading with st\_read method
SpatialLoadFileOptions
