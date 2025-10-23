---
url: /api/sql-editor/functions/SqlEditorModal.md
---
[@sqlrooms/sql-editor](../index.md) / SqlEditorModal

# Function: SqlEditorModal()

> **SqlEditorModal**(`props`): `ReactNode` | `Promise`<`ReactNode`>

A modal wrapper for the SQL Editor component that provides a full-screen dialog interface.

This component wraps the main SqlEditor component in a modal dialog, making it suitable for
overlay/popup usage scenarios. It inherits all props from SqlEditorProps and handles the
modal-specific behavior.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `props` | [`Props`](../type-aliases/Props.md) |

## Returns

`ReactNode` | `Promise`<`ReactNode`>

## Example

```tsx
<SqlEditorModal
  isOpen={true}
  onClose={() => setIsOpen(false)}
  sqlEditorConfig={config}
  onChange={handleConfigChange}
/>
```

## See

* [SqlEditor](SqlEditor.md) for detailed documentation of all available props
* [SqlEditorProps](../type-aliases/Props.md)
  The component accepts all props from SqlEditorProps:
* `isOpen` - Whether the SQL editor modal is currently visible
* `onClose` - Callback fired when the modal should be closed
* `sqlEditorConfig` - Configuration object containing queries and selected query state
* `onChange` - Callback fired when the SQL editor configuration changes
* `schema` - Optional database schema to use for queries (defaults to 'main')
* `documentationPanel` - Optional component to render SQL documentation in the side panel
* `onAddOrUpdateSqlQuery` - Callback fired when a new table should be created from query results
