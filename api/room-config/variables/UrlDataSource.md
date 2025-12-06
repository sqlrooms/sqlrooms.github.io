---
url: /api/room-config/variables/UrlDataSource.md
---
[@sqlrooms/room-config](../index.md) / UrlDataSource

# Variable: UrlDataSource

> `const` **UrlDataSource**: `ZodObject`<{ `tableName`: `ZodString`; `type`: `ZodLiteral`<`"url"`>; `url`: `ZodString`; `loadOptions`: `ZodOptional`<`ZodDiscriminatedUnion`<\[`ZodObject`<{ `schema`: `ZodOptional`<`ZodString`>; `select`: `ZodOptional`<`ZodArray`<`ZodString`>>; `where`: `ZodOptional`<`ZodString`>; `view`: `ZodOptional`<`ZodBoolean`>; `temp`: `ZodOptional`<`ZodBoolean`>; `replace`: `ZodOptional`<`ZodBoolean`>; `method`: `ZodEnum`<{ `read_json`: `"read_json"`; `read_ndjson`: `"read_ndjson"`; `read_parquet`: `"read_parquet"`; `read_csv`: `"read_csv"`; `auto`: `"auto"`; }>; }, `$catchall`<`ZodUnknown`>>, `ZodObject`<{ `schema`: `ZodOptional`<`ZodString`>; `select`: `ZodOptional`<`ZodArray`<`ZodString`>>; `where`: `ZodOptional`<`ZodString`>; `view`: `ZodOptional`<`ZodBoolean`>; `temp`: `ZodOptional`<`ZodBoolean`>; `replace`: `ZodOptional`<`ZodBoolean`>; `options`: `ZodOptional`<`ZodUnion`\<readonly \[`ZodArray`<...>, `ZodString`, `ZodRecord`<..., ...>]>>; `method`: `ZodLiteral`<`"st_read"`>; }, `$catchall`<`ZodUnknown`>>], `"method"`>>; `httpMethod`: `ZodOptional`<`ZodString`>; `headers`: `ZodOptional`<`ZodRecord`<`ZodString`, `ZodString`>>; }, `$strip`>

**`Interface`**

Configuration for URL-based data sources
UrlDataSource
