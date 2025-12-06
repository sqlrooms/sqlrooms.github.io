---
url: /api/room-config/variables/FileDataSource.md
---
[@sqlrooms/room-config](../index.md) / FileDataSource

# Variable: FileDataSource

> `const` **FileDataSource**: `ZodObject`<{ `tableName`: `ZodString`; `type`: `ZodLiteral`<`"file"`>; `fileName`: `ZodString`; `loadOptions`: `ZodOptional`<`ZodDiscriminatedUnion`<\[`ZodObject`<{ `schema`: `ZodOptional`<`ZodString`>; `select`: `ZodOptional`<`ZodArray`<`ZodString`>>; `where`: `ZodOptional`<`ZodString`>; `view`: `ZodOptional`<`ZodBoolean`>; `temp`: `ZodOptional`<`ZodBoolean`>; `replace`: `ZodOptional`<`ZodBoolean`>; `method`: `ZodEnum`<{ `read_json`: `"read_json"`; `read_ndjson`: `"read_ndjson"`; `read_parquet`: `"read_parquet"`; `read_csv`: `"read_csv"`; `auto`: `"auto"`; }>; }, `$catchall`<`ZodUnknown`>>, `ZodObject`<{ `schema`: `ZodOptional`<`ZodString`>; `select`: `ZodOptional`<`ZodArray`<`ZodString`>>; `where`: `ZodOptional`<`ZodString`>; `view`: `ZodOptional`<`ZodBoolean`>; `temp`: `ZodOptional`<`ZodBoolean`>; `replace`: `ZodOptional`<`ZodBoolean`>; `options`: `ZodOptional`<`ZodUnion`\<readonly \[`ZodArray`<...>, `ZodString`, `ZodRecord`<..., ...>]>>; `method`: `ZodLiteral`<`"st_read"`>; }, `$catchall`<`ZodUnknown`>>], `"method"`>>; }, `$strip`>

**`Interface`**

Configuration for file-based data sources
FileDataSource
