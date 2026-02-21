---
url: /api/sql-editor/type-aliases/SqlEditorProps.md
---
[@sqlrooms/sql-editor](../index.md) / SqlEditorProps

# Type Alias: SqlEditorProps

> **SqlEditorProps** = `object`

## Properties

### schema?

> `optional` **schema**: [`TableStructurePanelProps`](../interfaces/TableStructurePanelProps.md)\[`"schema"`]

The database schema to use. Defaults to '*'.
If '*' is provided, all tables will be shown.
If a function is provided, it will be used to filter the tables.

***

### isOpen

> **isOpen**: `boolean`

Whether the SQL editor is currently visible

***

### documentationPanel?

> `optional` **documentationPanel**: `React.ReactNode`

Optional component to render SQL documentation in the side panel

***

### queryResultProps?

> `optional` **queryResultProps**: `Pick`<`React.ComponentProps`<*typeof* [`QueryResultPanel`](../variables/QueryResultPanel.md)>, `"onRowClick"` | `"onRowDoubleClick"`>

Props forwarded to `QueryResultPanel` to configure result behavior.
This provides a single entry point for table interactions.

***

### onClose()

> **onClose**: () => `void`

Callback fired when the SQL editor should be closed

#### Returns

`void`
