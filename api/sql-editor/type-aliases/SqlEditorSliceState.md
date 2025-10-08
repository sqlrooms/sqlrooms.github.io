---
url: /api/sql-editor/type-aliases/SqlEditorSliceState.md
---
[@sqlrooms/sql-editor](../index.md) / SqlEditorSliceState

# Type Alias: SqlEditorSliceState

> **SqlEditorSliceState**: `object`

## Type declaration

| Name | Type |
| ------ | ------ |
|  `sqlEditor` | { `queryResult`: [`QueryResult`](QueryResult.md); `selectedTable`: `string`; `isTablesLoading`: `boolean`; `tablesError`: `string`; `queryResultLimit`: `number`; `queryResultLimitOptions`: `number`\[]; `parseAndRunQuery`: `Promise`<`void`>; `parseAndRunCurrentQuery`: `Promise`<`void`>; `abortCurrentQuery`: `void`; `exportResultsToCsv`: `void`; `createQueryTab`: { `id`: `string`; `name`: `string`; `query`: `string`; }; `deleteQueryTab`: `void`; `renameQueryTab`: `void`; `updateQueryText`: `void`; `setSelectedQueryId`: `void`; `getCurrentQuery`: `string`; `selectTable`: `void`; `clearQueryResults`: `void`; `setQueryResultLimit`: `void`; } |
