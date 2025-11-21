---
url: /api/room-config/variables/StandardLoadFileOptions.md
---
[@sqlrooms/room-config](../index.md) / StandardLoadFileOptions

# Variable: StandardLoadFileOptions

> `const` **StandardLoadFileOptions**: `ZodObject`<{ `schema`: `ZodOptional`<`ZodString`>; `select`: `ZodOptional`<`ZodArray`<`ZodString`>>; `where`: `ZodOptional`<`ZodString`>; `view`: `ZodOptional`<`ZodBoolean`>; `temp`: `ZodOptional`<`ZodBoolean`>; `replace`: `ZodOptional`<`ZodBoolean`>; `method`: `ZodEnum`<{ `read_json`: `"read_json"`; `read_ndjson`: `"read_ndjson"`; `read_parquet`: `"read_parquet"`; `read_csv`: `"read_csv"`; `auto`: `"auto"`; }>; }, `$catchall`<`ZodUnknown`>>

**`Interface`**

Standard file loading options excluding spatial methods
StandardLoadFileOptions
