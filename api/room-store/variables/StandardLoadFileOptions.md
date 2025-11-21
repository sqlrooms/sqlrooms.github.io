---
url: /api/room-store/variables/StandardLoadFileOptions.md
---
[@sqlrooms/room-store](../index.md) / StandardLoadFileOptions

# Variable: StandardLoadFileOptions

> `const` **StandardLoadFileOptions**: `z.ZodObject`<{ `schema`: `z.ZodOptional`<`z.ZodString`>; `select`: `z.ZodOptional`<`z.ZodArray`<`z.ZodString`>>; `where`: `z.ZodOptional`<`z.ZodString`>; `view`: `z.ZodOptional`<`z.ZodBoolean`>; `temp`: `z.ZodOptional`<`z.ZodBoolean`>; `replace`: `z.ZodOptional`<`z.ZodBoolean`>; `method`: `z.ZodEnum`<{ `read_json`: `"read_json"`; `read_ndjson`: `"read_ndjson"`; `read_parquet`: `"read_parquet"`; `read_csv`: `"read_csv"`; `auto`: `"auto"`; }>; }, `z.core.$catchall`<`z.ZodUnknown`>>

**`Interface`**

Standard file loading options excluding spatial methods
StandardLoadFileOptions
