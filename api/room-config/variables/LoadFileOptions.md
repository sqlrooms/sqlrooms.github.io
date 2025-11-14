---
url: /api/room-config/variables/LoadFileOptions.md
---
[@sqlrooms/room-config](../index.md) / LoadFileOptions

# Variable: LoadFileOptions

> `const` **LoadFileOptions**: `ZodDiscriminatedUnion`<\[`ZodObject`<{ `schema`: `ZodOptional`<`ZodString`>; `select`: `ZodOptional`<`ZodArray`<`ZodString`>>; `where`: `ZodOptional`<`ZodString`>; `view`: `ZodOptional`<`ZodBoolean`>; `temp`: `ZodOptional`<`ZodBoolean`>; `replace`: `ZodOptional`<`ZodBoolean`>; `method`: `ZodEnum`<{ `read_json`: `"read_json"`; `read_ndjson`: `"read_ndjson"`; `read_parquet`: `"read_parquet"`; `read_csv`: `"read_csv"`; `auto`: `"auto"`; }>; }, `$catchall`<`ZodUnknown`>>, `ZodObject`<{ `schema`: `ZodOptional`<`ZodString`>; `select`: `ZodOptional`<`ZodArray`<`ZodString`>>; `where`: `ZodOptional`<`ZodString`>; `view`: `ZodOptional`<`ZodBoolean`>; `temp`: `ZodOptional`<`ZodBoolean`>; `replace`: `ZodOptional`<`ZodBoolean`>; `options`: `ZodOptional`<`ZodUnion`\<readonly \[`ZodArray`<`ZodString`>, `ZodString`, `ZodRecord`<`ZodString`, `ZodUnknown`>]>>; `method`: `ZodLiteral`<`"st_read"`>; }, `$catchall`<`ZodUnknown`>>], `"method"`>

Union type of all possible file loading options
Discriminated union based on the 'method' field
