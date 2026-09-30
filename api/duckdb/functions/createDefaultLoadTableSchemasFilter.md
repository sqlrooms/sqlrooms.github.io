---
url: >-
  https://sqlrooms.org/api/duckdb/functions/createDefaultLoadTableSchemasFilter.md
---
[@sqlrooms/duckdb](../index.md) / createDefaultLoadTableSchemasFilter

# Function: createDefaultLoadTableSchemasFilter()

> **createDefaultLoadTableSchemasFilter**(): [`LoadTableSchemasFilterFunction`](../type-aliases/LoadTableSchemasFilterFunction.md)

Factory returning [defaultLoadTableSchemasFilter](../variables/defaultLoadTableSchemasFilter.md).
Hides `__sqlrooms_*` names and DuckDB's `temp` database.
Apps can pass [CreateDuckDbSliceProps.loadTableSchemasFilter](../type-aliases/CreateDuckDbSliceProps.md#loadtableschemasfilter) to add more rules.

## Returns

[`LoadTableSchemasFilterFunction`](../type-aliases/LoadTableSchemasFilterFunction.md)
