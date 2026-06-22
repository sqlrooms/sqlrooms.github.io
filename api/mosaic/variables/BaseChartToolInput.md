---
url: 'https://sqlrooms.org/api/mosaic/variables/BaseChartToolInput.md'
---
[@sqlrooms/mosaic](../index.md) / BaseChartToolInput

# Variable: BaseChartToolInput

> `const` **BaseChartToolInput**: `ZodObject`<{ `tableName`: `ZodString`; `title`: `ZodOptional`<`ZodString`>; `panelId`: `ZodOptional`<`ZodString`>; `reasoning`: `ZodString`; }, `$strip`>

Base input schema shared by chart AI tools.

Includes the source table, optional chart title, optional dashboard panel to
update, and the model's rationale for the chart choice.
