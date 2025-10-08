---
url: /api/room-config/type-aliases/DataSource.md
---
[@sqlrooms/room-config](../index.md) / DataSource

# Type Alias: DataSource

> **DataSource**: { `tableName`: `string`; `type`: `"file"`; `fileName`: `string`; `loadOptions`: `objectOutputType`<`object` & `object` & `object`, `ZodUnknown`, `"strip"`> | `objectOutputType`<`object` & `object`, `ZodUnknown`, `"strip"`>; } | { `tableName`: `string`; `type`: `"url"`; `url`: `string`; `loadOptions`: `objectOutputType`<`object` & `object` & `object`, `ZodUnknown`, `"strip"`> | `objectOutputType`<`object` & `object`, `ZodUnknown`, `"strip"`>; `httpMethod`: `string`; `headers`: `Record`<`string`, `string`>; } | { `tableName`: `string`; `type`: `"sql"`; `sqlQuery`: `string`; }

Union type representing all possible data source configurations
Discriminated union based on the 'type' field

## Type declaration

{ `tableName`: `string`; `type`: `"file"`; `fileName`: `string`; `loadOptions`: `objectOutputType`<`object` & `object` & `object`, `ZodUnknown`, `"strip"`> | `objectOutputType`<`object` & `object`, `ZodUnknown`, `"strip"`>; }

| Name | Type | Description |
| ------ | ------ | ------ |
| `tableName` | `string` | Unique table name used to store the data loaded from the data source. This name will be used to reference the data in SQL queries. |
| `type` | `"file"` | - |
| `fileName` | `string` | Path to the data file |
| `loadOptions`? | `objectOutputType`<`object` & `object` & `object`, `ZodUnknown`, `"strip"`> | `objectOutputType`<`object` & `object`, `ZodUnknown`, `"strip"`> | Optional configuration for file loading |

{ `tableName`: `string`; `type`: `"url"`; `url`: `string`; `loadOptions`: `objectOutputType`<`object` & `object` & `object`, `ZodUnknown`, `"strip"`> | `objectOutputType`<`object` & `object`, `ZodUnknown`, `"strip"`>; `httpMethod`: `string`; `headers`: `Record`<`string`, `string`>; }

| Name | Type | Description |
| ------ | ------ | ------ |
| `tableName` | `string` | Unique table name used to store the data loaded from the data source. This name will be used to reference the data in SQL queries. |
| `type` | `"url"` | - |
| `url` | `string` | URL from which to fetch the data |
| `loadOptions`? | `objectOutputType`<`object` & `object` & `object`, `ZodUnknown`, `"strip"`> | `objectOutputType`<`object` & `object`, `ZodUnknown`, `"strip"`> | Optional configuration for file loading |
| `httpMethod`? | `string` | Optional HTTP method to use for the request |
| `headers`? | `Record`<`string`, `string`> | Optional headers to include in the request |

{ `tableName`: `string`; `type`: `"sql"`; `sqlQuery`: `string`; }

| Name | Type | Description |
| ------ | ------ | ------ |
| `tableName` | `string` | Unique table name used to store the data loaded from the data source. This name will be used to reference the data in SQL queries. |
| `type` | `"sql"` | - |
| `sqlQuery` | `string` | SQL query to execute for data retrieval |
