---
url: 'https://sqlrooms.org/api/monaco-editor/interfaces/JsonMonacoEditorProps.md'
---
[@sqlrooms/monaco-editor](../index.md) / JsonMonacoEditorProps

# Interface: JsonMonacoEditorProps

## Extends

* `Omit`<[`MonacoEditorProps`](MonacoEditorProps.md), `"language"` | `"value"`>

## Properties

### schema?

> `optional` **schema?**: `object`

The JSON schema to validate against

***

### value?

> `optional` **value?**: `string` | `object`

The JSON value to edit

***

### onMount?

> `optional` **onMount?**: `OnMount`

Callback when the editor is mounted

#### Inherited from

[`MonacoEditorProps`](MonacoEditorProps.md).[`onMount`](MonacoEditorProps.md#onmount)

***

### onChange?

> `optional` **onChange?**: `OnChange`

Callback when the editor content changes

#### Inherited from

[`MonacoEditorProps`](MonacoEditorProps.md).[`onChange`](MonacoEditorProps.md#onchange)

***

### className?

> `optional` **className?**: `string`

CSS class name for the editor container

#### Default

```ts
''
```

#### Inherited from

[`MonacoEditorProps`](MonacoEditorProps.md).[`className`](MonacoEditorProps.md#classname)

***

### theme?

> `optional` **theme?**: `Theme`

The theme of the editor ('dark' | 'light' | 'system')
Can be explicitly set or will automatically use the app theme if not provided

#### Default

```ts
'dark'
```

#### Inherited from

[`MonacoEditorProps`](MonacoEditorProps.md).[`theme`](MonacoEditorProps.md#theme)

***

### readOnly?

> `optional` **readOnly?**: `boolean`

Whether the editor is read-only

#### Default

```ts
false
```

#### Inherited from

[`MonacoEditorProps`](MonacoEditorProps.md).[`readOnly`](MonacoEditorProps.md#readonly)

***

### options?

> `optional` **options?**: `IStandaloneEditorConstructionOptions`

Additional options for the editor

#### Inherited from

[`MonacoEditorProps`](MonacoEditorProps.md).[`options`](MonacoEditorProps.md#options)
