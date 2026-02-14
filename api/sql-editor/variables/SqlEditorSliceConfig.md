---
url: /api/sql-editor/variables/SqlEditorSliceConfig.md
---
[@sqlrooms/sql-editor](../index.md) / SqlEditorSliceConfig

# Variable: SqlEditorSliceConfig

> `const` **SqlEditorSliceConfig**: `z.ZodPipe`<`z.ZodTransform`<`unknown`, `unknown`>, `z.ZodObject`<{ `queries`: `z.ZodArray`<`z.ZodObject`<{ `id`: `z.ZodString`; `name`: `z.ZodString`; `query`: `z.ZodString`; `lastOpenedAt`: `z.ZodOptional`<`z.ZodNumber`>; }, `z.core.$strip`>>; `selectedQueryId`: `z.ZodString`; `lastExecutedQuery`: `z.ZodOptional`<`z.ZodString`>; `openTabs`: `z.ZodArray`<`z.ZodString`>; }, `z.core.$strip`>>

Config schema for the SQL editor slice.
Automatically migrates legacy closedTabIds to openTabs format.
