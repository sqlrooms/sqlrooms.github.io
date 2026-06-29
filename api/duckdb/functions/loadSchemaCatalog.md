---
url: 'https://sqlrooms.org/api/duckdb/functions/loadSchemaCatalog.md'
---
[@sqlrooms/duckdb](../index.md) / loadSchemaCatalog

# Function: loadSchemaCatalog()

> **loadSchemaCatalog**(`connector`, `options?`): `Promise`<[`SchemaWithTables`](../type-aliases/SchemaWithTables.md)\[]>

Load the visible DuckDB schema catalog in one metadata query.
Starts from schemas, then left-joins tables, views, and columns so empty
schemas and empty attached database `main` schemas are preserved.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `connector` | [`DuckDbConnector`](../interfaces/DuckDbConnector.md) |
| `options` | [`LoadSchemaCatalogOptions`](../type-aliases/LoadSchemaCatalogOptions.md) |

## Returns

`Promise`<[`SchemaWithTables`](../type-aliases/SchemaWithTables.md)\[]>
