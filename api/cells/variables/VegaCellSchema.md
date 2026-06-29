---
url: 'https://sqlrooms.org/api/cells/variables/VegaCellSchema.md'
---
[@sqlrooms/cells](../index.md) / VegaCellSchema

# Variable: VegaCellSchema

> `const` **VegaCellSchema**: `ZodObject`<{ `id`: `ZodString`; `type`: `ZodLiteral`<`"vega"`>; `data`: `ZodObject`<{ `title`: `ZodDefault`<`ZodString`>; `sqlId`: `ZodOptional`<`ZodString`>; `tableRef`: `ZodOptional`<`ZodString`>; `sql`: `ZodOptional`<`ZodString`>; `vegaSpec`: `ZodOptional`<`ZodAny`>; `crossFilter`: `ZodDefault`<`ZodObject`<{ `enabled`: `ZodDefault`<`ZodBoolean`>; `brushField`: `ZodOptional`<`ZodString`>; `brushFieldType`: `ZodOptional`<`ZodType`<[`BrushFieldType`](../type-aliases/BrushFieldType.md), `unknown`, `$ZodTypeInternals`<[`BrushFieldType`](../type-aliases/BrushFieldType.md), `unknown`>>>; }, `$strip`>>; }, `$strip`>; }, `$strip`> = `VegaCell`
