---
url: /api/sql-editor/type-aliases/SqlEditorSliceState.md
---
[@sqlrooms/sql-editor](../index.md) / SqlEditorSliceState

# Type Alias: SqlEditorSliceState

> **SqlEditorSliceState** = `object`

## Properties

### sqlEditor

> **sqlEditor**: `object`

| Name | Type | Description |
| ------ | ------ | ------ |
| `config` | [`SqlEditorSliceConfig`](SqlEditorSliceConfig.md) | - |
| `queryResult?` | [`QueryResult`](QueryResult.md) | - |
| `selectedTable?` | `string` | **Deprecated** |
| `isTablesLoading` | `boolean` | **Deprecated** Use `useStoreWithSqlEditor((s) => s.db.isRefreshingTableSchemas)` instead. |
| `tablesError?` | `string` | **Deprecated** |
| `queryResultLimit` | `number` | - |
| `queryResultLimitOptions` | `number`\[] | Options for the result limit dropdown |
| `setConfig()` | (`config`) => | - |
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
