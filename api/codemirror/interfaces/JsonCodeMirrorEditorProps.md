---
url: 'https://sqlrooms.org/api/codemirror/interfaces/JsonCodeMirrorEditorProps.md'
---
[@sqlrooms/codemirror](../index.md) / JsonCodeMirrorEditorProps

# Interface: JsonCodeMirrorEditorProps

## Extends

* `Omit`<[`CodeMirrorEditorProps`](CodeMirrorEditorProps.md), `"value"` | `"extensions"`>

## Properties

### className?

> `optional` **className?**: `string`

CSS class name for the editor container

#### Inherited from

[`CodeMirrorEditorProps`](CodeMirrorEditorProps.md).[`className`](CodeMirrorEditorProps.md#classname)

***

### readOnly?

> `optional` **readOnly?**: `boolean`

Whether the editor should be in read-only mode

#### Inherited from

[`CodeMirrorEditorProps`](CodeMirrorEditorProps.md).[`readOnly`](CodeMirrorEditorProps.md#readonly)

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

[`CodeMirrorEditorProps`](CodeMirrorEditorProps.md).[`onChange`](CodeMirrorEditorProps.md#onchange)

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

[`CodeMirrorEditorProps`](CodeMirrorEditorProps.md).[`onMount`](CodeMirrorEditorProps.md#onmount)

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

[`CodeMirrorEditorProps`](CodeMirrorEditorProps.md).[`onValidate`](CodeMirrorEditorProps.md#onvalidate)

***

### options?

> `optional` **options?**: `CodeMirrorEditorOptions`

Additional configuration options

#### Inherited from

[`CodeMirrorEditorProps`](CodeMirrorEditorProps.md).[`options`](CodeMirrorEditorProps.md#options)

***

### schema?

> `optional` **schema?**: `object`

The JSON schema to validate against

***

### value?

> `optional` **value?**: `string` | `object`

The JSON value to edit - can be a string or an object (will be stringified)

***

### hideGutter?

> `optional` **hideGutter?**: `boolean`

Whether to hide the gutter (line numbers, fold markers, etc.)
