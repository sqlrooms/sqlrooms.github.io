---
url: 'https://sqlrooms.org/api/codemirror/interfaces/CodeMirrorEditorProps.md'
---
[@sqlrooms/codemirror](../index.md) / CodeMirrorEditorProps

# Interface: CodeMirrorEditorProps

## Properties

### className?

> `optional` **className?**: `string`

CSS class name for the editor container

***

### value?

> `optional` **value?**: `string`

The content to display in the editor

***

### readOnly?

> `optional` **readOnly?**: `boolean`

Whether the editor should be in read-only mode

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

***

### extensions?

> `optional` **extensions?**: `Extension`\[]

Additional CodeMirror extensions to apply

***

### options?

> `optional` **options?**: `CodeMirrorEditorOptions`

Additional configuration options
