---
url: /api/duckdb/type-aliases/DuckDbSliceState.md
---
[@sqlrooms/duckdb](../index.md) / DuckDbSliceState

# Type Alias: DuckDbSliceState

> **DuckDbSliceState**: `object`

State and actions for the DuckDB slice

## Type declaration

| Name | Type |
| ------ | ------ |
|  `db` | { `connector`: [`DuckDbConnector`](../interfaces/DuckDbConnector.md); `schema`: `string`; `currentSchema`: `string` | `undefined`; `currentDatabase`: `string` | `undefined`; `tables`: [`DataTable`](DataTable.md)\[]; `tableRowCounts`: {}; `schemaTrees`: [`DbSchemaNode`](DbSchemaNode.md)\[]; `queryCache`: {}; `isRefreshingTableSchemas`: `boolean`; `setConnector`: (`connector`) => `void`; `initialize`: () => `Promise`<`void`>; `destroy`: () => `Promise`<`void`>; `addTable`: `Promise`<[`DataTable`](DataTable.md)>; `loadTableSchemas`: `Promise`<[`DataTable`](DataTable.md)\[]>; `getTable`: `undefined` | [`DataTable`](DataTable.md); `setTableRowCount`: `void`; `findTableByName`: `undefined` | [`DataTable`](DataTable.md); `refreshTableSchemas`: `Promise`<[`DataTable`](DataTable.md)\[]>; `getConnector`: () => `Promise`<[`DuckDbConnector`](../interfaces/DuckDbConnector.md)>; `getTableRowCount`: (`table`, `schema`?) => `Promise`<`number`>; `loadTableRowCount`: (`tableName`) => `Promise`<`number`>; `executeSql`: (`query`) => `Promise`<[`QueryHandle`](QueryHandle.md) | `null`>; `getTables`: (`schema`?) => `Promise`<`string`\[]>; `getTableSchema`: (`tableName`, `schema`?) => `Promise`<[`DataTable`](DataTable.md) | `undefined`>; `getTableSchemas`: (`schema`?) => `Promise`<[`DataTable`](DataTable.md)\[]>; `checkTableExists`: (`tableName`) => `Promise`<`boolean`>; `dropTable`: (`tableName`) => `Promise`<`void`>; `createTableFromQuery`: (`tableName`, `query`, `options`?) => `Promise`<{ `tableName`: `string` | [`QualifiedTableName`](QualifiedTableName.md); `rowCount`: `number` | `undefined`; }>; `sqlSelectToJson`: (`sql`) => `Promise`<{ `error`: `true`; `error_type`: `string`; `error_message`: `string`; `error_subtype`: `string`; `position`: `string`; } | { `error`: `false`; `statements`: `object`\[]; }>; } |
