---
url: /api/sql-editor/interfaces/SqlMonacoEditorProps.md
---
[@sqlrooms/sql-editor](../index.md) / SqlMonacoEditorProps

# Interface: SqlMonacoEditorProps

## Extends

* `Omit`<`MonacoEditorProps`, `"language"`>

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

#### Inherited from

`Omit.onMount`

***

### onChange?

> `optional` **onChange**: `OnChange`

Callback when the editor content changes

#### Inherited from

`Omit.onChange`

***

### className?

> `optional` **className**: `string`

CSS class name for the editor container

#### Default

```ts
''
```

#### Inherited from

`Omit.className`

***

### theme?

> `optional` **theme**: `"vs-dark"` | `"light"`

The theme of the editor
Can be explicitly set or will automatically use the app theme if not provided

#### Default

```ts
'vs-dark'
```

#### Inherited from

`Omit.theme`

***

### value?

> `optional` **value**: `string`

The value of the editor

#### Inherited from

`Omit.value`

***

### readOnly?

> `optional` **readOnly**: `boolean`

Whether the editor is read-only

#### Default

```ts
false
```

#### Inherited from

`Omit.readOnly`

***

### options?

> `optional` **options**: `IStandaloneEditorConstructionOptions`

Additional options for the editor

#### Inherited from

`Omit.options`

***

### connector?

> `optional` **connector**: `DuckDbConnector`

***

### customKeywords?

> `optional` **customKeywords**: `string`\[]

Custom SQL keywords to add to the completion provider

***

### customFunctions?

> `optional` **customFunctions**: `string`\[]

Custom SQL functions to add to the completion provider

***

### tableSchemas?

> `optional` **tableSchemas**: `DataTable`\[]

Table schemas for autocompletion

***

### getLatestSchemas()?

> `optional` **getLatestSchemas**: () => `object`

Callback to get the latest table schemas
This is called from within provideCompletionItems to ensure we have the latest data

#### Returns

`object`

| Name | Type |
| ------ | ------ |
| `tableSchemas` | `DataTable`\[] |
