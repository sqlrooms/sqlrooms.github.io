---
url: 'https://sqlrooms.org/api/mosaic/type-aliases/CreateDashboardAiToolsOptions.md'
---
[@sqlrooms/mosaic](../index.md) / CreateDashboardAiToolsOptions

# Type Alias: CreateDashboardAiToolsOptions

> **CreateDashboardAiToolsOptions** = `object`

Options for creating dashboard AI tools.

## Properties

### databaseAdapter

> **databaseAdapter**: [`DatabaseAiAdapter`](DatabaseAiAdapter.md)

Adapter for database operations and table queries

***

### dashboardAdapter

> **dashboardAdapter**: [`DashboardAiAdapter`](DashboardAiAdapter.md)

Adapter for dashboard-specific operations like adding panels

***

### chartToolsOptions?

> `optional` **chartToolsOptions?**: `ChartToolsOptions`

Optional configuration for chart tool behavior

***

### extraTools?

> `optional` **extraTools?**: [`ExtraDashboardAiToolsFactory`](ExtraDashboardAiToolsFactory.md)

Optional factory function for registering additional custom tools
