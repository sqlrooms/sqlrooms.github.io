---
url: /api/monaco-editor/interfaces/MonacoEditorProps.md
---
[@sqlrooms/monaco-editor](../index.md) / MonacoEditorProps

# Interface: MonacoEditorProps

## Extends

* `Omit`<`EditorProps`, `"onMount"`>

## Properties

### defaultValue?

> `optional` **defaultValue**: `string`

Default value of the current model

#### Inherited from

`Omit.defaultValue`

***

### defaultLanguage?

> `optional` **defaultLanguage**: `string`

Default language of the current model

#### Inherited from

`Omit.defaultLanguage`

***

### defaultPath?

> `optional` **defaultPath**: `string`

Default path of the current model
Will be passed as the third argument to `.createModel` method
`monaco.editor.createModel(..., ..., monaco.Uri.parse(defaultPath))`

#### Inherited from

`Omit.defaultPath`

***

### path?

> `optional` **path**: `string`

Path of the current model
Will be passed as the third argument to `.createModel` method
`monaco.editor.createModel(..., ..., monaco.Uri.parse(defaultPath))`

#### Inherited from

`Omit.path`

***

### line?

> `optional` **line**: `number`

The line to jump on it

#### Inherited from

`Omit.line`

***

### loading?

> `optional` **loading**: `ReactNode`

The loading screen before the editor will be mounted

#### Default

```ts
"Loading..."
```

#### Inherited from

`Omit.loading`

***

### overrideServices?

> `optional` **overrideServices**: `IEditorOverrideServices`

IEditorOverrideServices

#### Inherited from

`Omit.overrideServices`

***

### saveViewState?

> `optional` **saveViewState**: `boolean`

Indicator whether to save the models' view states between model changes or not
Defaults to true

#### Inherited from

`Omit.saveViewState`

***

### keepCurrentModel?

> `optional` **keepCurrentModel**: `boolean`

Indicator whether to dispose the current model when the Editor is unmounted or not

#### Default

```ts
false
```

#### Inherited from

`Omit.keepCurrentModel`

***

### width?

> `optional` **width**: `string` | `number`

Width of the editor wrapper

#### Default

```ts
"100%"
```

#### Inherited from

`Omit.width`

***

### height?

> `optional` **height**: `string` | `number`

Height of the editor wrapper

#### Default

```ts
"100%"
```

#### Inherited from

`Omit.height`

***

### wrapperProps?

> `optional` **wrapperProps**: `object`

Props applied to the wrapper element

#### Inherited from

`Omit.wrapperProps`

***

### beforeMount?

> `optional` **beforeMount**: `BeforeMount`

Signature: function(monaco: Monaco) => void
An event is emitted before the editor is mounted
It gets the monaco instance as a first argument
Defaults to "noop"

#### Inherited from

`Omit.beforeMount`

***

### onValidate?

> `optional` **onValidate**: `OnValidate`

Signature: function(markers: monaco.editor.IMarker\[]) => void
An event is emitted when the content of the current model is changed
and the current model markers are ready
Defaults to "noop"

#### Inherited from

`Omit.onValidate`

***

### onMount?

> `optional` **onMount**: `OnMount`

Callback when the editor is mounted

***

### onChange?

> `optional` **onChange**: `OnChange`

Callback when the editor content changes

#### Overrides

`Omit.onChange`

***

### className?

> `optional` **className**: `string`

CSS class name for the editor container

#### Default

```ts
''
```

#### Overrides

`Omit.className`

***

### language?

> `optional` **language**: `string`

The language of the editor

#### Default

```ts
'javascript'
```

#### Overrides

`Omit.language`

***

### theme?

> `optional` **theme**: `"light"` | `"vs-dark"`

The theme of the editor
Can be explicitly set or will automatically use the app theme if not provided

#### Default

```ts
'vs-dark'
```

#### Overrides

`Omit.theme`

***

### value?

> `optional` **value**: `string`

The value of the editor

#### Overrides

`Omit.value`

***

### readOnly?

> `optional` **readOnly**: `boolean`

Whether the editor is read-only

#### Default

```ts
false
```

***

### options?

> `optional` **options**: `IStandaloneEditorConstructionOptions`

Additional options for the editor

#### Overrides

`Omit.options`
