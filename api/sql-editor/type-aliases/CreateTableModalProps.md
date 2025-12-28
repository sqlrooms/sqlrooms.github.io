---
url: /api/sql-editor/type-aliases/CreateTableModalProps.md
---
[@sqlrooms/sql-editor](../index.md) / CreateTableModalProps

# Type Alias: CreateTableModalProps

> **CreateTableModalProps** = `object`

## Properties

### query

> **query**: `string`

***

### isOpen

> **isOpen**: `boolean`

***

### onClose()

> **onClose**: () => `void`

#### Returns

`void`

***

### editDataSource?

> `optional` **editDataSource**: `SqlQueryDataSource`

***

### allowMultipleStatements?

> `optional` **allowMultipleStatements**: `boolean`

Allow multiple statements in the query. When true, preceding statements
will be executed before the final SELECT is wrapped in CREATE TABLE/VIEW.

***

### showSchemaSelection?

> `optional` **showSchemaSelection**: `boolean`

Show schema/database selection UI.

#### Default

```ts
false
```

***

### ~~onAddOrUpdateSqlQuery()?~~

> `optional` **onAddOrUpdateSqlQuery**: (`tableName`, `query`, `oldTableName?`) => `Promise`<`void`>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `tableName` | `string` |
| `query` | `string` |
| `oldTableName?` | `string` |

#### Returns

`Promise`<`void`>

#### Deprecated

Use createTableFromQuery directly instead.
When not provided, the modal will call createTableFromQuery directly.

***

### className?

> `optional` **className**: `string`

Additional class name for the dialog content.

***

### initialValues?

> `optional` **initialValues**: [`CreateTableFormInitialValues`](CreateTableFormInitialValues.md)

Initial values for the form fields.
