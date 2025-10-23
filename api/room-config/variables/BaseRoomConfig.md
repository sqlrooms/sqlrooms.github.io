---
url: /api/room-config/variables/BaseRoomConfig.md
---
[@sqlrooms/room-config](../index.md) / BaseRoomConfig

# Variable: BaseRoomConfig

> `const` **BaseRoomConfig**: `ZodObject`<{ `title`: `ZodDefault`<`ZodString`>; `description`: `ZodOptional`<`ZodNullable`<`ZodString`>>; `layout`: `ZodDefault`<`ZodDiscriminatedUnion`<\[`ZodObject`<{ `type`: `ZodLiteral`<`"mosaic"`>; `nodes`: `ZodNullable`<`ZodUnion`\<readonly \[`ZodString`, `ZodType`<..., ..., ...>]>>; `pinned`: `ZodOptional`<`ZodArray`<`ZodString`>>; `fixed`: `ZodOptional`<`ZodArray`<`ZodString`>>; }, `$strip`>], `"type"`>>; `dataSources`: `ZodDefault`<`ZodArray`<`ZodDiscriminatedUnion`<\[`ZodObject`<{ `tableName`: `ZodString`; `type`: `ZodLiteral`<`"file"`>; `fileName`: `ZodString`; `loadOptions`: `ZodOptional`<`ZodDiscriminatedUnion`<\[..., ...], `"method"`>>; }, `$strip`>, `ZodObject`<{ `tableName`: `ZodString`; `type`: `ZodLiteral`<`"url"`>; `url`: `ZodString`; `loadOptions`: `ZodOptional`<`ZodDiscriminatedUnion`<\[..., ...], `"method"`>>; `httpMethod`: `ZodOptional`<`ZodString`>; `headers`: `ZodOptional`<`ZodRecord`<`ZodString`, `ZodString`>>; }, `$strip`>, `ZodObject`<{ `tableName`: `ZodString`; `type`: `ZodLiteral`<`"sql"`>; `sqlQuery`: `ZodString`; }, `$strip`>], `"type"`>>>; }, `$strip`>
