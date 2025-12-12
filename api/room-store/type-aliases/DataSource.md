---
url: /api/room-store/type-aliases/DataSource.md
---
[@sqlrooms/room-store](../index.md) / DataSource

# Type Alias: DataSource

> **DataSource** = { `tableName`: `string`; `type`: `"file"`; `fileName`: `string`; `loadOptions?`: {\[`key`: `string`]: `unknown`; `schema?`: `string`; `select?`: `string`\[]; `where?`: `string`; `view?`: `boolean`; `temp?`: `boolean`; `replace?`: `boolean`; `method`: `"read_json"` | `"read_ndjson"` | `"read_parquet"` | `"read_csv"` | `"auto"`; } | {\[`key`: `string`]: `unknown`; `schema?`: `string`; `select?`: `string`\[]; `where?`: `string`; `view?`: `boolean`; `temp?`: `boolean`; `replace?`: `boolean`; `options?`: `string` | `Record`<`string`, `unknown`> | `string`\[]; `method`: `"st_read"`; }; } | { `tableName`: `string`; `type`: `"url"`; `url`: `string`; `loadOptions?`: {\[`key`: `string`]: `unknown`; `schema?`: `string`; `select?`: `string`\[]; `where?`: `string`; `view?`: `boolean`; `temp?`: `boolean`; `replace?`: `boolean`; `method`: `"read_json"` | `"read_ndjson"` | `"read_parquet"` | `"read_csv"` | `"auto"`; } | {\[`key`: `string`]: `unknown`; `schema?`: `string`; `select?`: `string`\[]; `where?`: `string`; `view?`: `boolean`; `temp?`: `boolean`; `replace?`: `boolean`; `options?`: `string` | `Record`<`string`, `unknown`> | `string`\[]; `method`: `"st_read"`; }; `httpMethod?`: `string`; `headers?`: `Record`<`string`, `string`>; } | { `tableName`: `string`; `type`: `"sql"`; `sqlQuery`: `string`; }

Union type representing all possible data source configurations
Discriminated union based on the 'type' field
