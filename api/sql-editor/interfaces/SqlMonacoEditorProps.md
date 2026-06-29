---
url: 'https://sqlrooms.org/api/sql-editor/interfaces/SqlMonacoEditorProps.md'
---
[@sqlrooms/sql-editor](../index.md) / SqlMonacoEditorProps

# ~~Interface: SqlMonacoEditorProps~~

## Deprecated

Use SqlCodeMirrorEditor instead.
SqlMonacoEditor will be removed in the next major version.

## Extends

* `Omit`<`MonacoEditorProps`, `"language"`>

## Properties

### ~~onMount?~~

> `optional` **onMount?**: `OnMount`

Callback when the editor is mounted

#### Inherited from

`Omit.onMount`

***

### ~~onChange?~~

> `optional` **onChange?**: `OnChange`

Callback when the editor content changes

#### Inherited from

`Omit.onChange`

***

### ~~className?~~

> `optional` **className?**: `string`

CSS class name for the editor container

#### Default

```ts
''
```

#### Inherited from

`Omit.className`

***

### ~~theme?~~

> `optional` **theme?**: `Theme`

The theme of the editor ('dark' | 'light' | 'system')
Can be explicitly set or will automatically use the app theme if not provided

#### Default

```ts
'dark'
```

#### Inherited from

`Omit.theme`

***

### ~~value?~~

> `optional` **value?**: `string`

The value of the editor

#### Inherited from

`Omit.value`

***

### ~~readOnly?~~

> `optional` **readOnly?**: `boolean`

Whether the editor is read-only

#### Default

```ts
false
```

#### Inherited from

`Omit.readOnly`

***

### ~~options?~~

> `optional` **options?**: `IStandaloneEditorConstructionOptions`

Additional options for the editor

#### Inherited from

`Omit.options`

***

### ~~connector?~~

> `optional` **connector?**: `DuckDbConnector`

***

### ~~customKeywords?~~

> `optional` **customKeywords?**: `string`\[]

Custom SQL keywords to add to the completion provider.

Note: syntax highlighting is global and uses the built-in DuckDB dialect
(`DUCKDB_KEYWORDS` / `DUCKDB_FUNCTIONS`) to avoid per-editor global reconfiguration
(which can cause flashing). These are currently **completion-only**.

***

### ~~customFunctions?~~

> `optional` **customFunctions?**: `string`\[]

Custom SQL functions to add to the completion provider.

Note: syntax highlighting is global and uses the built-in DuckDB dialect
(`DUCKDB_KEYWORDS` / `DUCKDB_FUNCTIONS`) to avoid per-editor global reconfiguration
(which can cause flashing). These are currently **completion-only**.

***

### ~~tableSchemas?~~

> `optional` **tableSchemas?**: `DataTable`\[]

Table schemas for autocompletion

***

### ~~getLatestSchemas?~~

> `optional` **getLatestSchemas?**: () => `object`

Callback to get the latest table schemas

#### Returns

`object`

| Name | Type |
| ------ | ------ |
| `tableSchemas` | `DataTable`\[] |

***

### ~~onRunQuery?~~

> `optional` **onRunQuery?**: (`params`) => `void`

Callback when Cmd/Ctrl+Enter is pressed to run query

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`SqlMonacoRunQueryOptions`](../type-aliases/SqlMonacoRunQueryOptions.md) |

#### Returns

`void`
