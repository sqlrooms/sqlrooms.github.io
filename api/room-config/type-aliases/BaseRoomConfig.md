---
url: /api/room-config/type-aliases/BaseRoomConfig.md
---
[@sqlrooms/room-config](../index.md) / BaseRoomConfig

# Type Alias: BaseRoomConfig

> **BaseRoomConfig**: `object`

## Type declaration

| Name | Type |
| ------ | ------ |
|  `title` | `string` |
|  `description`? | `null` | `string` |
|  `layout` | { `type`: `"mosaic"`; `nodes`: `null` | `string` | [`MosaicLayoutParent`](MosaicLayoutParent.md); `pinned`: `string`\[]; `fixed`: `string`\[]; } |
|  `dataSources` | ({ `tableName`: `string`; `type`: `"file"`; `fileName`: `string`; `loadOptions`: `objectOutputType`<`object` & `object` & `object`, `ZodUnknown`, `"strip"`> | `objectOutputType`<`object` & `object`, `ZodUnknown`, `"strip"`>; } | { `tableName`: `string`; `type`: `"url"`; `url`: `string`; `loadOptions`: `objectOutputType`<`object` & `object` & `object`, `ZodUnknown`, `"strip"`> | `objectOutputType`<`object` & `object`, `ZodUnknown`, `"strip"`>; `httpMethod`: `string`; `headers`: `Record`<`string`, `string`>; } | { `tableName`: `string`; `type`: `"sql"`; `sqlQuery`: `string`; })\[] |
