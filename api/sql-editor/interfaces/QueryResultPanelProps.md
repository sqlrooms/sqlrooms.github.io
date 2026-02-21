---
url: /api/sql-editor/interfaces/QueryResultPanelProps.md
---
[@sqlrooms/sql-editor](../index.md) / QueryResultPanelProps

# Interface: QueryResultPanelProps

## Properties

### className?

> `optional` **className**: `string`

Custom class name for styling

***

### renderActions()?

> `optional` **renderActions**: (`query`) => `ReactNode`

Custom actions to render in the query result panel

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `query` | `string` |

#### Returns

`ReactNode`

***

### fontSize?

> `optional` **fontSize**: `string`

Custom font size for the table e.g. text-xs, text-sm, text-md, text-lg, text-base

***

### onRowClick()?

> `optional` **onRowClick**: (`args`) => `void`

Called when a row in the results table is clicked.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | { `row`: `Row`<`any`>; `event`: `MouseEvent`<`HTMLTableRowElement`>; } |
| `args.row` | `Row`<`any`> |
| `args.event` | `MouseEvent`<`HTMLTableRowElement`> |

#### Returns

`void`

***

### onRowDoubleClick()?

> `optional` **onRowDoubleClick**: (`args`) => `void`

Called when a row in the results table is double-clicked.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | { `row`: `Row`<`any`>; `event`: `MouseEvent`<`HTMLTableRowElement`>; } |
| `args.row` | `Row`<`any`> |
| `args.event` | `MouseEvent`<`HTMLTableRowElement`> |

#### Returns

`void`

***

### children?

> `optional` **children**: `ReactNode`

Custom content to render in the error state (e.g., QueryResultPanel.AskAi)

***

### ~~onAskAiAboutError()?~~

> `optional` **onAskAiAboutError**: (`query`, `error`) => `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `query` | `string` |
| `error` | `string` |

#### Returns

`void`

#### Deprecated

Use children with QueryResultPanel.AskAi instead
Called when the "Ask AI" button is clicked on an error message.
Receives the current query and error text.

***

### enableRowSelection?

> `optional` **enableRowSelection**: `boolean`

Enables row selection with checkboxes.

***

### rowSelection?

> `optional` **rowSelection**: `RowSelectionState`

Controlled row selection state. Keys are row indices, values are selection status.

***

### onRowSelectionChange()?

> `optional` **onRowSelectionChange**: (`rowSelection`) => `void`

Called when row selection changes.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `rowSelection` | `RowSelectionState` |

#### Returns

`void`

***

### formatValue?

> `optional` **formatValue**: `ArrowDataTableValueFormatter`

Custom value formatter for arrow data
