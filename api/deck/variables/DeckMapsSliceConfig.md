---
url: https://sqlrooms.org/api/deck/variables/DeckMapsSliceConfig.md
---
[@sqlrooms/deck](../index.md) / DeckMapsSliceConfig

# Variable: DeckMapsSliceConfig

> `const` **DeckMapsSliceConfig**: `ZodObject`<{ `mapsById`: `ZodDefault`<`ZodRecord`<`ZodString`, `ZodObject`<{ `id`: `ZodString`; `title`: `ZodString`; `selectedTable`: `ZodOptional`<`ZodString`>; `config`: `ZodObject`<{ `spec`: `ZodUnion`\<readonly \[`ZodString`, `ZodRecord`<..., ...>]>; `datasets`: `ZodRecord`<`ZodString`, `ZodUnknown`>; `configMode`: `ZodOptional`<`ZodEnum`<{ `custom`: ...; `basic`: ...; }>>; `mapStyle`: `ZodOptional`<`ZodString`>; `mapProps`: `ZodOptional`<`ZodRecord`<`ZodString`, `ZodUnknown`>>; `showLegends`: `ZodOptional`<`ZodBoolean`>; `interaction`: `ZodOptional`<`ZodRecord`<`ZodString`, `ZodUnknown`>>; `fitToData`: `ZodOptional`<`ZodRecord`<`ZodString`, `ZodUnknown`>>; `dataPolicy`: `ZodOptional`<`ZodRecord`<`ZodString`, `ZodUnknown`>>; `settingsOpen`: `ZodOptional`<`ZodBoolean`>; }, `$strip`>; }, `$strip`>>>; }, `$strip`>

Persistence schema for the Deck maps slice configuration.
