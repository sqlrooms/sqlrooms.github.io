---
url: /api/room-store/variables/BaseRoomConfig.md
---
[@sqlrooms/room-store](../index.md) / BaseRoomConfig

# Variable: BaseRoomConfig

> `const` **BaseRoomConfig**: `z.ZodObject`<{ `title`: `z.ZodDefault`<`z.ZodString`>; `description`: `z.ZodOptional`<`z.ZodNullable`<`z.ZodString`>>; `layout`: `z.ZodDefault`<`z.ZodDiscriminatedUnion`<\[`z.ZodObject`<{ `type`: `z.ZodLiteral`<`"mosaic"`>; `nodes`: `z.ZodNullable`<`z.ZodUnion`\<readonly \[..., ...]>>; `pinned`: `z.ZodOptional`<`z.ZodArray`<`z.ZodString`>>; `fixed`: `z.ZodOptional`<`z.ZodArray`<`z.ZodString`>>; }, `z.core.$strip`>], `"type"`>>; `dataSources`: `z.ZodDefault`<`z.ZodArray`<`z.ZodDiscriminatedUnion`<\[`z.ZodObject`<{ `tableName`: `z.ZodString`; `type`: `z.ZodLiteral`<`"file"`>; `fileName`: `z.ZodString`; `loadOptions`: `z.ZodOptional`<`z.ZodDiscriminatedUnion`<\[..., ...], `"method"`>>; }, `z.core.$strip`>, `z.ZodObject`<{ `tableName`: `z.ZodString`; `type`: `z.ZodLiteral`<`"url"`>; `url`: `z.ZodString`; `loadOptions`: `z.ZodOptional`<`z.ZodDiscriminatedUnion`<\[..., ...], `"method"`>>; `httpMethod`: `z.ZodOptional`<`z.ZodString`>; `headers`: `z.ZodOptional`<`z.ZodRecord`<`z.ZodString`, `z.ZodString`>>; }, `z.core.$strip`>, `z.ZodObject`<{ `tableName`: `z.ZodString`; `type`: `z.ZodLiteral`<`"sql"`>; `sqlQuery`: `z.ZodString`; }, `z.core.$strip`>], `"type"`>>>; }, `z.core.$strip`>
