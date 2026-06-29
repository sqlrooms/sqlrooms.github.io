---
url: 'https://sqlrooms.org/api/duckdb/variables/defaultLoadTableSchemasFilter.md'
---
[@sqlrooms/duckdb](../index.md) / defaultLoadTableSchemasFilter

# Variable: defaultLoadTableSchemasFilter

> `const` **defaultLoadTableSchemasFilter**: [`LoadTableSchemasFilterFunction`](../type-aliases/LoadTableSchemasFilterFunction.md)

Default predicate: which tables/schemas/databases appear in the data source panel.
Hides `__sqlrooms_*` names and DuckDB's `temp` database.
