---
url: /api/room-shell/functions/createDefaultBaseRoomConfig.md
---
[@sqlrooms/room-shell](../index.md) / createDefaultBaseRoomConfig

# Function: createDefaultBaseRoomConfig()

> **createDefaultBaseRoomConfig**(): `object`

## Returns

`object`

| Name | Type |
| ------ | ------ |
|  `title` | `string` |
|  `description`? | `null` | `string` |
|  `layout` | { `type`: `"mosaic"`; `nodes`: `null` | `string` | [`MosaicLayoutParent`](../type-aliases/MosaicLayoutParent.md); `pinned`: `string`\[]; `fixed`: `string`\[]; } |
|  `dataSources` | ({ `tableName`: `string`; `type`: `"file"`; `fileName`: `string`; `loadOptions`: { `[key: string]`: `unknown`; `schema`: `string`; `select`: `string`\[]; `where`: `string`; `view`: `boolean`; `temp`: `boolean`; `replace`: `boolean`; `method`: `"read_json"` | `"read_ndjson"` | `"read_parquet"` | `"read_csv"` | `"auto"`; } | { `[key: string]`: `unknown`; `schema`: `string`; `select`: `string`\[]; `where`: `string`; `view`: `boolean`; `temp`: `boolean`; `replace`: `boolean`; `options`: `string` | `Record`<`string`, `unknown`> | `string`\[]; `method`: `"st_read"`; }; } | { `tableName`: `string`; `type`: `"url"`; `url`: `string`; `loadOptions`: { `[key: string]`: `unknown`; `schema`: `string`; `select`: `string`\[]; `where`: `string`; `view`: `boolean`; `temp`: `boolean`; `replace`: `boolean`; `method`: `"read_json"` | `"read_ndjson"` | `"read_parquet"` | `"read_csv"` | `"auto"`; } | { `[key: string]`: `unknown`; `schema`: `string`; `select`: `string`\[]; `where`: `string`; `view`: `boolean`; `temp`: `boolean`; `replace`: `boolean`; `options`: `string` | `Record`<`string`, `unknown`> | `string`\[]; `method`: `"st_read"`; }; `httpMethod`: `string`; `headers`: `Record`<`string`, `string`>; } | { `tableName`: `string`; `type`: `"sql"`; `sqlQuery`: `string`; })\[] |
