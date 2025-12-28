---
url: /api/room-config/functions/isSpatialLoadFileOptions.md
---
[@sqlrooms/room-config](../index.md) / isSpatialLoadFileOptions

# Function: isSpatialLoadFileOptions()

> **isSpatialLoadFileOptions**(`options`): options is { schema?: string; select?: string\[]; where?: string; view?: boolean; temp?: boolean; replace?: boolean; options?: string | Record\<string, unknown> | string\[]; method: "st\_read"; \[key: string]: unknown }

Type guard to check if options are spatial load file options

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | {\[`key`: `string`]: `unknown`; `schema?`: `string`; `select?`: `string`\[]; `where?`: `string`; `view?`: `boolean`; `temp?`: `boolean`; `replace?`: `boolean`; `options?`: `string` | `Record`<`string`, `unknown`> | `string`\[]; `method`: `"st_read"`; } | {\[`key`: `string`]: `unknown`; `schema?`: `string`; `select?`: `string`\[]; `where?`: `string`; `view?`: `boolean`; `temp?`: `boolean`; `replace?`: `boolean`; `method`: `"read_json"` | `"read_ndjson"` | `"read_parquet"` | `"read_csv"` | `"auto"`; } | The options to check |

## Returns

options is { schema?: string; select?: string\[]; where?: string; view?: boolean; temp?: boolean; replace?: boolean; options?: string | Record\<string, unknown> | string\[]; method: "st\_read"; \[key: string]: unknown }

True if options are spatial load file options
