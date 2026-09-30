---
url: https://sqlrooms.org/api/deck/variables/DeckMapResourceSchema.md
---
[@sqlrooms/deck](../index.md) / DeckMapResourceSchema

# Variable: DeckMapResourceSchema

> `const` **DeckMapResourceSchema**: `ZodObject`<{ `id`: `ZodString`; `title`: `ZodString`; `selectedTable`: `ZodOptional`<`ZodString`>; `config`: `ZodObject`<{ `spec`: `ZodUnion`\<readonly \[`ZodString`, `ZodRecord`<`ZodString`, `ZodUnknown`>]>; `datasets`: `ZodRecord`<`ZodString`, `ZodUnknown`>; `configMode`: `ZodOptional`<`ZodEnum`<{ `custom`: `"custom"`; `basic`: `"basic"`; }>>; `mapStyle`: `ZodOptional`<`ZodString`>; `mapProps`: `ZodOptional`<`ZodRecord`<`ZodString`, `ZodUnknown`>>; `showLegends`: `ZodOptional`<`ZodBoolean`>; `interaction`: `ZodOptional`<`ZodRecord`<`ZodString`, `ZodUnknown`>>; `fitToData`: `ZodOptional`<`ZodRecord`<`ZodString`, `ZodUnknown`>>; `dataPolicy`: `ZodOptional`<`ZodRecord`<`ZodString`, `ZodUnknown`>>; `settingsOpen`: `ZodOptional`<`ZodBoolean`>; }, `$strip`>; }, `$strip`>

Runtime schema for a durable Deck map resource entry.
