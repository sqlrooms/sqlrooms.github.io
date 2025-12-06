---
url: /api/room-shell/variables/FileDataSource.md
---
[@sqlrooms/room-shell](../index.md) / FileDataSource

# Variable: FileDataSource

> `const` **FileDataSource**: `z.ZodObject`<{ `tableName`: `z.ZodString`; `type`: `z.ZodLiteral`<`"file"`>; `fileName`: `z.ZodString`; `loadOptions`: `z.ZodOptional`<`z.ZodDiscriminatedUnion`<\[`z.ZodObject`<{ `schema`: `z.ZodOptional`<`z.ZodString`>; `select`: `z.ZodOptional`<`z.ZodArray`<`z.ZodString`>>; `where`: `z.ZodOptional`<`z.ZodString`>; `view`: `z.ZodOptional`<`z.ZodBoolean`>; `temp`: `z.ZodOptional`<`z.ZodBoolean`>; `replace`: `z.ZodOptional`<`z.ZodBoolean`>; `method`: `z.ZodEnum`<{ `read_json`: `"read_json"`; `read_ndjson`: `"read_ndjson"`; `read_parquet`: `"read_parquet"`; `read_csv`: `"read_csv"`; `auto`: `"auto"`; }>; }, `z.core.$catchall`<`z.ZodUnknown`>>, `z.ZodObject`<{ `schema`: `z.ZodOptional`<`z.ZodString`>; `select`: `z.ZodOptional`<`z.ZodArray`<`z.ZodString`>>; `where`: `z.ZodOptional`<`z.ZodString`>; `view`: `z.ZodOptional`<`z.ZodBoolean`>; `temp`: `z.ZodOptional`<`z.ZodBoolean`>; `replace`: `z.ZodOptional`<`z.ZodBoolean`>; `options`: `z.ZodOptional`<`z.ZodUnion`\<readonly \[..., ..., ...]>>; `method`: `z.ZodLiteral`<`"st_read"`>; }, `z.core.$catchall`<`z.ZodUnknown`>>], `"method"`>>; }, `z.core.$strip`>

**`Interface`**

Configuration for file-based data sources
FileDataSource
