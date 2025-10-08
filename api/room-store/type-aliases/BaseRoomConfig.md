---
url: /api/room-store/type-aliases/BaseRoomConfig.md
---
[@sqlrooms/room-store](../index.md) / BaseRoomConfig

# Type Alias: BaseRoomConfig

> **BaseRoomConfig**: `object`

## Type declaration

| Name | Type |
| ------ | ------ |
|  `title` | `string` |
|  `layout` | { `type`: `"mosaic"`; `nodes`: `null` | `string` | [`MosaicLayoutParent`](MosaicLayoutParent.md); `pinned`: `string`\[]; `fixed`: `string`\[]; } |
|  `dataSources` | ({ `type`: `"file"`; `tableName`: `string`; `fileName`: `string`; `loadOptions`: `objectOutputType`<`object` & `object` & `object`, `ZodUnknown`, `"strip"`> | `objectOutputType`<`object` & `object`, `ZodUnknown`, `"strip"`>; } | { `type`: `"url"`; `url`: `string`; `tableName`: `string`; `loadOptions`: `objectOutputType`<`object` & `object` & `object`, `ZodUnknown`, `"strip"`> | `objectOutputType`<`object` & `object`, `ZodUnknown`, `"strip"`>; `httpMethod`: `string`; `headers`: `Record`<`string`, `string`>; } | { `type`: `"sql"`; `tableName`: `string`; `sqlQuery`: `string`; })\[] |
|  `description`? | `null` | `string` |
