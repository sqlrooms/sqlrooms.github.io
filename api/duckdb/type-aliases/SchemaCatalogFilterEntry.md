---
url: 'https://sqlrooms.org/api/duckdb/type-aliases/SchemaCatalogFilterEntry.md'
---
[@sqlrooms/duckdb](../index.md) / SchemaCatalogFilterEntry

# Type Alias: SchemaCatalogFilterEntry

> **SchemaCatalogFilterEntry** = { `type`: `"database"`; `database`: `string`; } | { `type`: `"schema"`; `database`: `string`; `schema`: `string`; } | { `type`: `"table"`; `table`: [`QualifiedTableName`](QualifiedTableName.md); }
