---
url: /api/discuss/variables/DiscussSliceConfig.md
---
[@sqlrooms/discuss](../index.md) / DiscussSliceConfig

# Variable: DiscussSliceConfig

> `const` **DiscussSliceConfig**: `ZodObject`<{ `discussions`: `ZodArray`<`ZodObject`<{ `id`: `ZodString`; `anchorId`: `ZodOptional`<`ZodString`>; `rootComment`: `ZodObject`<{ `id`: `ZodString`; `userId`: `ZodString`; `text`: `ZodString`; `timestamp`: `ZodCoercedDate`<`unknown`>; `parentId`: `ZodOptional`<`ZodString`>; }, `$strip`>; `comments`: `ZodArray`<`ZodObject`<{ `id`: `ZodString`; `userId`: `ZodString`; `text`: `ZodString`; `timestamp`: `ZodCoercedDate`<`unknown`>; `parentId`: `ZodOptional`<`ZodString`>; }, `$strip`>>; }, `$strip`>>; }, `$strip`>
