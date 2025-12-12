---
url: /api/room-config/type-aliases/LoadFileOptions.md
---
[@sqlrooms/room-config](../index.md) / LoadFileOptions

# Type Alias: LoadFileOptions

> **LoadFileOptions** = {\[`key`: `string`]: `unknown`; `schema?`: `string`; `select?`: `string`\[]; `where?`: `string`; `view?`: `boolean`; `temp?`: `boolean`; `replace?`: `boolean`; `options?`: `string` | `Record`<`string`, `unknown`> | `string`\[]; `method`: `"st_read"`; } | {\[`key`: `string`]: `unknown`; `schema?`: `string`; `select?`: `string`\[]; `where?`: `string`; `view?`: `boolean`; `temp?`: `boolean`; `replace?`: `boolean`; `method`: `"read_json"` | `"read_ndjson"` | `"read_parquet"` | `"read_csv"` | `"auto"`; }

Union type of all possible file loading options
Discriminated union based on the 'method' field

## Type Declaration

{\[`key`: `string`]: `unknown`; `schema?`: `string`; `select?`: `string`\[]; `where?`: `string`; `view?`: `boolean`; `temp?`: `boolean`; `replace?`: `boolean`; `options?`: `string` | `Record`<`string`, `unknown`> | `string`\[]; `method`: `"st_read"`; }

## Index Signature

\[`key`: `string`]: `unknown`

| Name | Type | Description |
| ------ | ------ | ------ |
| `schema?` | `string` | Schema to load the table into |
| `select?` | `string`\[] | Columns to select, defaults to \['\*'] |
| `where?` | `string` | WHERE clause filter condition |
| `view?` | `boolean` | Whether to create as a view |
| `temp?` | `boolean` | Whether to create as a temporary table |
| `replace?` | `boolean` | Whether to replace existing table |
| `options?` | `string` | `Record`<`string`, `unknown`> | `string`\[] | Additional options for spatial data loading |
| `method` | `"st_read"` | - |

{\[`key`: `string`]: `unknown`; `schema?`: `string`; `select?`: `string`\[]; `where?`: `string`; `view?`: `boolean`; `temp?`: `boolean`; `replace?`: `boolean`; `method`: `"read_json"` | `"read_ndjson"` | `"read_parquet"` | `"read_csv"` | `"auto"`; }

## Index Signature

\[`key`: `string`]: `unknown`

| Name | Type | Description |
| ------ | ------ | ------ |
| `schema?` | `string` | Schema to load the table into |
| `select?` | `string`\[] | Columns to select, defaults to \['\*'] |
| `where?` | `string` | WHERE clause filter condition |
| `view?` | `boolean` | Whether to create as a view |
| `temp?` | `boolean` | Whether to create as a temporary table |
| `replace?` | `boolean` | Whether to replace existing table |
| `method` | `"read_json"` | `"read_ndjson"` | `"read_parquet"` | `"read_csv"` | `"auto"` | - |
