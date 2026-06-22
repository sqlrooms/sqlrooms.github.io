---
url: 'https://sqlrooms.org/api/monaco-editor/interfaces/MonacoEditorProps.md'
---
[@sqlrooms/monaco-editor](../index.md) / MonacoEditorProps

# Interface: MonacoEditorProps

## Extends

* `Omit`<`EditorProps`, `"onMount"`>

## Properties

### onMount?

> `optional` **onMount?**: `OnMount`

Callback when the editor is mounted

***

### onChange?

> `optional` **onChange?**: `OnChange`

Callback when the editor content changes

#### Overrides

`Omit.onChange`

***

### className?

> `optional` **className?**: `string`

CSS class name for the editor container

#### Default

```ts
''
```

#### Overrides

`Omit.className`

***

### language?

> `optional` **language?**: `string`

The language of the editor

#### Default

```ts
'javascript'
```

#### Overrides

`Omit.language`

***

### theme?

> `optional` **theme?**: `Theme`

The theme of the editor ('dark' | 'light' | 'system')
Can be explicitly set or will automatically use the app theme if not provided

#### Default

```ts
'dark'
```

#### Overrides

`Omit.theme`

***

### value?

> `optional` **value?**: `string`

The value of the editor

#### Overrides

`Omit.value`

***

### readOnly?

> `optional` **readOnly?**: `boolean`

Whether the editor is read-only

#### Default

```ts
false
```

***

### options?

> `optional` **options?**: `IStandaloneEditorConstructionOptions`

Additional options for the editor

#### Overrides

`Omit.options`
