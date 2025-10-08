---
url: /api/room-store/functions/createDefaultBaseRoomConfig.md
---
[@sqlrooms/room-store](../index.md) / createDefaultBaseRoomConfig

# Function: createDefaultBaseRoomConfig()

> **createDefaultBaseRoomConfig**(): `object`

## Returns

`object`

| Name | Type |
| ------ | ------ |
|  `title` | `string` |
|  `layout` | { `type`: `"mosaic"`; `nodes`: `null` | `string` | [`MosaicLayoutParent`](../type-aliases/MosaicLayoutParent.md); `pinned`: `string`\[]; `fixed`: `string`\[]; } |
|  `dataSources` | ({ `type`: `"file"`; `tableName`: `string`; `fileName`: `string`; `loadOptions`: `objectOutputType`<`object` & `object` & `object`, `ZodUnknown`, `"strip"`> | `objectOutputType`<`object` & `object`, `ZodUnknown`, `"strip"`>; } | { `type`: `"url"`; `url`: `string`; `tableName`: `string`; `loadOptions`: `objectOutputType`<`object` & `object` & `object`, `ZodUnknown`, `"strip"`> | `objectOutputType`<`object` & `object`, `ZodUnknown`, `"strip"`>; `httpMethod`: `string`; `headers`: `Record`<`string`, `string`>; } | { `type`: `"sql"`; `tableName`: `string`; `sqlQuery`: `string`; })\[] |
|  `description`? | `null` | `string` |
