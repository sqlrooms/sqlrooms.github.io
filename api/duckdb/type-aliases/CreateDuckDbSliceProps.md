---
url: 'https://sqlrooms.org/api/duckdb/type-aliases/CreateDuckDbSliceProps.md'
---
[@sqlrooms/duckdb](../index.md) / CreateDuckDbSliceProps

# Type Alias: CreateDuckDbSliceProps

> **CreateDuckDbSliceProps** = `object`

## Properties

### connector?

> `optional` **connector?**: [`DuckDbConnector`](../interfaces/DuckDbConnector.md)

***

### loadTableSchemasFilter?

> `optional` **loadTableSchemasFilter?**: [`LoadTableSchemasFilterFunction`](LoadTableSchemasFilterFunction.md) | `null`

Optional table visibility filter.
Defaults to [createDefaultLoadTableSchemasFilter](../functions/createDefaultLoadTableSchemasFilter.md).

***

### loadSchemaCatalogFilter?

> `optional` **loadSchemaCatalogFilter?**: [`LoadSchemaCatalogFilterFunction`](LoadSchemaCatalogFilterFunction.md) | `null`

Optional catalog visibility filter for the data source panel.
Defaults to [defaultLoadSchemaCatalogFilter](../variables/defaultLoadSchemaCatalogFilter.md). When omitted, custom
table filters still apply to table entries while schemas/databases use the default.
