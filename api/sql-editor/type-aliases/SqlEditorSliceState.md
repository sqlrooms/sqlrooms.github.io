---
url: 'https://sqlrooms.org/api/sql-editor/type-aliases/SqlEditorSliceState.md'
---
[@sqlrooms/sql-editor](../index.md) / SqlEditorSliceState

# Type Alias: SqlEditorSliceState

> **SqlEditorSliceState** = `object`

## Properties

### sqlEditor

> **sqlEditor**: `object`

| Name | Type | Description |
| ------ | ------ | ------ |
| `initialize()?` | () => `Promise`<`void`> | - |
| `destroy()?` | () => `Promise`<`void`> | - |
| `config` | [`SqlEditorSliceConfig`](SqlEditorSliceConfig.md) | - |
| `queryResultsById` | `Record`<`string`, [`QueryResult`](QueryResult.md) | `undefined`> | Query results keyed by queryId (tab id). |
| `selectedTable?` | `string` | **Deprecated** |
| `isTablesLoading` | `boolean` | **Deprecated** Use `useStoreWithSqlEditor((s) => s.db.isRefreshingTableSchemas)` instead. |
| `tablesError?` | `string` | **Deprecated** |
| `queryResultLimit` | `number` | - |
| `queryResultLimitOptions` | `number`\[] | Options for the result limit dropdown |
| `setConfig()` | (`config`) => | - |
| `ensureQuery()` | (`queryId`, `options?`) => | - |
| `removeQuery()` | (`queryId`) => | - |
| `renameQuery()` | (`queryId`, `name`) => | - |
| `runQueryById()` | (`queryId`, `query?`) => | - |
| `abortQueryById()` | (`queryId`) => | - |
| `clearQueryResult()` | (`queryId`) => | - |
| `parseAndRunQuery()` | (`query`) => | - |
| `parseAndRunCurrentQuery()` | () => | - |
| `abortCurrentQuery()` | () => | - |
| `exportResultsToCsv()` | (`results`, `filename?`) => | - |
| `createQueryTab()` | (`initialQuery?`) => | - |
| `deleteQueryTab()` | (`queryId`) => | - |
| `renameQueryTab()` | (`queryId`, `newName`) => | - |
| `closeQueryTab()` | (`queryId`) => | - |
| `openQueryTab()` | (`queryId`) => | - |
| `setOpenTabs()` | (`tabIds`) => | - |
| `updateQueryText()` | (`queryId`, `queryText`) => | - |
| `setSelectedQueryId()` | (`queryId`) => | - |
| `getCurrentQuery()` | () => | - |
| `selectTable()` | (`table`) => | - |
| `clearQueryResults()` | () => | - |
| `setQueryResultLimit()` | (`limit`) => | - |
