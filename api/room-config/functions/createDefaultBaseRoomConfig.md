---
url: /api/room-config/functions/createDefaultBaseRoomConfig.md
---
[@sqlrooms/room-config](../index.md) / createDefaultBaseRoomConfig

# Function: createDefaultBaseRoomConfig()

> **createDefaultBaseRoomConfig**(): `object`

## Returns

`object`

| Name | Type |
| ------ | ------ |
|  `title` | `string` |
|  `description`? | `null` | `string` |
|  `layout` | { `type`: `"mosaic"`; `nodes`: `null` | `string` | [`MosaicLayoutParent`](../type-aliases/MosaicLayoutParent.md); `pinned`: `string`\[]; `fixed`: `string`\[]; } |
|  `dataSources` | ({ `tableName`: `string`; `type`: `"file"`; `fileName`: `string`; `loadOptions`: `objectOutputType`<`object` & `object` & `object`, `ZodUnknown`, `"strip"`> | `objectOutputType`<`object` & `object`, `ZodUnknown`, `"strip"`>; } | { `tableName`: `string`; `type`: `"url"`; `url`: `string`; `loadOptions`: `objectOutputType`<`object` & `object` & `object`, `ZodUnknown`, `"strip"`> | `objectOutputType`<`object` & `object`, `ZodUnknown`, `"strip"`>; `httpMethod`: `string`; `headers`: `Record`<`string`, `string`>; } | { `tableName`: `string`; `type`: `"sql"`; `sqlQuery`: `string`; })\[] |
