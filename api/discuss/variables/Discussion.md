---
url: /api/discuss/variables/Discussion.md
---
[@sqlrooms/discuss](../index.md) / Discussion

# Variable: Discussion

> `const` **Discussion**: `ZodObject`<{ `id`: `ZodString`; `anchorId`: `ZodOptional`<`ZodString`>; `rootComment`: `ZodObject`<{ `id`: `ZodString`; `userId`: `ZodString`; `text`: `ZodString`; `timestamp`: `ZodCoercedDate`<`unknown`>; `parentId`: `ZodOptional`<`ZodString`>; }, `$strip`>; `comments`: `ZodArray`<`ZodObject`<{ `id`: `ZodString`; `userId`: `ZodString`; `text`: `ZodString`; `timestamp`: `ZodCoercedDate`<`unknown`>; `parentId`: `ZodOptional`<`ZodString`>; }, `$strip`>>; }, `$strip`>
