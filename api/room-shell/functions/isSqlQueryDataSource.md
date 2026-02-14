---
url: /api/room-shell/functions/isSqlQueryDataSource.md
---
[@sqlrooms/room-shell](../index.md) / isSqlQueryDataSource

# Function: isSqlQueryDataSource()

> **isSqlQueryDataSource**(`ds`): `ds is { tableName: string; type: "sql"; sqlQuery: string }`

Type guard to check if a data source is a SqlQueryDataSource

## Parameters

| Parameter | Type |
| ------ | ------ |
| `ds` | { `tableName`: `string`; `type`: `"file"`; `fileName`: `string`; `loadOptions?`: {\[`key`: `string`]: `unknown`; `schema?`: `string`; `select?`: `string`\[]; `where?`: `string`; `view?`: `boolean`; `temp?`: `boolean`; `replace?`: `boolean`; `method`: `"read_json"` | `"read_ndjson"` | `"read_parquet"` | `"read_csv"` | `"auto"`; } | {\[`key`: `string`]: `unknown`; `schema?`: `string`; `select?`: `string`\[]; `where?`: `string`; `view?`: `boolean`; `temp?`: `boolean`; `replace?`: `boolean`; `options?`: `string` | `Record`<`string`, `unknown`> | `string`\[]; `method`: `"st_read"`; }; } | { `tableName`: `string`; `type`: `"url"`; `url`: `string`; `loadOptions?`: {\[`key`: `string`]: `unknown`; `schema?`: `string`; `select?`: `string`\[]; `where?`: `string`; `view?`: `boolean`; `temp?`: `boolean`; `replace?`: `boolean`; `method`: `"read_json"` | `"read_ndjson"` | `"read_parquet"` | `"read_csv"` | `"auto"`; } | {\[`key`: `string`]: `unknown`; `schema?`: `string`; `select?`: `string`\[]; `where?`: `string`; `view?`: `boolean`; `temp?`: `boolean`; `replace?`: `boolean`; `options?`: `string` | `Record`<`string`, `unknown`> | `string`\[]; `method`: `"st_read"`; }; `httpMethod?`: `string`; `headers?`: `Record`<`string`, `string`>; } | { `tableName`: `string`; `type`: `"sql"`; `sqlQuery`: `string`; } |

## Returns

`ds is { tableName: string; type: "sql"; sqlQuery: string }`
