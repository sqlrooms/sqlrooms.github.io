---
url: 'https://sqlrooms.org/api/cells/variables/InputCellSchema.md'
---
[@sqlrooms/cells](../index.md) / InputCellSchema

# Variable: InputCellSchema

> `const` **InputCellSchema**: `ZodObject`<{ `id`: `ZodString`; `type`: `ZodLiteral`<`"input"`>; `data`: `ZodObject`<{ `title`: `ZodDefault`<`ZodString`>; `input`: `ZodDiscriminatedUnion`<\[`ZodObject`<{ `kind`: `ZodLiteral`<`"text"`>; `varName`: `ZodString`; `value`: `ZodDefault`<`ZodString`>; }, `$strip`>, `ZodObject`<{ `kind`: `ZodLiteral`<`"slider"`>; `varName`: `ZodString`; `min`: `ZodDefault`<`ZodNumber`>; `max`: `ZodDefault`<`ZodNumber`>; `step`: `ZodDefault`<`ZodNumber`>; `value`: `ZodDefault`<`ZodNumber`>; }, `$strip`>, `ZodObject`<{ `kind`: `ZodLiteral`<`"dropdown"`>; `varName`: `ZodString`; `options`: `ZodDefault`<`ZodArray`<`ZodString`>>; `value`: `ZodDefault`<`ZodString`>; }, `$strip`>], `"kind"`>; }, `$strip`>; }, `$strip`> = `InputCell`
