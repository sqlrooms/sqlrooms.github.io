---
url: 'https://sqlrooms.org/api/mosaic/interfaces/MosaicCodeMirrorEditorProps.md'
---
[@sqlrooms/mosaic](../index.md) / MosaicCodeMirrorEditorProps

# Interface: MosaicCodeMirrorEditorProps

## Extends

* `Omit`<`JsonCodeMirrorEditorProps`, `"schema"`>

## Properties

### className?

> `optional` **className?**: `string`

CSS class name for the editor container

#### Inherited from

`Omit.className`

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

### value?

> `optional` **value?**: `string` | `object`

The JSON value to edit - can be a string or an object (will be stringified)

#### Inherited from

`Omit.value`

***

### hideGutter?

> `optional` **hideGutter?**: `boolean`

Whether to hide the gutter (line numbers, fold markers, etc.)

#### Inherited from

`Omit.hideGutter`

***

### enableSchemaValidation?

> `optional` **enableSchemaValidation?**: `boolean`

Whether to enable Mosaic JSON schema validation

#### Default

```ts
false
```
