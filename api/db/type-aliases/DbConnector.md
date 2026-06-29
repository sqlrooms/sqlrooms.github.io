---
url: 'https://sqlrooms.org/api/db/type-aliases/DbConnector.md'
---
[@sqlrooms/db](../index.md) / DbConnector

# Type Alias: DbConnector

> **DbConnector** = `Pick`<[`DuckDbConnector`](../interfaces/DuckDbConnector.md), `"initialize"` | `"destroy"` | `"execute"` | `"query"` | `"queryJson"`> & `object`

Connector interface for direct, in-runtime query execution.

It extends the common query API and optionally exposes catalog introspection.

## Type Declaration

| Name | Type |
| ------ | ------ |
| `capabilities?` | [`DbConnectorCapabilities`](DbConnectorCapabilities.md) |
| `listDatabases()?` | () => `Promise`<[`CatalogDatabase`](CatalogDatabase.md)\[]> |
| `listSchemas()?` | (`database?`) => `Promise`<[`CatalogSchema`](CatalogSchema.md)\[]> |
| `listTables()?` | (`args?`) => `Promise`<[`CatalogTable`](CatalogTable.md)\[]> |
| `describeTable()?` | (`args`) => `Promise`<[`CatalogTableDetails`](CatalogTableDetails.md) | `undefined`> |
