---
url: /api/duckdb/type-aliases/DuckDbSliceState.md
---
[@sqlrooms/duckdb](../index.md) / DuckDbSliceState

# Type Alias: DuckDbSliceState

> **DuckDbSliceState** = `object`

State and actions for the DuckDB slice

## Properties

### db

> **db**: `object`

| Name | Type | Description |
| ------ | ------ | ------ |
| `connector` | [`DuckDbConnector`](../interfaces/DuckDbConnector.md) | The DuckDB connector instance |
| `schema` | `string` | **Deprecated** We shouldn't limit the schema to a single one. |
| `currentSchema` | `string` | `undefined` | - |
| `currentDatabase` | `string` | `undefined` | - |
| `tables` | [`DataTable`](DataTable.md)\[] | Cache of refreshed table schemas |
| `tableRowCounts` | {\[`tableName`: `string`]: `number`; } | Cache of row counts for tables |
| `schemaTrees?` | [`DbSchemaNode`](DbSchemaNode.md)\[] | Cache of schema trees for tables |
| `queryCache` | {\[`key`: `string`]: [`QueryHandle`](QueryHandle.md); } | Cache of currently running query handles. This is only used for running queries to deduplicate them (especially for useSql), the cache is cleared when the query is completed. |
| `isRefreshingTableSchemas` | `boolean` | Whether the table schemas are being refreshed |
| `setConnector()` | (`connector`) => `void` | Set a new DuckDB connector |
| `initialize()` | () => `Promise`<`void`> | Initialize the connector (creates a WasmDuckDbConnector if none exists) |
| `destroy()` | () => `Promise`<`void`> | Close and clean up the connector |
| `addTable()` | (`tableName`, `data`) => | - |
| `loadTableSchemas()` | (`filter?`) => | - |
| `getTable()` | (`tableName`) => | - |
| `setTableRowCount()` | (`tableName`, `rowCount`) => | - |
| `findTableByName()` | (`tableName`) => | - |
| `refreshTableSchemas()` | () => | - |
| `getConnector()` | () => `Promise`<[`DuckDbConnector`](../interfaces/DuckDbConnector.md)> | Get the connector. If it's not initialized, it will be initialized. |
| `getTableRowCount()` | (`table`, `schema?`) => `Promise`<`number`> | **Deprecated** Use .loadTableRowCount() instead |
| `loadTableRowCount()` | (`tableName`) => `Promise`<`number`> | Load the row count of a table |
| `executeSql()` | (`query`) => `Promise`<[`QueryHandle`](QueryHandle.md) | `null`> | Execute a query with query handle (not result) caching and deduplication |
| `getTables()` | (`schema?`) => `Promise`<`string`\[]> | **Deprecated** Use .tables or .loadTableSchemas() instead |
| `getTableSchema()` | (`tableName`, `schema?`) => `Promise`<[`DataTable`](DataTable.md) | `undefined`> | **Deprecated** Use .loadTableSchemas() instead |
| `getTableSchemas()` | (`schema?`) => `Promise`<[`DataTable`](DataTable.md)\[]> | **Deprecated** Use .tables or .loadTableSchemas() instead |
| `checkTableExists()` | (`tableName`) => `Promise`<`boolean`> | Check if a table exists |
| `dropTable()` | (`tableName`) => `Promise`<`void`> | Delete a table with optional schema and database |
| `createTableFromQuery()` | (`tableName`, `query`, `options?`) => `Promise`<{ `tableName`: `string` | [`QualifiedTableName`](QualifiedTableName.md); `rowCount`: `number` | `undefined`; }> | Create a table or view from a query. |
| `sqlSelectToJson()` | (`sql`) => `Promise`<{ `error`: `true`; `error_type`: `string`; `error_message`: `string`; `error_subtype`: `string`; `position`: `string`; } | { `error`: `false`; `statements`: `object`\[]; }> | Parse a SQL SELECT statement to JSON |
