---
url: /api/sql-editor/type-aliases/Props.md
---
[@sqlrooms/sql-editor](../index.md) / Props

# Type Alias: Props

> **Props**: `object`

## Type declaration

| Name | Type | Description |
| ------ | ------ | ------ |
|  `schema`? | [`TableStructurePanelProps`](../interfaces/TableStructurePanelProps.md)\[`"schema"`] | The database schema to use. Defaults to '*'. If '*' is provided, all tables will be shown. If a function is provided, it will be used to filter the tables. |
|  `isOpen` | `boolean` | Whether the SQL editor is currently visible |
|  `documentationPanel`? | `React.ReactNode` | Optional component to render SQL documentation in the side panel |
|  `queryResultProps`? | `Pick`<`React.ComponentProps`<*typeof* [`QueryResultPanel`](../functions/QueryResultPanel.md)>, `"onRowClick"` | `"onRowDoubleClick"`> | Props forwarded to `QueryResultPanel` to configure result behavior. This provides a single entry point for table interactions. |
|  `onClose` | () => `void` | Callback fired when the SQL editor should be closed |
