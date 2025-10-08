---
url: /api/room-store/type-aliases/DataSource.md
---
[@sqlrooms/room-store](../index.md) / DataSource

# Type Alias: DataSource

> **DataSource**: { `type`: `"file"`; `tableName`: `string`; `fileName`: `string`; `loadOptions`: `objectOutputType`<`object` & `object` & `object`, `ZodUnknown`, `"strip"`> | `objectOutputType`<`object` & `object`, `ZodUnknown`, `"strip"`>; } | { `type`: `"url"`; `url`: `string`; `tableName`: `string`; `loadOptions`: `objectOutputType`<`object` & `object` & `object`, `ZodUnknown`, `"strip"`> | `objectOutputType`<`object` & `object`, `ZodUnknown`, `"strip"`>; `httpMethod`: `string`; `headers`: `Record`<`string`, `string`>; } | { `type`: `"sql"`; `tableName`: `string`; `sqlQuery`: `string`; }

Union type representing all possible data source configurations
Discriminated union based on the 'type' field
