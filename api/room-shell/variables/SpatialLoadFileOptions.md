---
url: /api/room-shell/variables/SpatialLoadFileOptions.md
---
[@sqlrooms/room-shell](../index.md) / SpatialLoadFileOptions

# Variable: SpatialLoadFileOptions

> `const` **SpatialLoadFileOptions**: `z.ZodObject`<{ `schema`: `z.ZodOptional`<`z.ZodString`>; `select`: `z.ZodOptional`<`z.ZodArray`<`z.ZodString`>>; `where`: `z.ZodOptional`<`z.ZodString`>; `view`: `z.ZodOptional`<`z.ZodBoolean`>; `temp`: `z.ZodOptional`<`z.ZodBoolean`>; `replace`: `z.ZodOptional`<`z.ZodBoolean`>; `options`: `z.ZodOptional`<`z.ZodUnion`\<readonly \[`z.ZodArray`<`z.ZodString`>, `z.ZodString`, `z.ZodRecord`<`z.ZodString`, `z.ZodUnknown`>]>>; `method`: `z.ZodLiteral`<`"st_read"`>; }, `z.core.$catchall`<`z.ZodUnknown`>>

**`Interface`**

Options specific to spatial file loading with st\_read method
SpatialLoadFileOptions
