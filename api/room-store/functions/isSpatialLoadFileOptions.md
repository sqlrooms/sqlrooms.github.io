---
url: /api/room-store/functions/isSpatialLoadFileOptions.md
---
[@sqlrooms/room-store](../index.md) / isSpatialLoadFileOptions

# Function: isSpatialLoadFileOptions()

> **isSpatialLoadFileOptions**(`options`): options is { (key: string): unknown; schema?: string; select?: string\[]; where?: string; view?: boolean; temp?: boolean; replace?: boolean; options?: string | Record\<string, unknown> | string\[]; method: "st\_read" }

Type guard to check if options are spatial load file options

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | { `[key: string]`: `unknown`; `schema`: `string`; `select`: `string`\[]; `where`: `string`; `view`: `boolean`; `temp`: `boolean`; `replace`: `boolean`; `method`: `"read_json"` | `"read_ndjson"` | `"read_parquet"` | `"read_csv"` | `"auto"`; } | { `[key: string]`: `unknown`; `schema`: `string`; `select`: `string`\[]; `where`: `string`; `view`: `boolean`; `temp`: `boolean`; `replace`: `boolean`; `options`: `string` | `Record`<`string`, `unknown`> | `string`\[]; `method`: `"st_read"`; } | The options to check |

## Returns

options is { (key: string): unknown; schema?: string; select?: string\[]; where?: string; view?: boolean; temp?: boolean; replace?: boolean; options?: string | Record\<string, unknown> | string\[]; method: "st\_read" }

True if options are spatial load file options
