---
url: /api/duckdb/variables/LoadFileOptions.md
---
[@sqlrooms/duckdb](../index.md) / LoadFileOptions

# Variable: LoadFileOptions

> `const` **LoadFileOptions**: `z.ZodDiscriminatedUnion`<\[`z.ZodObject`<{ `schema`: `z.ZodOptional`<`z.ZodString`>; `select`: `z.ZodOptional`<`z.ZodArray`<`z.ZodString`>>; `where`: `z.ZodOptional`<`z.ZodString`>; `view`: `z.ZodOptional`<`z.ZodBoolean`>; `temp`: `z.ZodOptional`<`z.ZodBoolean`>; `replace`: `z.ZodOptional`<`z.ZodBoolean`>; `method`: `z.ZodEnum`<{ `read_json`: `"read_json"`; `read_ndjson`: `"read_ndjson"`; `read_parquet`: `"read_parquet"`; `read_csv`: `"read_csv"`; `auto`: `"auto"`; }>; }, `z.core.$catchall`<`z.ZodUnknown`>>, `z.ZodObject`<{ `schema`: `z.ZodOptional`<`z.ZodString`>; `select`: `z.ZodOptional`<`z.ZodArray`<`z.ZodString`>>; `where`: `z.ZodOptional`<`z.ZodString`>; `view`: `z.ZodOptional`<`z.ZodBoolean`>; `temp`: `z.ZodOptional`<`z.ZodBoolean`>; `replace`: `z.ZodOptional`<`z.ZodBoolean`>; `options`: `z.ZodOptional`<`z.ZodUnion`\<readonly \[`z.ZodArray`<`z.ZodString`>, `z.ZodString`, `z.ZodRecord`<`z.ZodString`, `z.ZodUnknown`>]>>; `method`: `z.ZodLiteral`<`"st_read"`>; }, `z.core.$catchall`<`z.ZodUnknown`>>], `"method"`>

Union type of all possible file loading options
Discriminated union based on the 'method' field
