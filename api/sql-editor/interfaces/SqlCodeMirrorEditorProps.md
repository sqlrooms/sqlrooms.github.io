---
url: 'https://sqlrooms.org/api/sql-editor/interfaces/SqlCodeMirrorEditorProps.md'
---
[@sqlrooms/sql-editor](../index.md) / SqlCodeMirrorEditorProps

# Interface: SqlCodeMirrorEditorProps

## Extends

* `Omit`<`CodeMirrorEditorProps`, `"extensions"`>

## Properties

### className?

> `optional` **className?**: `string`

CSS class name for the editor container

#### Inherited from

`Omit.className`

***

### value?

> `optional` **value?**: `string`

The content to display in the editor

#### Inherited from

`Omit.value`

***

### readOnly?

> `optional` **readOnly?**: `boolean`

Whether the editor should be in read-only mode

#### Inherited from

`Omit.readOnly`

***

### onChange?

> `optional` **onChange?**: (`value`) => `void`

Callback when the editor content changes

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |

#### Returns

`void`

#### Inherited from

`Omit.onChange`

***

### onMount?

> `optional` **onMount?**: (`view`) => `void`

Callback when the editor view is mounted - provides access to EditorView instance

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `view` | `EditorView` |

#### Returns

`void`

#### Inherited from

`Omit.onMount`

***

### onValidate?

> `optional` **onValidate?**: (`diagnostics`) => `void`

Callback when lint diagnostics change (validation errors/warnings)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `diagnostics` | `Diagnostic`\[] |

#### Returns

`void`

#### Inherited from

`Omit.onValidate`

***

### options?

> `optional` **options?**: `CodeMirrorEditorOptions`

Additional configuration options

#### Inherited from

`Omit.options`

***

### dialect?

> `optional` **dialect?**: `"duck-db"`

SQL dialect for syntax highlighting and completions

***

### connector?

> `optional` **connector?**: `DuckDbConnector`

Connector for dynamic function suggestions
TODO: change to generic connector interface to support multiple dialects

***

### tableSchemas?

> `optional` **tableSchemas?**: `DataTable`\[]

Table schemas for autocompletion and hover tooltips

***

### hideGutter?

> `optional` **hideGutter?**: `boolean`

Hide all editor gutters. Useful for compact embedded editors.

***

### getLatestSchemas?

> `optional` **getLatestSchemas?**: () => `object`

Callback to get the latest table schemas

#### Returns

`object`

| Name | Type |
| ------ | ------ |
| `tableSchemas` | `DataTable`\[] |

***

### onRunQuery?

> `optional` **onRunQuery?**: (`query`) => `void`

Callback when Cmd+Enter is pressed (selected text or full document)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `query` | `string` |

#### Returns

`void`
