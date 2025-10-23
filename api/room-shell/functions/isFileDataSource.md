---
url: /api/room-shell/functions/isFileDataSource.md
---
[@sqlrooms/room-shell](../index.md) / isFileDataSource

# Function: isFileDataSource()

> **isFileDataSource**(`ds`): ds is { tableName: string; type: "file"; fileName: string; loadOptions?: { (key: string): unknown; schema?: string; select?: string\[]; where?: string; view?: boolean; temp?: boolean; replace?: boolean; method: "read\_json" | "read\_ndjson" | "read\_parquet" | "read\_csv" | "auto" } | { (key: string): unknown; schema?: string; select?: string\[]; where?: string; view?: boolean; temp?: boolean; replace?: boolean; options?: string | Record\<string, unknown> | string\[]; method: "st\_read" } }

Type guard to check if a data source is a FileDataSource

## Parameters

| Parameter | Type |
| ------ | ------ |
| `ds` | { `tableName`: `string`; `type`: `"file"`; `fileName`: `string`; `loadOptions`: { `[key: string]`: `unknown`; `schema`: `string`; `select`: `string`\[]; `where`: `string`; `view`: `boolean`; `temp`: `boolean`; `replace`: `boolean`; `method`: `"read_json"` | `"read_ndjson"` | `"read_parquet"` | `"read_csv"` | `"auto"`; } | { `[key: string]`: `unknown`; `schema`: `string`; `select`: `string`\[]; `where`: `string`; `view`: `boolean`; `temp`: `boolean`; `replace`: `boolean`; `options`: `string` | `Record`<`string`, `unknown`> | `string`\[]; `method`: `"st_read"`; }; } | { `tableName`: `string`; `type`: `"url"`; `url`: `string`; `loadOptions`: { `[key: string]`: `unknown`; `schema`: `string`; `select`: `string`\[]; `where`: `string`; `view`: `boolean`; `temp`: `boolean`; `replace`: `boolean`; `method`: `"read_json"` | `"read_ndjson"` | `"read_parquet"` | `"read_csv"` | `"auto"`; } | { `[key: string]`: `unknown`; `schema`: `string`; `select`: `string`\[]; `where`: `string`; `view`: `boolean`; `temp`: `boolean`; `replace`: `boolean`; `options`: `string` | `Record`<`string`, `unknown`> | `string`\[]; `method`: `"st_read"`; }; `httpMethod`: `string`; `headers`: `Record`<`string`, `string`>; } | { `tableName`: `string`; `type`: `"sql"`; `sqlQuery`: `string`; } |

## Returns

ds is { tableName: string; type: "file"; fileName: string; loadOptions?: { (key: string): unknown; schema?: string; select?: string\[]; where?: string; view?: boolean; temp?: boolean; replace?: boolean; method: "read\_json" | "read\_ndjson" | "read\_parquet" | "read\_csv" | "auto" } | { (key: string): unknown; schema?: string; select?: string\[]; where?: string; view?: boolean; temp?: boolean; replace?: boolean; options?: string | Record\<string, unknown> | string\[]; method: "st\_read" } }
