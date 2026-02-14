---
url: /api/sql-editor-config/variables/SqlEditorSliceConfig.md
---
[@sqlrooms/sql-editor-config](../index.md) / SqlEditorSliceConfig

# Variable: SqlEditorSliceConfig

> `const` **SqlEditorSliceConfig**: `ZodPipe`<`ZodTransform`<`unknown`, `unknown`>, `ZodObject`<{ `queries`: `ZodArray`<`ZodObject`<{ `id`: `ZodString`; `name`: `ZodString`; `query`: `ZodString`; `lastOpenedAt`: `ZodOptional`<`ZodNumber`>; }, `$strip`>>; `selectedQueryId`: `ZodString`; `lastExecutedQuery`: `ZodOptional`<`ZodString`>; `openTabs`: `ZodArray`<`ZodString`>; }, `$strip`>>

Config schema for the SQL editor slice.
Automatically migrates legacy closedTabIds to openTabs format.
