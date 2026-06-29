---
url: 'https://sqlrooms.org/api/room-store/type-aliases/LoadFileOptions.md'
---
[@sqlrooms/room-store](../index.md) / LoadFileOptions

# Type Alias: LoadFileOptions

> **LoadFileOptions** = {\[`key`: `string`]: `unknown`; `schema?`: `string`; `select?`: `string`\[]; `where?`: `string`; `view?`: `boolean`; `temp?`: `boolean`; `replace?`: `boolean`; `method`: `"read_json"` | `"read_ndjson"` | `"read_parquet"` | `"read_csv"` | `"auto"`; } | {\[`key`: `string`]: `unknown`; `schema?`: `string`; `select?`: `string`\[]; `where?`: `string`; `view?`: `boolean`; `temp?`: `boolean`; `replace?`: `boolean`; `options?`: `string` | `string`\[] | `Record`<`string`, `unknown`>; `method`: `"st_read"`; }

Union type of all possible file loading options
Discriminated union based on the 'method' field
